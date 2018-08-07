const auth = firebase.auth();

const FirebaseApi = new function() {

    this.signUp = async () => {

        firebase.auth().createUserWithEmailAndPassword('asdf', '12345678').catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode);
            console.log(errorMessage);
            // console.log('What the Error!');
        });
    }

};

const eventManager = new function() {

    const $signUpButton = $('#signUpButton');

    $signUpButton.on('click', FirebaseApi.signUp);

};


