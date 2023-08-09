import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Freelance Front End Developer at Upwork",
    duration: "March - April",
    details:
      "Test my knowledge in Front end Development through a freelance platform which is upwork for one month and now I am looking for full time role in a Company.~",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center py-10 text-[#001b53]">
        Current Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
