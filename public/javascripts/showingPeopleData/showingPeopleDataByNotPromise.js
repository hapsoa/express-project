const dataManager = new function () {
    let arr = [];

    const getData = ($checkedBox, i) => {
        let $element = $($checkedBox[i]);
        let filename = $element.attr('value');
        console.log(filename);


        // 재귀적
        $.get(`/data/personData/${filename}.json`, (data, status) => {
            arr.push(data);
            if (i + 1 < $checkedBox.length) {
                getData($checkedBox, i + 1);
                console.log(i);
            }
            else { // 마지막 순간일 때, 화면을 보여준다.
                console.log(arr);
                showData(arr);
                arr = [];
            }

        });

    };

    const showData = (dataArray) => {
        // append() 한다.
        const $resultZone = $('.result-zone');

        for (let i = 0; i < dataArray.length; i++) {
            $resultZone.append(JSON.stringify(dataArray[i]));
        }
    };

    this.gatherData = () => {

        const $checkedBox = $('input:checked');

        getData($checkedBox, 0);

        console.log('hi');
    };

};

const eventManager = new function () {

    const $confirmButton = $('button');
    const $resultZone = $('.result-zone');

    $confirmButton.on('click', function () {

        $resultZone.empty();
        // dataManager.processData();
        dataManager.gatherData();


    });
};

