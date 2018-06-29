(function() {

    let $root = $('.chatting-log-box');
    let template;

    function Element(id, isMine) {
        if (isMine) {
            template = '<div class="self-element"><i class="material-icons">close</i>\n' +
                '    <div class="time"></div>\n' +
                '    <div class="speech-bubble self"></div>\n' +
                '</div>';
        }
        else {
            template = '<div class="friend-element">\n' +
                '    <div class="image-container">\n' +
                '        <div class="title-image"></div>\n' +
                '    </div>\n' +
                '    <div class="chat-bundle">\n' +
                '        <div class="name"></div>' +
                '        <div class="bubble-line">\n' +
                '            <div class="speech-bubble moon"></div>\n' +
                '            <div class="time"></div>\n' +
                // '<div class="self-element"><i class="material-icons">close</i>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>';
        }

        let $ele = $(template);
        const that = this;

        if (isMine) {
            $ele.find('i.material-icons').on('click', function() {
                chatApi.deleteMessage(id);
            });
        }

        $ele.attr('id', id);

        let elementData = {};

        if (isMine !== undefined && !isMine)
            $ele.addClass('receive');

        this.getTime = function() {
            return elementData.date;
        };

        this.getUserName = function() {
            return elementData.id;
        };

        this.setMessage = function(data) {
            elementData = data;

            $ele.find('.speech-bubble').text(data.message);
            $ele.find('.name').text(data.id);
            $ele.find('.time').text(data.date);
        };

        this.setVisibleTime = function(usage) {
            $ele.find('.time').css('visibility', usage ? 'visible' : 'hidden');
        };

        this.setVisibleName = function(usage) {
            $ele.find('.name').css('display', usage ? 'block' : 'none');
        };

        this.setVisibleProfile = function(usage) {
            $ele.find('.title-image').css('display', usage ? 'block' : 'none');
        };


        let prev = null;
        this.prev = function(ele) {
            if (ele === undefined)
                return prev;

            prev = ele;
            that.update();
        };

        let next = null;
        this.next = function(ele) {
            if (ele === undefined)
                return next;
            next = ele;
            that.update();
        };

        // check Visible
        this.update = function() {
            // 1. 이전께 내가 보낸 거면서 시간이 같으면 나의 이름과 사진을 삭제한다.
            if (prev !== null && prev.getUserName() === that.getUserName() && prev.getTime() === that.getTime()) {
                that.setVisibleName(false);
                that.setVisibleProfile(false);
            } else {
                that.setVisibleName(true);
                that.setVisibleProfile(true);
            }

            // 2. 다음꺼와 나의 이름이 같으면서 나의 시간이 같으면 나의 시간을 삭제한다.
            if (next !== null && next.getUserName() === that.getUserName() && next.getTime() === that.getTime()) {
                that.setVisibleTime(false);
            } else {
                that.setVisibleTime(true);
            }

            this.remove = function() {
                $ele.remove();
                let prev = that.prev();
                let next = that.next();

                if (prev !== null)
                    prev.next(next);

                if (next !== null)
                    next.prev(prev);
            };

            $ele.appendTo($root);

            return this;
        }

    }

    let userId = 'jaejong';

    let eles = {};
    let lastElement = null;

    chatApi.on('child_added', function(d) {

        let id = Object.keys(d)[0];
        let data = d[id];

        let date = new Date(data.date);
        let dateString = (date.getHours() >= 12 ? '오후 ' + ((date.getHours() === 12) ? date.getHours() : date.getHours() - 12) : '오전 ' + date.getHours()) + ':' + date.getMinutes();

        data.date = dateString;

        let ele = new Element(id, userId === data.id);

        ele.setMessage(data);

        if (lastElement !== null) {
            lastElement.next(ele);
            ele.prev(lastElement);
        }
        eles[id] = ele;
        lastElement = ele;

        $(".chatting-log-box").scrollTop($(".chatting-log-box")[0].scrollHeight);
    });

    chatApi.on('child_removed', function(d) {
        let id = Object.keys(d)[0];
        let ele = eles[id];

        ele.remove();
        delete eles[id];
    });

    let $textarea = $('#messageInput');

    $textarea.on('keyup', function(event) {

        let val = $textarea.val();

        if (event.keyCode === 13) {

            $textarea.val('');

            if (val !== '')
                chatApi.sendMessage(userId, val);
        }

    });






    //
    //
    //
    // var $input = $('#messageInput');
    //
    // $input.on('keyup', function (e) {
    //
    //     // console.log(e);
    //     if (e.keyCode === 13) {
    //         console.log($input.val());
    //         if ($input.val() !== '')
    //             chatApi.sendMessage('jaejong', $input.val());
    //         $input.val('');
    //
    //         $(".chatting-log-box").scrollTop($(".chatting-log-box")[0].scrollHeight);
    //     }
    //
    // });
    //
    //
    //
    // let $cancel;
    // let pastId;
    //
    // chatApi.on('child_added', function (d) {
    //
    //     // console.log(d);
    //     let key = Object.keys(d)[0];
    //     // console.log(d[key].date);
    //     // console.log(d[key].id);
    //     // console.log(d[key].message);
    //
    //
    //     let date = new Date(d[key].date);
    //     let hour;
    //     if (Number(date.getHours()) < 13)
    //         hour = date.getHours();
    //     else
    //         hour = '오후 ' + (Number(date.getHours()) - 12);
    //
    //     let minute;
    //     if (Number(date.getMinutes()) >= 10)
    //         minute = date.getMinutes();
    //     else
    //         minute = '0' + date.getMinutes();
    //
    //     let printingTime;
    //
    //     printingTime = hour + ':' + minute;
    //
    //
    //     const id = d[key].id;
    //     const message = d[key].message;
    //
    //
    //
    //     /**
    //      * messageId를 속성으로 추가
    //      */
    //     const messageId = Object.keys(d)[0];
    //
    //     /**
    //      * 메세지 채팅창에 추가
    //      */
    //     if (!(message === '')) {
    //         if (d[key].id === 'jaejong') {
    //
    //             template = `
    //          <div class="self-element" messageId=${messageId}>
    //             <i class="material-icons" messageId=${messageId}>close</i>
    //             <div class="time">${printingTime}</div>
    //             <div class="speech-bubble self">${message}</div>
    //         </div>
    //         `;
    //
    //             $('.chatting-log-box')
    //                 .append(template);
    //         }
    //         else if(d[key].id === pastId) {
    //             template = `
    //          <div class="friend-element" messageId=${messageId}>
    //             <div class="image-container"></div>
    //             <div class="chat-bundle">
    //                 <div class="bubble-line">
    //                     <div class="speech-bubble moon">${message}</div>
    //                     <div class="time">${printingTime}</div>
    //
    //                 </div>
    //             </div>
    //         </div>
    //         `;
    //
    //             $('.chatting-log-box')
    //                 .append(template);
    //         }
    //         else {
    //             template = `
    //          <div class="friend-element" messageId=${messageId} isFirst="true">
    //             <div class="image-container">
    //                 <div class="title-image"></div>
    //             </div>
    //             <div class="chat-bundle">
    //                 <div class="name">${id}</div>
    //                 <div class="bubble-line">
    //                     <div class="speech-bubble moon">${message}</div>
    //                     <div class="time">${printingTime}</div>
    //
    //                 </div>
    //             </div>
    //         </div>
    //         `;
    //
    //             $('.chatting-log-box')
    //                 .append(template);
    //
    //         }
    //     }
    //
    //
    //     $cancel = $('.self-element > i.material-icons');
    //
    //     // { messageId : { id : , message : , date}}
    //     $cancel.on('click', function () {
    //
    //         console.log($(this).attr('messageId'));
    //         // 삭제 시켜야 한다.
    //         chatApi.deleteMessage($(this).attr('messageId'));
    //
    //
    //     });
    //
    //     pastId = d[key].id;
    //
    //
    // });
    //
    // // 메세지 삭제 이벤트
    // chatApi.on('child_removed', function (d) {
    //     // { messageId : { id : , message : , date}}
    //
    //     const key = Object.keys(d)[0];
    //
    //     if (d[key].id === 'jaejong')
    //         $('.self-element[messageId=' + key + ']').remove();
    //     else
    //         $('.friend-element[messageId=' + key + ']').remove();
    //
    //     pastId = '';
    // });
    //



})();