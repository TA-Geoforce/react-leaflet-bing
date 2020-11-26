"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@react-leaflet/core");

var _leaflet = require("./leaflet.bing");

var createLeafletElement = function createLeafletElement(props) {
  var instance = L.bingLayer(props.bingkey, props);
  return {
    instance: instance
  };
};

var _default = (0, _core.createLayerComponent)(createLeafletElement);

exports.default = _default;