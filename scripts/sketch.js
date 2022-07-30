const scl = 16;
let snake;
let food;

function setup() {
    frameRate(8);
    const canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
    snake = new Snake();
    pickLocation();
}

function draw() {
    background(105, 105, 105);
    snake.death();
    snake.update();
    snake.show();
    fill(255, 145, 90);
    rect(food.x, food.y, scl, scl);
    if (snake.eat(food)) {
        pickLocation();
    }
}

const KC_LEFT = 37;
const KC_UP = 38;
const KC_RIGHT = 39;
const KC_DOWN = 40;
const KC_A = 65;
const KC_W = 87;
const KC_S = 83;
const KC_D = 68;

function keyPressed(e) {
    if (e.keyCode === KC_UP || e.keyCode === KC_W) {
        snake.dir(0, -1);
    } else if (e.keyCode === KC_DOWN || e.keyCode === KC_S) {
        snake.dir(0, 1);
    } else if (e.keyCode === KC_RIGHT || e.keyCode === KC_D) {
        snake.dir(1, 0);
    } else if (e.keyCode === KC_LEFT || e.keyCode === KC_A) {
        snake.dir(-1, 0);
    }
    if (p5.prototype.mouseIsPressed) {
        if (p5.prototype.mouseButton === 'left') {
            snake.total++;
        }
    }
}

function Snake() {

    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.tail = [];
    this.total = 0;

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function (pos) {
        const d = dist(this.x, this.y, pos.x, pos.y);
        if (d < scl) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function () {
        for (let i = 0; i < this.tail.length; i++) {
            const pos = this.tail[i];
            const d = dist(this.x, this.y, pos.x, pos.y);
            if (d < scl) {
                this.total = 0;
                this.tail = [];
                console.log('starting over');
            }
        }
    }

    this.update = function () {
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }

        this.tail[this.total - 1] = p5.prototype.createVector(this.x, this.y);

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        if (this.x > width - scl) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = width;
        }
        if (this.y > height - scl) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = height;
        }
    }

    this.show = function () {
        fill(155, 255, 155);
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }
}

function pickLocation() {
    const cols = Math.floor(width / scl);
    const rows = Math.floor(height / scl);
    const x = Math.floor(random(cols));
    const y = Math.floor(random(rows));
    food = p5.prototype.createVector(x, y);
    food.mult(scl);
}
