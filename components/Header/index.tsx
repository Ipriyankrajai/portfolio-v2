import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.svg";
import twitter from "../../public/twitter.svg";
import github from "../../public/github.svg";
const Header = () => {
  return (
    <nav className="pl-[20px] pr-[20px] pt-[10px] pb-[10px] sticky top-0 left-0 h-[64px] backdrop-blur-lg w-full">
      <div className="max-w-[1280px] m-auto">
        <div className="flex justify-between items-center">
          <div className="p-[10px] hover:bg-[#ff03] rounded-[4px]">
            <Link href="/">
              <Image src={logo} width={24} height={24} alt="logo" />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="hidden md:flex gap-2 text-[#FFFF00] text-[14px] lexend">
              <Link
                href={"#about"}
                className="pl-[20px] pr-[20px] pt-[12px] pb-[12px] hover:bg-[#ff03] hover:underline hover:underline-offset-4 hover:decoration-wavy rounded-[4px]"
              >
                ABOUT
              </Link>
              <Link
                href={"#projects"}
                className="pl-[20px] pr-[20px] pt-[12px] pb-[12px] hover:bg-[#ff03] hover:underline hover:underline-offset-4 hover:decoration-wavy rounded-[4px]"
              >
                PROJECTS
              </Link>
              <Link
                href={"#contact"}
                className="pl-[20px] pr-[20px] pt-[12px] pb-[12px] hover:bg-[#ff03] hover:underline hover:underline-offset-4 hover:decoration-wavy rounded-[4px]"
              >
                CONTACT
              </Link>
            </div>
            <div className="hidden md:block h-[25px] w-[1px] bg-[#ff03] ml-[8px] mr-[8px]"></div>
            <div className="flex gap-2">
              <Link href={"https://twitter.com/priyank_web"} legacyBehavior>
                <a target="_blank">
                  <div className="p-[10px] pr-[20px] pl-[20px] bg-[#ffff001a] hover:bg-[#ff03] rounded-[4px]">
                    <Image
                      src={twitter}
                      height={24}
                      width={24}
                      alt="twitter"
                      className="icon-fill"
                    />
                  </div>
                </a>
              </Link>
              <Link href={"https://github.com/Ipriyankrajai"} legacyBehavior>
                <a target="_blank">
                  <div className="p-[10px] pr-[20px] pl-[20px] bg-[#ffff001a] hover:bg-[#ff03] rounded-[4px]">
                    <Image
                      src={github}
                      height={24}
                      width={24}
                      alt="twitter"
                      className="icon-fill"
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
