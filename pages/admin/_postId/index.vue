<template>
  <div class="admin-update-post-page">
    <h1 class="title is-1">Edit your post here</h1>
    <AdminPostForm :post="loadedPost"/>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
  components: {
    AdminPostForm
  },
  data () {
    return {
      loadedPost: {
        author: 'Geert Van Campenhout',
        title: 'Vue.js rules',
        image: 'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1cd6d15b82e723511ababedce1c7625&w=1000&q=80',
        excerpt: 'Vue.js is on the rise.',
        tags: 'tech development'
      }
    }
  },
  layout: 'admin'
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