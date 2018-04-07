<template>
  <section class="new-post-form">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" v-model="newPost.author" placeholder="Add your name please">
        </div>
      </div>
  
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Add the title of the post" v-model="newPost.title" >
        </div>
      </div>

      <div class="field">
        <label class="label">Your Post</label>
        <div class="control">
          <textarea class="textarea" rows="4" placeholder="Add your post content here" v-model="newPost.content"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Excerpt</label>
        <div class="control">
          <input class="input" type="text" placeholder="Add the excerpt of the post" v-model="newPost.excerpt" >
        </div>
      </div>

      <div class="field">
        <label class="label">Tags</label>
        <div class="control">
          <input class="input" type="text" v-model="newPost.tags" placeholder="Add your name please">
        </div>
      </div>

      <div class="field">
        <label class="label">Image</label>
        <div class="control">
          <input class="input" type="text" v-model="newPost.image" placeholder="Add your image please">
        </div>
      </div>

      <hr>
  
      <div class="field is-grouped">
        <div class="control">
          <button @click="onCancel" class="button is-light">Cancel</button>
        </div>
        <div class="control">
          <button @click="onSave" class="button is-link">Save</button>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      newPost: this.post ? {...this.post} : {
        author: '',
        title: '',
        image: '',
        content: '',
        excerpt: '',
        tags: ''
      }
    }
  },
  methods: {
    onSave() {
      // save the new post
      this.$emit('submit', this.newPost)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>
  .new-post-form {
    margin-top: 30px;
  }
</style>