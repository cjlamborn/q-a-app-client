// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const questionEvents = require('./question/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#create-question').on('submit', questionEvents.onCreateQuestion)
  $('#question-index').on('click', questionEvents.onIndexQuestion)
  // $('.show-create-answer-form').on('click', function () {
  //   $('.create-answer').show()
  // })
  $('.tab-one').on('click', function () {
    $('.tab-one').show()
    $('#signup').toggle('slide')
  })
  $('.tab-two').on('click', function () {
    $('.tab-two').show()
    $('#signin').toggle('slide')
  })
})
