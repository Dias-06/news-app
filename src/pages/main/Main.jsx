import React, { useState } from 'react'
import { useEffect } from 'react'
import { getCategories, getLatestNews, getNews } from '../../helpers/ApiNews'
import NewsList from '../../components/NewsList/NewsList'
import Pagination from '../../components/Pagination/Pagination'
import Categories from '../../components/Categories/Categories'
import Search from '../../components/Search/Search'
import BannerList from '../../components/BannerList/BannerList'
import './main.scss';
import Slider from '../../components/Slider/Slider'
import { useFetch } from '../../helpers/hooks/useFetch'
const Main = () => {
  const [news, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [keywords, setKeywords] = useState('');
  
  const fetchNews = async (currentPage) => {
      const data = await getNews({
        page_number: currentPage,
        page_size: 10,
        category: selectedCategory,
        keywords
      });
      setNews(data.news);
      setLoading(false);
  }
  const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(['All', ...response]);
  }

  const fetchLatestNews = async () => {
    const data = await getLatestNews();
    setLatestNews(data.news);
    console.log(data.news)
  }
  useEffect(() => {
    fetchCategories();
    fetchLatestNews();
  }, [])
  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory])

  function handleNextPage(){
    if(currentPage < 10){
      setCurrentPage(prev => prev + 1)
    }
  }
  function handlePrevPage(){
    if(currentPage > 1){
      setCurrentPage(prev => prev - 1)
    }
  }
  function handleClickPage(page){
    setCurrentPage(page)
  }
  return (
    <main className='main container'>
      
      <div className='main__banners'>
        <BannerList isLoading = {loading} news={latestNews}/>
      </div>
      <div className='main__news'>
        <Slider>
          <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </Slider>
        <Search fetchNews={fetchNews} keywords={keywords} setKeywords={setKeywords} page={currentPage}/>
        <NewsList isLoading = {loading} news={news}/>
        <Pagination currentPage = {currentPage} handleNextPage = {handleNextPage} handlePrevPage = {handlePrevPage} handleClickPage = {handleClickPage} totalPages={10}/>
      </div>

      
    </main>
  )
}

export default Main

