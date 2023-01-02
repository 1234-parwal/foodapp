import React from 'react'
import { burger } from '../assets'
import { menuStyle } from '../style.js'

const Menu = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-5">
        <div className={menuStyle.menuCard}>
          <img src={burger} alt="burger" className={menuStyle.menuImage}></img>
          <div className="flex flex-col">
            <h3 className={menuStyle.menuItem}>Burger</h3>
            <span className={menuStyle.menuPrice}>$50</span>
          </div>
        </div>
        <div className={menuStyle.menuCard}>
          <img src={burger} alt="burger" className={menuStyle.menuImage}></img>
          <div className="flex flex-col">
            <h3 className={menuStyle.menuItem}>Burger</h3>
            <span className={menuStyle.menuPrice}>$50</span>
          </div>
        </div>
        <div className={menuStyle.menuCard}>
          <img src={burger} alt="burger" className={menuStyle.menuImage}></img>
          <div className="flex flex-col">
            <h3 className={menuStyle.menuItem}>Burger</h3>
            <span className={menuStyle.menuPrice}>$50</span>
          </div>
        </div>
        <div className={menuStyle.menuCard}>
          <img src={burger} alt="burger" className={menuStyle.menuImage}></img>
          <div className="flex flex-col">
            <h3 className={menuStyle.menuItem}>Burger</h3>
            <span className={menuStyle.menuPrice}>$50</span>
          </div>
        </div>
        <div className={menuStyle.menuCard}>
          <img src={burger} alt="burger" className={menuStyle.menuImage}></img>
          <div className="flex flex-col">
            <h3 className={menuStyle.menuItem}>Burger</h3>
            <span className={menuStyle.menuPrice}>$50</span>
          </div>
        </div>
        <div className={menuStyle.menuCard}>
          <img src={burger} alt="burger" className={menuStyle.menuImage}></img>
          <div className="flex flex-col">
            <h3 className={menuStyle.menuItem}>Burger</h3>
            <span className={menuStyle.menuPrice}>$50</span>
          </div>
        </div>
        <div className={menuStyle.menuCard}>
          <img src={burger} alt="burger" className={menuStyle.menuImage}></img>
          <div className="flex flex-col">
            <h3 className={menuStyle.menuItem}>Burger</h3>
            <span className={menuStyle.menuPrice}>$50</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
