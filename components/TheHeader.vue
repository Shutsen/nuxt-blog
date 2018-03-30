<template>
  <section class="hero is-dark is-medium">
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li v-on:click="setActive('home')" :class="{ active: isActive('home') }">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li v-on:click="setActive('about')" :class="{ active: isActive('about') }">
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li v-on:click="setActive('blog')" :class="{ active: isActive('blog') }">
              <nuxt-link to="/posts">Blog</nuxt-link>
            </li>
            <li v-on:click="setActive('admin')" :class="{ active: isActive('admin') }">
              <nuxt-link to="/admin">Admin</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return { activeItem: 'home' }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style scoped>

</style>