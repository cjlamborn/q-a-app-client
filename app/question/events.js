'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

// Show every book (an index or list action)
const onIndexQuestion = function () {
  // make API call to get all of the books
  api
    .index()

  // if API call is successful then pass the data to the onIndexSuccess function
    .then(ui.onIndexSuccess)

  // if API call fails then run our onError function
    .catch(ui.onError)
}

// Show a book (a show or retrieve action)
const onShowQuestion = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // create a javascript object from the form (event.target) where the user entered the book id
  const formData = getFormFields(event.target)

  // make API call for getting one book with the id of the book we grabbed from the form
  api
    .show(formData.question.id)

  // if the API call is successful then pass the data to the onShowSuccess
  // function
    .then(ui.onShowSuccess)

  // if the API call fails then run our onError function
    .catch(ui.onError)
}

// Destroy a book using a form with a text input for the id
const onDeleteQuestion = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // create a javascript object from the form (event.target) where the user entered the book id
  const formData = getFormFields(event.target)

  // make API call for destroying one book with id of the book we grabbed from the form
  api
    .destroy(formData.question.id)

  // if the API call is successful then invoke the onDetroySuccess function
    .then(ui.onDeleteSuccess)

  // if the API call fails then run our onError function
    .catch(ui.onError)
}

const onUpdateQuestion = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // create a javascript object from the form (event.target) where the user entered
  // the book information
  const formData = getFormFields(event.target)

  // extract the id from our formData's book
  const id = formData.question.id
  // make API call to update one book with the data we grabbed from the form
  api
    .update(id, formData)

  // if the API call is successful then invoke the onUpdateSuccess function
    .then(ui.onUpdateSuccess)

  // if the API call fails then run our onError function
    .catch(ui.onError)
}

const onCreateQuestion = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // create a javascript object from the form (event.target) where the user entered the book
  // information
  const formData = getFormFields(event.target)

  // make API call to create one book with the data we grabbed from the form
  api
    .create(formData)

  // if the API call is successful then invoke the onCreateSuccess function
    .then(ui.onCreateSuccess)

  // if the API call fails then run our onError function
    .catch(ui.onError)
}

// Handle clicking the dynamic destroy buttons
const onDynamicDeleteQuestion = function (event) {
  // event.target is the delete button that was clicked on
  const deleteButton = event.target

  // Extract the id from the delete button that was clicked on's data-id attribute
  const id = $(deleteButton).data('id')

  // make API call for deleting one book with the data we grabbed from the form
  api
    .destroy(id)

  // if the API call is successful then invoke the onDetroySuccess function
    .then(ui.onDeleteSuccess)

  // if the API call fails then run our onError function
    .catch(ui.onError)
}

// Handle submitting the dynamic update forms
const onDynamicUpdateQuestion = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // event.target is the update form that was submitted
  const updateForm = event.target

  // Extract the id from the update form that was submitted's data-id attribute
  const id = $(updateForm).data('id')

  // create a javascript object from the form where the user entered the book
  // information
  const formData = getFormFields(event.target)

  // make API call to update one book with the data we grabbed from the form
  api
    .update(id, formData)

  // if the API call is successful then invoke the onUpdateSuccess function
    .then(ui.onUpdateSuccess)

  // if the API call fails then run our onError function
    .catch(ui.onError)
}

module.exports = {
  onIndexQuestion,
  onShowQuestion,
  onDeleteQuestion,
  onUpdateQuestion,
  onCreateQuestion,
  onDynamicDeleteQuestion,
  onDynamicUpdateQuestion
}
