<template>
  <div class="">
    <ul>
      <li v-for="(item, k) in itemList">
        <h2>
          <router-link :to="`/item/${k}`">{{item.title}}</router-link>
        </h2>
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
    return {
      title: "",
      content: ""
    }
  },
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
