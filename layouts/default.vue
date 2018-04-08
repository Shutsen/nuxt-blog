<template>
  <div>
    <div class="container">
      <TheHeader/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
export default {
  // middleware: 'log',
  components: {
    TheHeader
  }
}
</script>

