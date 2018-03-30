<template>
  <div class="column" :key="id">
    <div class="single-post-page">
      <div class="image">
        <nuxt-link :to="postLink">
          <div class="img" :style="{ background: `url('${image}') center center / cover no-repeat; `}"></div>
        </nuxt-link>
      </div>
      <div class="content">
        <h4 class="tags">{{tags}}</h4>
        <nuxt-link :to="postLink">
          <h2 class="post-title">{{title}}</h2>
        </nuxt-link>
        <p>{{excerpt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    excerpt: {
      required: true,
      type: String
    },
    image: {
      required: true,
      type: String
    },
    tags: {
      required: true,
      type: String
    },
    isAdmin: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>

<style scoped>

  .image {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }

  .img {
    width: 100%;
    min-height: 220px;
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

  h2.post-title {
    font-size: 20px;
    margin-bottom: 16px;
    line-height: 28px;
    font-weight: 700;
    letter-spacing: 0.01rem;
  }

  .tags {
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin-bottom: 8px;
    text-overflow: ellipsis;
  }

  p {
    color: #999;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 22px;
    height: calc(22px * 4);
    overflow: hidden;
    font-weight: normal;
  }
</style>