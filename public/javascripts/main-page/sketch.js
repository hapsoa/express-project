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

    this.update = function () {
        tick++;
        if (tick % 90 === 0) {
            this.generateSnow();
        }

        // snow의 생명시간을 계속 뺀다.
        this.minusLifeTime();

    };

    this.renderSnow = () => {
        snowArray.forEach((element) => {
            fill(element.colorR, element.colorG, element.colorB);
            stroke(255);
            ellipse(element.positionX, element.positionY, element.size, element.size);
            // filter('blur');
        });

    };

    this.minusLifeTime = () => {

        snowArray.forEach((element) => {
            element.lifeTime--;

            if (element.lifeTime < 0)
                deadSnowArray.push(element);

            // 눈이 내리게 속도 조절을 한다.
            element.positionY += element.velocityY;
        });


        snowArray = _.difference(snowArray, deadSnowArray); //이게 작동을 안하는 듯 한데
        deadSnowArray = [];
    };

};

function setup() {
    const $body = $('body');

    const canvas = createCanvas($body.width(), $body.height());

    canvas.parent('sketch-holder');

    background(255, 255, 255);

    // filter(BLUR, 3);
}

function draw() {
    background(255, 255, 255);
    // put drawing code here
    snowGenerator.update();
    snowGenerator.renderSnow();


}


