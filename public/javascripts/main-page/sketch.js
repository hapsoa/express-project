const snowGenerator = new function () {
    let tick = 0;
    const $body = $('body');

    // 눈을 담는 동적 배열
    let snowArray = [];
    let deadSnowArray = [];

    this.generateSnow = () => {

        // 위의 코드를 할 데이터를 만든다.
        const snowElement = {
            // 초기 위치, 속도, 크기, 색상, 남은생명시간, 살아있는지
            positionX: Math.random() * $body.width(),
            positionY: 10,
            size: 10,
            velocityY : 1,
            colorR: Math.random() * 255,
            colorG: Math.random() * 255,
            colorB: Math.random() * 255,
            lifeTime: 3600 // 4초 or 2초
        };

        snowArray.push(snowElement);
    };

    this.update = function (volume) {
        tick++;
        if (tick % 90 === 0) {
            this.generateSnow();
        }

        // snowArray의 loop를 돌면서 update 한다.
        this.updateSnowArray();

        // 소리에 반응할 때
        if (volume > 0.01 &&
            snowArray[0].size < volume * 2000) {
            // 모든 눈이 순간적으로 커지고, 눈 생성도 순간적으로 많아진다.

            snowArray.forEach((element) => {
                element.size = volume * 2000;
            });
        }




    };

    this.renderSnow = () => {
        snowArray.forEach((element) => {
            fill(element.colorR, element.colorG, element.colorB);
            stroke(255, 0);
            ellipse(element.positionX, element.positionY, element.size, element.size);

        });


    };

    this.updateSnowArray = () => {

        snowArray.forEach((element) => {
            element.lifeTime--;

            if (element.lifeTime < 0)
                deadSnowArray.push(element);

            // 눈이 내리게 속도 조절을 한다.
            element.positionY += element.velocityY;

            // snow의 사이즈가 10보다 클 때 점점 10으로 간다
            if (element.size > 10 && tick % 4 === 0) {
                element.size--;
            }
            else if (element.size < 10) {
                element.size = 10;
            }


        });

        if (snowArray[0] !== undefined)
            snowArray[snowArray.length-1].size = snowArray[0].size;


        snowArray = _.difference(snowArray, deadSnowArray); //이게 작동을 안하는 듯 한데
        deadSnowArray = [];
    };

};

let mic;
function setup() {
    const $body = $('body');

    const canvas = createCanvas($body.width(), $body.height());

    canvas.parent('sketch-holder');

    background(255, 255, 255);

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(255, 255, 255);
    // background(0, 0, 0);

    snowGenerator.update(mic.getLevel());
    snowGenerator.renderSnow();

    // filter(BLUR, 3);
}


