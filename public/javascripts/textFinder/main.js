(function () {

    // const openCloseButton = new Button('.open-close-button');

    const $openCloseButton = $('.open-close-button');
    const $aside = $('aside');

    console.log($openCloseButton.attr('status'));

    // 검색 옵션을 열고 닫는다
    $openCloseButton.on('click', function () {

        if ($openCloseButton.attr('status') === undefined ||
            $openCloseButton.attr('status') === 'open') {
            // 닫는다
            $aside.css('width', '0');
            $openCloseButton.attr('status', 'close');
        }
        else {
            // 연다.
            $aside.css('width', '400px');
            $openCloseButton.attr('status', 'open');
        }

    });

    function Button(targetClass) {
        const $target = $(targetClass);
        const $name = $target.parent().find('.name');

        this.doit = function () {
            if ($name.text() === '밑줄')
                console.log('hi');
            if ($name.text() === '백그라운드')
                console.log('hi2');
        };

        return this;
    }


    // 적용할 함수들을 담아둔다.


    // 체크박스 설정하기
    //체크 되고 체크 풀고
    const $checkbox = $('.checkbox');

    $checkbox.on('click', function () {
        // console.log(this);

        if (!$(this).hasClass('checked')) {
            $(this).addClass('checked');
            $(this).append('<i class="fas fa-check"></i>');

            // 그에 맞는 일을 적용한다.
            // 1번 체크박스
            // 2번 체크박스
            // 3번 체크박스
            // 4번 체크박스
            const checkbox = new Button(this);

            checkbox.doit();

        }
        else {
            $(this).removeClass('checked');
            $(this).find('i').remove();
        }

    });


    const $input = $('input');
    const $mainText = $('.main-text-box');

    // input창의 값을 본문에서 차는다.
    $input.on('keyup', function (event) {
        // console.log($input.val());

        // 본문을 가져온다.
        $mainText.text();

        // input창 내용이 본문에 있는지 찾는다.
        // 있으면 그 위치 index 수를 반환해 주는데,
        // index수부터 시작해, input.val().length 길이 만큼
        // 체크박스 되어 있는 옵션을 설정해준다.
        let startIndex = $mainText.text().search($input.val());


    });


})();

