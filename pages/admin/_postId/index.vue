<template>
  <div class="admin-update-post-page">
    <h1 class="title is-1">Edit your post here</h1>
    <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
import axios from 'axios'
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios.get(`${process.env.baseUrl}/posts/${context.params.postId}.json`)
      .then(res => {
        return {
          loadedPost: {...res.data, id: context.params.postId}
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('editPost', postData)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>
 .admin-update-post-page {
  width: 90%;
  margin: 20px auto;
 }

 @media (min-width: 768px) {
   .admin-update-post-page {
     width: 800px;
   }
 }
</style>