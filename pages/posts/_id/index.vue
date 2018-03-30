<template>
  <div class="post">
    <div class="post-image">
      <div class="img" style="background: url('https://images.unsplash.com/photo-1422004707501-e8dad229e17a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1cd6d15b82e723511ababedce1c7625&w=1000&q=80') center center / cover no-repeat; "></div>
    </div>
    <h1 class="post-title">POST TITLE</h1>
    <h4 class="tags">space travel</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur in fuga consequatur sunt laboriosam esse culpa eum aspernatur, possimus amet. Porro velit eligendi beatae quae! Doloribus minima debitis aliquid?</p>
  </div>
</template>

<script>
export default {
  
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

