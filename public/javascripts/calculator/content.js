var $value = $('#value');

var $number = $('.number');
var $operator = $('.operator');
var $equal = $('#equal');

var expression; //화면에 뜨는 수식 전체

var $ac = $('#ac');
var $convertingSign = $('#convert-sign');
var $percent = $('#percent');

$number.on('click', function () {

    expression = $value.text();

    if (Number(expression) === 0)
    // 0을 없애고 해당 수를 채운다.
        $value.text('');

    expression = $value.text();

    expression += $(this).text();
    $value.text(expression);

});

$operator.on('click', function () {

    expression = $value.text();

    // 연산자를 붙여준다.
    expression += $(this).attr('operator');

    $value.text(expression);
});

$equal.on('click', function () {
    $value.text(eval(expression));
});


$ac.on('click', function () {
    $value.text('0');
    expression = '0';
});

$convertingSign.on('click', function () {

    expression = $value.text();

    // 양수면, 음수면
    if (Number(expression) > 0)
        expression = '-' + $value.text();
    else if (Number(expression) < 0)
        expression = String(Number(expression) * (-1));

    $value.text(expression);

});

$
