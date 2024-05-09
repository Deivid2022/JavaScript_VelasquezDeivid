class InfoPersonComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const apiUrl = `https://randomuser.me/api/?format=JSON`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Página fuera de servicio');
                }
                return response.json();
            })
            .then(data => {
                const firstName = data.results[0].name.first;
                const lastName = data.results[0].name.last;
                const emailPerson = data.results[0].email;
                const birthdayPerson = data.results[0].dob.date;
                const addressNumber = data.results[0].location.street.number;
                const addressName = data.results[0].location.street.name;
                const phonePerson = data.results[0].phone;
                const passwordPerson = data.results[0].login.password;
                const imagePerson = data.results[0].picture.large;

                this.shadowRoot.innerHTML = `
                    <div>
                        <img src="${imagePerson}" alt="Foto de perfil" class="imagen">
                        <div id="infoDisplay"></div>
                        <img src="./storage/img/icons8-usuario-24.png" id="nameButton">
                        <img src="./storage/img/icons8-correo-50.png" id="emailButton">
                        <img src="./storage/img/icons8-cumpleaños-50.png" id="birthdayButton">
                        <img src="./storage/img/icons8-mapa-50.png" id="addressButton">
                        <img src="./storage/img/icons8-teléfono-celular-50.png" id="phoneButton">
                        <img src="./storage/img/icons8-candado-50.png" id="passwordButton">
                    </div>
                `;

                const buttons = this.shadowRoot.querySelectorAll('img');

                buttons.forEach(img => {
                    img.addEventListener('mouseover', event => {
                        this.showInfo(event.target.id, data);
                    });
                });
            })
            .catch(error => {
                console.error('Ocurrió un problema con tu función: ', error);
            });
    }

    showInfo(buttonId, data) {
        let info;
        switch (buttonId) {
            case 'nameButton':
                info = `${data.results[0].name.first} ${data.results[0].name.last}`;
                break;
            case 'emailButton':
                info = data.results[0].email;
                break;
            case 'birthdayButton':
                info = this.formatDate(data.results[0].dob.date);
                break;
            case 'addressButton':
                info = `${data.results[0].location.street.number} ${data.results[0].location.street.name}`;
                break;
            case 'phoneButton':
                info = data.results[0].phone;
                break;
            case 'passwordButton':
                info = data.results[0].login.password;
                break;
            default:
                info = '';
                break;
        }

        const infoDisplay = this.shadowRoot.getElementById('infoDisplay');
        infoDisplay.textContent = info;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
}

customElements.define('info-person', InfoPersonComponent);
