// 获取应用实例

// for (let i:number = 5; i<=120; i=i+5) {
//   times.push(i)
// }

Page({
  data: {
    count: 0,
    isGoOn: false
  },
  onShow() {
    wx.hideHomeButton()
  },
  onLoad(o: any) {
    this.setData({
      count: o.count
    })
  },
  onPause() {
    this.setData({
      isGoOn: !this.data.isGoOn
    })
  },
  finish() {
    wx.showModal({
      content: '你想干什么？',
      confirmText: "已完成",
      cancelText: "放弃",
      confirmColor: "",
      cancelColor: "#707C74",
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
