import React from 'react'
import { footerStyle } from '../style'
import { openHours, otherLocations } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="grid grid-cols-4 bg-black p-6">
      <div>
        <h3 className={footerStyle.heading}>Opening Hours</h3>
        {/* <span className={footerStyle.footerItem}>Monday</span>
         */}
        {openHours.map((item) => (
          <div>
            <span className={footerStyle.footerDay}> {item.day}</span> &&
            <span className={footerStyle.footerHour}>{item.hour}</span>
          </div>
        ))}
      </div>
      <div>
        <h3 className={footerStyle.heading}>Useful Links</h3>
        <div className="text-white text-[25px] font-medium">
          <Link to="/offers" children="offers" className="mb-3">
            {' '}
            Offers
          </Link> <br/>
          <Link to="/menu" children = "menu" className="mb-3"> Menu</Link> <br/>
          <Link to="/bookTable" children = "booktable" className="mb-3"> Book Now</Link>
        </div>
      </div>
      <div className="text-white">
        <h3 className={footerStyle.heading}>Contact Us</h3>
        <div className="text-[20px]">
          <p className="mb-3">Jaipur, Rajasthan, India</p>
          <p className="mb-3">info@example.com</p>
          <p>+9122222222</p>
        </div>
      </div>
      <div>
        <h3 className={footerStyle.heading}>Other Locations</h3>
        {otherLocations.map((item) => (
          <div className="text-white my-4">
            <span className="uppercase font-medium text-[25px]">
              {item.name}
            </span>{' '}
            <br />
            <span className="text-[20px] font-normal">{item.Address}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
