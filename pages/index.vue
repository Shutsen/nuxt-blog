<template>
  <div class="home-page">
    <section class="hero is-medium has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to our Nuxt.js Blog
          </h1>
          <h2 class="subtitle">
            Javascript development
          </h2>
        </div>
      </div>
    </section>
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
  .hero {
    background: url('~/assets/img/triangles.jpeg') center center / cover no-repeat;
  }
</style>

