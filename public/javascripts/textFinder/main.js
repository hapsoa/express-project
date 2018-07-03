(function() {

    function Button(targetClass) {
        const $target = $(targetClass);
        const name =

        this.doit = function() {

        };

        return this;
    }

    const openCloseButton = new Button('.open-close-button');



    const $openCloseButton = $('.open-close-button');
    const $aside = $('aside');

    console.log($openCloseButton.attr('status'));

    // 검색 옵션을 열고 닫는다
    $openCloseButton.on('click', function() {

        if ($openCloseButton.attr('status') === undefined ||
            $openCloseButton.attr('status') === 'close') {
            // 연다.
            $aside.css('width', '400px');
            $openCloseButton.attr('status', 'open');
        }
        else {
            // 닫는다
            $aside.css('width', '0');
            $openCloseButton.attr('status', 'close');
        }

    });


    // 체크박스 설정하기
    //체크 되고 체크 풀고
    const $checkbox = $('.checkbox');

    $checkbox.on('click', function() {
        console.log(this);

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

            // hahaDo($(this))
        }
        else {
            $(this).removeClass('checked');
            $(this).find('i').remove();
        }

    });






})();

