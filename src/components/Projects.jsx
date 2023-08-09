import React from "react";
import ProjectsItem from "./ProjectsItem";
import cryptoImg1 from "../assets/buffshiba.png";
import cryptoImg2 from "../assets/dogecolony.png";
import cryptoImg3 from "../assets/flama.png";
import cryptoImg4 from "../assets/floki.png";
import cryptoImg5 from "../assets/gambler.png";
import cryptoImg6 from "../assets/hlp.png";
import cryptoImg7 from "../assets/kappi.png";
import cryptoImg8 from "../assets/shipit.png";
import cryptoImg9 from "../assets/travgopv.png";
import cryptoImg10 from "../assets/we-learn.png";
import cryptoImg11 from "../assets/booby.png";

const Projects = () => {
  return (
    <>
      <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-semibold text-center text-[#001b5e] ">
          Paid Projects
        </h1>
        <p className="text-center py-8">This is my Paid projects at Upwork</p>
        <p className="text-center py-8">
          Completed 22 Projects, I only displayed 10 to avoid overcrowding
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          <a href="https://babyflokiup.finance/">
            <ProjectsItem img={cryptoImg4} title="BabyFloki" />
          </a>
          <a href="https://shipitpro.io/">
            <ProjectsItem img={cryptoImg8} title="ShipIt Pro" />
          </a>

          <a href="https://hlptoken.io/">
            <ProjectsItem img={cryptoImg6} title="HLP Token" />
          </a>
          <a href="https://boobytrap.live/">
            <ProjectsItem img={cryptoImg11} title="BoobyTrap" />
          </a>

          <a href="https://buffshibainu.io/">
            <ProjectsItem img={cryptoImg1} title="BuffShiba Inu" />
          </a>
          <a href="https://dogecolony.io/">
            <ProjectsItem img={cryptoImg2} title="DogeColony" />
          </a>
          <a href="https://flamanet.io/">
            <ProjectsItem img={cryptoImg3} title="Flama Token" />
          </a>

          <a href="https://www.gamblershiba.finance/">
            <ProjectsItem img={cryptoImg5} title="Gambler Shiba" />
          </a>

          <a href="https://kappi.network/">
            <ProjectsItem img={cryptoImg7} title="Kappi" />
          </a>

          <a href="https://travgopv.com/">
            <ProjectsItem img={cryptoImg9} title="TravGoPV" />
          </a>
        </div>
      </div>
      <div className="m-auto md:pl-20 p-4 py-16 text-center">
        <h1 className="text-4xl  text-center text-[#001b5e] ">
          Personal Projects
        </h1>
        <div>
          <h2 className="py-2 text-center font-semibold">
            My First Project using HTML CSS and Javascript
          </h2>
          <a href="https://russelj91.github.io/Github-Elijah/">
            <span className="bg-red-100 rounded-full px-3 py-1">Visit</span>
          </a>
        </div>
        <div>
          <h2 className="py-2 text-center font-semibold">
            My second Project Using CSS Framework
          </h2>
          <a href="https://russelj91.github.io/MP1Freelance/">
            <span className="bg-red-100 rounded-full px-3 py-1">Visit</span>
          </a>
        </div>
        <div>
          <h2 className="py-2 text-center font-semibold">
            My Third Project Using JSON local storage, API add to cart function
          </h2>
          <a href="https://russelj91.github.io/MP2Welearn/">
            <span className="bg-red-100 rounded-full px-3 py-1">Visit</span>
          </a>
        </div>
        <div>
          <h2 className="py-2 text-center font-semibold">
            My Fourth Project Full Stack Development, Mysql, PHP, Laravel
          </h2>
          <a href="https://russelj91.github.io/MP2Welearn/">
            <span className="bg-red-100 rounded-full px-3 py-1">Visit</span>
          </a>
        </div>
        <div>
          <h2 className="py-2 text-center font-semibold">
            My Fifth Project Full Stack Development, Mysql, PHP
          </h2>
          <a href="https://cakeph.shop/">
            <span className="bg-red-100 rounded-full px-3 py-1">Visit</span>
          </a>
        </div>
        <div>
          <h2 className="py-2 text-center font-semibold">
            My Six Project Web App using React and API
          </h2>
          <a href="https://russelj91.github.io/geolocation/">
            <span className="bg-red-100 rounded-full px-3 py-1">Visit</span>
          </a>
        </div>
        <div>
          <h2 className="py-2 text-center font-semibold">
            My First Technical Exam using Space-X API
          </h2>
          <a href="https://russelj91.github.io/technicalexam/">
            <span className="bg-red-100 rounded-full px-3 py-1">Visit</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
