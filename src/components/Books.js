/** @format */

import React, { useState, memo } from 'react'
import { Table } from 'react-bootstrap'
import { FaSort } from 'react-icons/fa'

const Books = ({ booked, books, keyword }) => {
  const [sortedRating, setSortedRat] = useState(false)
  const [sortedPrice, setSortedPri] = useState(false)

  console.log(sortedRating, sortedPrice)
  const sortByPrice = () => {
    books.sort((a, b) => {
      if (a.price < b.price) {
        return -1
      }
      if (a.price > b.price) {
        return 1
      }
      return 0
    })
    setSortedPri(true)
  }

  const sortByRating = () => {
    books.sort((a, b) => {
      if (a.average_rating > b.average_rating) {
        return -1
      }
      if (a.price < b.price) {
        return 1
      }
      return 0
    })
    setSortedRat(true)
  }

  return (
    <Table borderless hover responsive className='table-sm'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th onClick={sortByRating}>
            Rating
            <FaSort />
          </th>
          <th onClick={sortByPrice}>
            Price
            <FaSort />
          </th>
        </tr>
      </thead>
      <tbody>
        {books
          .filter((b) => {
            if (keyword === '') {
              return b
            } else if (
              b.title
                .toString()
                .toLowerCase()
                .includes(keyword.toString().toLowerCase())
            ) {
              return b
            }
            return 0
          })
          .map((book, idx) => (
            <tr onClick={() => booked(book)} key={idx}>
              <td>{book.bookID}</td>
              <td>{book.title}</td>
              <td>{book.average_rating}</td>
              <td>{book.price}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default memo(Books)
