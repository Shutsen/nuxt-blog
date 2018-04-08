<template>
  <div class="admin-new-post-page">
    <AdminPostForm @submit="onSubmitted"/>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
  layout: 'admin',
  middleware: 'auth',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData)
        //by returning the axios promise in the store 'addPost' action we can chain the following:
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>
.admin-new-post-page {
  width: 90%;
  margin: 20px auto;
}

 @media (min-width: 768px) {
   .admin-new-post-page {
     width: 800px;
   }
 }
</style>

