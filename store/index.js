import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
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
        return axios.post(`${process.env.baseUrl}/posts.json`, createdPost)
        .then(res => {
            // the id of the post will be assigned by the backend. This can be accessed via the 'res.data.name'
            vuexContext.commit('addPost', {...createdPost, id: res.data.name})
          })
        .catch(e => console.log(e))
      },
      editPost(vuexContext, postData) {
        return axios.put(`${process.env.baseUrl}/posts/${postData.id}.json`, postData)
          .then(res => {
            vuexContext.commit('editPost', postData)
          })
          .catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore