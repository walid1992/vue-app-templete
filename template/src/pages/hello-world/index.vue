<template>
<div>
  <p @click='onClick'>{{content}}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      content: 'hello world'
    }
  },
  methods: {
    onClick() {
      console.log('onClick')
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
