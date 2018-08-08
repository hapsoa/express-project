const dataManager = new function () {

    this.processData = async () => {
        const dataArray = await gatherData();

        await showData(dataArray);
    };

    const gatherData = async () => {

        const $checkedBox = $('input:checked');

        const dataArray = [];

        const getData = (filename) => {
            return new Promise((resolve, reject) => {
                $.get(`/data/personData/${filename}.json`, (data, status) => {
                    resolve(data);
                });
            });
        };

        for (let i = 0; i < $checkedBox.length; i++) {
            const $element = $($checkedBox[i]);
            const filename = $element.attr('value');

            dataArray.push(await getData(filename));
        }

        return dataArray;
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
    }

};

const eventManager = new function () {

    const $confirmButton = $('button');
    const $resultZone = $('.result-zone');

    $confirmButton.on('click', function () {

        $resultZone.empty();
        dataManager.processData();

    });
};

