// pages/demo12/demo12.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gender: ""
    },
    handleChange(e) {
        const gender = e.detail.value;
        this.setData({
            gender
        })
    }
})