'use strict'
// const store = require('../store.js')

const onIndexSuccess = function (response) {
  const viewQuestion = response.questions
  let questionsHtml = ''
  console.log('In index success')
  console.log(viewQuestion)
  console.log('In index success')
  // loop through each book from the API
  viewQuestion.forEach((question, answer) => {
    let answersHTML = ''
    question.answer.forEach(answer => {
      answersHTML += `
      <div class="view-answer" id=${answer._id}>
        <p>Answer: ${answer.text}</p>
         <button class='answer-destroy-dynamic' data-question-id=${question._id} data-answer-id=${answer._id}>Delete </button>
      `
    })
    questionsHtml += `
         <div class="card" id=${question._id}>
            <div class="card-header">Question</div>
            <div class="card-body">
            <h3 class="card-title">Title: ${question.title}</h4>
            <p class="card-text">Text: ${question.text}</p>
            <form class="update-question-dynamic" data-id=${question._id}>
                 <input type="text" name="question[title]" placeholder="title" required>
                <input type="text" name="question[text]" placeholder="text" required>
                <button class="button-56" type="submit">Update Question</button>
              </form>
              <button class='question-destroy-dynamic' data-id=${question._id}>Delete </button>
            <p>${answersHTML}</p>
            <form class="create-answer-dynamic" data-id=${question._id}>
            <div class="field_container">
            <input class="answer-field" name="answer[text]" type="text" placeholder="answer">
            <button class="submit-answer" type="submit">Submit Answer</button>
            </div>
            </div>
            </form>
         </div> 
    `
  })

  $('#question-message-display').html(questionsHtml)
}

const onDeleteSuccess = function () {
  $('#delete-question-message').html('Question successfully deleted!')

  $('#question-message-display').html(
    'Questions have changed! Click "Get All" again to see all the questions'
  )

  $('#delete-question-message').addClass('success')

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

  $('#question-message-display').html(
    'Questions have changed! Click "Get All" again to see all the questions.'
  )

  $('#question-update-message').addClass('success')

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
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
