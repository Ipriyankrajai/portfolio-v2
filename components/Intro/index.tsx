import Image from "next/image";
import React from "react";
import grayscaleImag from "../../public/image.png";
import arrow from "../../public/arrow.svg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="min-h-[80vh] flex flex-col justify-center relative">
        <h1 className="text-[3em] md:text-[4em] lg:text-[5em] xl:text-[6em] lexend font-black z-10 w-[90%]">
          Hello, I am <span className="text-[#FFFF00]">Priyank.</span>
        </h1>
        <h2 className="manrope text-[1em] sm:text-[20px] xl:text-[22px] w-[90%]">
          Based in India, I'm a full-stack developer passionate about building
          accessible web apps that users love.
        </h2>
        {/* <div className="absolute right-0">
        <Image
        src={grayscaleImag}
        alt="author grayscale image"
        width={400}
        height={400}
        />
      </div> */}
        <div className="absolute right-0 z-10">
          <div className="flex flex-col">
            <a
              href="https://www.linkedin.com/in/priyank-rajai-806983117/"
              target="_blank"
              className="pl-[16px] pr-[16px] pt-[8px] pb-[8px] flex justify-end items-center gap-1 text-[#FFFF00] i--sc"
            >
              <span className="i--sc-short">In</span>
              <span className="i--sc-long">Linkedin</span>
              <span>
                <Image src={arrow} alt="arrow" width={15} height={15} />
              </span>
            </a>
            <a
              href="https://twitter.com/priyank_web"
              target="_blank"
              className="pl-[16px] pr-[16px] pt-[8px] pb-[8px] flex justify-end items-center gap-1 text-[#FFFF00] i--sc"
            >
              <span className="i--sc-short">Tw</span>
              <span className="i--sc-long">Twitter</span>
              <span>
                <Image src={arrow} alt="arrow" width={15} height={15} />
              </span>
            </a>
            <a
              href="https://github.com/Ipriyankrajai"
              target="_blank"
              className="pl-[16px] pr-[16px] pt-[8px] pb-[8px] flex justify-end items-center gap-1 text-[#FFFF00] i--sc"
            >
              <span className="i--sc-short">Git</span>
              <span className="i--sc-long">Github</span>
              <span>
                <Image src={arrow} alt="arrow" width={15} height={15} />
              </span>
            </a>
            <a
              href="mailto:priyankrajai97@gmail.com"
              target="_blank"
              className="pl-[16px] pr-[16px] pt-[8px] pb-[8px] flex justify-end items-center gap-1 text-[#FFFF00] i--sc"
            >
              <span className="i--sc-short">@</span>
              <span className="i--sc-long">Email</span>
              <span>
                <Image src={arrow} alt="arrow" width={15} height={15} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
