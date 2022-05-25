'use strict'

const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-up',
    data
    // same as data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-in',
    data
    // same as data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'http://localhost:4741/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
    // same as data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'http://localhost:4741/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
