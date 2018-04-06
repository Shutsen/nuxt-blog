<template>
  <div class="posts-page">
    <div class="has-text-centered">
      <h1 class="title is-1">Blog Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt quam, facere officia temporibus minima quaerat optio reprehenderit excepturi laudantium nostrum natus incidunt repellat nobis labore corporis inventore, id fugiat?</p>
    </div>
    <FeaturedPosts :posts="loadedPosts"/>
  </div>
</template>

<script>
import FeaturedPosts from '~/components/Posts/FeaturedPosts'
export default {
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
  .posts-page {
    padding: 30px;
  }
</style>


