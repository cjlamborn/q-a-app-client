'use strict'

const answerApi = require('./api.js')
const answerUi = require('./ui.js')
const questionEvents = require('../question/events.js')
const getFormFields = require('../../lib/get-form-fields.js')

// Handle clicking the dynamic destroy buttons
const onDynamicDeleteAnswer = function (event) {
  // event.target is the delete button that was clicked on
  const deleteButton = event.target
  console.log(event.target)
  console.log(event)
  console.log('IN DYNAMIC DELETE ANSWER')
  // Extract the id from the delete button that was clicked on's data-id attribute
  const aId = $(deleteButton).data('answer-id')
  const qId = $(deleteButton).data('question-id')
  // make API call for deleting one book with the data we grabbed from the form
  answerApi.destroyAnswer(qId, aId)
    .then(answerUi.onDeleteSuccess)
    .catch(answerUi.onError)
}
const onDynamicCreateAnswer = function (event) {
  console.log(event)
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()
  // Extract the id from the update form that was submitted's data-id attribute
  console.log(event.target.dataset)
  console.log(event.target.dataset.id)
  const qId = event.target.dataset.id
  console.log(qId)
  // create a javascript object from the form where the user entered the book
  // information
  const formData = getFormFields(event.target)
  formData.answer.questionId = qId
  console.log(formData)
  // make API call to update one book with the data we grabbed from the form
  answerApi
    .createAnswer(formData)
    .then(() => questionEvents.onIndexQuestion)
    .then(answerUi.onCreateSuccess)
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

module.exports = {
  onDynamicCreateAnswer,
  onDynamicDeleteAnswer,
  onDynamicUpdateAnswer
}
