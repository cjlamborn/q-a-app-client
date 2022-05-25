'use strict'
// const store = require('../store.js')

const onDeleteSuccess = function () {
  // add success message to our books-destroy-message element
  $('#delete-question-message').html('Question successfully deleted!')

  // empty out the books-display element in case it was displaying information
  // about the book we just deleted, replace with a message for the user to get
  // all the books again.
  $('#question-message-display').html(
    'Questions have changed! Click "Get All" again to see all the questions'
  )

  // add class for success messaging
  $('#delete-question-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#delete-question-message').html('')
    $('#delete-question-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  // add success message to our books-update-message element
  $('#question-update-message').html('You successfully updated this question')

  // empty out the books-display element in case it was displaying information
  // about the book we just updated, replace with a message for the user to get
  // all the books again.
  $('#question-message-display').html(
    'Questions have changed! Click "Get All" again to see all the questions.'
  )

  // add class for success messaging
  $('#question-update-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#question-update-message').html('')
    $('#question-update-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onCreateSuccess = function () {
  // add success message to content
  $('#answer-create-message').html('You created a new question!')

  // we just created a new book!
  // we can add a message to let the users know they should request all of
  // the books again to see the newly created book included
  $('#question-message-display').html(
    'Questions have been added! Click "View All" again to see all the questions.'
  )
  // add class for success messaging
  $('#answer-create-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#answer-create-message').html('')
    $('#answer-create-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onError = function () {
  // log the error for debugging purpose

  // display a message to the user to let them know what they were doing did
  // not work correctly
  $('#error-message').html('Something went wrong, please try again.')

  // add class for error messaging
  $('#error-message').addClass('failure')

  // use setTimeout to allow the error message to stay for 5 seconds before
  // the message is replaced with '' and the 'failure' class is removed
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('failure')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

module.exports = {

  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
