const DataElement = function(data) {

    const template = `
            <div class="grid-item">
                <div class="cell-title">${data.title}</div>
                <a href="${data.href}">
                    <img src="../../images/main-page/${data.imageSource}" alt="${data.title} image">
                    <div class="curtain"></div>
                </a>
                <div class="tags">
                    <div class="empty-flex"></div>
                </div>
            </div>
            `;

    const $template = $(template);

    _.forEach(data.tag, (t) => {
        const tagTemplate = `<div class="tag">#${t}</div>`;
        $template.find('.tags').append(tagTemplate);
    });


    this.$template = $template;

    this.hasTag = (inputValue) => {

        return !_.isEmpty(_.filter(data.tag, (t) => {
            return t.indexOf(inputValue) !== -1;
        }));

    };

    this.title = data.title;

};

const EventAdder = function() {

    this.addEvent = (dataManager) => {
        const $tags = $('.tag');
        const $searchInput = $('input.form-control.mr-sm-2');

        $tags.on('click', (event) => {
            const $this = $(event.target);
            const seedString = $this.text().substr(1);
            $searchInput.val(seedString);
            dataManager.doSearch();
        });
    };

};

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
        {
            title: 'Grid',
            href: '/grid-1',
            imageSource: 'grid-1-cover.png',
            tag: [
                'grid',
                'cell'
            ]
        },
        {
            title: 'Card',
            href: '/card-4',
            imageSource: 'card-4-cover.png',
            tag: [
                'card design'
            ]
        },
        {
            title: 'Table',
            href: '/table',
            imageSource: 'table-cover.png',
            tag: [
                'table'
            ]
        }
    ];
    let dataElements = [];
    let viewedElements = [];

    const $root = $('.grid');
    const $searchButton = $('button.btn.btn-outline-success.my-2.my-sm-0');
    const $searchInput = $('input.form-control.mr-sm-2');

    // 데이터를 template으로 append
    _.forEach(dataArray, (element) => {
        const dataElement = new DataElement(element);
        dataElements.push(dataElement);
        viewedElements.push(dataElement);

        $root.masonry()
            .append(dataElement.$template)
            .masonry( 'appended', dataElement.$template)
            // layout
            .masonry();
    });

    // image가 load된 다음에 진행한다.
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    const eventAdder = new EventAdder();
    eventAdder.addEvent(this);
    /****init의 끝****/

    this.doSearch = () => {

        const correctElements = _.filter(dataElements, (element) => {
            if(element.hasTag($searchInput.val())) {
                return true;
            }
        });

        viewedElements = _.filter(viewedElements, (viewedElement) => {
            // 화면에 나와 있는 것 중 검색 요건에 맞는게 없으면
            if(_.isEmpty(_.filter(correctElements, (correctElement) => {
                return viewedElement.title === correctElement.title;
            }))) {
                // 화면에 나와 있는 것 중 검색요건 맞지 않는건 제거한다.
                $root.masonry('remove', viewedElement.$template)
                    .masonry();


                // viewedElements 에서 검색요건이 맞지 않는 element를 제거한다.
                return true;
            }
            else {
                // 검색 요건에 맞으면 더 추가하지 않는다.
            }

        });

        _.forEach(viewedElements, (viewedElement) => {
            console.log(viewedElement.title);
        });


        // 여기가 문제가 있는듯 한데
        _.forEach(correctElements, (correctElement) => {

            if (_.isEmpty(_.filter(viewedElements, (viewedElement) => {
                // console.log(correctElement.title + ", " + viewedElement.title);
                return correctElement.title === viewedElement.title;
            }))) {

                $root.append(correctElement.$template)
                    .masonry( 'appended', correctElement.$template)
                    // layout
                    .masonry();

                viewedElements.push(correctElement);
            }
        });




        // $root.masonry('remove', $root.find('.grid-item'))
        //     .masonry();
        //
        // // loop를 돌면서 모든 tag들을 검사한다.
        // _.forEach(dataArray, (element) => {
        //     let isIncluded = false;
        //
        //     _.forEach(element.tag, (t) => {
        //         if (t.includes($searchInput.val())) {
        //             // 이 조건에 충족하는 cell만 나타나도록 한다.
        //             isIncluded = true;
        //         }
        //     });
        //
        //     if (isIncluded) {
        //         const dataElement = new DataElement(element);
        //
        //         $root.masonry()
        //             .append(dataElement.$template)
        //             .masonry( 'appended', dataElement.$template)
        //             // layout
        //             .masonry();
        //         $root.masonry('layout');
        //     }
        // });

        // eventAdder.addEvent(that);

        $('html, body').animate({scrollTop: 0}, 400);

    };


    $searchButton.on('click', () => {
        that.doSearch()
    });

    $searchInput.on('keyup', (event) => {
        if (event.keyCode === 13)
            that.doSearch();
    });


};








