const randomUser = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(user => displayUser(user.results))
}

// Display User
const displayUser = users => {
    const userWrapper = document.getElementById('wrapper');
    for (const user of users) {
        userWrapper.innerHTML = '';
        const userCard = document.createElement('div');
        userCard.classList.add('card');
        userCard.innerHTML =
            `
            <div id="user_photo">
                    <img src="${ user.picture.large }">
            </div>
            <div id="user-card-details">
                <p id="user_title" class="details-info">
                    <span class="holder">Name :</span>
                    <span class="info user-name">${ user.name.title } ${ user.name.first } ${ user.name.last }
                    </span>
                </p>
                <p id="user_phone" class="details-info">
                    <span class="holder">Age :</span>
                    <span class="info">${ user.dob.age } Years</span>
                </p>
                <p id="user_gender" class="details-info">
                    <span class="holder">Gender :</span>
                    <span class="info">${ user.gender }</span>
                </p>
                <p id="user_phone" class="details-info">
                    <span class="holder">Phone:</span>
                    <span class="info"> ${ user.phone }</span>
                </p>
                 <p id="user_phone" class="details-info">
                    <span class="holder">Address:</span>
                    <span class="info">${ user.location.street.number } ${ user.location.street.name }, ${ user.location.city }, ${ user.location.country }</span>
                </p>
            </div>
            `
        userWrapper.appendChild(userCard);
    }
}

// randomUser();
