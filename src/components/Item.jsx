import React from "react";

function Item(props) {
  let { item ,selectDayAction} = props;

  let classArray = [];
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
  return (
    <a
      className={classArray.join(" ")}
      date={item.date}
      onClick={
        selectDayAction
      }
    >
      {item.isWorkDay ? (
        <span className="op-calendar-pc-table-holiday-sign">
          班
        </span>
      ) : (
        ""
      )}
      {item.isRestDay? (
            <span className="op-calendar-pc-table-holiday-sign">
            休
          </span>
      ) : (
        ""
      )}
      <span className="op-calendar-pc-daynumber">{item.day}</span>
      <span className="op-calendar-pc-table-almanac">{item.d_day}</span>
    </a>
  );
}

export default Item