<template>
  <div class="columns">
    <FeaturedPost
      v-for="post in posts"  
      :post="post"
      :key="post.id"
      :is-admin="isAdmin" 
    />
  </div>
</template>

<script>
import FeaturedPost from '~/components/Posts/FeaturedPost'
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    FeaturedPost
  }
}
</script>

<style scoped>
  .columns {
    margin-top: 20px;
  }
</style>

