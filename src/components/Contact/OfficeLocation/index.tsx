import Link from "next/link";
import React from "react";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className=" dark:bg-darkmode">
        <div className="container ">
          <div className="flex items-center flex-wrap w-full border border-solid  dark:border-dark_border md:px-14 px-6  rounded-22 ">
            <div className="flex items-center lg:gap-1 gap-1 flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid dark:border-dark_border last:border-b-0">
              <div>
                <h2 className="text-secondary dark:text-white  sm:text-[24px] sm:leading-[2.2rem] text-[24px] font-bold">
                  Intellect Pro School
                </h2>
              </div>
              <div className="leading-[2.2rem]">
                <p className="sm:text-xl text-xl text-secondary  dark:text-darktext font-normal max-w-266 ">
                  ​Улица Джунусалиева, 177/1
                </p>
              </div>

              <div className="col-span-3 leading-[2.25rem]">
                <Link
                  href="tel:731-621-5503"
                  className="sm:text-xl text-xl text-secondary dark:text-primary flex items-center gap-2 mt-2 hover:text-opacity-100 w-fit hover:dark:text-white"
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  +996 555 600 600
                </Link>
              </div>
            </div>

            <div className="flex items-center lg:gap-1 gap-1 flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid dark:border-dark_border last:border-b-0">
              <div>
                <h2 className="text-secondary dark:text-white  sm:text-[24px] sm:leading-[2.2rem] text-[24px] font-bold">
                  Intellect Pro School
                </h2>
              </div>
              <div className="leading-[2.2rem]">
                <p className="sm:text-xl text-xl text-secondary  dark:text-darktext font-normal max-w-266 ">
                  ​Улица Джунусалиева, 177/1
                </p>
              </div>

              <div className="col-span-3 leading-[2.25rem]">
                <Link
                  href="tel:731-621-5503"
                  className="sm:text-xl text-xl text-secondary dark:text-primary flex items-center gap-2 mt-2 hover:text-opacity-100 w-fit hover:dark:text-white"
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  +996 555 600 600
                </Link>
              </div>
            </div>

            <div className="flex items-center lg:gap-1 gap-1 flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid dark:border-dark_border last:border-b-0">
              <div>
                <h2 className="text-secondary dark:text-white  sm:text-[24px] text-[24px] font-bold">
                  Intellect Pro School
                </h2>
              </div>
              <div className="">
                <p className="sm:text-xl text-xl text-secondary  dark:text-darktext font-normal max-w-266 ">
                  ​Улица Джунусалиева, 177/1
                </p>
              </div>

              <div className=" ">
                <Link
                  href="tel:731-621-5503"
                  className="sm:text-xl text-xl text-secondary dark:text-primary flex items-center gap-2 mt-2 hover:text-opacity-100 w-fit hover:dark:text-white"
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  +996 555 600 600
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
