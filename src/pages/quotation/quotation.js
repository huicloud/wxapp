import { DataStore, formatNumber, formatDate } from '../../utils/util';
import DataProvider from '../../charts/DataProvider';
import Canvas from '../../charts/Canvas';
import MinChart from '../../charts/MinChart';
import KlineChart from '../../charts/KlineChart';
import stockManager from '../../utils/stockManager';

/* eslint no-nested-ternary: 0 */
function formatDyanData(data) {
  return Object.assign({}, data, {
    upDown: data.ZhangDie > 0 ? 1 : data.ZhangDie < 0 ? 2 : 0,
    ShiJian: data.ShiJian ? formatDate(data.ShiJian * 1000, 'yyyy-MM-dd hh:mm:ss') : '--',
    ZuiXinJia: formatNumber(data.ZuiXinJia),
    ZhangDie: formatNumber(data.ZhangDie),
    ZhangFu: formatNumber(data.ZhangFu / 100, 2, '%'),
    KaiPanJia: formatNumber(data.KaiPanJia),
    ZuoShou: formatNumber(data.ZuoShou),
    ZuiGaoJia: formatNumber(data.ZuiGaoJia),
    ZuiDiJia: formatNumber(data.ZuiDiJia),
    ChengJiaoLiang: formatNumber(data.ChengJiaoLiang, 2, '万/亿'),
    HuanShou: formatNumber(data.HuanShou),
    ShiYingLv: formatNumber(data.ShiYingLv),
    ZongShiZhi: formatNumber(data.ZongShiZhi, 2, '万/亿'),
  });
}

Page({

  data: {
    chartType: 'min',
    period: '1day',
    dynaData: formatDyanData({}),
    chartWidth: 375,
    chartHeight: 400,
    isPortfolio: false,
  },

  onReady() {
    const dynaData = this.data.dynaData;
    if (dynaData && dynaData.Obj) {
      wx.setNavigationBarTitle({
        title: `${dynaData.ZhongWenJianCheng} - ${dynaData.Obj}`,
      });
    }
    this.isReady = true;

    // wx.request({
    //   url: 'http://rdfile.gw.com.cn/43/E1/43E1BCD90D99C9800BC22EC6436A062E..txt.zlib',
    //   complete: (res) => {
    //     console.log(333333, res);
    //   },
    // });
  },

  onLoad(options) {
    this.setData(options);
    this.loadDyanData();
    this.loadChart();

    this.isPortfolio();
    this.removeListener = stockManager.onPortfolioChanged(() => this.isPortfolio());
  },

  onHide() {
    this.cancel();
  },

  onUnload() {
    this.cancel();
  },

  // 加载动态行情
  loadDyanData() {
    this.dynaDataStore = new DataStore({
      serviceUrl: '/stkdata',
      fields: ['ZuiXinJia', 'ZhongWenJianCheng', 'ZhangDie', 'ZhangFu', 'ShiJian', 'KaiPanJia', 'ZuoShou', 'ZuiGaoJia', 'ZuiDiJia', 'ChengJiaoLiang', 'HuanShou', 'ShiYingLv', 'ZongShiZhi', 'LeiXing'],
    });

    this.dynaDataStore.subscribe({ obj: this.data.obj }, (data) => {
      if (data && !(data instanceof Error)) {
        const dynaData = data[this.data.obj];
        this.setData({ dynaData: formatDyanData(dynaData) });
        if (this.isReady) {
          wx.setNavigationBarTitle({
            title: `${dynaData.ZhongWenJianCheng} - ${dynaData.Obj}`,
          });
        }
      }
    });
  },

  // 加载走时图
  loadChart() {
    // 请求系统信息，得到宽高
    wx.getSystemInfo({
      success: (systemInfo) => {
        this.chartDataProvider = new DataProvider({ obj: this.data.obj });
        const chartWidth = systemInfo.windowWidth;
        const chartHeight = systemInfo.windowHeight - 210;
        const pixelRadio = systemInfo.pixelRatio;
        this.setData({ chartWidth, chartHeight });
        this.canvas = new Canvas({
          pixelRadio,
          canvasId: 1,
          width: chartWidth,
          height: chartHeight,
        });
        this.showChart();
      },
    });
  },

  // 判断是否是自选股
  isPortfolio() {
    stockManager.inPortfolio(this.data.obj).then((result) => {
      this.setData({
        isPortfolio: result,
      });
    });
  },

  cancel() {
    this.dynaDataStore && this.dynaDataStore.cancel();
    this.chartDataProvider && this.chartDataProvider.cancel();
    this.removeListener && this.removeListener();
  },

  // onShow() {
  //   this.showChart();
  // },

  showChart() {
    let currentChart;
    if (this.data.chartType === 'min') {
      currentChart = this.minChart = this.minChart || new MinChart(this.chartDataProvider);
    } else {
      const klineChartName = `klineChart${this.data.period}`;
      currentChart = this[klineChartName] = this[klineChartName] ||
        new KlineChart(this.chartDataProvider, { period: this.data.period });
    }
    this.canvas.show(currentChart);
  },

  showKline(event) {
    this.setData({ chartType: 'kline', period: event.target.dataset.period || '1day' });
    this.showChart();
  },

  showMin() {
    this.setData({ chartType: 'min' });
    this.showChart();
  },

  addPortfolio() {
    stockManager.addPortfolio(this.data.obj);
  },

  removePortfolio() {
    stockManager.removePortfolio(this.data.obj);
  },

  touchstart(event) {
    this.canvas.touchstart(event);
  },

  touchmove(event) {
    // cancelAnimationFrame(this.lastTouchMove);
    // this.lastTouchMove = requestAnimationFrame(() => this.canvas.touchmove(event));
    this.canvas.touchmove(event);
  },

  touchend(event) {
    this.canvas.touchend(event);
  },

  touchcancel(event) {
    this.canvas.touchcancel(event);
  },

  longtap(event) {
    this.canvas.longtap(event);
  },

  onShareAppMessage() {
    const obj = this.data.obj;
    const dynaData = this.data.dynaData;
    return {
      title: `${dynaData.ZhongWenJianCheng} - ${dynaData.Obj}`,
      desc: `最新价:${dynaData.ZuiXinJia} 涨跌幅:${dynaData.ZhangFu}`,
      path: `/pages/quotation/quotation?obj=${obj}`,
    };
  },
});
