(function() {

    // const studentInfo = [
    //     {
    //         name: '허재종',
    //         gender : '남',
    //         undergrad : '2010',
    //         age : 25
    //     },
    //     {
    //         name: '홍준엽',
    //         gender : '남',
    //         undergrad : '2014',
    //         age : 24
    //     },
    //     {
    //         name: '공현식',
    //         gender : '남',
    //         undergrad : '2014',
    //         age : 23.5
    //     },
    //     {
    //         name: '이수정',
    //         gender : '여',
    //         undergrad : '2016',
    //         age : 22
    //     },
    //     {
    //         name: '홍주원',
    //         gender : '여',
    //         undergrad : '2016',
    //         age : 23.5
    //     }
    // ];

    const studentInfo = [
        {
            gender: '남',
            children: [
                {
                    undergrad: '2010',
                    children: [
                        {
                            age: 25,
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
                            age: 24,
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
                            age: 22,
                            children: [
                                {
                                    name: '이수정'
                                }
                            ]
                        },
                        {
                            age: 21,
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

    $button.on('click', function() {

        const $genderSelected = $('#gender option:selected');
        const $undergradSelected = $('#undergrad option:selected');
        const $ageSelected = $('#age option:selected');

        // select 조건에 따라 분류해서 이름을 보여준다.

        console.log(studentInfo[0].name);

        if ($genderSelected.text() === '성별(ALL)' &&
            $undergradSelected.text() === '학번(ALL)' &&
            $ageSelected.text() === '나이(ALL)') {

            // all all all일 때 모든 이름을 보여준다.
            const names = function() {
                let namesString ='';

                for (let i = 0; i < studentInfo.length; i++) {
                    namesString += studentInfo[i].name + ' '
                }

                return namesString;
            };

            $names.text(names);
        }

        if ($genderSelected.text() === '남' &&
            $undergradSelected.text() === '학번(ALL)' &&
            $ageSelected.text() === '나이(ALL)') {

            //남자만 보여준다.
            const names = function() {
                let namesString ='';

                for (let i = 0; i < studentInfo.length; i++) {

                    if (studentInfo[i].gender === '남')
                        namesString += studentInfo[i].name + ' '
                }

                return namesString;
            };

            $names.text(names);
        }

        if ($genderSelected.text() === '여' &&
            $undergradSelected.text() === '학번(ALL)' &&
            $ageSelected.text() === '나이(ALL)') {

            //남자만 보여준다.
            const names = function() {
                let namesString ='';

                for (let i = 0; i < studentInfo.length; i++) {

                    if (studentInfo[i].gender === '여')
                        namesString += studentInfo[i].name + ' '
                }

                return namesString;
            };

            $names.text(names);
        }





    });



})();

// console.log($('#gender option:selected').val());


