const dataManager = new function() {
    // 선택된 checkbox 들을 for문 돌면서

};

const eventManager = new function() {

    const $confirmButton = $('button');

    $confirmButton.on('click', function() {
        const $checkedBox = $('input:checked');

        // console.log($checkedBox.length);

        $checkedBox.each((index, element) => {
            console.log(index);
            console.log(element);

            // input의 해당 id와 $.get(/data/peopleData/${id}); 이 필요하다.
        });
    });
};

