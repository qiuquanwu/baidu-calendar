import React, { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import useMonth from "./monthOptions.js";
import generator from "./generator.js";
import Item from "./Item.jsx";
import solarLunar from "./utils/solarLunar.js";
import { LUNAR_FESTIVAL, FESTIVAL, HOLIDAY } from "./utils/lunarFestival.js";
import "./index.css";
function BaiduCalendar(props) {
  let yearsOptions = [];
  let { change } = props;
  const initRange = () => {
    // 年选范围
    let range = props.range ? props.range : [2010, 2030];
    if (range[0] > range[1]) {
      throw new Error(`穿入的年份数据不合理，${range[0]}比${range[1]}大`);
    }
    yearsOptions = [];
    for (let i = range[0]; i < range[1]; i++) {
      yearsOptions.push({
        value: i,
        label: i + "年",
      });
    }
  };
  let time = new Date();
  let [year, month, day] = props.date
    ? props.date.split("-")
    : [time.getFullYear(), time.getMonth() + 1, time.getDate()];
  // 处理年份
  let [selectYear, setSelectYear] = useState(year);
  // 处理月份selectMonth,setSelectMonth,monthOptions
  let [selectMonth, setSelectMonth, monthOptions] = useMonth(month);
  // 处理月份selectMonth,setSelectMonth,monthOptions
  let [selectDay, setSelectDay] = useState(day);
  let [fullDateArray, setFullDateArray] = useState(
    generator(selectYear, selectMonth, selectDay)
  );

  let [dayInfo, setDayInfo] = useState({});
  let [hoverClass, setHoverClass] = useState(false);
  const getInfo = (year, month, day) => {
    let info = solarLunar.solar2lunar(year, month, day);
    setDayInfo({
      lunarFestival: LUNAR_FESTIVAL[info.monthCn]
        ? LUNAR_FESTIVAL[info.monthCn][info.dayCn]
        : undefined,
      festival: FESTIVAL[info.cMonth]
        ? FESTIVAL[info.cMonth][info.cDay]
        : undefined,
      ...info,
    });
  };

  //初始化年份
  initRange();
  //年份范围发生变化
  useEffect(() => {
    initRange();
  }, [props.range]);
  useEffect(() => {
    let [year, month, day] = props.date
      ? props.date.split("-")
      : [time.getFullYear(), time.getMonth() + 1, time.getDate()];
    setSelectYear(year);
    setSelectMonth(month);
    setSelectDay(day);
    setFullDateArray(generator(year, month, day));
  }, [props.date]);
  // 选中年份
  const handleChange = ({ value }) => {
    setSelectYear(value);
    setFullDateArray(generator(value, selectMonth, selectDay));
  };
  //选中月份
  const handleChangeMonth = ({ value }) => {
    setSelectMonth(value);
    setFullDateArray(generator(selectYear, value, selectDay));
  };
  const selectDayAction = (e) => {
    const date = e.target.parentNode.getAttribute("date")
      ? e.target.parentNode.getAttribute("date")
      : e.target.getAttribute("date");
    let [year, month, day] = date.split("-");
    setSelectYear(parseInt(year));
    setSelectMonth(parseInt(month));
    setSelectDay(parseInt(day));
    setFullDateArray(generator(year, month, day));
  };
  useEffect(() => {
    getInfo(selectYear, selectMonth, selectDay);
    change([selectYear, selectMonth, selectDay].join("-"));
  }, [selectYear, selectMonth, selectDay]);
  const handleHover = () => {
    setHoverClass(!hoverClass);
  };
  const handleChangeHoliday = ({ value }) => {
    let [year, month, day] = value.split("-");
    setSelectYear(parseInt(year));
    setSelectMonth(parseInt(month));
    setSelectDay(parseInt(day));
    setFullDateArray(generator(year, month, day));
  };
  const returnToday = () => {
    let time = new Date();
    setSelectYear(time.getFullYear());
    setSelectMonth(time.getMonth() + 1);
    setSelectDay(time.getDate());
    setFullDateArray(
      generator(time.getFullYear(), time.getMonth() + 1, time.getDate())
    );
  };
  return (
    <div
      className={[
        "op-calendar-pc ",
        dayInfo.lunarFestival ? "op-calendar-pc-holidaystyle" : "",
      ].join(" ")}
    >
      <div className="op-calendar-pc-box">
        <div className="op-calendar-pc-left">
          <div
            className="op-calendar-pc-select-box"
            style={{
              visibility: "visible",
            }}
          >
            <div className="op-calendar-pc-year-box">
              <Select
                value={{ value: selectYear, label: selectYear + "年" }}
                options={yearsOptions}
                style={{ width: 120 }}
                onChange={handleChange}
              />
            </div>
            <div className="op-calendar-pc-year-box">
              <Select
                options={monthOptions}
                style={{ width: 120 }}
                onChange={handleChangeMonth}
                value={{ value: selectMonth, label: selectMonth + "月" }}
              />
            </div>
            <div className="op-calendar-pc-year-box">
              <Select
                options={HOLIDAY}
                style={{ width: 130 }}
                onChange={handleChangeHoliday}
                defaultValue={{ label: "假期", value: -1 }}
              />
            </div>
            <span
              className="op-calendar-pc-backtoday OP_LOG_BTN"
              onClick={returnToday}
            >
              返回今天
            </span>
          </div>
          <div className="op-calendar-pc-table-box">
            <table className="op-calendar-pc-table">
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <th>一</th>
                  <th>二</th>
                  <th>三</th>
                  <th>四</th>
                  <th>五</th>
                  <th className="op-calendar-pc-table-weekend">六</th>
                  <th className="op-calendar-pc-table-weekend">日</th>
                </tr>
                {fullDateArray.map((items, index) => {
                  return (
                    <tr key={index}>
                      {items.map((item) => {
                        return (
                          <td key={item.date}>
                            <div className="op-calendar-pc-relative">
                              <Item
                                item={item}
                                selectDayAction={selectDayAction}
                              />
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="op-calendar-pc-right" style={{ fontSize: 12 }}>
          <p className="op-calendar-pc-right-date">
            {[selectYear, selectMonth, selectDay].join("-")}
          </p>
          <p className="op-calendar-pc-right-day">{dayInfo.cDay}</p>
          <p className="op-calendar-pc-right-lunar c-gap-top-small">
            <span>
              {dayInfo.monthCn} {dayInfo.dayCn}
            </span>
            <span>
              {dayInfo.gzYear}年 {dayInfo.animal}
            </span>
            <span>
              {dayInfo.gzMonth}月 {dayInfo.gzDay}日
            </span>
          </p>
          {dayInfo.lunarFestival ? (
            <p className="op-calendar-pc-right-holid1">
              {dayInfo.lunarFestival}
            </p>
          ) : (
            ""
          )}
          {dayInfo.festival ? (
            <p className="op-calendar-pc-right-holid1">{dayInfo.festival}</p>
          ) : (
            ""
          )}

          <div
            className={[
              "op-calendar-pc-right-almanacbox",
              hoverClass ? "op-calendar-pc-right-hover" : "",
            ].join(" ")}
          >
            <div
              className="op-calendar-pc-right-almanac"
              onMouseOver={handleHover}
              onMouseOut={handleHover}
            >
              <span className="op-calendar-pc-right-suit">
                <i>宜</i>搬家
                <br />
                装修
                <br />
                开业
                <br />
                结婚
                <br />
                入宅
                <br />
                领证
                <br />
                开工
                <br />
                动土
                <br />
                出行
              </span>
              <span className="op-calendar-pc-right-avoid">
                <i>忌</i>祈福
                <br />
                纳畜
                <br />
                经络
                <br />
                栽种
                <br />
                斋醮
                <br />
                词讼
                <br />
                置产
              </span>
            </div>
            <div className="op-calendar-hover-almanac">
              <span className="op-calendar-hover-suit">
                <i>宜</i>
                搬家、装修、开业、结婚、入宅、领证、开工、动土、出行、订婚、上梁、开张、旅游、入学、赴任、修造、祭祀、开市、纳财、裁衣、嫁娶、纳采、移徙、盖屋、立券、求医、竖柱、求财
              </span>
              <span className="op-calendar-hover-avoid">
                <i>忌</i>祈福、纳畜、经络、栽种、斋醮、词讼、置产
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="op-calendar-pc-holidaytip"></div>
    </div>
  );
}
export default memo(BaiduCalendar);
