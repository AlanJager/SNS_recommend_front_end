export default {
  getToken () {
    return localStorage.token
  },

  getProfile () {
    return [{
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
    }]
  },
  getRatingResult () {
    return [{
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
    }]
  }
}
