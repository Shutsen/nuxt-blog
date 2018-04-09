<template>
  <div class="post">
    <div class="post-image">
      <div class="img" :style="`background: url('${loadedPost.image}') center center / cover no-repeat; `"></div>
    </div>
    <h1 class="post-title">{{loadedPost.title}}</h1>
    <h4 class="tags">{{loadedPost.tags}}</h4>
    <p>{{loadedPost.content}}</p>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios.$get(`${process.env.baseUrl}/posts/${context.params.id}.json`)
      .then(data => {
        return {
          loadedPost: data
        }
      })
      .catch(e => context.error(e))
  }
}
</script>

<style scoped>
  .post-image {
    width: 100%;
    min-height: 500px;
  }

  .img {
    width: 100%;
    min-height: 500px;
    transition: all 0.3s ease-out;
  }

  .img:hover {
    box-shadow: rgba(11, 26, 36, 0.2) 0px 2px 2px,
    rgba(11, 26, 36, 0.2) 0px 4px 4px,
    rgba(11, 26, 36, 0.2) 0px 8px 8px,
    rgba(11, 26, 36, 0.2) 0px 16px 16px,
    rgba(11, 26, 36, 0.2) 0px 32px 32px,
    rgba(11, 26, 36, 0.2) 0px 64px 64px;
    cursor: pointer;
  }
</style>

