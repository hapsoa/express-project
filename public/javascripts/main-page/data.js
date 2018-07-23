const dataManager = new function () {
    const dataArray = [];

    dataArray.push({
        href: '/calculator',
        cellSize: 'small',
        imagePosition: 'img-center',
        tag: [
            'calculator',
            'number',
            'math'
        ]
    });
    dataArray.push({
        href: '/kakaotalk/login',
        cellSize: 'small',
        imagePosition: 'img-center',
        tag: [
            'kakaotalk',
            'chatting'
        ]
    });
    dataArray.push({
        href: '/fractal/education',
        cellSize: 'big',
        imagePosition: 'img-center',
        tag: [
            'fractal',
            'math',
            'art'
        ]
    });
    dataArray.push({
        href: '/textFinder',
        cellSize: 'small',
        imagePosition: 'img-top',
        tag: [
            'textFinder',
            'search'
        ]
    });
    dataArray.push({
        href: '/ajou',
        cellSize: 'long',
        imagePosition: 'img-top',
        tag: [
            'ajou university',
            'website',
            'homepage'
        ]
    });
    dataArray.push({
        href: '/firebase',
        cellSize: 'small',
        imagePosition: 'img-top',
        tag: [
            'firebase',
            'website'
        ]
    });
    dataArray.push({
        href: '/modal',
        cellSize: 'big',
        imagePosition: 'img-center',
        tag: [
            'modal'
        ]
    });
    dataArray.push({
        href: '/grid-1',
        cellSize: 'small',
        imagePosition: 'img-center',
        tag: [
            'grid',
            'cell'
        ]
    });
    dataArray.push({
        href: '/card-4',
        cellSize: 'small',
        imagePosition: 'img-center',
        tag: [
            'card design'
        ]
    });
    dataArray.push({
        href: '/table',
        cellSize: 'big',
        imagePosition: 'img-center',
        tag: [
            'table'
        ]
    });

    const $root = $('.grid');

    dataArray.forEach((element) => {
        const template = `
            <a class="grid-item ${element.cellSize} ${element.imagePosition}" href="${element.href}">
                <div class="curtain"></div>
            </a>
            `;

        $root.append(template);
    });


    const $searchButton = $('button.btn.btn-outline-success.my-2.my-sm-0');
    const $searchInput = $('input.form-control.mr-sm-2');

    $searchButton.on('click', () => {

        // $root.find('.grid-item').remove();
        $root.masonry('remove', $root.find('.grid-item'))
            .masonry();


        // loop를 돌면서 모든 tag들을 검사한다.
        dataArray.forEach((element) => {

            let isIncluded = false;

            for (let i = 0; i < element.tag.length; i++) {
                if (element.tag[i].includes($searchInput.val())) {
                    // 이 조건에 충족하는 cell만 나타나도록 한다.
                    isIncluded = true;
                }
            }

            if (isIncluded) {
                const template = `
                    <a class="grid-item ${element.cellSize} ${element.imagePosition}" href="${element.href}">
                        <div class="curtain"></div>
                    </a>
                    `;

                const $template = $(template);
                $root.append($template)
                    .masonry('appended', $template);

            }
        });



    });


};


