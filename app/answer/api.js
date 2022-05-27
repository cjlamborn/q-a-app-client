'use strict'

// const config = require('./../config')
const store = require('../store.js')
// make GET request to /books to get all books
// getting all of a resource is commonly called an index or list action
// make DELETE request to /questions/:id to delete a single book
// deleting a single resource is commonly called a destroy action
const destroyAnswer = function (qId, aId) {
  return $.ajax({
    url: 'http://localhost:4741/questions/' + qId + '/answers/' + aId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateAnswer = function (id, formData) {
  return $.ajax({
    url: 'http://localhost:4741/answers/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createAnswer = function (formData) {
  return $.ajax({
    url: 'http://localhost:4741/answers',
    method: 'POST',
    // include the book data that we will use to create the book
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  destroyAnswer,
  updateAnswer,
  createAnswer
}
