
// 1. Intention Revealing Names

// Bad

let d = 314;

// Good

let daysUntilDeadline = 314

// 2. Avoid Disinformation

// bad
const accountList = {
  name: 'Adrian Sommer',
  accountNumber: 22,
}


const accountInformation = {
  name: 'Adrian Sommer',
  accountNumber: 22,
}

// 3. Meaningful Distinctions

// bad
getUserInfo()
getUserData()


// good
getUserProfile()
getUserSettings()


// 4. Pronounceable Names

// bad
let genymdhms;

// good
let generateTimestamp


// 5. Use Searchable Names

// bad

let e = document.getElementById('email')

// good

let emailInputElement =  document.getElementById('email')


// 6. Avoid Encodings

// bad
let phoneString;
let emlAdrs;

// good

let phoneNumber;
let emailAddress;

// 7. Class names should be nouns function names should be verbs

// class names
class UserAccount {}
class ShoppingCart {}

// function names
function calculateTotal () {}
function sendEmail() {}

// 8. Avoid Mental Mapping
// bad
let n = 5
let foo = 'Martin'

// good
let userCount = 5
let userFirstName = 'Martin'