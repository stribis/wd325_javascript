const users = [
    {
        name: "Alice",
        age: 15,
        hobbies: ["Reading", "Drawing", "Cycling"]
    },
    {
        name: "Bob",
        age: 22,
        hobbies: ["Gaming", "Hiking", "Photography"]
    },
    {
        name: "Charlie",
        age: 17,
        hobbies: ["Swimming", "Coding", "Chess"]
    },
    {
        name: "Diana",
        age: 29,
        hobbies: ["Traveling", "Cooking", "Gardening"]
    }

];

// function to determine person age

function getAgeStatus (age) {
  // return age < 18 ? 'Minor' : 'Adult'
  if (age < 18) {
    // person is a minor
    return 'Minor'
  } else {
    return 'Adult'
  }
}

// function that creates a single profile card

function createProfileCard (user) {
  
  
  // Create the main container
  const profileDiv = document.createElement('div')
  profileDiv.classList.add('profile')

  // Add name and age
  const nameElement = document.createElement('h2')
  nameElement.innerText = `${user.name}, ${user.age}`
  profileDiv.appendChild(nameElement)

  // Add the age status
  const ageStatus = getAgeStatus(user.age)
  const ageStatusElement = document.createElement('p')
  // ageStatusElement.innerText = ageStatus

  // ageStatusElement.innerText = ageStatus === 'Minor' ? 'This person is a minor' : 'This person is an adult'

  if (ageStatus === 'Minor') {
    ageStatusElement.innerText = 'This person is a minor'
  } else {
    ageStatusElement.innerText = 'This person is an adult'
  }

  ageStatusElement.classList.add(ageStatus.toLowerCase())
  profileDiv.appendChild(ageStatusElement)

  // Add hobbies 
  const hobbiesList = document.createElement('ul')
  user.hobbies.forEach(hobby => {
    const hobbyItem = document.createElement('li')
    hobbyItem.innerText = hobby
    hobbiesList.appendChild(hobbyItem)
  })

  profileDiv.appendChild(hobbiesList)
  return profileDiv
}

// Main function that renders all profiles

function renderProfiles (data) {
  const profileContainer = document.querySelector('#profiles')
  profileContainer.innerHTML = ''
  data.forEach(user => {
    const profileCard = createProfileCard(user)
    profileContainer.appendChild(profileCard)
  })
}

renderProfiles(users)