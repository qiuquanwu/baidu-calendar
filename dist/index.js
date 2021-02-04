'use strict';

var React = require('react');
var Select = require('react-select');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function useMonth(value) {
  var MONTH = 12;

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      selectMonth = _useState2[0],
      setSelectMonth = _useState2[1];

  var monthOptions = [];

  for (var i = 1; i <= MONTH; i++) {
    monthOptions.push({
      value: i,
      label: i + "月"
    });
  }

  return [selectMonth, setSelectMonth, monthOptions];
}

/**
 * 农历 1900-2100 的润大小信息表
 * @return Array
 */
var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, //1900-1909
0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, //1910-1919
0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, //1920-1929
0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, //1930-1939
0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, //1940-1949
0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, //1950-1959
0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, //1960-1969
0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, //1970-1979
0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, //1980-1989
0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, //1990-1999
0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, //2000-2009
0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, //2010-2019
0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, //2020-2029
0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, //2030-2039
0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, //2040-2049

/**Add By JJonline@JJonline.Cn**/
0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, //2050-2059
0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, //2060-2069
0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, //2070-2079
0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, //2080-2089
0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a4d0, 0x0d150, 0x0f252, //2090-2099
0x0d520]; //2100;

/**
 * 公历每个月份的天数普通表
 * @Array Of Property
 * @return Number
 */
var solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * 天干地支之天干速查表
 * @Array Of Property trans['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
 * @return Cn string
 */
var gan = ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"];

/**
 * 天干地支之地支速查表
 * @Array Of Property
 * @trans['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']
 * @return Cn string
 */
var zhi = ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"];

/**
 * 天干地支之地支速查表<=>生肖
 * @Array Of Property
 * @trans['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪']
 * @return Cn string
 */
var animals = ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"];

/**
 * 24节气速查表
 * @Array Of Property
 * @trans['小寒','大寒','立春','雨水','惊蛰','春分','清明','谷雨','立夏','小满','芒种','夏至','小暑','大暑','立秋','处暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至']
 * @return Cn string
 */
var lunarTerm = ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"];

/**
 * 1900-2100各年的24节气日期速查表
 * @Array Of Property
 * @return 0x string For splice
 */
var lTermInfo = ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'];

/**
 * 数字转中文速查表
 * @Array Of Property
 * @trans ['日','一','二','三','四','五','六','七','八','九','十']
 * @return Cn string
 */
var nStr1 = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"];

/**
 * 日期转农历称呼速查表
 * @Array Of Property
 * @trans ['初','十','廿','卅']
 * @return Cn string
 */
var nStr2 = ["\u521D", "\u5341", "\u5EFF", "\u5345"];

/**
 * 月份转农历称呼速查表
 * @Array Of Property
 * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
 * @return Cn string
 */
var nStr3 = ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"];

/**
 * 年份数字转中文速查表
 * @Array Of Property
 * @trans ['零','一','二','三','四','五','六','七','八','九','十']
 * @return Cn string
 */
var nStr4 = ["\u96F6", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"];

/**
 * @1900-2100区间内的公历、农历互转
 * @charset  UTF-8
 * @author  Ajing(JJonline@JJonline.Cn)
 * @Time  2014-7-21
 * @Version  $ID$
 * @公历转农历：solarLunar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
 * @农历转公历：solarLunar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
 * @link http://blog.jjonline.cn/userInterFace/173.html
 */
var solarLunar = {
  lunarInfo: lunarInfo,
  solarMonth: solarMonth,
  gan: gan,
  zhi: zhi,
  animals: animals,
  lunarTerm: lunarTerm,
  lTermInfo: lTermInfo,
  nStr1: nStr1,
  nStr2: nStr2,
  nStr3: nStr3,
  nStr4: nStr4,

  /**
   * 返回农历y年一整年的总天数
   * @param lunar Year
   * @return Number
   * @eg:var count = solarLunar.lYearDays(1987) ;//count=387
   */
  lYearDays: function lYearDays(y) {
    var i,
        sum = 348;

    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += solarLunar.lunarInfo[y - 1900] & i ? 1 : 0;
    }

    return sum + solarLunar.leapDays(y);
  },

  /**
   * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
   * @param lunar Year
   * @return Number (0-12)
   * @eg:var leapMonth = solarLunar.leapMonth(1987) ;//leapMonth=6
   */
  leapMonth: function leapMonth(y) {
    //闰字编码 \u95f0
    return solarLunar.lunarInfo[y - 1900] & 0xf;
  },

  /**
   * 返回农历y年闰月的天数 若该年没有闰月则返回0
   * @param lunar Year
   * @return Number (0、29、30)
   * @eg:var leapMonthDay = solarLunar.leapDays(1987) ;//leapMonthDay=29
   */
  leapDays: function leapDays(y) {
    if (solarLunar.leapMonth(y)) {
      return solarLunar.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }

    return 0;
  },

  /**
   * 返回农历 y 年 m 月（非闰月）的总天数，计算 m 为闰月时的天数请使用 leapDays 方法
   * @param lunar Year
   * @return Number (-1、29、30)
   * @eg:var MonthDay = solarLunar.monthDays(1987,9) ;//MonthDay=29
   */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } //月份参数从1至12，参数错误返回-1


    return solarLunar.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },

  /**
   * 返回公历(!)y年m月的天数
   * @param solar Year
   * @return Number (-1、28、29、30、31)
   * @eg:var solarMonthDay = solarLunar.leapDays(1987) ;//solarMonthDay=30
   */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } //若参数错误 返回-1


    var ms = m - 1;

    if (ms == 1) {
      //2月份的闰平规律测算后确认返回28或29
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return solarLunar.solarMonth[ms];
    }
  },

  /**
   * 传入offset偏移量返回干支
   * @param offset 相对甲子的偏移量
   * @return Cn string
   */
  toGanZhi: function toGanZhi(offset) {
    return solarLunar.gan[offset % 10] + solarLunar.zhi[offset % 12];
  },

  /**
   * 传入公历(!) y 年获得该年第 n 个节气的公历日期
   * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
   * @return number Number
   * @eg:var _24 = solarLunar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
   */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {
      return -1;
    }

    if (n < 1 || n > 24) {
      return -1;
    }

    var _table = solarLunar.lTermInfo[y - 1900];
    var _info = [parseInt('0x' + _table.substr(0, 5)).toString(), parseInt('0x' + _table.substr(5, 5)).toString(), parseInt('0x' + _table.substr(10, 5)).toString(), parseInt('0x' + _table.substr(15, 5)).toString(), parseInt('0x' + _table.substr(20, 5)).toString(), parseInt('0x' + _table.substr(25, 5)).toString()];
    var _calDay = [_info[0].substr(0, 1), _info[0].substr(1, 2), _info[0].substr(3, 1), _info[0].substr(4, 2), _info[1].substr(0, 1), _info[1].substr(1, 2), _info[1].substr(3, 1), _info[1].substr(4, 2), _info[2].substr(0, 1), _info[2].substr(1, 2), _info[2].substr(3, 1), _info[2].substr(4, 2), _info[3].substr(0, 1), _info[3].substr(1, 2), _info[3].substr(3, 1), _info[3].substr(4, 2), _info[4].substr(0, 1), _info[4].substr(1, 2), _info[4].substr(3, 1), _info[4].substr(4, 2), _info[5].substr(0, 1), _info[5].substr(1, 2), _info[5].substr(3, 1), _info[5].substr(4, 2)];
    return parseInt(_calDay[n - 1]);
  },

  /**
   * 传入农历年份数字返回汉语通俗表示法
   * @param lunar year
   * @return string
   * @eg:
   */
  toChinaYear: function toChinaYear(y) {
    //年 => \u5E74
    var oxxx = parseInt(y / 1000);
    var xoxx = parseInt(y % 1000 / 100);
    var xxox = parseInt(y % 100 / 10);
    var xxxo = y % 10;
    return solarLunar.nStr4[oxxx] + solarLunar.nStr4[xoxx] + solarLunar.nStr4[xxox] + solarLunar.nStr4[xxxo] + "\u5E74";
  },

  /**
   * 传入农历数字月份返回汉语通俗表示法
   * @param lunar month
   * @return number string
   * @eg:var cnMonth = solarLunar.toChinaMonth(12) ;//cnMonth='腊月'
   */
  toChinaMonth: function toChinaMonth(m) {
    // 月 => \u6708
    if (m > 12 || m < 1) {
      return -1;
    } //若参数错误 返回-1


    var s = solarLunar.nStr3[m - 1];
    s += "\u6708"; //加上月字

    return s;
  },

  /**
   * 传入农历日期数字返回汉字表示法
   * @param lunar day
   * @return Cn string
   * @eg:var cnDay = solarLunar.toChinaDay(21) ;//cnMonth='廿一'
   */
  toChinaDay: function toChinaDay(d) {
    //日 => \u65e5
    var s;

    switch (d) {
      case 10:
        s = "\u521D\u5341";
        break;

      case 20:
        s = "\u4E8C\u5341";
        break;

      case 30:
        s = "\u4E09\u5341";
        break;

      default:
        s = solarLunar.nStr2[Math.floor(d / 10)];
        s += solarLunar.nStr1[d % 10];
    }

    return s;
  },

  /**
   * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
   * @param y year
   * @return Cn string
   * @eg:var animal = solarLunar.getAnimal(1987) ;//animal='兔'
   * todo 生肖需要精确转换
   */
  getAnimal: function getAnimal(y) {
    return solarLunar.animals[(y - 4) % 12];
  },

  /**
   * 传入公历年月日获得详细的公历、农历object信息 <=>JSON
   * @param y  solar year
   * @param m solar month
   * @param d  solar day
   * @return JSON object
   * @eg:console.log(solarLunar.solar2lunar(1987,11,01));
   */
  solar2lunar: function solar2lunar(y, m, d) {
    //参数区间1900.1.31~2100.12.31
    if (y < 1900 || y > 2100) {
      return -1;
    } //年份限定、上限


    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    } //下限


    if (!y) {
      //未传参 获得当天
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }

    var i,
        leap = 0,
        temp = 0; //修正ymd参数

    var y = objDate.getFullYear(),
        m = objDate.getMonth() + 1,
        d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;

    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = solarLunar.lYearDays(i);
      offset -= temp;
    }

    if (offset < 0) {
      offset += temp;
      i--;
    } //是否今天


    var isTodayObj = new Date(),
        isToday = false;

    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    } //星期几


    var nWeek = objDate.getDay(),
        cWeek = solarLunar.nStr1[nWeek];

    if (nWeek == 0) {
      nWeek = 7;
    } //数字表示周几顺应天朝周一开始的惯例
    //农历年


    var year = i;
    var leap = solarLunar.leapMonth(i); //闰哪个月

    var isLeap = false; //效验闰月

    for (i = 1; i < 13 && offset > 0; i++) {
      //闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;
        temp = solarLunar.leapDays(year); //计算农历闰月天数
      } else {
        temp = solarLunar.monthDays(year, i); //计算农历普通月天数
      } //解除闰月


      if (isLeap == true && i == leap + 1) {
        isLeap = false;
      }

      offset -= temp;
    }

    if (offset == 0 && leap > 0 && i == leap + 1) if (isLeap) {
      isLeap = false;
    } else {
      isLeap = true;
      --i;
    }

    if (offset < 0) {
      offset += temp;
      --i;
    } //农历月


    var month = i; //农历日

    var day = offset + 1; //天干地支处理

    var sm = m - 1;
    var term3 = solarLunar.getTerm(y, 3); //该公历年立春日期

    var gzY = solarLunar.toGanZhi(y - 4); //普通按年份计算，下方尚需按立春节气来修正

    var termTimestamp = new Date(y, 1, term3).getTime();
    var dayTimestamp = new Date(y, sm, d).getTime(); //依据立春日进行修正gzY

    if (dayTimestamp < termTimestamp) {
      gzY = solarLunar.toGanZhi(y - 5);
    } //月柱 1900年1月小寒以前为 丙子月(60进制12)


    var firstNode = solarLunar.getTerm(y, m * 2 - 1); //返回当月「节」为几日开始

    var secondNode = solarLunar.getTerm(y, m * 2); //返回当月「节」为几日开始
    //依据12节气修正干支月

    var gzM = solarLunar.toGanZhi((y - 1900) * 12 + m + 11);

    if (d >= firstNode) {
      gzM = solarLunar.toGanZhi((y - 1900) * 12 + m + 12);
    } //传入的日期的节气与否


    var isTerm = false;
    var term = "";

    if (firstNode == d) {
      isTerm = true;
      term = solarLunar.lunarTerm[m * 2 - 2];
    }

    if (secondNode == d) {
      isTerm = true;
      term = solarLunar.lunarTerm[m * 2 - 1];
    } //日柱 当月一日与 1900/1/1 相差天数


    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = solarLunar.toGanZhi(dayCyclical + d - 1);
    return {
      'lYear': year,
      'lMonth': month,
      'lDay': day,
      'animal': solarLunar.getAnimal(year),
      'yearCn': solarLunar.toChinaYear(year),
      'monthCn': (isLeap && leap === month ? "\u95F0" : '') + solarLunar.toChinaMonth(month),
      'dayCn': solarLunar.toChinaDay(day),
      'cYear': y,
      'cMonth': m,
      'cDay': d,
      'gzYear': gzY,
      'gzMonth': gzM,
      'gzDay': gzD,
      'isToday': isToday,
      'isLeap': isLeap,
      'nWeek': nWeek,
      'ncWeek': "\u661F\u671F" + cWeek,
      'isTerm': isTerm,
      'term': term
    };
  },

  /**
   * 传入公历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
   * @param y  lunar year
   * @param m lunar month
   * @param d  lunar day
   * @param isLeapMonth  lunar month is leap or not.
   * @return JSON object
   * @eg:console.log(solarLunar.lunar2solar(1987,9,10));
   */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {
    var leapMonth = solarLunar.leapMonth(y);
    solarLunar.leapDays(y);

    if (isLeapMonth && leapMonth != m) {
      return -1;
    } //传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同


    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
      return -1;
    } //超出了最大极限值


    var day = solarLunar.monthDays(y, m);

    if (y < 1900 || y > 2100 || d > day) {
      return -1;
    } //参数合法性效验
    //计算农历的时间差


    var offset = 0;

    for (var i = 1900; i < y; i++) {
      offset += solarLunar.lYearDays(i);
    }

    var leap = 0,
        isAdd = false;

    for (var i = 1; i < m; i++) {
      leap = solarLunar.leapMonth(y);

      if (!isAdd) {
        //处理闰月
        if (leap <= i && leap > 0) {
          offset += solarLunar.leapDays(y);
          isAdd = true;
        }
      }

      offset += solarLunar.monthDays(y, i);
    } //转换闰月农历 需补充该年闰月的前一个月的时差


    if (isLeapMonth) {
      offset += day;
    } //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)


    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();
    return solarLunar.solar2lunar(cY, cM, cD);
  }
};

