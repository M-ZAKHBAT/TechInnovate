import Image from "next/image";
import React from "react";
import elkhachabiImg from "../public/assets/projects/elkhachabi.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const profilThree = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={elkhachabiImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Reda ELKHECHABI</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Profil</p>
          <h2>Overview</h2>
          <p>
            I am a skilled MERN stack web developer proficient in JavaScript,
            MongoDB, Express.js, React.js, and Node.js. I specialize in creating
            dynamic and interactive web applications, seamlessly integrating
            front-end and back-end functionalities. With a keen eye for design
            and attention to detail, I craft intuitive user interfaces and
            scalable databases. Constantly learning and adapting to new
            technologies, I am committed to delivering innovative solutions and
            exceeding expectations in the ever-evolving digital landscape.&quot;
          </p>
          <a
            href="https://www.linkedin.com/in/reda-el-khechabi-7780642a9/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">LinkedIn</button>
          </a>
          <a
            href="https://github.com/RedaDevJs"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">GitHub</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> IMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#profils">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default profilThree;
