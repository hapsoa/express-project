/**
 * Created by hyunwoo on 2018. 7. 10..
 */


function setup() {
    const $root = $('body');
    const canvas = createCanvas($root.width(), $root.height());
    canvas.parent('renderer');
    // console.log(canvas);
    background(0);

}

const button = new function() {

    const inputs = $('input');
    const $stop = $('#stop');



    $('#exec').on('click',() => {
        const data = {};
        for(let i = 0 ; i < inputs.length ; i ++){
            const $input = $(inputs[i]);
            const k = $input.attr('name');
            const v = $input.val();
            data[k] = v;
        }
        // console.log(data);

        fractalGenerator.generate(data);





        //execute버튼을 누르면 stop버튼이 stop으로 바뀐다.
        $stop.text('stop');
    });

    $stop.on('click', () => {

        let buttonName = $stop.text();

        switch(buttonName) {
            case 'stop' :
                $stop.text('continue');
                break;
            case 'continue' :
                $stop.text('stop');
                break;
            case '-' :
                console.log('no change');
                break;
        }

    });
};





// function draw(){
//     stroke(255,255,255,1);
//     console.log('asdf');
//     line(0,0,1000,1000);
// }