function nextDate() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  date = new Date(date);
  date = +date + 1000 * 60 * 60 * 24;
  date = new Date(date);
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

function lastDate() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  date = new Date(date);
  date = +date - 1000 * 60 * 60 * 24;
  date = new Date(date);
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

var LUNAR_FESTIVAL = {
  "正月": {
    "初一": "春节",
    "十五": "元宵节"
  },
  "二月": {
    "初二": "春龙节"
  },
  "五月": {
    "初五": "端午节"
  },
  "七月": {
    "初七": "七夕节",
    "十五": "中元节"
  },
  "八月": {
    "十五": "中秋节"
  },
  "九月": {
    "初九": "重阳节"
  },
  "腊月": {
    "初八": "腊八节",
    "廿三": "小年",
    "三十": "除夕"
  }
};
var FESTIVAL = {
  1: {
    1: "元旦"
  },
  2: {
    14: "情人节"
  },
  3: {
    8: "妇女节"
  },
  4: {
    1: "愚人节",
    4: "清明节"
  },
  5: {
    1: "劳动节",
    4: "青年节"
  },
  6: {
    1: "儿童节"
  },
  7: {
    1: "建党节"
  },
  8: {
    1: "建军节"
  },
  9: {
    10: "教师节"
  },
  10: {
    1: "国庆节"
  }
}; // 一、元旦：2021年1月1日至3日放假，共3天。
// 二、春节：2月11日至17日放假调休，共7天。2月7日（星期日）、2月20日（星期六）上班。
// 三、清明节：4月3日至5日放假调休，共3天。
// 四、劳动节：5月1日至5日放假调休，共5天。4月25日（星期日）、5月8日（星期六）上班。
// 五、端午节：6月12日至14日放假，共3天。
// 六、中秋节：9月19日至21日放假调休，共3天。9月18日（星期六）上班。
// 七、国庆节：10月1日至7日放假调休，共7天。9月26日（星期日）、10月9日（星期六）上班。

