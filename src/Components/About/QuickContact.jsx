import React from 'react'

const QuickContact = () => {
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
        <div className="grid grid-cols-12 mt-20">
         <div className="lg:col-span-6 col-span-12 block relative after:top-0 after:start-0 after:absolute after:w-full after:h-full after:bg-gray-900/30">
         <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="contact-image" className='h-full object-cover' />
         </div>
         <div className="lg:col-span-6 col-span-12">
         <div className="offcanvas-contact-form md:p-16 p-4 bg-darkgray">
                <h3 className="text-4xl font-medium text-white mb-6 lh-1">
                GET TOUCH ME?
                </h3>
                <p className='text-base text-body font-medium mb-6'>For your web solution, we handle everything from expert design to top-notch development and maintenance.</p>
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
                    <input
                      type="email"
                      name="phonenumber"
                      id="phone"
                      className="p-5 text-white block w-full border bg-transparent border-primary rounded-none text-base font-medium focus:border-primary focus:ring-primary"
                      placeholder="Phone Number"
                    />
                    <textarea name="message" className="p-5 text-white block w-full border bg-transparent border-primary rounded-none text-base font-medium focus:border-primary focus:ring-primary" rows="3" placeholder="Your Message"></textarea>
                    <button type='submit' className="btn text-base">Submit Now</button>
                </form>
              </div>
         </div>
        </div>
    </>
  )
}

export default QuickContact
