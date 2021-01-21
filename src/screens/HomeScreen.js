/** @format */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Container, Button } from 'react-bootstrap'

import { getBookList, fetchBooksData } from '../Actions/bookActions'
import { addToCart } from '../Actions/cartActions'
import Books from '../components/Books'
import Cart from '../components/Cart'

const HomeScreen = ({ history, match }) => {
  const [cart, setCart] = useState([])
  const [button, setButton] = useState('Show Books')
  const dispatch = useDispatch()
  const bookList = useSelector((state) => state.bookList)
  const { books } = bookList

  const keyword = match.params.keyword || ''

  useEffect(() => {
    dispatch(getBookList(keyword))
  }, [dispatch, keyword])

  const addToCartHandler = (book) => {
    setCart([...cart, book])
  }

  const removeItemHandler = (e, id) => {
    const newCart = cart.filter((x) => x.bookID !== id)
    setCart([...newCart])
  }

  const checkOutHandler = () => {
    history.push('/checkout')
    dispatch(addToCart(cart))
  }

  const importDataHandler = async () => {
    await dispatch(fetchBooksData())
    setButton('loading')
    window.location.reload()
  }

  return (
    <>
      {books.length === 0 ? (
        <Button className='import-data' onClick={importDataHandler}>
          {button}
        </Button>
      ) : (
        <Container>
          <Row>
            <Col md={8}>
              <br />
              <div>
                <h1>List Of Books</h1>
                <h6>(*Click on the book to add into the Cart)</h6>
              </div>
              <hr />
              <Books
                booked={addToCartHandler}
                books={books}
                keyword={keyword}
              />
            </Col>

            <Col md={4}>
              <br />
              <Cart
                cart={cart}
                removed={removeItemHandler}
                checkOut={checkOutHandler}
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default HomeScreen
