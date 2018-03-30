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
        <label class="label">The Post</label>
        <div class="control">
          <textarea class="textarea" rows="4" placeholder="Add your post content here" v-model="newPost.excerpt"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Tags</label>
        <div class="control">
          <input class="input" type="text" v-model="newPost.tags" placeholder="Add your name please">
        </div>
      </div>

      <label class="label">Add the post image</label>
      <div class="file has-name is-fullwidth">
        <label class="file-label">
          <input class="file-input" type="file" name="resume">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
          </span>
          <span class="file-name">
            To be made dynamic
          </span>
        </label>
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
        excerpt: '',
        tags: ''
      }
    }
  },
  methods: {
    onSave() {
      // save the new post
      console.log(this.newPost)
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