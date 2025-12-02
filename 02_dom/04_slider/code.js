const slider = document.querySelector('.slider')

// function to dynamically select all slides
function getAllSlides () {
  return document.querySelectorAll('.slider__slide')
}

document.querySelector('.slider__button--left').addEventListener('click', moveLeft)
document.querySelector('.slider__button--right').addEventListener('click', moveRight)

const allSlides = getAllSlides();
let currentSlide = allSlides.length - allSlides.length + 1


// TODO: Add keyboard commands
window.addEventListener('keydown', (event) => {
  // console.log(event.code)
  if( event.code === 'ArrowRight') {
    moveRight()
  } else if ( event.code === 'ArrowLeft') {
    moveLeft()
  }
})

// Function to move the slides to the right
// Moves the first slide to the end of the slider

function moveRight () {
  const allSlides = getAllSlides()
  slider.append(allSlides[0])

  changeCurrentSlide('right')
  updateDescription()
}

// Function to move the slides to the left
// Moves the last slide to the beginning of the slider

function moveLeft () {
  const allSlides = getAllSlides()
  slider.prepend(allSlides[allSlides.length -1])

  changeCurrentSlide('left')
  updateDescription()
}


function changeCurrentSlide (direction) {
  const allSlides = getAllSlides()

  if (direction === 'right') {
    currentSlide === allSlides.length ? (currentSlide = 1) : currentSlide++
  } else { 
    // direction is left
    currentSlide === 1 ? (currentSlide = allSlides.length) : currentSlide--
  }

  console.log(currentSlide)
}

function updateDescription () {
  // Get all slides
  const allSlides = getAllSlides()
  // Update slide number
  document.querySelector('.slider__legend-title').innerText = `Current slide: ${currentSlide}`
  // Update slide description
  const description = allSlides[0].querySelector('img').alt
  // Update HTML
  document.querySelector('.slider__legend-text').innerText = description

}

updateDescription()