import { DataStore } from '../../utils/util';

Page({
  kbspiritDataStore: new DataStore({
    serviceUrl: '/kbspirit',
  }),

  data: {
    searchResult: [],
  },

  changeInput(event) {
    // console.log(event.detail.value);
    // 查询键盘宝
    this.kbspiritDataStore.cancel();
    const input = event.detail.value.trim().toUpperCase();
    if (input) {
      this.kbspiritDataStore.query({ input, type: 0, market: '*' }).then((data) => {
        const result = data[0];
        if (result && result.GuanJianZi === input && result.JieGuo && result.JieGuo[0]) {
          this.setData({
            searchResult: result.JieGuo[0].ShuJu || [],
          });
        }
      });
    } else {
      this.setData({
        searchResult: [],
      });
    }
  },

  openStockQuotation(event) {
    wx.navigateTo({
      url: `../quotation/quotation?obj=${event.currentTarget.dataset.obj}`,
    });
  },
});
