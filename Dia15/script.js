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

            //Fecha de Nacimiento;
            let birthdayPerson = data.results[0].dob.date;
            let birthdayPerson2 = birthdayPerson.slice(0,10);
            let arraybirthday = birthdayPerson2.split('-');
            let ano = arraybirthday[0];
            let mes = arraybirthday[1];
            let dia = arraybirthday[2];
            let birthdayFinal = mes + '/' + dia + '/' + ano
            let addressNumber = data.results[0].location.street.number;
            let addressName = data.results[0].location.street.name;
            let phonePerson = data.results[0].phone;
            let paswordPerson = data.results[0].login.password;
            let imagePerson = data.results[0].picture.large;

            
            
            document.getElementById('Name').textContent = `${firstName} ${lastName}`;
            document.getElementById('email').textContent = `${emailPerson}`;
            document.getElementById('birthday').textContent = `${birthdayFinal}`;
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



document.getElementById("boton1").addEventListener("mouseover", function() {
    document.getElementById("Name").style.display = "block";
    document.getElementById("email").style.display = "none";
    document.getElementById("birthday").style.display = "none";
    document.getElementById("address").style.display = "none";
    document.getElementById("phone").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("Name2").style.display = "block";
    document.getElementById("email2").style.display = "none";
    document.getElementById("birthday2").style.display = "none";
    document.getElementById("address2").style.display = "none";
    document.getElementById("phone2").style.display = "none";
    document.getElementById("password2").style.display = "none";
});

document.getElementById("boton2").addEventListener("mouseover", function() {
    document.getElementById("Name").style.display = "none";
    document.getElementById("email").style.display = "block";
    document.getElementById("birthday").style.display = "none";
    document.getElementById("address").style.display = "none";
    document.getElementById("phone").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("Name2").style.display = "none";
    document.getElementById("email2").style.display = "block";
    document.getElementById("birthday2").style.display = "none";
    document.getElementById("address2").style.display = "none";
    document.getElementById("phone2").style.display = "none";
    document.getElementById("password2").style.display = "none";
});
document.getElementById("boton3").addEventListener("mouseover", function() {
    document.getElementById("Name").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("birthday").style.display = "block";
    document.getElementById("address").style.display = "none";
    document.getElementById("phone").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("Name2").style.display = "none";
    document.getElementById("email2").style.display = "none";
    document.getElementById("birthday2").style.display = "block";
    document.getElementById("address2").style.display = "none";
    document.getElementById("phone2").style.display = "none";
    document.getElementById("password2").style.display = "none";
});
document.getElementById("boton4").addEventListener("mouseover", function() {
    document.getElementById("Name").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("birthday").style.display = "none";
    document.getElementById("address").style.display = "block";
    document.getElementById("phone").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("Name2").style.display = "none";
    document.getElementById("email2").style.display = "none";
    document.getElementById("birthday2").style.display = "none";
    document.getElementById("address2").style.display = "block";
    document.getElementById("phone2").style.display = "none";
    document.getElementById("password2").style.display = "none";
});
document.getElementById("boton5").addEventListener("mouseover", function() {
    document.getElementById("Name").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("birthday").style.display = "none";
    document.getElementById("address").style.display = "none";
    document.getElementById("phone").style.display = "block";
    document.getElementById("password").style.display = "none";
    document.getElementById("Name2").style.display = "none";
    document.getElementById("email2").style.display = "none";
    document.getElementById("birthday2").style.display = "none";
    document.getElementById("address2").style.display = "none";
    document.getElementById("phone2").style.display = "block";
    document.getElementById("password2").style.display = "none";
});
document.getElementById("boton6").addEventListener("mouseover", function() {
    document.getElementById("Name").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("birthday").style.display = "none";
    document.getElementById("address").style.display = "none";
    document.getElementById("phone").style.display = "none";
    document.getElementById("password").style.display = "block";
    document.getElementById("Name2").style.display = "none";
    document.getElementById("email2").style.display = "none";
    document.getElementById("birthday2").style.display = "none";
    document.getElementById("address2").style.display = "none";
    document.getElementById("phone2").style.display = "none";
    document.getElementById("password2").style.display = "block";
});

