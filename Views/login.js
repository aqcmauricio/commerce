$(document).ready(function() {
    let funcion;
    verificar_sesion();
    function verificar_sesion() {
        funcion = 'verificar_sesion';
        $.post('../Controllers/UsuarioController.php', {funcion},(response) => {
            if(response != ''){
                location.href = '../index.php';
            }
        })
    }
    $('#form-login').submit(e =>{
        funcion = 'login';
        let user = $('#user').val();
        let pass = $('#pass').val();
        $.post('../Controllers/UsuarioController.php', {user, pass, funcion}, (response) =>{
            if(response=='logueado'){
                /* alert('Se inición sesión correctamente'); */
                toastr.success('*Logueado !');
                location.href = '../index.php';
            } else {
                /* alert('Usuario y/o contraseña errados'); */
                toastr.error('*Usuario y/o contraseña errados!');
            }
        })
        e.preventDefault();
    })
})