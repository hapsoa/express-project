// private 관리가 필요하다.
// const UIController = (new function(){})


// private 관리가 필요없다.

// const UIController = {
//
//};

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
        open,
    }

};

const UIController = (new function() {
    // java
    // 변수는 위쪽에 선언한다 .

    const $signIn = $('#signIn');
    const $signOut = $('#signOut');


    $signIn.click(async () => {
        try {
            await Dialog.open('밥먹었어?');
            await Dialog.open('뭐먹었어?');
        } catch (e) {
            await Dialog.open('왜안먹었어?');
        }
        console.log(ret);
        FirebaseApi.signIn();

        // Dialog.open('로그인 할래?', () => {
        //     FirebaseApi.signIn();
        //     Dialog.open('밥은 먹었니?', () => {
        //         Dialog.open('뭐 먹었니?', () => {
        //         }, () => {
        //         });
        //     }, () => {
        //     });
        // }, () => {
        // })
    });
    $signOut.click(FirebaseApi.signOut);

    FirebaseApi.setOnAuthStateChanged((u) => {
        console.log(u);
        if (!_.isNil(u)) {
            //
            $signIn.css('display', 'none');
            $signOut.css('display', 'block');
            // TODO
        } else {
            $signIn.css('display', 'block');
            $signOut.css('display', 'none');
            // TODO
        }
    })

});


function getFile(url) {
    return new Promise((resolve, reject) => {
        $.get(url, function(data) {
            resolve(data);
        })
    });

}

// console.log(sum(1, 2));
let a = null;
async function test() {
    try {
        const success = await getFile('/data/gallery.csv');
        // todo 1
    } catch (err) {
        // todo 2
    }

    getFile('...').then((success) => {
        // todo 1
    }).catch((err) => {
        // todo 2
    });


    console.log(a);
    //
    console.log(r);
};
test();

