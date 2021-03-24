import React from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = ({ title, img }) => {
  return (
    <Card className="mt-3" style={{ width: '250px' }}>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
