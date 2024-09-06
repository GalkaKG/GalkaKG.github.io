import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Galina Georgieva</h2>
          <p className="text-base leading-6 ">
          Experienced in collaborating within agile teams to deliver clean, maintainable, and well-documented
          backend solutions. Committed to best practices across multiple technologies, with a focus on long-term
          growth and development.

          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          {/* <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            24
          </li> */}
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Bulgaria
          </li>
          {/* <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li> */}
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Sofia, Bulgaria
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
