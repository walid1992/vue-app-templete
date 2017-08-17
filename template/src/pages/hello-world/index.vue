<template>
  <div>
    <p>{{content}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: 'hello world'
      }
    }
  }

</script>

<style scoped>
  p {
    font-size: 15px;
    margin-top: 0;
    color: #999;
    text-align: center;
  }
</style>
