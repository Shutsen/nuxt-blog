<template>
  <div class="admin-page">
    <div class="has-text-centered">
      <h1 class="title is-1">Admin page</h1>
      <section class="new-post">
        <button @click="$router.push('/admin/new-post')">Create Post</button>
      </section>
    </div>
    <section class="existing-posts">
      <h2 class="title is-2 has-text-centered">Existing Posts</h2>
      <FeaturedPosts/>
    </section>
    </div>
</template>

<script>
import FeaturedPosts from '@/components/Posts/FeaturedPosts'
export default {
  components: {
    FeaturedPosts
  }
}
</script>

<style scoped>
  .admin-page {
    padding: 30px;
  }
</style>