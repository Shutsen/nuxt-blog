<template>
  <div class="admin-auth-page">
    <h1 class="title is-1">Please login or sign up.</h1>
    <form action="">
      <div class="field">
        <label class="label">E-mail Address</label>
        <div class="control">
          <input class="input" type="email" placeholder="Enter your email">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Enter your password">
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button @click.prevent="isLogin = !isLogin" class="button is-light">Switch to {{ isLogin ? 'Sign Up' : 'Login '}}</button>
        </div>
        <div class="control">
          <button class="button is-link">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: true
    }
  },
  layout: 'admin'
}
</script>

<style scoped>
.admin-auth-page {
  width: 90%;
  margin: 20px auto;
}

 @media (min-width: 768px) {
   .admin-auth-page {
     width: 800px;
   }
 }
</style>