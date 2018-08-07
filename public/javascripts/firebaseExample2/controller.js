// private 관리가 필요하다.
// const UIConstroller = new function() {}

// private 관리가 필요없다.
// const UIConstroller = {};

const Dialog = new function() {
    const $dialog = $('.dialog');
    const $dialogText = $dialog.find('.text');
    const $dialogPositive = $dialog.find('.positive');
    const $dialogNegative = $dialog.find('.negative');

    let positiveListener, negativeCallback;

    async function open(text, pos, neg) {
        $dialogText.text(text);
        $dialog.removeAttr('disable');

        // 실행하는 logic이 try, catch를 가질 순 있다.

        return new Promise((resolve, reject) => {
            positiveListener = resolve;
            negativeCallback = reject;
        });
    }

    function close() {
        $dialog.attr('disable', '');
    }

    $dialogPositive.click(() => {
        if (!_.isNil(positiveListener))
            positiveListener('왜그랬어!!');
        close();
    });

    $dialogNegative.click(() => {
        if (!_.isNil(negativeCallback))
            negativeCallback();
        close();
    });

    return {
        open
    }

};

const UIConstroller = new function() {
    // 변수는 위쪽에 선언한다.
    const $signIn = $('#signIn');
    const $signOut = $('#signOut');

    $signIn.click(async () => {
        try {
            await Dialog.open('밥먹었어?');
            await Dialog.open('뭐먹었어?');
        } catch(e) {
            await Dialog.open('왜안먹었어?');
        }

        FirebaseApi.signIn();
    });

    $signOut.click(FirebaseApi.signOut);

    FirebaseApi.setOnAuthStateChanged((u) => {
        console.log(u);
        if (!_.isNil(u)) {
            $signIn.css('display', 'none');
            $signOut.css('display', 'block');
        }
        else {
            $signIn.css('display', 'block');
            $signOut.css('display', 'none');
        }
    });

};












