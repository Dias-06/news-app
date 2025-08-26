import React from 'react'
import './NewsList.scss'
import NewsItem from '../NewsItem/NewItem'
import withSkeleton from '../../helpers/hocks/withSkeleton'
const NewsList = ({news}) => {
  return (
    <ul className='news-list'>
        {
        news.map((item, index) => (
            <li key={index} className='news-list__item'>
              <NewsItem item={item} />
            </li>
        ))
        }
    </ul>
  ) 
}
const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)
export default NewsListWithSkeleton;