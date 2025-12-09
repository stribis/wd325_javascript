console.log('My Code is working');

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json)
//   });

async function fetchData() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const data = await response.json();

  console.log(data);

  data.forEach((post) => createPost(post));
}

function createPost(post) {
  const postElement = document.createElement('div');

  const template = `
  <h2>${post.title}</h2>
  <p>${post.body}</p>
  <small>${post.id}</small>
  `;
  postElement.innerHTML = template;
  document.querySelector('.container').appendChild(postElement);
}

fetchData();
console.log('My fetch has finished executing');
