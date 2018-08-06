const auth = firebase.auth();

const FirebaseApi = new function() {

    this.signUp = async () => {

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log('What the Error!');
        });
    }

};

const eventManager = new function() {

    const $signUpButton = $('#signUpButton');

    $signUpButton.on('click', FirebaseApi.signUp);

};


