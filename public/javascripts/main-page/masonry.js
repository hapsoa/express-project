// external js: masonry.pkgd.js

const $grid = $('.grid');

$grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
});

