/** @format */
import React from 'react'
import { Button, Table, Card, ListGroup } from 'react-bootstrap'
import { FaTrash, FaRupeeSign } from 'react-icons/fa'

const Cart = ({ cart, removed, checkOut }) => {
  return (
    <Card className='mt-3'>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <h2>Books In Cart ({cart.length}) </h2>
        </ListGroup.Item>
        {cart.length === 0 ? (
          <h4 className='m-auto'>
            <br />
            Cart Is Empty
          </h4>
        ) : (
          <ListGroup.Item>
            <Table borderless>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((book, idx) => (
                  <tr key={idx}>
                    <td>{book.title}</td>
                    <td>
                      <FaRupeeSign />
                      {book.price}
                    </td>
                    <td>
                      <FaTrash onClick={(e) => removed(e, book.bookID)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ListGroup.Item>
        )}
        <ListGroup.Item>
          <Button
            type='button'
            className='btn-block'
            onClick={checkOut}
            disabled={cart.length === 0}>
            Proceed To Checkout
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Cart
