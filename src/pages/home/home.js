import { DataStore, formatNumber } from '../../utils/util';
import stockManager from '../../utils/stockManager';

Page({

  datastore: new DataStore({
    serviceUrl: '/stkdata',
    fields: ['ZhongWenJianCheng', 'ZuiXinJia', 'ZhangFu', 'ZhangDie'],
  }),

  cache: {},

  data: {
    stockList: [],
  },

  isShow: false,

  onShow() {
    this.query();
    this.isShow = true;
  },

  onHide() {
    this.datastore.cancel();
    this.isShow = false;
  },

  onLoad() {
    stockManager.onPortfolioChanged(() => this.isShow && this.query());
  },

  // // 查询数据
  async query() {
    const stocks = await stockManager.getPortfolioList();

    if (stocks.length > 0) {
      this.datastore.cancel();
      this.datastore.subscribe({ obj: stocks }, (data) => {
        if (data && !(data instanceof Error)) {
          Object.assign(this.cache, data);
          this.setData({
            stockList: stocks.map(eachObj => this.formatData(this.cache[eachObj])),
          });
        }
      });
    }
  },

  /* eslint no-nested-ternary: 0 */
  formatData(stock) {
    if (stock) {
      // 判断股票涨跌，格式化数字为对应的字符串
      return Object.assign({}, stock, {
        upDown: stock.ZhangDie > 0 ? 1 : stock.ZhangDie < 0 ? 2 : 0,
        ZuiXinJia: formatNumber(stock.ZuiXinJia),
        ZhangFu: formatNumber(stock.ZhangFu / 100, 2, '%'),
        ZhangDie: formatNumber(stock.ZhangDie),
      });
    }
    return stock;
  },

  openStockQuotation(event) {
    wx.navigateTo({
      url: `../quotation/quotation?obj=${event.currentTarget.dataset.obj}`,
    });
  },

  openSearch() {
    wx.navigateTo({
      url: '../search/search',
    });
  },
});
