<template>
<div>
  <p @click='onClick'>{{content}}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      ['cont' + 'ent']: 'hello world'
    }
  },
  methods: {
    onClick() {
      console.log(Number.parseInt('12.34'))
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
