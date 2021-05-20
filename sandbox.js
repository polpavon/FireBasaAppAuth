function registrar() {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
        .then((user) => {
            // Signed in
            // ...
            console.log('Usuario registrado!');
        })
        .catch((error) => {
    
        });
}

function ingresar() {
    var email = document.getElementById('email2').value;
    var contrasena = document.getElementById('contrasena2').value;

    firebase.auth().signInWithEmailAndPassword(email, contrasena)
        .then((user) => {
            // Signed in
            // ...
            console.log('sesión iniciada');
        })
        .catch((error) => {
            
        });
}