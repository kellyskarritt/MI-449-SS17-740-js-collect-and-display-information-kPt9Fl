var firstNameInput = document.getElementById('FIRST_NAME')
var lastNameInput = document.getElementById('LAST_NAME')
var describeInput = document.getElementById('DESCRIBE_YOURSELF_INFO')
var emailInput = document.getElementById('EMAIL')
var phoneInput = document.getElementById('PHONE')
var preview = document.getElementById('preview')
var generated = document.getElementById('generated')

var updateText = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var describe = describeInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  preview.innerHTML =
  '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
  '<p>' + describe + '</p>' +
  '<p>' +
    'If you are interested in a date, you can email me at ' +
    '<a href="mailto:' + email + '" target="_blank">' + email + '</a> ' +
    'or give me a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
  '</p>'

  generated.textContent =
  '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
  '<p>' + describe + '</p>' +
  '<p>' +
    'If you are interested in a date, you can email me at ' +
    '<a href="mailto:' + email + '" target="_blank">' + email + '</a> ' +
    'or give me a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
  '</p>'
}

firstNameInput.addEventListener('input', updateText)
lastNameInput.addEventListener('input', updateText)
describeInput.addEventListener('input', updateText)
emailInput.addEventListener('input', updateText)
phoneInput.addEventListener('input', updateText)
