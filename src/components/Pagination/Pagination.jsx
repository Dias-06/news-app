import React from 'react'
import './pagination.scss'
const Pagination = ({totalPages, handleClickPage, handleNextPage, handlePrevPage, currentPage}) => {
  return (
    <div className='pagination'>
        <button onClick={handlePrevPage} className='pagination__arrow'>{'<'}</button>
        <div className='pagination__info'>
            {[...Array(totalPages)].map((_, index) => (
                <button disabled = {index + 1 == currentPage} onClick={() => handleClickPage(index + 1)} key={index} className='pagination__page'>{index + 1}</button>
            ))}
        </div>
        <button onClick={handleNextPage} className='pagination__arrow'>{'>'}</button>
    </div>
  )
}

export default Pagination