const $form = document.querySelector('#miFormulario');
const $buttonMailto = document.querySelector('#truco');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute('href', `mailto: desarrolladorweb.jujuy24@gmail.com?subject=Nombre: ${form.get('nombre')} Teléfono: ${form.get('telefono')} Correo: ${form.get('correo')} Asunto: ${form.get('asunto')}&body=${form.get('mensaje')}`);
    $buttonMailto.click();
    document.getElementById('miFormulario').reset();
}