//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //猫咪故事
    catStory:{
      list:[
        {
          imgUrls: "../../images/1.jpg",
          desc: "小猫1",
          logo:"",
          name:"巴拉巴拉",
          skim: 11,
          reply: 111
        },
        {
          imgUrls:"../../images/3.jpg",
          desc: "小猫2",
          name: "我是me",
          skim: 22,
          reply:222
        },
        {
          imgUrls: "../../images/8.jpg",
          desc: "小猫3",
          logo: "",
          name: "独孤吸猫",
          skim: 33,
          reply: 333
        },
        {
          imgUrls: "../../images/16.jpg",
          desc: "小猫4",
          logo: "",
          name: "再见",
          skim: 44,
          reply: 444
        }
      ],
      autoplay: true,
      interval: 3000,
      duration: 500,
      circular: true,
      current: 0,
    },
    //猫咪故事_作者信息
    catStoryDesc:{},
    //最新合成
    catComplex:{
      list:[
        {
          img: "../../images/c1.png",
        },
        {
          img: "../../images/c2.png",
        },
        {
          img: "../../images/c3.png",
        },
        {
          img: "../../images/c4.png",
        },
        {
          img: "../../images/c5.png",
        },
      ],
      circular: true,
      current: 2,
    },
    //初代猫咪
    catFirst:{
      num:100,
      list:[
        { img: "../../images/11.jpg" },
        { img: "../../images/11.jpg" },
        { img: "../../images/11.jpg" },
        { img: "../../images/11.jpg" },
        { img: "../../images/11.jpg" },
        { img: "../../images/11.jpg" },
        { img: "../../images/11.jpg" },
      ]
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let arrayItem = this.data.catStory.list;
    this.setData({
      // 猫咪故事详情
      catStoryDesc: arrayItem[0]
    })
  },
  /*
      猫咪故事
  */
  //猫咪故事_查看更多
  turnToCatStoryMore:function(e){
    wx.navigateTo({
      url: '../storyMore/storyMore'
    })
  },
  //猫咪故事_作者信息
  storyDesc:function(e) {
    let arrayItem = this.data.catStory.list;
    let index = e.detail.current;
    this.setData({
      catStoryDesc: arrayItem[index]
    })
  }, 

  /*
      最新和成
  */
  complexFunc:function(){

  },

  /*
      初代猫咪
  */
  //初代猫咪_查看更多
  turnToCatFirstMore: function (e) {
    wx.navigateTo({
      url: '../catFirstMore/catFirstMore'
    })
  },
  turnToCatFirst:function(e){
    wx.navigateTo({
      url: '../catFirst/catFirst'
    })
  }
})
