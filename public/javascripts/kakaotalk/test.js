(function() {

    var a = 10;
    var b = 'a';
    var c = null;
    var d = undefined;
    var e = [1, 2, 3, 4];
    var f = {a: 10}; // json

    var g = [1, 2, 'a', {a: [2, 3, 4]}];

//선언
    var h = function () {
        console.log('나는 함순데')
    }

//호출
//h();


    var $input = $('#messageInput');
    var $sender = $('#sender');


    $input.on('keydown', function (e) {

        // console.log(e);
        if (e.keyCode === 13) {
            console.log($input.val());
            chatApi.sendMessage('jaejong', $input.val());
            $input.val('');

            $(".chatting-log-box").scrollTop($(".chatting-log-box")[0].scrollHeight);
        }


    });

    let $cancel;


    chatApi.on('child_added', function (d) {

        // console.log(d);
        let key = Object.keys(d)[0];
        // console.log(d[key].date);
        // console.log(d[key].id);
        // console.log(d[key].message);


        let date = new Date(d[key].date);
        let hour;
        if (Number(date.getHours()) < 13)
            hour = date.getHours();
        else
            hour = '오후 ' + (Number(date.getHours()) - 12);

        let minute;
        if (Number(date.getMinutes()) >= 10)
            minute = date.getMinutes();
        else
            minute = '0' + date.getMinutes();

        let printingTime;

        printingTime = hour + ':' + minute;


        const id = d[key].id;
        const message = d[key].message;
        let template;


        /**
         * messageId를 속성으로 추가
         */
        const messageId = Object.keys(d)[0];

        /**
         * 메세지 채팅창에 추가
         */
        if (!(message === '')) {
            if (d[key].id === 'jaejong') {

                template = `
             <div class="self-element" messageId=${messageId}>
                <i class="material-icons" messageId=${messageId}>close</i> 
                <div class="time">${printingTime}</div>
                <div class="speech-bubble self">${message}</div>
            </div>
            `;

                $('.chatting-log-box')
                    .append(template);
            }
            else {
                template = `
             <div class="friend-element">
                <div class="image-container">
                    <div class="title-image"></div>
                </div>
                <div class="chat-bundle">
                    <div class="name">${id}</div>
                    <div class="bubble-line">                        
                        <div class="speech-bubble moon">${message}</div>
                        <div class="time">${printingTime}</div>
                        
                    </div>
                </div>                
            </div>
            `;

                $('.chatting-log-box')
                    .append(template);

            }
        }


        $cancel = $('.self-element > i.material-icons');
// { messageId : { id : , message : , date}}

        $cancel.on('click', function () {

            console.log($(this).attr('messageId'));
            // 삭제 시켜야 한다.
            chatApi.deleteMessage($(this).attr('messageId'));
            // 누르는 채팅창의 id를 알아야 하는데


        });


    });

    // 메세지 삭제 이벤트
    chatApi.on('child_removed', function (d) {
        // { messageId : { id : , message : , date}}

        // 리로드 되면 삭제되긴 하는데, 하자마자 바로 삭제 해야 할듯
        const key = Object.keys(d)[0];

        console.log(key + 'yes');


        $('.self-element[messageId=' + key+ ']').remove();
    });




})();