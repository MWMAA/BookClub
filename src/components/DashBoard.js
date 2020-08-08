import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default () => {
  return (
    <div className='box-layout__dashboard'>
      <div className='search_container'>
        <h3 className='search_helpful_text_up'>Looking for a specific Book or Author?</h3>
        <div className="search-box">
          <input type="text" name="" className="search-txt" placeholder="Search..." />
          <Link className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </div>
        <h5 className='search_helpful_text_btm' >Lookup all <Link to={'/bookList'} >Books</Link> | <Link to={'/authorlist'} >Authors</Link> </h5>
      </div>
    </div >
  )
}