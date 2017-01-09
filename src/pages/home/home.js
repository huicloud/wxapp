import { DataStore, formatNumber } from '../../utils/util';
import stockManager from '../../utils/stockManager';

Page({

  datastore: new DataStore({
    serviceUrl: '/stkdata',
    fields: ['ZhongWenJianCheng', 'ZuiXinJia', 'ZhangFu', 'ZhangDie'],
  }),

  cache: {},

  stockListCache: {},

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
          const lastData = this.cache;
          this.cache = Object.assign({}, this.cache, data);

          this.setData({
            stockList: stocks.map(
              eachObj => this.formatData(this.cache[eachObj], lastData[eachObj])),
          });
          this.data.stockList.forEach((eachStock) => {
            eachStock.priceRise = null;
          });
          this.setData(this.data);
        }
      });
    }
  },

  /* eslint no-nested-ternary: 0 */
  formatData(stock, lastData) {
    if (stock) {
      const obj = stock.Obj;
      const price = stock.ZuiXinJia;
      const lastFormatStock = this.stockListCache[obj] || {};
      // 保持上次相同状态，避免更新数据过快，展示不及时导致的错误
      let priceRise = lastFormatStock.priceRise;
      // 判断上次数据存在，则设置背景样式
      if (lastData) {
        const lastPrice = lastData.ZuiXinJia;
        if (price > lastPrice) {
          priceRise = true;
        } else if (price < lastPrice) {
          priceRise = false;
        }
      }
      // 判断股票涨跌，格式化数字为对应的字符串
      const formatStock = Object.assign({}, stock, {
        priceRise,
        upDown: stock.ZhangDie > 0 ? 1 : stock.ZhangDie < 0 ? 2 : 0,
        ZuiXinJia: formatNumber(stock.ZuiXinJia),
        ZhangFu: formatNumber(stock.ZhangFu / 100, 2, '%'),
        ZhangDie: formatNumber(stock.ZhangDie),
      });
      this.stockListCache[obj] = formatStock;
      return formatStock;
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

  onShareAppMessage() {
    return {
      title: '大智慧金融云',
      desc: '股票实时数据展示',
      path: '/pages/home/home',
    };
  },
});
