import React from 'react'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import image from '../../assets/news.jpg'
import './Banner.scss'
const Banner = ({item}) => {
  
  return (
    <div className='banner'>
      <img className='banner__image' src={item.image === 'None' ? image : item.image} alt={'none'} />
      <h2 className='banner__title'>{item.title}</h2>
      <p className='banner__extra'> {formatTimeAgo(item.published)} by {item.author}</p>
    </div>
  )
}
export default Banner;