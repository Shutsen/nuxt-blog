import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get(`${process.env.baseUrl}/posts.json`)
          .then(data => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({...data[key], id: key})
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, postData) {
        const createdPost = {
          ...postData,
          updatedDate: new Date()
        }
        return this.$axios.$post(`${process.env.baseUrl}/posts.json?auth=${vuexContext.state.token}`, createdPost)
        .then(data => {
            // the id of the post will be assigned by the backend. This can be accessed via the 'res.data.name'
            vuexContext.commit('addPost', {...createdPost, id: data.name})
          })
        .catch(e => console.log(e))
      },
      editPost(vuexContext, postData) {
        return this.$axios.$put(`${process.env.baseUrl}/posts/${postData.id}.json?auth=${vuexContext.state.token}`, postData)
          .then(res => {
            vuexContext.commit('editPost', postData)
          })
          .catch(e => console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        let authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbAPIKey}`
        if(!authData.isLogin) {
        authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbAPIKey}` 
        }
        // return the axios promise so we can attach a then block in the auth/index.vue to navigate away
        return this.$axios.$post(authURL, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }).then(data => {
            vuexContext.commit('setToken', data.idToken)
            //store the token for page refresh possibility
            localStorage.setItem('token', data.idToken)
            //we need to convert data.expiresIn - which is a String into a Number
            localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(data.expiresIn) * 1000)
            Cookie.set('jwt', data.idToken)
            Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(data.expiresIn) * 1000)
          }).catch(e => console.log(e))
      },
      initAuth(vuexContext, req) {
        let token
        let expirationDate
        // check if we're on the server
        if (req) {
          // check if we have a cookie
          if (!req.headers.cookie) {
            return
          }
          // if we do, start extracting the jwt token and store it in a constant
          const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
          // if there's no jwt token return
          if (!jwtCookie) {
            return
          }
          // if there is, extract the token
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie.split(';').find(c => c.trim(';').startsWith('expirationDate=')).split('=')[1]
        } else {
          // in case we're on the client
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }
        // by adding a plus (+) we automatically convert a string to a number
        if(new Date().getTime() > +expirationDate || !token) {
          console.log('No token or invalid token')
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('setToken', token)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore