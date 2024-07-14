import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = () => {

    const [articles,setArtical]=useState([]);

    useEffect(()=>{
        
        const apiKey = '01de8359e05745ad9caf913ac2fce328'; // replace with your actual API key
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error fetching the news:', error));

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error fetching the news:', error));

  fetch(url).then(response=>response.json()).then(data=>setArtical(data.articles));



    },[])
  return (
    <div>
      <h2 className='text-center mt-3'>Latest <span className='badge bg-dark'>News</span></h2>
      
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
