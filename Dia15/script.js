function InfoPerson() {
    const apiUrl = `https://randomuser.me/api/?format=JSON(default)`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Página fuera de servicio');
            }
            return response.json();
        })
        .then(data => {
            let firstName = data.results[0].name.first;
            let lastName = data.results[0].name.last;
            let emailPerson = data.results[0].email;
            let birthdayPerson = data.results[0].dob.date;
            let addressNumber = data.results[0].location.street.number;
            let addressName = data.results[0].location.street.name;
            let phonePerson = data.results[0].phone;
            let paswordPerson = data.results[0].login.password;
            let imagePerson = data.results[0].picture.large;

            
            
            document.getElementById('Name').textContent = `${firstName} ${lastName}`;
            document.getElementById('email').textContent = `${emailPerson}`;
            document.getElementById('birthday').textContent = `${birthdayPerson}`;
            document.getElementById('address').textContent = `${addressNumber} ${addressName}`;
            document.getElementById('phone').textContent = `${phonePerson}`;
            document.getElementById('password').textContent = `${paswordPerson}`;
            document.getElementById('image').src = `${imagePerson}`;


        })
        .catch(error => {
            console.error('Ocurrió un problema con tu función: ', error);
        });
}

InfoPerson();