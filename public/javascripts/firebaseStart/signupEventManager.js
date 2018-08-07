const signupEventManager = new function() {

    const $emailId = $('input[type="email"]');
    const $password = $('input[type="password"]');

    const $signUpButton = $('#signUpButton');

    $signUpButton.on('click', () => {
        console.log($emailId.val());

       FirebaseApi.signUp($emailId.val(), $password.val());
    });

};

