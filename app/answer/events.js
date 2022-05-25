'use strict'

const answerApi = require('./api.js')
const answerUi = require('./ui.js')
const questionEvents = require('../question/events.js')
const getFormFields = require('../../lib/get-form-fields.js')

// Show every book (an index or list action)

// Destroy a book using a form with a text input for the id
// const onDestroyBook = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()

//   // create a javascript object from the form (event.target) where the user entered the book id
//   const formData = getFormFields(event.target)

//   // make API call for destroying one book with id of the book we grabbed from the form
//   api
//     .destroy(formData.book.id)

//   // if the API call is successful then invoke the onDetroySuccess function
//     .then(ui.onDestroySuccess)

//   // if the API call fails then run our onError function
//     .catch(ui.onError)
// }

// const onUpdateBook = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()

//   // create a javascript object from the form (event.target) where the user entered
//   // the book information
//   const formData = getFormFields(event.target)

//   // extract the id from our formData's book
//   const id = formData.book.id

//   // make API call to update one book with the data we grabbed from the form
//   api
//     .update(id, formData)

//   // if the API call is successful then invoke the onUpdateSuccess function
//     .then(ui.onUpdateSuccess)

//   // if the API call fails then run our onError function
//     .catch(ui.onError)
// }

// const onCreateBook = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()

//   // create a javascript object from the form (event.target) where the user entered the book
//   // information
//   const formData = getFormFields(event.target)

//   // make API call to create one book with the data we grabbed from the form
//   api
//     .create(formData)

//   // if the API call is successful then invoke the onCreateSuccess function
//     .then(ui.onCreateSuccess)

//   // if the API call fails then run our onError function
//     .catch(ui.onError)
// }

// Handle clicking the dynamic destroy buttons
const onDynamicDeleteAnswer = function (event) {
  // event.target is the delete button that was clicked on
  const deleteButton = event.target

  // Extract the id from the delete button that was clicked on's data-id attribute
  const id = $(deleteButton).data('id')

  // make API call for deleting one book with the data we grabbed from the form
  answerApi
    .destroy(id)

  // if the API call is successful then invoke the onDetroySuccess function
    .then(answerUi.onDestroySuccess)

  // if the API call fails then run our onError function
    .catch(answerUi.onError)
}

// Handle submitting the dynamic update forms
const onDynamicUpdateAnswer = function (event) {
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
  answerApi
    .update(id, formData)

  // if the API call is successful then invoke the onUpdateSuccess function
    .then(answerUi.onUpdateSuccess)

  // if the API call fails then run our onError function
    .catch(answerUi.onError)
}

const onDynamicCreateAnswer = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()
  const prevDefaultAble = event

  // Extract the id from the update form that was submitted's data-id attribute
  const qId = $(event.target).data('qid')

  // create a javascript object from the form where the user entered the book
  // information
  const data = getFormFields(event.target)
  data.answer.questionId = qId

  // make API call to update one book with the data we grabbed from the form
  answerApi.createAnswer(data)
    .then(() => questionEvents.onIndexQuestion(prevDefaultAble))
    .then(answerUi.onCreateSuccess)
    .catch(answerUi.onError)

  // if the API call is successful then invoke the onUpdateSuccess function
  //     .then(ui.onCreateSuccess)

//   // if the API call fails then run our onError function
//     .catch(ui.onError)
}

module.exports = {
  onDynamicCreateAnswer,
  onDynamicDeleteAnswer,
  onDynamicUpdateAnswer
}
