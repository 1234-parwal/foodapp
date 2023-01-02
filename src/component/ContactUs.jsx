import React from 'react'
import CallContactUs from './CallContactUs'
import WhatsappContactUs from './WhatsappContactUs'
import { ambience1 } from '../assets'
import { contactStyle } from '../style'
import BookTable from './BookTable'

const ContactUs = () => {
  return (
    <div className="relative">
      <img
        src={ambience1}
        alt="ambience1"
        className="lg:w-[3000px] lg:h-[800px] md:w-[2000px] md:h-[500px] justify-center px-52 py-4 bg-black"
      />
      <div className="hidden xl:block">
        <h1 className="absolute font-semibold uppercase text-[90px] text-white left-[600px] top-[150px]">
          Book Your Table
        </h1>
        <h4 className="absolute font-mono italic font-medium left-[700px] top-[280px] text-zinc-100 text-[40px] underline">
          For the best Healthy Food
        </h4>

        <div className="card--shadow absolute left-[800px] top-[380px] p-6 bg-black rounded-3xl">
          <h5 className="text-white underline uppercase font-semibold text-[30px] text-center">
            Open Hours
          </h5>

          <p className={`${contactStyle.hourText} `}>Mon-Fri: 5pm to 10pm</p>
          <p className={`${contactStyle.hourText} `}>Sat-Sun: 5pm to 2am </p>
        </div>
        <BookTable styles = "absolute left-[870px] bottom-[500px]"/>
      </div>
      <div className="bg-yellow-300 flex flex-col">
      <div className='xl:hidden flex flex-col items-center mt-4'>
        <BookTable styles={""}/>

      </div>
      
        <h1 className="text-fuchsia-900 font-poppins font-bold underline text-[40px] p-4 text-center">
          {' '}
          ORDER NOW{' '}
        </h1>
        

        <div className="grid grid-cols-2">
          <WhatsappContactUs />
          <CallContactUs />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
