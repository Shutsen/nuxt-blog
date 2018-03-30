<template>
  <div class="admin-new-post-page">
    <AdminPostForm/>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
  components: {
    AdminPostForm
  },
  layout: 'admin'
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

