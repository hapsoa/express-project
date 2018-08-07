const auth = firebase.auth();

const FirebaseApi = new function() {

    this.signUp = async (email, password) => {

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode);
            console.log(errorMessage);
        });
    };

    this.signIn = async (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    };



};

const eventManager = new function() {

    // const $signUpButton = $('#signUpButton');
    //
    // $signUpButton.on('click', FirebaseApi.signUp);


    const $loginButton = $('#loginButton');

    $loginButton.on('click', function() {

    });



};


