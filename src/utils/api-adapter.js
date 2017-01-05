import weappAdapter from 'weapp-adapter';

/* global WebSocket:true */
WebSocket = weappAdapter.WebSocket;

/* global window:true */
export default window = {
  WebSocket: weappAdapter.WebSocket,
  XMLHttpRequest: weappAdapter.XMLHttpRequest,
};

export const DataStore = require('html5-datastore'); // eslint-disable-line global-require
