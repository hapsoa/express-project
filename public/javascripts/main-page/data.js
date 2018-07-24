const dataManager = new function () {
    const that = this;
    const dataArray = [];

    dataArray.push({
        title: 'Calculator',
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
        title: 'Kakaotalk',
        href: '/kakaotalk/login',
        cellSize: 'small',
        imagePosition: 'img-center',
        tag: [
            'kakaotalk',
            'chatting'
        ]
    });
    dataArray.push({
        title: 'Fractal',
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
        title: 'Text finder',
        href: '/textFinder',
        cellSize: 'small',
        imagePosition: 'img-top',
        tag: [
            'textFinder',
            'search'
        ]
    });
    dataArray.push({
        title: 'Ajou University website',
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
        title: 'Firebase website',
        href: '/firebase',
        cellSize: 'small',
        imagePosition: 'img-top',
        tag: [
            'firebase',
            'website'
        ]
    });
    dataArray.push({
        title: 'Modal',
        href: '/modal',
        cellSize: 'big',
        imagePosition: 'img-center',
        tag: [
            'modal'
        ]
    });
    dataArray.push({
        title: 'Grid',
        href: '/grid-1',
        cellSize: 'small',
        imagePosition: 'img-center',
        tag: [
            'grid',
            'cell'
        ]
    });
    dataArray.push({
        title: 'Card',
        href: '/card-4',
        cellSize: 'small',
        imagePosition: 'img-center',
        tag: [
            'card design'
        ]
    });
    dataArray.push({
        title: 'Table',
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
            <div class="grid-item ${element.cellSize}"> 
                <div class="cell-title">${element.title}</div>
                <a class="${element.imagePosition}" href="${element.href}">
                    <div class="curtain"></div>
                </a>
            </div>
            `;

        $root.append(template);
    });


    const $searchButton = $('button.btn.btn-outline-success.my-2.my-sm-0');
    const $searchInput = $('input.form-control.mr-sm-2');

    $searchButton.on('click', () => {
        that.doSearch()
    });

    $searchInput.on('keyup', (event) => {
        if(event.keyCode === 13)
            that.doSearch();
    });

    this.doSearch = () => {
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
                    <div class="grid-item ${element.cellSize}"> 
                        <div class="cell-title">${element.title}</div>
                        <a class="${element.imagePosition}" href="${element.href}">
                            <div class="curtain"></div>
                        </a>
                    </div>
                    `;

                const $template = $(template);
                $root.append($template)
                    .masonry('appended', $template);

            }
        });
    };


};


