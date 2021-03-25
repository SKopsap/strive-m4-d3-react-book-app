import { Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

function BookList({ fantasy, filterQuery }) {
  return (
    <div>
      <Row>
        {fantasy
          .filter((book) =>
            book.title.toLowerCase().includes(filterQuery.toLowerCase())
          )
          .map((book) => {
            return (
              <div key={book.asin}>
                <SingleBook
                  name={book.asin}
                  title={book.title}
                  img={book.img}
                />
              </div>
            )
          })}
      </Row>
    </div>
  )
}

export default BookList
