<template>
  <div class="columns">
    <FeaturedPost 
      :is-admin="isAdmin" 
      id="1"
      title="The Future of Space Travel"
      excerpt="This is a little excerpt of the content"
      image="https://images.unsplash.com/photo-1422004707501-e8dad229e17a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1cd6d15b82e723511ababedce1c7625&w=1000&q=80"
      tags="space travel mars"
    />
    <FeaturedPost 
      :is-admin="isAdmin" 
      id="2"
      title="Photoshop Essentials"
      excerpt="This is a little excerpt of the content"
      image="https://i.ytimg.com/vi/4xgOWWfurpU/maxresdefault.jpg"
      tags="photoshop digital"
    />
    <FeaturedPost 
      :is-admin="isAdmin" 
      id="3"
      title="The Future of Space Travel"
      excerpt="This is a little excerpt of the content"
      image="https://images.unsplash.com/photo-1422004707501-e8dad229e17a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1cd6d15b82e723511ababedce1c7625&w=1000&q=80"
      tags="space travel mars"
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

