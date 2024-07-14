import React from 'react'
import img from '../assets/news.jpeg'

const NewsItem = ({title ,description, src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{ maxwidth:"345px" }}>
    <img src={src?src:img} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..." />
    <div className="card-body " style={{height:"200px", width:"360px"}}>
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">
      {description?description.slice(0,90):"News is the nefdnmn fjjc k ksknfmf jdedekfkm kdmfgmmg j,kmgssmm "}
      </p>
      <a href={url} className="btn btn-primary">
       Read More
      </a>
    </div>
  </div>
  
  )
}
export default NewsItem
