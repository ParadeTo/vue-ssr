<!-- Item.vue -->
<template>
  <div class="">
    <div>{{ item.title }}</div>
    <p>{{ item.content }}</p>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.params.id)
  },
  data () {
    return {}
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      const item = this.$store.state.items[this.$route.params.id]
      if (item) {
        return item
      }
      return {}
    }
  }
}
</script>
