/** @format */

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Table,
  Container,
  Col,
  Row,
  Card,
  ListGroup,
} from 'react-bootstrap'
import { FaRupeeSign } from 'react-icons/fa'
import { getCartList } from '../Actions/cartActions'

const CartScreen = () => {
  const dispatch = useDispatch()

  const cartList = useSelector((state) => state.cartList)
  const { cartItems } = cartList

  useState(() => {
    dispatch(getCartList())
  }, [dispatch])

  console.log(cartItems)

  return (
    <Container>
      <br />
      <div>
        <h1>Check-Out</h1>
      </div>
      <hr />
      <Row>
        <Col md={8}>
          {' '}
          <Table borderless hover responsive className='table-sm   mt-3'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((book, idx) => (
                <tr key={idx}>
                  <td>{book.bookID}</td>
                  <td>{book.title}</td>
                  <td>{book.average_rating}</td>
                  <td>
                    <FaRupeeSign />
                    {book.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          <Card className='mt-3'>
            <ListGroup>
              <ListGroup.Item>
                <h3>Cart Value :</h3>

                <h4>
                  <FaRupeeSign />
                  {cartItems
                    .reduce((acc, item) => acc + item.price, 0)
                    .toFixed(2)}
                </h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type='button' className='btn-block'>
                  Buy
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CartScreen
