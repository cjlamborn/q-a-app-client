// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const questionEvents = require('./question/events.js')
const answerEvents = require('./answer/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#create-question').on('submit', questionEvents.onCreateQuestion)
  $('#question-index').on('click', questionEvents.onIndexQuestion)
  // $('.submit-answer').on('submit', '.create-answer-dynamic', answerEvents.onDynamicCreateAnswer)
  $('#question-message-display').on('submit', '.create-answer-dynamic', answerEvents.onDynamicCreateAnswer)
  // $('#question-message-display').on('click', function () {
  //   $('.update-question-dynamic').show()
  //   $('.question-destroy-dynamic').show()
  // })
  $('#question-message-display').on('click', '.question-destroy-dynamic', questionEvents.onDynamicDeleteQuestion)
  $('#question-message-display').on('submit', '.update-question-dynamic', questionEvents.onDynamicUpdateQuestion)
  $('#question-message-display').on('click', '.answer-destroy-dynamic',
    answerEvents.onDynamicDeleteAnswer)
  $('.tab-one').on('click', function () {
    $('.tab-one').show()
    $('#signup').toggle('slide')
  })
  $('.tab-two').on('click', function () {
    $('.tab-two').show()
    $('#signin').toggle('slide')
  })
  $('.tab-three').on('click', function () {
    $('.tab-three').show()
    $('#change').toggle('slide')
  })
})
// '.create-answer-dynamic', answerEvents.onDynamicCreateAnswer
