import Vuex from 'vuex'
import axios from 'axios'

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
        return axios.get(`${process.env.baseUrl}/posts.json`)
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({...res.data[key], id: key})
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
        return axios.post(`${process.env.baseUrl}/posts.json?auth=${vuexContext.state.token}`, createdPost)
        .then(res => {
            // the id of the post will be assigned by the backend. This can be accessed via the 'res.data.name'
            vuexContext.commit('addPost', {...createdPost, id: res.data.name})
          })
        .catch(e => console.log(e))
      },
      editPost(vuexContext, postData) {
        return axios.put(`${process.env.baseUrl}/posts/${postData.id}.json?auth=${vuexContext.state.token}`, postData)
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
        return axios.post(authURL, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }).then(res => {
            vuexContext.commit('setToken', res.data.idToken)
            //log out after x amount of time (setTimeout takes time in milliseconds)
            vuexContext.dispatch('setLogoutTimer', res.data.expiresIn * 1000)
          }).catch(e => console.log(e))
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
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