var ARRANGE_HOLIDAY = {
  2021: {
    1: [1, 3],
    2: [11, 17],
    4: [3, 5],
    5: [1, 5],
    6: [12, 14],
    9: [19, 21],
    10: [1, 7]
  }
};
var WORKING_DAYS = {
  2021: {
    2: {
      7: true,
      20: true
    },
    4: {
      25: true
    },
    5: {
      8: true
    },
    9: {
      18: true,
      26: true
    },
    10: {
      9: true
    }
  }
};
var HOLIDAY = [{
  label: "元旦",
  value: "2021-1-1"
}, {
  label: "春节",
  value: "2021-2-12"
}, {
  label: "清明节",
  value: "2021-4-4"
}, {
  label: "劳动节",
  value: "2021-5-1"
}, {
  label: "端午节",
  value: "2021-6-12"
}, {
  label: "中秋节",
  value: "2021-9-19"
}, {
  label: "国庆节",
  value: "2021-10-1"
}];

function generator(year, month, day) {
  var selectDate = [year, month, day].join("-");
  var fullDateArray = [];
  day = 1;
  var dayArr = [];
  var DAY_LENTH = 42;
  var startDay = new Date([year, month, day].join("-"));
  var itemDay = [year, month, day].join("-");
  var week = startDay.getDay();
  week = week == 0 ? 7 : week; // 开始push

  for (var i = 1; i < week; i++) {
    itemDay = lastDate(new Date(itemDay));

    var _solarLunar$solar2lun = solarLunar.solar2lunar.apply(solarLunar, _toConsumableArray(itemDay.split("-"))),
        term = _solarLunar$solar2lun.term,
        dayCn = _solarLunar$solar2lun.dayCn,
        monthCn = _solarLunar$solar2lun.monthCn,
        cDay = _solarLunar$solar2lun.cDay,
        cMonth = _solarLunar$solar2lun.cMonth,
        cYear = _solarLunar$solar2lun.cYear;

    if (FESTIVAL[cMonth] && FESTIVAL[cMonth][cDay]) {
      term = FESTIVAL[cMonth][cDay];
    }

    if (LUNAR_FESTIVAL[monthCn] && LUNAR_FESTIVAL[monthCn][dayCn]) {
      term = LUNAR_FESTIVAL[monthCn][dayCn];
    }

    var isWorkDay = void 0,
        isRestDay = void 0;

    if (WORKING_DAYS[cYear] && WORKING_DAYS[cYear][cMonth] && WORKING_DAYS[cYear][cMonth][cDay]) {
      isWorkDay = true;
    }

    if (ARRANGE_HOLIDAY[cYear] && ARRANGE_HOLIDAY[cYear][cMonth]) {
      var range = ARRANGE_HOLIDAY[cYear][cMonth];
      if (cDay >= range[0] && cDay <= range[1]) isRestDay = true;
    }

    dayArr.push({
      day: itemDay.split("-")[2],
      date: itemDay,
      d_day: term ? term : dayCn,
      isSelectClass: selectDate == itemDay,
      otherMonth: true,
      hasTerm: term,
      isWeekend: (new Date(itemDay).getDay() == 6 || new Date(itemDay).getDay() == 0) && !isWorkDay,
      isWorkDay: isWorkDay,
      isRestDay: isRestDay
    });
  }

  itemDay = [year, month, day].join("-");
  dayArr = dayArr.reverse();

  for (var _i = 0; _i <= DAY_LENTH - week; _i++) {
    var _solarLunar$solar2lun2 = solarLunar.solar2lunar.apply(solarLunar, _toConsumableArray(itemDay.split("-"))),
        _term = _solarLunar$solar2lun2.term,
        _dayCn = _solarLunar$solar2lun2.dayCn,
        _monthCn = _solarLunar$solar2lun2.monthCn,
        _cMonth = _solarLunar$solar2lun2.cMonth,
        _cDay = _solarLunar$solar2lun2.cDay,
        _cYear = _solarLunar$solar2lun2.cYear;

    if (FESTIVAL[_cMonth] && FESTIVAL[_cMonth][_cDay]) {
      _term = FESTIVAL[_cMonth][_cDay];
    }

    if (LUNAR_FESTIVAL[_monthCn] && LUNAR_FESTIVAL[_monthCn][_dayCn]) {
      _term = LUNAR_FESTIVAL[_monthCn][_dayCn];
    }

    var _isWorkDay = void 0,
        _isRestDay = void 0;

    if (WORKING_DAYS[_cYear] && WORKING_DAYS[_cYear][_cMonth] && WORKING_DAYS[_cYear][_cMonth][_cDay]) {
      _isWorkDay = true;
    }

    if (ARRANGE_HOLIDAY[_cYear] && ARRANGE_HOLIDAY[_cYear][_cMonth]) {
      var _range = ARRANGE_HOLIDAY[_cYear][_cMonth];
      if (_cDay >= _range[0] && _cDay <= _range[1]) _isRestDay = true;
    }

    dayArr.push({
      date: itemDay,
      day: itemDay.split("-")[2],
      d_day: _term ? _term : _dayCn,
      isSelectClass: selectDate == itemDay,
      otherMonth: itemDay.split("-")[1] != month,
      hasTerm: _term,
      isWeekend: (new Date(itemDay).getDay() == 6 || new Date(itemDay).getDay() == 0) && !_isWorkDay,
      isWorkDay: _isWorkDay,
      isRestDay: _isRestDay
    });
    itemDay = nextDate(new Date(itemDay));
  } //   清空原来的数据


  for (var _i2 = 0; _i2 <= 5; _i2++) {
    fullDateArray.push(dayArr.splice(0, 7));
  }

  return fullDateArray;
}

