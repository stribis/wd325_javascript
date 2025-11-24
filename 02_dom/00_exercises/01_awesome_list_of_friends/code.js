console.log(users);

users.forEach((user) => {
  const userCard = document.createElement('article');
  userCard.classList.add('user-card');
  userCard.innerHTML = `
  <img class="avatar" src="https://robohash.org/${user.username}?set=set4" alt="User Avatar">
  <div class="name">${user.name}</div>
  <div class="username">@${user.username}</div>

  <div class="info-section">
    <h4>Contact</h4>
    <div class="info-item">📧 <a href="mailto:${user.email}">${user.email}</a></div>
    <div class="info-item">📱 <a href="tel:${user.phone}">${user.phone}</a></div>
    <div class="info-item">🌐 <a href="${user.website}">${user.website}</a></div>
  </div>

  <address class="info-section">
    <h4>Address</h4>
    <div class="info-item">${user.address.street}, ${user.address.suite}</div>
    <div class="info-item">${user.address.city}, ${user.address.zipcode}</div>
  </address>

  <div class="info-section">
    <h4>Company</h4>
    <div class="info-item"><strong>${user.company.name}</strong></div>
    <div class="info-item"><i>"${user.company.catchPhrase}"</i></div>
  </div>
  `;

  document.querySelector('.user-cards').appendChild(userCard);
});
