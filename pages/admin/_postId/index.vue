<template>
  <div class="admin-update-post-page">
    <h1 class="title is-1">Edit your post here</h1>
    <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return context.app.$axios.$get(`${process.env.baseUrl}/posts/${context.params.postId}.json`)
      .then(data => {
        return {
          loadedPost: {...data, id: context.params.postId}
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