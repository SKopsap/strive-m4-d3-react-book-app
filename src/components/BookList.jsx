import React, { Component } from 'react'
import SingleBook from './SingleBook'

class BookList extends Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <div>
        {data.fantasy.map((book) => {
          return (
            <div key={book.asin}>
              <SingleBook title={book.title} img={book.img} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BookList
