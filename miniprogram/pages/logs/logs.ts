// logs.ts
// test
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [],
    pp: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return formatTime(new Date(log))
      }),
    })
  },
})
