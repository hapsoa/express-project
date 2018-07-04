(function () {

    // const openCloseButton = new Button('.open-close-button');

    const $openCloseButton = $('.open-close-button');
    const $aside = $('aside');

    console.log($openCloseButton.attr('status'));

    /**
     * 검색 옵션을 열고 닫는다
     */
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

    /**
     * checkbox 버튼
     */
    function Button(targetClass) {
        const $target = $(targetClass);
        const $name = $target.parent().find('.name');

        this.applyText = function ($text) {
            if ($name.text() === '밑줄')
                $text.find('span').css('text-decoration-line', 'underline');
            if ($name.text() === '백그라운드') {
                // 텍스트에다 그 위치의 글자를 형광칠한다
                // $text에 어떻게 그 위치만 적용시킬 수 있을까
                    // 적용한다.
                $text.find('span').css('background-color', 'yellow');

            }
            if ($name.text() === '굵게')
                $text.find('span').css('font-weight', 'bold');
            if ($name.text() === '기울이기')
                $text.find('span').css('font-style', 'oblique');
        };

        return this;
    }


    // 적용할 함수들을 담아둔다.
    const textApplies = [];


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

            // 텍스트 적용을 다 넣어둔다.
            textApplies.push(checkbox.applyText);


        }
        else {
            $(this).removeClass('checked');
            $(this).find('i').remove();
        }

    });


    const $input = $('input');

    const $mainText = $('.main-text-box');
    const originalMainText = $mainText.html();

    // input창의 값을 본문에서 차는다.
    $input.on('keyup', function (event) {

        // input 내용 : $input.val()
        // 본문 : $mainText.text()

        $mainText.html(originalMainText);

        // input 검색값을 mainText의 text에 span을 넣는 단위기능
        if($input.val() !== '')
            putSpan($mainText, $input.val());

        console.log($mainText.html());
        // 글자 단어 문장 옵션인지 체크해서
        // 원하는 옵션에 꾸미기를 적용한다.
        for (let i = 0; i < textApplies.length; i++) {
            console.log('hi');
            textApplies[i]($mainText);
        }

    });


    function replaceAll(str, searchStr, replaceStr) {
        return str.split(searchStr).join(replaceStr);
    }

    function putSpan($text, inputValue) {
        // let startIndex = $text.search(inputValue);

        // $text.html($text.html().replace(inputValue, '<span>' + inputValue + '</span>'));
        $text.html(replaceAll($text.html(), inputValue, '<span>' + inputValue + '</span>'));
        // 한번만 되는데, 2번째 글자도 적용을 시킬 수 없을까?


    }






})();

