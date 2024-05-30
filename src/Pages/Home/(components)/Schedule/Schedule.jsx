import React from "react";
import ScheduleItem from "./(components)/ScheduleItem/ScheduleItem";
import Title from "../../../../Components/Title/Title";

const Schedule = () => {
  return (
    <div className="h-screen">
      <Title text="UNY Schedule" />
      <div className="mt-5">
        <ScheduleItem />
      </div>
    </div>
  );
};

export default Schedule;
