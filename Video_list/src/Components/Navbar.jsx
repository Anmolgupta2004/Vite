import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mt-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
       <span className='badge text-bg-secondary'>Video</span>
      </a>
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
           Trending
          </a>
        </div>
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
            Sports
          </a>
        </div>
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
          Shopping
          </a>
        </div>
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
          Fashion & beauty
          </a>
        </div>
      </div>
    </div>
    <div className="container-fluid">
     <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          style={{width:"500px"}}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
  
  )
}

export default Navbar
