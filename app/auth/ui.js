'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')
  setTimeout(() => {
    $('#auth-display').html('')
  }, 5000)
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')
  setTimeout(() => {
    $('#auth-display').html('')
  }, 5000)
  $('.tab-one').hide()
  $('.tab-two').hide()
  $('.tab-three').show()
  $('.tab-four').show()
  $('#front-page').show()
  $('#view-account').show()
  $('#sign-in-form').toggle('slide')
  $('#sign-up-form').toggle('slide')
  $('#intro').hide()
  $('#front-page').show()
  $('#create').show()
  $('#question-index').show()
  // reset all forms
  $('form').trigger('reset')

  // store data from the response in my store object
  store.user = response.user

  // reset single form
  // $('#sign-in-form').trigger('reset')
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>User changed password successfully</p>')
  setTimeout(() => {
    $('#auth-display').html('')
  }, 5000)
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')
  setTimeout(() => {
    $('#auth-display').html('')
  }, 5000)
  $('.tab-one').show()
  $('.tab-two').show()
  if ($('.tab-four').text() === 'Sign Out') {
    // This block is executed when
    // you click the show button
    $('.tab-four').text(' ')
  }
  $('.tab-three').hide()
  $('#app-display').hide()
  $('#new-account').hide()
  $('#front-page').hide()
  $('#create').hide()
  $('#index').hide()
  $('#intro').show()
  $('#change').hide()
  $('#question-message-display').hide()
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
