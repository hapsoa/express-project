const snowGenerator = new function() {
    let tick = 0;
    const $body = $('body');

    // const


    this.generateSnow = () => {
        fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        ellipse(Math.random() * $body.width(), 10, 10, 10);
    };

    this.update = function() {
        tick++;
        if (tick % 30 === 0) {
            this.generateSnow();
        }

    }
};

function setup() {
    const $body = $('body');

    const canvas = createCanvas($body.width(), $body.height());

    canvas.parent('sketch-holder');

    background(255, 255, 255);

}

function draw() {
    // put drawing code here
    snowGenerator.update();


}


