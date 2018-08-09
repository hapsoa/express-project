const dataManager = new function () {

    const getData = () => {

        const $checkedBox = $('input:checked');
        let i = 0;
        let $element = $($checkedBox[i]);
        let filename = $element.attr('value');

        const arr = [];

        // 재귀함수로 해결할 수 있지 않을까?
        $.get(`/data/personData/${filename}.json`, (data, status) => {

            if (i < $checkedBox.length)
                getData(i+1, );
            return data;
        });

    };

    const showData = (dataArray) => {
        return new Promise((resolve, reject) => {
            // append() 한다.
            const $resultZone = $('.result-zone');

            for (let i = 0; i < dataArray.length; i++) {
                $resultZone.append(JSON.stringify(dataArray[i]));
            }
            resolve();
        });
    };

    this.gatherData = async () => {

        const $checkedBox = $('input:checked');

        const dataArray = [];

        for (let i = 0; i < $checkedBox.length; i++) {
            const $element = $($checkedBox[i]);
            const filename = $element.attr('value');

            dataArray.push(getData(filename));
        }



        await showData(dataArray);

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

