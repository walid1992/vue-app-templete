<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
export default {
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$api.common.getJson()
        .then(res => {
          this.data = res
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
