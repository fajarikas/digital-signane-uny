import React, { useState } from "react";
import { scheduleDummy } from "../../../../../../dummy/scheduleDummy";
import { FaChevronDown } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const ScheduleItem = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <div className="space-y-10">
        {scheduleDummy.map((data, key) => {
          const [day, month] = data.date.split(" ");
          return (
            <div
              key={data.id}
              className="block border py-5 shadow rounded-2xl px-10"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-extrabold text-7xl">{day}</p>
                </div>
                <div className="block">
                  <p className="text-4xl font-bold">{month}</p>
                  <p className="font-bold text-light-gray text-xl">
                    {`${data.time[0]} AM - ${data.time[1]} PM`}
                  </p>
                </div>
                <img
                  className="w-1/12 rounded-full"
                  src={data.guest_picture}
                  alt={`${data.guest_name}`}
                />
                <div className="block">
                  <p className="text-2xl font-bold">{data.event}</p>
                  <p className="text-2xl">
                    By: <span className="font-bold">{data.guest_name}</span>{" "}
                    {data.guest_title}
                  </p>
                </div>
                <button onClick={() => handleClick(data.id)}>
                  {activeId === data.id ? (
                    <FaChevronUp size={40} />
                  ) : (
                    <FaChevronDown size={40} />
                  )}
                </button>
              </div>

              {activeId === data.id && (
                <div className="mt-5 border-t-4 border-dark-blue">
                  <p className="mt-5">{data.description}</p>
                  <div className="flex items-center space-x-5 mt-12">
                    <FaLocationDot size={20} />
                    <p className="mt-1">{data.address}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ScheduleItem;
