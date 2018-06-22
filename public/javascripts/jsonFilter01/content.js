(function () {

    const studentInfo = [
        {
            gender: '남',
            children: [
                {
                    undergrad: '2010',
                    children: [
                        {
                            age: '25',
                            children: [
                                {
                                    name: '허재종'
                                }
                            ]
                        }
                    ]
                },
                {
                    undergrad: '2014',
                    children: [
                        {
                            age: '24',
                            children: [
                                {
                                    name: '홍준엽'
                                },
                                {
                                    name: '공현식'
                                }
                            ]

                        }
                    ]
                }

            ]
        },
        {
            gender: '여',
            children: [
                {
                    undergrad: '2016',
                    children: [
                        {
                            age: '22',
                            children: [
                                {
                                    name: '이수정'
                                }
                            ]
                        },
                        {
                            age: '21',
                            children: [
                                {
                                    name: '홍주원'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];


    const $button = $('.button');
    const $names = $('.names-box');

    $button.on('click', function () {

        const $genderSelected = $('#gender option:selected');
        const $undergradSelected = $('#undergrad option:selected');
        const $ageSelected = $('#age option:selected');

        // select 조건에 따라 분류해서 이름을 보여준다.


        if ($genderSelected.text() !== '성별(ALL)' &&
            $undergradSelected.text() !== '학번(ALL)' &&
            $ageSelected.text() !== '나이(ALL)') {

            const names = function () {
                let namesString = '';

                console.log($genderSelected.text());

                for (let i = 0; i < studentInfo.length; i++) {
                    if ($genderSelected.text() === studentInfo[i].gender) {

                        for (let j = 0; j < studentInfo[i].children.length; j++) {
                            if ($undergradSelected.text() ===
                                studentInfo[i].children[j].undergrad) {

                                for (let k = 0; k < studentInfo[i].children[j].children.length; k++) {
                                    if ($ageSelected.text() ===
                                        studentInfo[i].children[j].children[k].age) {

                                        for (let l = 0; l < studentInfo[i].children[j].children[k].children.length; l++) {
                                            namesString += studentInfo[i].children[j].children[k].children[l].name + ' ';
                                        }

                                    }
                                }

                            }
                        }

                    }
                }


                return namesString;
            };

            $names.text(names);

        }


        if ($genderSelected.text() === '성별(ALL)' &&
            $undergradSelected.text() !== '학번(ALL)' &&
            $ageSelected.text() !== '나이(ALL)') {

            const names = function () {
                let namesString = '';

                console.log($genderSelected.text());

                for (let i = 0; i < studentInfo.length; i++) {
                    if ($genderSelected.text() !== studentInfo[i].gender) {

                        for (let j = 0; j < studentInfo[i].children.length; j++) {
                            if ($undergradSelected.text() ===
                                studentInfo[i].children[j].undergrad) {

                                for (let k = 0; k < studentInfo[i].children[j].children.length; k++) {
                                    if ($ageSelected.text() ===
                                        studentInfo[i].children[j].children[k].age) {

                                        for (let l = 0; l < studentInfo[i].children[j].children[k].children.length; l++) {
                                            namesString += studentInfo[i].children[j].children[k].children[l].name + ' ';
                                        }

                                    }
                                }

                            }
                        }

                    }
                }


                return namesString;
            };

            $names.text(names);

        }


        if ($genderSelected.text() !== '성별(ALL)' &&
            $undergradSelected.text() === '학번(ALL)' &&
            $ageSelected.text() !== '나이(ALL)') {

            const names = function () {
                let namesString = '';

                console.log($genderSelected.text());

                for (let i = 0; i < studentInfo.length; i++) {
                    if ($genderSelected.text() === studentInfo[i].gender) {

                        for (let j = 0; j < studentInfo[i].children.length; j++) {
                            if ($undergradSelected.text() !==
                                studentInfo[i].children[j].undergrad) {

                                for (let k = 0; k < studentInfo[i].children[j].children.length; k++) {
                                    if ($ageSelected.text() ===
                                        studentInfo[i].children[j].children[k].age) {

                                        for (let l = 0; l < studentInfo[i].children[j].children[k].children.length; l++) {
                                            namesString += studentInfo[i].children[j].children[k].children[l].name + ' ';
                                        }

                                    }
                                }

                            }
                        }

                    }
                }


                return namesString;
            };

            $names.text(names);

        }

        if ($genderSelected.text() !== '성별(ALL)' &&
            $undergradSelected.text() !== '학번(ALL)' &&
            $ageSelected.text() === '나이(ALL)') {

            const names = function () {
                let namesString = '';

                console.log($genderSelected.text());

                for (let i = 0; i < studentInfo.length; i++) {
                    if ($genderSelected.text() === studentInfo[i].gender) {

                        for (let j = 0; j < studentInfo[i].children.length; j++) {
                            if ($undergradSelected.text() ===
                                studentInfo[i].children[j].undergrad) {

                                for (let k = 0; k < studentInfo[i].children[j].children.length; k++) {
                                    if ($ageSelected.text() !==
                                        studentInfo[i].children[j].children[k].age) {

                                        for (let l = 0; l < studentInfo[i].children[j].children[k].children.length; l++) {
                                            namesString += studentInfo[i].children[j].children[k].children[l].name + ' ';
                                        }

                                    }
                                }

                            }
                        }

                    }
                }


                return namesString;
            };

            $names.text(names);

        }


        if ($genderSelected.text() === '성별(ALL)' &&
            $undergradSelected.text() === '학번(ALL)' &&
            $ageSelected.text() !== '나이(ALL)') {

            const names = function () {
                let namesString = '';

                console.log($genderSelected.text());

                for (let i = 0; i < studentInfo.length; i++) {
                    if ($genderSelected.text() !== studentInfo[i].gender) {

                        for (let j = 0; j < studentInfo[i].children.length; j++) {
                            if ($undergradSelected.text() !==
                                studentInfo[i].children[j].undergrad) {

                                for (let k = 0; k < studentInfo[i].children[j].children.length; k++) {
                                    if ($ageSelected.text() ===
                                        studentInfo[i].children[j].children[k].age) {

                                        for (let l = 0; l < studentInfo[i].children[j].children[k].children.length; l++) {
                                            namesString += studentInfo[i].children[j].children[k].children[l].name + ' ';
                                        }

                                    }
                                }

                            }
                        }

                    }
                }


                return namesString;
            };

            $names.text(names);

        }


        if ($genderSelected.text() === '성별(ALL)' &&
            $undergradSelected.text() !== '학번(ALL)' &&
            $ageSelected.text() === '나이(ALL)') {

            const names = function () {
                let namesString = '';

                console.log($genderSelected.text());

                for (let i = 0; i < studentInfo.length; i++) {
                    if ($genderSelected.text() !== studentInfo[i].gender) {

                        for (let j = 0; j < studentInfo[i].children.length; j++) {
                            if ($undergradSelected.text() ===
                                studentInfo[i].children[j].undergrad) {

                                for (let k = 0; k < studentInfo[i].children[j].children.length; k++) {
                                    if ($ageSelected.text() !==
                                        studentInfo[i].children[j].children[k].age) {

                                        for (let l = 0; l < studentInfo[i].children[j].children[k].children.length; l++) {
                                            namesString += studentInfo[i].children[j].children[k].children[l].name + ' ';
                                        }

                                    }
                                }

                            }
                        }

                    }
                }


                return namesString;
            };

            $names.text(names);

        }


        if ($genderSelected.text() !== '성별(ALL)' &&
            $undergradSelected.text() === '학번(ALL)' &&
            $ageSelected.text() === '나이(ALL)') {

            const names = function () {
                let namesString = '';

                console.log($genderSelected.text());

                for (let i = 0; i < studentInfo.length; i++) {
                    if ($genderSelected.text() === studentInfo[i].gender) {

                        for (let j = 0; j < studentInfo[i].children.length; j++) {
                            if ($undergradSelected.text() !==
                                studentInfo[i].children[j].undergrad) {

                                for (let k = 0; k < studentInfo[i].children[j].children.length; k++) {
                                    if ($ageSelected.text() !==
                                        studentInfo[i].children[j].children[k].age) {

                                        for (let l = 0; l < studentInfo[i].children[j].children[k].children.length; l++) {
                                            namesString += studentInfo[i].children[j].children[k].children[l].name + ' ';
                                        }

                                    }
                                }

                            }
                        }

                    }
                }


                return namesString;
            };

            $names.text(names);

        }

        if ($genderSelected.text() === '성별(ALL)' &&
            $undergradSelected.text() === '학번(ALL)' &&
            $ageSelected.text() === '나이(ALL)') {

            const names = function () {
                let namesString = '';

                console.log($genderSelected.text());

                for (let i = 0; i < studentInfo.length; i++) {
                    if ($genderSelected.text() !== studentInfo[i].gender) {

                        for (let j = 0; j < studentInfo[i].children.length; j++) {
                            if ($undergradSelected.text() !==
                                studentInfo[i].children[j].undergrad) {

                                for (let k = 0; k < studentInfo[i].children[j].children.length; k++) {
                                    if ($ageSelected.text() !==
                                        studentInfo[i].children[j].children[k].age) {

                                        for (let l = 0; l < studentInfo[i].children[j].children[k].children.length; l++) {
                                            namesString += studentInfo[i].children[j].children[k].children[l].name + ' ';
                                        }

                                    }
                                }

                            }
                        }

                    }
                }


                return namesString;
            };

            $names.text(names);

        }



    });





})();

// console.log($('#gender option:selected').val());


