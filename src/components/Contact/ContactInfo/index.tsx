import Link from "next/link";
import Location from "../OfficeLocation";
import React from "react";

const ContactInfo = () => {
  return (
    <>
      <section className="dark:bg-darkmode lg:pt-20 pt-16 lg:pb-24 pb-10">
        <div className="container mx-auto flex flex-col lg:flex-row lg:max-w-screen-xl lg:items-center md:max-w-screen-md">
       
          <div className=" ">
              <iframe className=" rounded-14" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.6234560129844!2d74.58085428366387!3d42.84026295826352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9f358cd8ce9%3A0xab5f1c1a8fad43d8!2sIntellect%20Pro%20School!5e0!3m2!1sru!2skg!4v1743483700285!5m2!1sru!2skg" width="600" height="450"  ></iframe>
          </div>
          <div>
            <Location/>
          </div>
        </div>
    
      </section>
    </>
  );
};

export default ContactInfo;
