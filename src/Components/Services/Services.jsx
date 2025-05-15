
import webIcon from "../../assets/Banner/web-devlopment.svg"
import webEcommIcon from "../../assets/Banner/ecomm-devlopment.svg"

const Services = () => {
  return (
    <>
      <div className="service-section lg:py-[130px] py-20 bg-dark">
        <div className="container ">
          <div className="flex justify-center">
          <div className="md:w-7/12 w-full text-center">
          <span className='uppercase tracking-wider text-primary text-xl font-semibold text-center mb-6 block'>My Projects</span>
        <p className='md:text-5xl text-4xl font-black text-white '>Crafting stories through design and innovation</p>
          </div>
          </div>
          <div className="lg:flex justify-center  gap-6 mt-24">
        <div className="lg:w-4/12 w-full lg:mb-0 mb-20">
           <div className="border-lightgray border-[3px] text-center p-10 pt-0">
            <img src={webIcon} alt="web-con" className='mx-auto -mt-[50px] mb-10' />
                <h3 className='text-xl text-white font-medium tracking-wide mb-5'>MERN APP</h3>
                <p className="text-base text-body font-medium">
      Full-stack web application built using MongoDB, Express.js, React, and Node.js. Includes user authentication, protected routes, and dynamic data rendering.
    </p>
           </div>
        </div>
        <div className="lg:w-4/12 w-full">
           <div className="border-lightgray border-[3px] text-center p-10 pt-0">
            <img src={webEcommIcon} alt="web-con" className='mx-auto -mt-[50px] mb-10' />
                <h3 className='text-xl text-white font-medium tracking-wide mb-5'>FRONTEND UI DESIGNS</h3>
                <p className="text-base text-body font-medium">
      Hand-crafted user interfaces using React and Tailwind CSS. Focused on modern design systems, pixel-perfect layouts, responsive components.
    </p>
           </div>
        </div>
     </div>
        </div>
      </div>
    </>
  )
}

export default Services
