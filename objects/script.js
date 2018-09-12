/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, bottom, right) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.bottom = bottom
    this.right = right

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="position:absolute;top: ' + this.top + 'px; left:' + this.left + 'px; right: '
            + this.right + 'px;bottom: ' + this.bottom + 'px;" />';
    }

    this.moveRight = function () {
        this.left += 50;
        console.log('left: ' + this.left);
    }

    this.moveBottom = function () {
        this.top += 50;
        console.log("bottom: " + this.top)
    }

    this.moveLeft = function () {
        this.left -= 50;
        console.log("right: " + this.right)
    }

    this.moveTop = function () {
        this.top -= 50;
        console.log("top: " + this.bottom)
    }
}

var hero = new Hero('doraemon.jpg', 20, 10, 200, 90, 90);

function start() {

    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }else if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveBottom()
    }
    // else if (hero.top >= window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size) {
    //      hero.moveLeft()
    // }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();