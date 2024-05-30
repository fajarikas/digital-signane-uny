import React from "react";
import { newsDummy } from "../../../../../../dummy/newsDummy";
import { MdOutlineDateRange } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const NewsItem = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        {newsDummy.map((data, key) => (
          <div class="flex shadow-md rounded-xl border-2">
            <div class="block">
              <img
                src={data.image}
                class="rounded-l-xl w-[400px] h-full"
                alt=""
              />
            </div>
            <div class="ml-7 mt-4 block">
              <div class="text-2xl font-semibold">
                <p>{data.title}</p>
              </div>
              <div class="mt-16 mb-3">
                <div class="flex gap-3 items-center">
                  <MdOutlineDateRange size={27} />
                  <p class="mt-1 ">{data.date} </p>

                  <CiUser size={27} />
                  <p class="mt-1">{data.creator}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsItem;
