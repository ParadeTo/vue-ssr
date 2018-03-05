<template>
  <div class="">
    <ul>
      <li v-for="item in itemList">
        <h2>{{item.title}}</h2>
        <p>{{item.content}}</p>
      </li>
    </ul>
    <hr>
    <div>
      <input type="text" placeholder="输入标题" v-model="title">
      <input type="text" placeholder="输入内容" v-model="content">
      <button @click="submit">提交</button>
    </div>
  </div>

</template>
<script>
import { mapActions } from 'vuex'
export default {
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItems')
  },
  data () {
    this.$options.asyncData({
      store: this.$store,
      route: this.$route
    })
    return {
      title: "",
      content: ""
    }
  },
  // created() {
  //   console.log(this.fetchItem)
  //   this.fetchItem(this.$route.params.id)
  // },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    itemList () {
      return this.$store.state.items
    }
  },
  methods: {
    submit () {
      const {title, content} = this
      this.$store.dispatch('addItem', {title, content})
    }
  }
}
</script>
