"use strict";
Page({
    data: {
        count: 0,
        isGoOn: false
    },
    onShow: function () {
        wx.hideHomeButton();
    },
    onLoad: function (o) {
        this.setData({
            count: o.count
        });
    },
    onPause: function () {
        this.setData({
            isGoOn: !this.data.isGoOn
        });
    },
    finish: function () {
        wx.showModal({
            content: '你想干什么？',
            confirmText: "已完成",
            cancelText: "放弃",
            confirmColor: "",
            cancelColor: "#707C74",
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                }
                else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91Y3NpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3Vjc2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0QsTUFBTTtRQUNKLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBQ0QsTUFBTSxZQUFDLENBQU07UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1NBQzFCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLE9BQU8sWUFBRSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lCQUN0QjtxQkFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQ3RCO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDojrflj5blupTnlKjlrp7kvotcblxuLy8gZm9yIChsZXQgaTpudW1iZXIgPSA1OyBpPD0xMjA7IGk9aSs1KSB7XG4vLyAgIHRpbWVzLnB1c2goaSlcbi8vIH1cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBjb3VudDogMCxcbiAgICBpc0dvT246IGZhbHNlXG4gIH0sXG4gIG9uU2hvdygpIHtcbiAgICB3eC5oaWRlSG9tZUJ1dHRvbigpXG4gIH0sXG4gIG9uTG9hZChvOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY291bnQ6IG8uY291bnRcbiAgICB9KVxuICB9LFxuICBvblBhdXNlKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpc0dvT246ICF0aGlzLmRhdGEuaXNHb09uXG4gICAgfSlcbiAgfSxcbiAgZmluaXNoKCkge1xuICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICBjb250ZW50OiAn5L2g5oOz5bmy5LuA5LmI77yfJyxcbiAgICAgIGNvbmZpcm1UZXh0OiBcIuW3suWujOaIkFwiLFxuICAgICAgY2FuY2VsVGV4dDogXCLmlL7lvINcIixcbiAgICAgIGNvbmZpcm1Db2xvcjogXCJcIixcbiAgICAgIGNhbmNlbENvbG9yOiBcIiM3MDdDNzRcIixcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuIl19