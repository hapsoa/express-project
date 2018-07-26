const dataManager = new function () {
    const that = this;
    const dataArray = [{
        title: 'Calculator',
        href: '/calculator',
        imageSource: 'calculator-cover3.png',
        tag: [
            'calculator',
            'number',
            'math'
        ]
    },
        {
            title: 'Kakaotalk',
            href: '/kakaotalk/login',
            imageSource: 'kakaotalk-cover2.png',
            tag: [
                'kakaotalk',
                'chatting'
            ]
        },
        {
            title: 'Fractal',
            href: '/fractal/education',
            imageSource: 'fractal-cover2.png',
            tag: [
                'fractal',
                'math',
                'art'
            ]
        },
        {
            title: 'Text finder',
            href: '/textFinder',
            imageSource: 'textFinder-cover.png',
            tag: [
                'textFinder',
                'search'
            ]
        },
        {
            title: 'Ajou University website',
            href: '/ajou',
            imageSource: 'ajou-cover2.png',
            tag: [
                'ajou university',
                'website',
                'homepage'
            ]
        },
        {
            title: 'Firebase website',
            href: '/firebase',
            imageSource: 'firebase-cover.png',
            tag: [
                'firebase',
                'website'
            ]
        },
        {
            title: 'Modal',
            href: '/modal',
            imageSource: 'modal-cover.png',
            tag: [
                'modal'
            ]
        },
        // {
        //     title: 'Grid',
        //     href: '/grid-1',
        //     cellSize: 'small',
        //     imagePosition: 'img-center',
        //     tag: [
        //         'grid',
        //         'cell'
        //     ]
        // },
        // {
        //     title: 'Card',
        //     href: '/card-4',
        //     cellSize: 'small',
        //     imagePosition: 'img-center',
        //     tag: [
        //         'card design'
        //     ]
        // },
        // {
        //     title: 'Table',
        //     href: '/table',
        //     cellSize: 'big',
        //     imagePosition: 'img-center',
        //     tag: [
        //         'table'
        //     ]
        // }
    ];



    const $root = $('.grid');
    const $searchButton = $('button.btn.btn-outline-success.my-2.my-sm-0');
    const $searchInput = $('input.form-control.mr-sm-2');

    // 데이터를 template으로 append

    // dataArray.forEach((element) => {
    //
    //     const template = `
    //         <div class="grid-item">
    //             <div class="cell-title">${element.title}</div>
    //             <a href="${element.href}">
    //                 <img src="../../images/main-page/${element.imageSource}" alt="${element.title} image">
    //                 <div class="curtain"></div>
    //             </a>
    //             <div class="tags">
    //                 <div class="empty-flex"></div>
    //             </div>
    //         </div>
    //         `;
    //
    //     const $template = $(template);
    //
    //     for (let i = 0; i < element.tag.length; i++) {
    //         const tagTemplate = `<div class="tag">#${element.tag[i]}</div>`;
    //         $template.find('.tags').append(tagTemplate);
    //     }
    //
    //     // $root.append($template);
    //     $root.masonry()
    //         .append($template)
    //         .masonry( 'appended', $template)
    //         // layout
    //         .masonry();
    //     $root.masonry('layout');
    //
    // });

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
            <div class="grid-item"> 
                <div class="cell-title">${element.title}</div>
                <a href="${element.href}">
                    <img src="../../images/main-page/${element.imageSource}" alt="${element.title} image">
                    <div class="curtain"></div>
                </a>
                <div class="tags">
                    <div class="empty-flex"></div>
                </div>
            </div>
            `;

                const $template = $(template);


                for (let i = 0; i < element.tag.length; i++) {
                    const tagTemplate = `<div class="tag">#${element.tag[i]}</div>`;
                    $template.find('.tags').append(tagTemplate);
                }


                $root.masonry()
                    .append($template)
                    .masonry( 'appended', $template)
                    // layout
                    .masonry();
                $root.masonry('layout');

            }

        });

        $grid.imagesLoaded().progress( function() {
            $grid.masonry('layout');
        });

        const $tags = $('.tag');
        $tags.on('click', (event) => {
            console.log('event!');
            // console.dir(event);
            const $this = $(event.target);

            const seedString = $this.text().substr(1);

            $searchInput.val(seedString);

            this.doSearch();

        });

        $('html, body').animate({scrollTop: 0}, 400);

    };

    this.doSearch();


    $searchButton.on('click', () => {
        that.doSearch()
    });

    $searchInput.on('keyup', (event) => {
        if (event.keyCode === 13)
            that.doSearch();
    });

    const $tags = $('.tag');

    $tags.on('click', (event) => {
        console.log('event!');

        const $this = $(event.target);

        const seedString = $this.text().substr(1);

        $searchInput.val(seedString);

        this.doSearch();

    });
};


