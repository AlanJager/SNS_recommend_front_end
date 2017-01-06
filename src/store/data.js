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
    name: 'Alan',
    allvalue: 4,
    specificvalue:"能准确反映推荐合理"
  }, {
    date: '2016-05-04',
    name: 'Alan',
    allvalue: 4
  }, {
    date: '2016-05-01',
    name: 'Alan',
    allvalue: 4,
    specificvalue:"能准确反映推荐合理"
  }, {
    date: '2016-05-03',
    name: 'Alan',
    allvalue: 5,
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
  }],
  recommendInfo1:[{
    name: '刘涛tamia',
    content: 'no',
    icon: require("../assets/tamia.jpg")
  }, {
    name: '微博视频',
    content: 'no',
    icon: require("../assets/weibovideo.jpg")
  }, {
    name: '邓超',
    content: 'no',
    icon: require("../assets/dengchao.jpg")
  }, {
    name: '超级话题',
    content: 'no',
    icon: require("../assets/supertopic.jpg")
  }, {
    name: '林心如',
    content: 'no',
    icon: require("../assets/linxinru.jpg")
  }, {
    name: '微博钱包',
    content: 'no',
    icon: require("../assets/weiboqianbao.jpg")
  }, {
    name: 'papi酱',
    content: 'no',
    icon: require("../assets/papi.jpg")
  }, {
    name: '人民日报',
    content: 'no',
    icon: require("../assets/peopledaily.jpg")
  }],
  recommendInfo2:[{
    name: '刘涛tamia',
    content: 'no',
    icon: require("../assets/tamia.jpg")
  }, {
    name: '微博视频',
    content: 'no',
    icon: require("../assets/weibovideo.jpg")
  }, {
    name: '超级话题',
    content: 'no',
    icon: require("../assets/supertopic.jpg")
  }, {
    name: '林心如',
    content: 'no',
    icon: require("../assets/linxinru.jpg")
  }, {
    name: '邓超',
    content: 'no',
    icon: require("../assets/dengchao.jpg")
  }, {
    name: '微博钱包',
    content: 'no',
    icon: require("../assets/weiboqianbao.jpg")
  }, {
    name: 'papi酱',
    content: 'no',
    icon: require("../assets/papi.jpg")
  }, {
    name: '人民日报',
    content: 'no',
    icon: require("../assets/peopledaily.jpg")
  }],
  recommendInfo3:[{
    name: '刘涛tamia',
    content: 'no',
    icon: require("../assets/tamia.jpg")
  }, {
    name: '微博视频',
    content: 'no',
    icon: require("../assets/weibovideo.jpg")
  }, {
    name: '超级话题',
    content: 'no',
    icon: require("../assets/supertopic.jpg")
  }, {
    name: '林心如',
    content: 'no',
    icon: require("../assets/linxinru.jpg")
  }, {
    name: '人民日报',
    content: 'no',
    icon: require("../assets/peopledaily.jpg")
  }, {
    name: '蔡康永',
    content: 'no',
    icon: require("../assets/caikangyong.jpg")
  }, {
    name: '聚美陈欧',
    content: 'no',
    icon: require("../assets/chenou.jpg")
  }, {
    name: '微博iPhone客户端',
    content: 'no',
    icon: require("../assets/weiboiphone.jpg")
  }],
  recommendInfo4:[{
    name: '刘涛tamia',
    content: 'no',
    icon: require("../assets/tamia.jpg")
  }, {
    name: '范冰冰',
    content: 'no',
    icon: require("../assets/fanbingbing.jpg")
  }, {
    name: '袁弘',
    content: 'no',
    icon: require("../assets/yuanhong.jpg")
  }, {
    name: 'old先',
    content: 'no',
    icon: require("../assets/oldxian.jpg")
  }, {
    name: '王子文Olivia',
    content: 'no',
    icon: require("../assets/wangziwen.jpg")
  }, {
    name: '岳云鹏',
    content: 'no',
    icon: require("../assets/yueyunpeng.jpg")
  }, {
    name: '杨幂',
    content: 'no',
    icon: require("../assets/yangmi.jpg")
  }, {
    name: '姚晨',
    content: 'no',
    icon: require("../assets/yaocheng.jpg")
  }],
  recommendInfo5:[{
    name: 'papi酱',
    content: 'no',
    icon: require("../assets/papi.jpg")
  }, {
    name: '张翰',
    content: 'no',
    icon: require("../assets/zhanghan.jpg")
  }, {
    name: '微博等级',
    content: 'no',
    icon: require("../assets/weibolevel.jpg")
  }, {
    name: '蔡卓妍',
    content: 'no',
    icon: require("../assets/caizhuoyan.jpg")
  }, {
    name: '关晓彤',
    content: 'no',
    icon: require("../assets/guanxiaotong.jpg")
  }, {
    name: '张继科',
    content: 'no',
    icon: require("../assets/zhangjike.jpg")
  }, {
    name: 'gogoboi',
    content: 'no',
    icon: require("../assets/gogoboi.jpg")
  }, {
    name: '倪妮V',
    content: 'no',
    icon: require("../assets/nini.jpg")
  }],
}

export default new Vuex.Store({
  state
})
