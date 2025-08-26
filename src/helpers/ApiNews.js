import axios from 'axios'
import { data } from './data'
export async function getNews(options = {}) {
    try {
        const {
            page_number = 1,
            page_size = 10,
            category,
            keywords
        } = options;
        const params = {
            apiKey: 'qZNFw2vQTjwJste9gEsKl_CZJSZCCHLZx0twWrQqQflaunaw',
            page_number,
            page_size,
            keywords
        }
        if(category && category != 'All'){
            params.category = category;
        }
        const response = await axios.get('/api-news/v1/search', {params})
        return response.data
    } catch (error) {
        console.log(error)
        return data;
    }
}

export async function getCategories() {
    try {
        const response = await axios.get('/api-news/v1/available/categories', {
            params: {
                apiKey: 'qZNFw2vQTjwJste9gEsKl_CZJSZCCHLZx0twWrQqQflaunaw',
            }
        })
        return response.data.categories

    } catch (error) {
        console.log(error);
    }
}

export async function getLatestNews(){
    try {
        const response = await axios.get('/api-news/v1/latest-news', {
            params: {
                apiKey: 'qZNFw2vQTjwJste9gEsKl_CZJSZCCHLZx0twWrQqQflaunaw',
            }
        });
        return response.data
    } catch (error) {
        console.log(error)
    }
}