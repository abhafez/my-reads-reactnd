import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

class SearchBooks extends React.Component {
  state = {}
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;

