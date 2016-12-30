import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentThreadID: null,
  threads: {
    /*
    id: {
      id,
      name,
      messages: [...ids],
      lastMessage
    }
    */
  },
  messages: {
    /*
    id: {
      id,
      threadId,
      threadName,
      authorName,
      text,
      timestamp,
      isRead
    }
    */
  },
  ratingResults: [{
    date: '2016-05-02',
    name: '王小虎',
    allvalue: '不错',
    specificvalue:"能准确反映推荐合理"
  }, {
    date: '2016-05-04',
    name: '王小虎',
    allvalue: '不错'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    allvalue: '不错',
    specificvalue:"能准确反映推荐合理"
  }, {
    date: '2016-05-03',
    name: '王小虎',
    allvalue: '不错',
    specificvalue:"能准确反映推荐合理"
  }],
  profileInfo: [{
    title: '登陆名',
    content: 'AlanJager'
  }, {
    title: '昵称',
    content: 'AlanJager'
  }, {
    title: '邮箱',
    content: 'alanjager@test.com'
  }, {
    title: '简介',
    content: '这是简介'
  }],
  defaultInfo: [{
    name: '叶伟才',
    content: 'no',
    icon: require("../assets/yeweicai.jpg")
  }, {
    name: '邹烨',
    content: 'no',
    icon: require("../assets/zouye.jpg")
  }, {
    name: '王树根',
    content: 'no',
    icon: require("../assets/wangshugen.jpg")
  }]
}

export default new Vuex.Store({
  state
})
