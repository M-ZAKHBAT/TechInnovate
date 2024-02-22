import Image from "next/image";
import Link from "next/link";
import React from "react";
import zakhbatImg from "../public/assets/projects/zakhbat.jpg";
import sanabiImg from "../public/assets/projects/sanabi.jpg";
import elkhachabiImg from "../public/assets/projects/elkhachabi.jpg";
import younesImg from "../public/assets/projects/younes.jpeg";
import ProjectItem from "./ProjectItem";

const Profils = () => {
  return (
    <div id="profils" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Teams
        </p>
        <h2 className="py-4">Profils</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Mohammed ZAKHBAT"
            backgroundImg={zakhbatImg}
            projectUrl="/profilOne"
            tech="Web Developper"
          />

          <ProjectItem
            title="Reda ELKHACHABI"
            backgroundImg={elkhachabiImg}
            projectUrl="/profilThree"
            tech="Web Developper"
          />

          <ProjectItem
            title="Mohamed Sanabi"
            backgroundImg={sanabiImg}
            projectUrl="/profilTwo"
            tech="Web Developper"
          />
          <ProjectItem
            title="Youness AIT M'Barek"
            backgroundImg={younesImg}
            projectUrl="/profilFour"
            tech="Web Developper"
          />
        </div>
      </div>
    </div>
  );
};

export default Profils;
