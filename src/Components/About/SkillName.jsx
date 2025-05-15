import { Icon } from "@iconify/react";
import React from "react";

const SkillName = ({title,value,icon}) => {
  return (
    <>
      <div className="col-span-12">
        <div>
          <div className="mb-2 flex justify-between items-center">
            <div className="flex items-center gap-x-3">
              <Icon icon={icon} className="text-5xl" />
              <div>
                <p className=" font-medium text-gray-100 text-xl">{title}</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-x-2">
              <Icon
                icon="teenyicons:tick-circle-solid"
                className="text-teal-400 text-2xl"
              />
            </div>
          </div>

          {/* <!-- Progress Bar --> */}
          <div className="flex items-center gap-x-3 whitespace-nowrap">
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500 "
                style={{ width: `${value}%` }}
              ></div>
            </div>
            <div className="w-6 text-end">
              <span className=" text-white text-lg">{`${value}%`}</span>
            </div>
          </div>
          {/* <!-- End Progress Bar --> */}
        </div>
      </div>
    </>
  );
};

export default SkillName;
