//Page Object
import { request } from "../../request/index.js";
Page({
    data: {
        // 轮播图数组
        swiperList: [],
        // 导航数组
        catesList: [],
        // 楼层数据
        floorList: [],
    },
    //options(Object)
    onLoad: function(options) {

        this.getSwiperList();
        this.getCatesList();
        this.getfloorList();


    },
    // 获取轮播图数据
    getSwiperList() {
        request({ url: "/home/swiperdata" })
            .then(result => {
                this.setData({
                    swiperList: result
                })
            });
    },

    // 获取导航栏数据
    getCatesList() {
        request({ url: "/home/catitems" })
            .then(result => {
                this.setData({
                    catesList: result
                })
            });
    },
    getfloorList() {
        request({ url: "/home/floordata" })
            .then(result => {
                this.setData({
                    floorList: result
                })
            });
    },




});