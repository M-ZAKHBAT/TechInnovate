import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who We Are</h2>
          <p className="py-2 text-gray-600">
            We are a passionate team of 4 dedicated web developers committed to
            creating exceptional online experiences. Drawing upon our collective
            expertise and commitment to excellence, we collaborate to design and
            develop innovative digital solutions for our clients.
          </p>
          <p className="py-2 text-gray-600">
            Our team draws its strength from the diversity of our skills and our
            commitment to excellence. Each member brings their own expertise and
            unique vision, allowing us to approach every project with creativity
            and rigor. By combining our knowledge in web development, user
            interface design, project management, and more, we are able to
            tackle the most complex challenges and deliver solutions that exceed
            our clients expectations. Our passion for innovation and dedication
            to customer satisfaction guide every action we take, enabling us to
            build remarkable and enduring online experiences.
          </p>
          <Link href="/#profils">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check Our Team&apos;s Profiles.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
