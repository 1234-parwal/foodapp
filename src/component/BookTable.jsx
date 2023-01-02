import React from 'react'

const BookTable = ({styles}) => {
  return (
    <div><button type = "button" className={`py-6 px-6 font-semibold text-[24px] rounded-[2px] text-black outline outline-offset-1 outline-2 uppercase bg-dimWhite ${styles}`}>Book Table</button>
    </div>
  )
}

export default BookTable