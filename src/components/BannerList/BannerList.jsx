import React from 'react'
import Banner from '../Banner/Banner'
import './bannerList.scss';
import withSkeleton from '../../helpers/hocks/withSkeleton';
const BannerList = ({news}) => {
  return (
    <ul className='banner-list'>
        {
            news.map((item, index) => (
                <li key={index} className='banner-list__item'>
                    <Banner  item={item}/>
                </li>
            ))
        }
        
    </ul>
  )
}
const BannerListWithSkeleton = withSkeleton(BannerList, 'banner', 10)
export default BannerListWithSkeleton