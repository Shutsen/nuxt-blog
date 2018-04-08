<template>
  <div class="admin-page">
    <div class="has-text-centered">
      <h1 class="title is-1">Admin page</h1>
      <section class="new-post">
        <div class="field is-grouped">
        <div class="control">
          <button @click="$router.push('/')" class="button is-light">Log out</button>
        </div>
        <div class="control">
          <button @click="$router.push('/admin/new-post')" class="button is-primary">Create new Post</button>
        </div>
      </div>
      </section>
    </div>
    <hr>
    <section class="existing-posts">
      <h2 class="title is-2 has-text-centered">Edit Existing Posts</h2>
      <FeaturedPosts :posts="loadedPosts" isAdmin/>
    </section>
    </div>
</template>

<script>
import FeaturedPosts from '@/components/Posts/FeaturedPosts'
export default {
  layout: 'admin',
  middleware: 'auth',
  components: {
    FeaturedPosts
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
  .admin-page {
    padding: 30px;
  }

  .field.is-grouped {
    justify-content: center !important;
  }
</style>