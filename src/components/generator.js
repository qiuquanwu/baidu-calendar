import solarLunar from "./utils/solarLunar.js";
import nextDay from "./utils/nextDay.js";
import lastDay from "./utils/lastDay.js";
import {
  LUNAR_FESTIVAL,
  FESTIVAL,
  ARRANGE_HOLIDAY,
  WORKING_DAYS,
  HOLIDAY,
} from "./utils/lunarFestival.js";
function generator(year, month, day) {
  let selectDate = [year, month, day].join("-");
  let fullDateArray = [];
  day = 1;
  let dayArr = [];
  const DAY_LENTH = 42;
  let startDay = new Date([year, month, day].join("-"));
  let itemDay = [year, month, day].join("-");
  let week = startDay.getDay();
  week = week == 0 ? 7 : week;
  // 开始push
  for (let i = 1; i < week; i++) {
    itemDay = lastDay(new Date(itemDay));
    let { term, dayCn, monthCn, cDay, cMonth, cYear } = solarLunar.solar2lunar(
      ...itemDay.split("-")
    );
    if (FESTIVAL[cMonth] && FESTIVAL[cMonth][cDay]) {
      term = FESTIVAL[cMonth][cDay];
    }

    if (LUNAR_FESTIVAL[monthCn] && LUNAR_FESTIVAL[monthCn][dayCn]) {
      term = LUNAR_FESTIVAL[monthCn][dayCn];
    }
    let isWorkDay, isRestDay;
    if (
      WORKING_DAYS[cYear] &&
      WORKING_DAYS[cYear][cMonth] &&
      WORKING_DAYS[cYear][cMonth][cDay]
    ) {
      isWorkDay = true;
    }

    if (ARRANGE_HOLIDAY[cYear] && ARRANGE_HOLIDAY[cYear][cMonth]) {
      let range = ARRANGE_HOLIDAY[cYear][cMonth];
      if (cDay >= range[0] && cDay <= range[1]) isRestDay = true;
    }

    dayArr.push({
      day: itemDay.split("-")[2],
      date: itemDay,
      d_day: term ? term : dayCn,
      isSelectClass: selectDate == itemDay,
      otherMonth: true,
      hasTerm: term,
      isWeekend:
        (new Date(itemDay).getDay() == 6 || new Date(itemDay).getDay() == 0) &&
        !isWorkDay,
      isWorkDay: isWorkDay,
      isRestDay: isRestDay,
    });
  }
  itemDay = [year, month, day].join("-");
  dayArr = dayArr.reverse();
  for (let i = 0; i <= DAY_LENTH - week; i++) {
    let { term, dayCn, monthCn, cMonth, cDay, cYear } = solarLunar.solar2lunar(
      ...itemDay.split("-")
    );
    if (FESTIVAL[cMonth] && FESTIVAL[cMonth][cDay]) {
      term = FESTIVAL[cMonth][cDay];
    }
    if (LUNAR_FESTIVAL[monthCn] && LUNAR_FESTIVAL[monthCn][dayCn]) {
      term = LUNAR_FESTIVAL[monthCn][dayCn];
    }
    let isWorkDay, isRestDay;
    if (
      WORKING_DAYS[cYear] &&
      WORKING_DAYS[cYear][cMonth] &&
      WORKING_DAYS[cYear][cMonth][cDay]
    ) {
      isWorkDay = true;
    }

    if (ARRANGE_HOLIDAY[cYear] && ARRANGE_HOLIDAY[cYear][cMonth]) {
      let range = ARRANGE_HOLIDAY[cYear][cMonth];
      if (cDay >= range[0] && cDay <= range[1]) isRestDay = true;
    }
    dayArr.push({
      date: itemDay,
      day: itemDay.split("-")[2],
      d_day: term ? term : dayCn,
      isSelectClass: selectDate == itemDay,
      otherMonth: itemDay.split("-")[1] != month,
      hasTerm: term,
      isWeekend:
        (new Date(itemDay).getDay() == 6 || new Date(itemDay).getDay() == 0) &&
        !isWorkDay,
      isWorkDay: isWorkDay,
      isRestDay: isRestDay,
    });
    itemDay = nextDay(new Date(itemDay));
  }
  //   清空原来的数据
  for (let i = 0; i <= 5; i++) {
    fullDateArray.push(dayArr.splice(0, 7));
  }

  return fullDateArray;
}

export default generator;
