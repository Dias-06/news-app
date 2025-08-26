import React from 'react'
import './categories.scss'
const Categories = ({categories, selectedCategory, setSelectedCategory}) => {
  return (
    <div className='categories'>
        {
            categories.map(category => (
                <button onClick={() => setSelectedCategory(category)} key={category} className={`categories__btn ${category == selectedCategory ? 'active' : ''}`}>{category}</button>
            ))
        }
    </div>
  )
}

export default Categories