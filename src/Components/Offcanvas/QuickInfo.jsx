import { Icon } from "@iconify/react";
import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import minilogo from "../../assets/Header/mini_logo.png";
import emailjs from '@emailjs/browser'
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION } from "../../constants/navigation";

const QuickInfo = () => {
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_77i8fxr','template_vssa949',e.target,'Qve_10u5iZ7CrdxWj').then((result)=>{
      console.log(result)
    },(error)=>{
      console.log(error)
    })
    alert("Submitted");
  }
  return (
    <>
      <div
        id="hs-overlay-right"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300  transform h-full max-w-sm w-full z-[80] bg-white dark:bg-neutral-800 "
        tabIndex="-1"
      >
        <div className="flex justify-between items-center py-5 px-4 bg-secondary">
          <img src={minilogo} alt="mini-logo" />
          <button
            type="button"
            className="flex justify-center items-center size-10 text-sm font-semibold rounded-full border border-transparent  hover:bg-dark hover:text-white  bg-primary text-dark"
            data-hs-overlay="#hs-overlay-right"
          >
            <span className="sr-only">Close modal</span>
            <Icon icon="iconamoon:close-duotone" className="text-2xl" />
          </button>
        </div>
        <div className="p-7 bg-darkgray">
          <div className="simplebar-height">
            <SimpleBar style={{ height: "100%" }}>
              <div className="wrappper md:block hidden">
              <h3 className="text-xl font-medium my-5 tracking-wide uppercase text-white">
                About
              </h3>
              <p className="text-base leading-normal text-body">
              Hey! I'm Ashish Kumar, a full-stack developer who loves turning ideas into awesome web apps. Whether it’s front-end magic or back-end logic, I’ve got it covered.
              </p>
              <div className="offcanvas-contact-form mt-10">
                <h3 className="text-xl font-medium uppercase text-white tracking-wide mb-[30px]">
                  get in touch
                </h3>
                <form  className="flex flex-col gap-[30px]" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      className="p-5 text-white block w-full border bg-transparent border-primary rounded-none text-base font-medium focus:border-primary focus:ring-primary"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      name="email_from"
                      id="emailFrom"
                      className="p-5 text-white block w-full border bg-transparent border-primary rounded-none text-base font-medium focus:border-primary focus:ring-primary"
                      placeholder="Your Email"
                    />
                    <textarea name="message" className="p-5 text-white block w-full border bg-transparent border-primary rounded-none text-base font-medium focus:border-primary focus:ring-primary" rows="3" placeholder="Your Message"></textarea>
                    <button className="btn text-base">Submit Now</button>
                </form>
              </div>
              </div>
              <ul className="flex flex-col gap-4 md:hidden">
               {NAVIGATION.map((item)=>{
                return (
                  <Link to={`${item.href}`}>
                  <li className={`py-2 px-4 items-center fw-bold text-base hover:bg-lightprimary hover:text-primary rounded-md flex gap-2 ${location.pathname===item.href?'text-white bg-primary hover:bg-primary hover:text-white':'text-body'}`}>
                  <Icon icon={item.icon} className="text-xl" />
                  {item.label}
                 </li>
                 </Link>
                )
               })}
              </ul>
            </SimpleBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickInfo;
