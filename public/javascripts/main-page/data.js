const dataManager = new function() {
    const dataArray = [];

    dataArray.push({
        href: '/calculator',
        cellSize: 'small'
    });

    dataArray.push({
        href: '/kakaotalk/login',
        cellSize: 'small'
    });

    dataArray.push({
        href: '/fractal/education',
        cellSize: 'big'
    });

    dataArray.push({
        href: '/textFinder',
        cellSize: 'small'
    });

    dataArray.push({
        href: '/ajou',
        cellSize: 'long'
    });

    dataArray.push({
        href: '/firebase',
        cellSize: 'small'
    });

    dataArray.push({
        href: '/modal',
        cellSize: 'big'
    });

    dataArray.push({
        href: '/grid-1',
        cellSize: 'small'
    });

    dataArray.push({
        href: '/card-4',
        cellSize: 'small'
    });

    dataArray.push({
        href: '/table',
        cellSize: 'big'
    });

    const $root = $('.grid');

    dataArray.forEach((element) => {
        const template = `
    <a class="grid-item ${element.cellSize}" href="${element.href}">
        <div class="curtain"></div>
    </a>
    `;

        $root.append(template);
    });




};


