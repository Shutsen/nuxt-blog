<template>
    <FeaturedPost :posts="posts"/>
</template>

<script>
import FeaturedPost from '~/components/Posts/FeaturedPost'
export default {
  data () {
    return {
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1cd6d15b82e723511ababedce1c7625&w=1000&q=80',
          tags: 'space travel mars',
          title: 'TITLE OF THE POST',
          excerpt: 'SUMMARY OF CONTENT OF THE POST'
        },
        {
          id: 2,
          image: 'https://i.ytimg.com/vi/4xgOWWfurpU/maxresdefault.jpg',
          tags: 'photoshop digital',
          title: 'TITLE OF THE POST',
          excerpt: 'SUMMARY OF CONTENT OF THE POST'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1cd6d15b82e723511ababedce1c7625&w=1000&q=80',
          tags: 'other tags possible',
          title: 'TITLE OF THE POST',
          excerpt: 'SUMMARY OF CONTENT OF THE POST'
        },
      ]
    }
  },
  components: {
    FeaturedPost
  }
}
</script>