function Item(props) {
  var item = props.item,
      selectDayAction = props.selectDayAction;
  var classArray = [];

  if (item.isSelectClass) {
    classArray.push("op-calendar-pc-table-selected");
  }

  if (item.otherMonth) {
    classArray.push("op-calendar-pc-table-other-month");
  }

  if (item.hasTerm) {
    classArray.push("op-calendar-pc-table-festival");
  }

  if (item.isWeekend) {
    classArray.push("op-calendar-pc-table-weekend");
  }

  if (item.isWorkDay) {
    classArray.push("op-calendar-pc-table-work");
  }

  if (item.isRestDay) {
    classArray.push("op-calendar-pc-table-rest");
  }

  return /*#__PURE__*/React__default['default'].createElement("a", {
    className: classArray.join(" "),
    date: item.date,
    onClick: selectDayAction
  }, item.isWorkDay ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "op-calendar-pc-table-holiday-sign"
  }, "\u73ED") : "", item.isRestDay ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "op-calendar-pc-table-holiday-sign"
  }, "\u4F11") : "", /*#__PURE__*/React__default['default'].createElement("span", {
    className: "op-calendar-pc-daynumber"
  }, item.day), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "op-calendar-pc-table-almanac"
  }, item.d_day));
}

function BaiduCalendar(props) {
  var yearsOptions = [];
  var change = props.change;

  var initRange = function initRange() {
    // 年选范围
    var range = props.range ? props.range : [2010, 2030];

    if (range[0] > range[1]) {
      throw new Error("\u7A7F\u5165\u7684\u5E74\u4EFD\u6570\u636E\u4E0D\u5408\u7406\uFF0C".concat(range[0], "\u6BD4").concat(range[1], "\u5927"));
    }

    yearsOptions = [];

    for (var i = range[0]; i < range[1]; i++) {
      yearsOptions.push({
        value: i,
        label: i + "年"
      });
    }
  };

  var time = new Date();

  var _ref = props.date ? props.date.split("-") : [time.getFullYear(), time.getMonth + 1(), time.getDate()],
      _ref2 = _slicedToArray(_ref, 3),
      year = _ref2[0],
      month = _ref2[1],
      day = _ref2[2]; // 处理年份


  var _useState = React.useState(year),
      _useState2 = _slicedToArray(_useState, 2),
      selectYear = _useState2[0],
      setSelectYear = _useState2[1]; // 处理月份selectMonth,setSelectMonth,monthOptions


  var _useMonth = useMonth(month),
      _useMonth2 = _slicedToArray(_useMonth, 3),
      selectMonth = _useMonth2[0],
      setSelectMonth = _useMonth2[1],
      monthOptions = _useMonth2[2]; // 处理月份selectMonth,setSelectMonth,monthOptions


  var _useState3 = React.useState(day),
      _useState4 = _slicedToArray(_useState3, 2),
      selectDay = _useState4[0],
      setSelectDay = _useState4[1];

  var _useState5 = React.useState(generator(selectYear, selectMonth, selectDay)),
      _useState6 = _slicedToArray(_useState5, 2),
      fullDateArray = _useState6[0],
      setFullDateArray = _useState6[1];

  var _useState7 = React.useState({}),
      _useState8 = _slicedToArray(_useState7, 2),
      dayInfo = _useState8[0],
      setDayInfo = _useState8[1];

  var _useState9 = React.useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      hoverClass = _useState10[0],
      setHoverClass = _useState10[1];

  var getInfo = function getInfo(year, month, day) {
    var info = solarLunar.solar2lunar(year, month, day);
    setDayInfo(_objectSpread2({
      lunarFestival: LUNAR_FESTIVAL[info.monthCn] ? LUNAR_FESTIVAL[info.monthCn][info.dayCn] : undefined,
      festival: FESTIVAL[info.cMonth] ? FESTIVAL[info.cMonth][info.cDay] : undefined
    }, info));
  }; //初始化年份


  initRange(); //年份范围发生变化

  React.useEffect(function () {
    initRange();
  }, [props.range]);
  React.useEffect(function () {
    var _ref3 = props.date ? props.date.split("-") : [time.getFullYear(), time.getMonth + 1(), time.getDate()],
        _ref4 = _slicedToArray(_ref3, 3),
        year = _ref4[0],
        month = _ref4[1],
        day = _ref4[2];

    setSelectYear(year);
    setSelectMonth(month);
    setSelectDay(day);
    setFullDateArray(generator(year, month, day));
  }, [props.date]); // 选中年份

  var handleChange = function handleChange(_ref5) {
    var value = _ref5.value;
    setSelectYear(value);
    setFullDateArray(generator(value, selectMonth, selectDay));
  }; //选中月份


  var handleChangeMonth = function handleChangeMonth(_ref6) {
    var value = _ref6.value;
    setSelectMonth(value);
    setFullDateArray(generator(selectYear, value, selectDay));
  };

  var selectDayAction = function selectDayAction(e) {
    var date = e.target.parentNode.getAttribute("date") ? e.target.parentNode.getAttribute("date") : e.target.getAttribute("date");

    var _date$split = date.split("-"),
        _date$split2 = _slicedToArray(_date$split, 3),
        year = _date$split2[0],
        month = _date$split2[1],
        day = _date$split2[2];

    setSelectYear(parseInt(year));
    setSelectMonth(parseInt(month));
    setSelectDay(parseInt(day));
    setFullDateArray(generator(year, month, day));
  };

  React.useEffect(function () {
    getInfo(selectYear, selectMonth, selectDay);
    change([selectYear, selectMonth, selectDay].join("-"));
  }, [selectYear, selectMonth, selectDay]);

  var handleHover = function handleHover() {
    setHoverClass(!hoverClass);
  };

  var handleChangeHoliday = function handleChangeHoliday(_ref7) {
    var value = _ref7.value;

    var _value$split = value.split("-"),
        _value$split2 = _slicedToArray(_value$split, 3),
        year = _value$split2[0],
        month = _value$split2[1],
        day = _value$split2[2];

    setSelectYear(parseInt(year));
    setSelectMonth(parseInt(month));
    setSelectDay(parseInt(day));
    setFullDateArray(generator(year, month, day));
  };

  var returnToday = function returnToday() {
    var time = new Date();
    setSelectYear(time.getFullYear());
    setSelectMonth(time.getMonth() + 1);
    setSelectDay(time.getDate());
    setFullDateArray(generator(time.getFullYear(), time.getMonth() + 1, time.getDate()));
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc "
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-box"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-left"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-select-box",
    style: {
      visibility: "visible"
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-year-box"
  }, /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
    value: {
      value: selectYear,
      label: selectYear + "年"
    },
    options: yearsOptions,
    style: {
      width: 120
    },
    onChange: handleChange
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-year-box"
  }, /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
    options: monthOptions,
    style: {
      width: 120
    },
    onChange: handleChangeMonth,
    value: {
      value: selectMonth,
      label: selectMonth + "月"
    }
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-year-box"
  }, /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
    options: HOLIDAY,
    style: {
      width: 130
    },
    onChange: handleChangeHoliday,
    defaultValue: {
      label: "假期",
      value: -1
    }
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "op-calendar-pc-backtoday OP_LOG_BTN",
    onClick: returnToday
  }, "\u8FD4\u56DE\u4ECA\u5929")), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-table-box"
  }, /*#__PURE__*/React__default['default'].createElement("table", {
    className: "op-calendar-pc-table"
  }, /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React__default['default'].createElement("th", null, "\u4E00"), /*#__PURE__*/React__default['default'].createElement("th", null, "\u4E8C"), /*#__PURE__*/React__default['default'].createElement("th", null, "\u4E09"), /*#__PURE__*/React__default['default'].createElement("th", null, "\u56DB"), /*#__PURE__*/React__default['default'].createElement("th", null, "\u4E94"), /*#__PURE__*/React__default['default'].createElement("th", {
    className: "op-calendar-pc-table-weekend"
  }, "\u516D"), /*#__PURE__*/React__default['default'].createElement("th", {
    className: "op-calendar-pc-table-weekend"
  }, "\u65E5")), fullDateArray.map(function (items, index) {
    return /*#__PURE__*/React__default['default'].createElement("tr", {
      key: index
    }, items.map(function (item) {
      return /*#__PURE__*/React__default['default'].createElement("td", {
        key: item.date
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "op-calendar-pc-relative"
      }, /*#__PURE__*/React__default['default'].createElement(Item, {
        item: item,
        selectDayAction: selectDayAction
      })));
    }));
  }))))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-right",
    style: {
      fontSize: 12
    }
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "op-calendar-pc-right-date"
  }, [selectYear, selectMonth, selectDay].join("-")), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "op-calendar-pc-right-day"
  }, dayInfo.cDay), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "op-calendar-pc-right-lunar c-gap-top-small"
  }, /*#__PURE__*/React__default['default'].createElement("span", null, dayInfo.monthCn, " ", dayInfo.dayCn), /*#__PURE__*/React__default['default'].createElement("span", null, dayInfo.gzYear, "\u5E74 ", dayInfo.animal), /*#__PURE__*/React__default['default'].createElement("span", null, dayInfo.gzMonth, "\u6708 ", dayInfo.gzDay, "\u65E5")), dayInfo.lunarFestival ? /*#__PURE__*/React__default['default'].createElement("p", {
    className: "op-calendar-pc-right-holid1"
  }, dayInfo.lunarFestival) : "", dayInfo.festival ? /*#__PURE__*/React__default['default'].createElement("p", {
    className: "op-calendar-pc-right-holid1"
  }, dayInfo.festival) : "", /*#__PURE__*/React__default['default'].createElement("div", {
    className: ["op-calendar-pc-right-almanacbox", hoverClass ? "op-calendar-pc-right-hover" : ""].join(" ")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-right-almanac",
    onMouseOver: handleHover,
    onMouseOut: handleHover
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "op-calendar-pc-right-suit"
  }, /*#__PURE__*/React__default['default'].createElement("i", null, "\u5B9C"), "\u642C\u5BB6", /*#__PURE__*/React__default['default'].createElement("br", null), "\u88C5\u4FEE", /*#__PURE__*/React__default['default'].createElement("br", null), "\u5F00\u4E1A", /*#__PURE__*/React__default['default'].createElement("br", null), "\u7ED3\u5A5A", /*#__PURE__*/React__default['default'].createElement("br", null), "\u5165\u5B85", /*#__PURE__*/React__default['default'].createElement("br", null), "\u9886\u8BC1", /*#__PURE__*/React__default['default'].createElement("br", null), "\u5F00\u5DE5", /*#__PURE__*/React__default['default'].createElement("br", null), "\u52A8\u571F", /*#__PURE__*/React__default['default'].createElement("br", null), "\u51FA\u884C"), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "op-calendar-pc-right-avoid"
  }, /*#__PURE__*/React__default['default'].createElement("i", null, "\u5FCC"), "\u7948\u798F", /*#__PURE__*/React__default['default'].createElement("br", null), "\u7EB3\u755C", /*#__PURE__*/React__default['default'].createElement("br", null), "\u7ECF\u7EDC", /*#__PURE__*/React__default['default'].createElement("br", null), "\u683D\u79CD", /*#__PURE__*/React__default['default'].createElement("br", null), "\u658B\u91AE", /*#__PURE__*/React__default['default'].createElement("br", null), "\u8BCD\u8BBC", /*#__PURE__*/React__default['default'].createElement("br", null), "\u7F6E\u4EA7")), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-hover-almanac"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "op-calendar-hover-suit"
  }, /*#__PURE__*/React__default['default'].createElement("i", null, "\u5B9C"), "\u642C\u5BB6\u3001\u88C5\u4FEE\u3001\u5F00\u4E1A\u3001\u7ED3\u5A5A\u3001\u5165\u5B85\u3001\u9886\u8BC1\u3001\u5F00\u5DE5\u3001\u52A8\u571F\u3001\u51FA\u884C\u3001\u8BA2\u5A5A\u3001\u4E0A\u6881\u3001\u5F00\u5F20\u3001\u65C5\u6E38\u3001\u5165\u5B66\u3001\u8D74\u4EFB\u3001\u4FEE\u9020\u3001\u796D\u7940\u3001\u5F00\u5E02\u3001\u7EB3\u8D22\u3001\u88C1\u8863\u3001\u5AC1\u5A36\u3001\u7EB3\u91C7\u3001\u79FB\u5F99\u3001\u76D6\u5C4B\u3001\u7ACB\u5238\u3001\u6C42\u533B\u3001\u7AD6\u67F1\u3001\u6C42\u8D22"), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "op-calendar-hover-avoid"
  }, /*#__PURE__*/React__default['default'].createElement("i", null, "\u5FCC"), "\u7948\u798F\u3001\u7EB3\u755C\u3001\u7ECF\u7EDC\u3001\u683D\u79CD\u3001\u658B\u91AE\u3001\u8BCD\u8BBC\u3001\u7F6E\u4EA7"))))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "op-calendar-pc-holidaytip"
  }));
}

var BaiduCalendar$1 = /*#__PURE__*/React.memo(BaiduCalendar);

module.exports = BaiduCalendar$1;
