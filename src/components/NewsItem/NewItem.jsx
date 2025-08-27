import React from 'react'
import image from '../../assets/news.jpg'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import './NewsItem.scss';
const NewsItem = ({item}) => {
  return (
    <div className='news-item'>
        <img src={item.image === 'None' ? image : item.image} alt="none" className='news-item__image'/>
        <div className='news-item__info'>
          <h2 className='new-item__title'>{item.title}</h2>
          <p className='news-item__date'>
            {formatTimeAgo(item.published)} by {item.author}
          </p>
        </div>
    </div>
  )
}

export default NewsItem