console.log('hello'); //System.out.println('hello')
console.warn('woarn!!!!');
console.error('error');

var a = 10;
var b = 'a';
var c = null;
var d = undefined;
var e = [1, 2, 3, 4];
var f = { a: 10 }; // json

var g = [1, 2, 'a', {a: [2, 3, 4] }];

//선언
var h = function() {
    console.log('나는 함순데')
}

//호출
//h();



var $input = $('#messageInput');
var $sender = $('#sender');

$sender.on('click', function() {
    var message = $input.val();
    $('.chat-state-container')
        .append('<h1>' + message + '</h1>')
});

