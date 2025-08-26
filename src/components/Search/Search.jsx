import React from 'react'
import search from '../../assets/search.svg'
import './search.scss';
const Search = ({keywords, setKeywords, fetchNews, page}) => {
  return (
    <div className='search'>
        <input value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder='Javascript' className='search__input' type="text" />
        <img onClick={() => fetchNews(page)} className='search__icon' width={30} height={30} src={search} alt="" />
    </div>
  )
}

export default Search