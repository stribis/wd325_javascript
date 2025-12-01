// Add event listener to the submit button
document
  .querySelector('.button')
  .addEventListener('click', validateForm);

// Add blur (focusout) event listeners to all input fields
document.querySelectorAll('.form__input').forEach((input) => {
  input.addEventListener('blur', function () {
    validateField(this);
  });
});

// Function to validate a single field on blur
function validateField(inputField) {
  const fieldId = inputField.id;
  const fieldValue = inputField.value;
  let error = null;

  // Clear any existing error for this field
  clearFieldError(fieldId);

  // Validate based on field ID
  switch (fieldId) {
    case 'firstName':
      if (!fieldValue) {
        error = 'First name is required';
      } else if (fieldValue.length <= 2) {
        error = 'First name must be at least 3 characters';
      }
      break;

    case 'lastName':
      if (!fieldValue) {
        error = 'Last name is required';
      } else if (fieldValue.length <= 2) {
        error = 'Last name must be at least 3 characters';
      }
      break;

    case 'email':
      if (!fieldValue) {
        error = 'Email address is required';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fieldValue)) {
          error = 'Invalid email address';
        }
      }
      break;

    case 'city':
      if (!fieldValue) {
        error = 'City is required';
      }
      break;

    case 'streetAddress':
      if (!fieldValue) {
        error = 'Street address is required';
      }
      break;

    case 'region':
      if (!fieldValue) {
        error = 'State/Province is required';
      }
      break;

    case 'postalCode':
      if (!fieldValue) {
        error = 'Postal code is required';
      } else if (!/^\d{4}$/.test(fieldValue)) {
        error = 'Postal code must be 4 digits long and numeric';
      }
      break;
  }

  // Display error if there is one
  if (error) {
    displayFieldError(fieldId, error);
  }
}

// Function to validate the entire form on submit
function validateForm(event) {
  // Prevents the default behaviour of the form submission
  // which is a page reload
  event.preventDefault();

  // Create an empty object to store the form data
  let data = {};
  // Create an empty object for storing form errors
  let validationErrors = {};

  // Clear any existing error messages
  // We call it here so that we have a clean slate
  // before we start validating the form
  clearErrors();

  // Retrieve the form field values and assign them to the data object
  data.firstName = document.querySelector('#firstName').value;
  data.lastName = document.querySelector('#lastName').value;
  data.email = document.querySelector('#email').value;
  data.city = document.querySelector('#city').value;
  data.streetAddress = document.querySelector('#streetAddress').value;
  data.region = document.querySelector('#region').value;
  data.postalCode = document.querySelector('#postalCode').value;

  // Debugging log the object
  console.log('data object ', data);
  console.log('validation errors object ', validationErrors);

  // Validate the first name
  if (!data.firstName) {
    validationErrors.firstName = 'First name is required';
  } else if (data.firstName.length <= 2) {
    validationErrors.firstName =
      'First name must be at least 3 characters';
  }

  // Validate the last name
  if (!data.lastName) {
    validationErrors.lastName = 'Last name is required';
  } else if (data.lastName.length <= 2) {
    validationErrors.lastName =
      'Last name must be at least 3 characters';
  }

  // Validate email address (tip + regex)
  if (!data.email) {
    validationErrors.email = 'Email address is required';
  } else {
    // Regular expression for validating email format
    // This regex checks if there is something before the @ symbol
    // and after the @ symbol there is something before the . symbol
    // and after the . symbol
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      validationErrors.email = 'Invalid email address';
    }
  }

  // Validate the city
  if (!data.city) {
    validationErrors.city = 'City is required';
  }

  // Validate the street address
  if (!data.streetAddress) {
    validationErrors.streetAddress = 'Street address is required';
  }

  // Validate the region
  if (!data.region) {
    validationErrors.region = 'State/Province is required';
  }

  // Validate the postal code - postal code must be numeric, and 4 digits long
  if (!data.postalCode) {
    validationErrors.postalCode = 'Postal code is required';
  } else if (!/^\d{4}$/.test(data.postalCode)) {
    validationErrors.postalCode =
      'Postal code must be 4 digits long and numeric';
  }

  // If there are no validation errors
  // log the form data to the console
  if (Object.keys(validationErrors).length === 0) {
    console.log('Form data: ', data);
    // Usually we would now send the form data to our backend server / api
    // for further processing
  } else {
    // If there are validation errors, display them on the page
    displayErrors(validationErrors);
  }
}

// Function to display validation errors next to the relevant form fields
function displayErrors(errors) {
  // Iterate over the validation errors and dynamically display them
  for (const field in errors) {
    displayFieldError(field, errors[field]);
  }
}

// Function to display a single field error
function displayFieldError(fieldId, errorMessage) {
  // Get the input element by ID
  const inputField = document.querySelector(`#${fieldId}`);

  // Rudimentary input field check
  if (!inputField) {
    console.error(`Field with ID #${fieldId} not found`);
    return;
  }

  // Create a span element to hold the error message
  const errorSpan = document.createElement('span');
  // Add class for styling
  errorSpan.classList.add('error-message');
  errorSpan.textContent = errorMessage; // Set the error message
  // Append the error span after the relevant input field
  inputField.after(errorSpan);
}

// Function to clear error for a specific field
function clearFieldError(fieldId) {
  const inputField = document.querySelector(`#${fieldId}`);
  if (!inputField) return;

  // Find and remove any error message after this input field
  const nextElement = inputField.nextElementSibling;
  if (
    nextElement &&
    nextElement.classList.contains('error-message')
  ) {
    nextElement.remove();
  }
}

// Create a function to clear all existing error messages
// and use the function somewhere inside the other functions
// so that in each form submit, we have a clean slate
// and we reset the error messages
function clearErrors() {
  // Remove all elements with the error-message class
  document
    .querySelectorAll('span.error-message')
    .forEach((element) => {
      element.remove();
    });
}
