<template>
<div>
  <p>{{content}}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      content: '生命周期示例'
    }
  },
  beforeCreate() {
    this.content = 'beforeCreate'
    console.log('beforeCreate')
  },
  created() {
    this.content = 'created'
    console.log('created')
  },
  mounted() {
    this.content = 'mounted'
    console.log('mounted')
  },
  destoryed() {
    this.content = 'destoryed'
    console.log('destoryed')
  }
}
</script>

<style scoped>
p {
  margin-top: 30px;
  font-size: 15px;
  margin-top: 0;
  color: #999;
  text-align: center;
}
</style>
