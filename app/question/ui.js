'use strict'
// const store = require('../store.js')

const onIndexSuccess = function (response) {
  // extract the books from the response's data into a variable
  const viewQuestion = response.questions

  // log the information we get back from the API so we know how we can
  // interact with it.
  //   store.user = responseData.user
  // create a string that will store the html for all of the books we want to
  // display on the page. Start as an empty string.
  let questionsHtml = ''
  console.log('HERE')
  console.log(viewQuestion)
  console.log('HERE')
  // loop through each book from the API
  viewQuestion.forEach((question) => {
    // add (concatenate) the book html for each book, to the booksHtml string
    // when adding the delete button add a data-id attribute, with the id of the
    // button we want to delete
    // add a data-id attribute for our dynamic edit form as well
    questionsHtml += `
         <div id=${question._id}>

            <h3>Title: ${question.title}</h4>
            <p>Text: ${question.text}</p>
            <form class="create-answer">
            <div class="field_container">
            <input class="answer-field" name="answer[text]" type="text" placeholder="answer">
            <button class="submit-answer" type="submit">Submit Answer</button>
            </div>
            </form>
         </div> 
    `
  })

  // <button class="show-create-answer-form" data-qid="${question._id}">Add Answer</button>
  // set the html for all of our books all at once
  // was wholesale-display
  $('#question-message-display').html(questionsHtml)
}

const onShowSuccess = function (response) {
  // log the information we get back from the API so we know how we can
  // interact with it.

  // build HTML element with data for one book
  const questionHtml = `
    <h4>Name: ${response.question.name}</h4>
    <p>Location: ${response.question.location}</p>
    <p>Roasts: ${response.question.roasts}</p>
    <p>Amount: ${response.question.amount}</p>
    <br>
  `

  // replace whatever was in the books-display element with our bookHtml
  $('#question-message-display').html(questionHtml)

  // reset all forms
  $('form').trigger('reset')
}

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
  $('#question-update-message').html(
    'You successfully updated this question'
  )

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
  $('#question-create-message').html('You created a new question!')

  // we just created a new book!
  // we can add a message to let the users know they should request all of
  // the books again to see the newly created book included
  $('#question-message-display').html(
    'Questions have been added! Click "View All" again to see all the questions.'
  )

  // add class for success messaging
  $('#question-create-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#question-create-message').html('')
    $('#question-create-message').removeClass('success')
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
  onIndexSuccess,
  onShowSuccess,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
