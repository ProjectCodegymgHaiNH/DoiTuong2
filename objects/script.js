/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image
    this.top = top || 0
    this.left = left || 0
    this.size = size || 100

    this.stopR = true
    this.stopB = false
    this.stopL = false
    this.stopT = false

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="position:absolute;top: ' + this.top + 'px; left:' + this.left + 'px;" />'
    }

    this.moveRight = function (so) {
        this.left += so;
        console.log('left: ' + this.left);
    }

    this.moveBottom = function (so) {
        this.top += so;
        console.log("bottom: " + this.top)
    }

    this.moveLeft = function (so) {
        this.left -= so;
        console.log("right: " + this.right)
    }

    this.moveTop = function (so) {
        this.top -= so;
        console.log("top: " + this.bottom)
    }
}

var hero = new Hero('doraemon.jpg', 0, 0, 200);

function start() {
        if (hero.left < window.innerWidth - hero.size - 50 && hero.stopR && hero.stopT == false && hero.stopL == false && hero.stopB ==false) {
            hero.moveRight(50)
        } else {
            hero.stopR = false
            hero.stopB = true
        }


        if (hero.top < window.innerHeight - hero.size -50 && hero.stopR== false && hero.stopT==false && hero.stopB) {
            hero.moveBottom(50)
        } else {
            hero.stopB = false
            hero.stopL = true
        }

        if (hero.left>0 && hero.stopR == false && hero.stopB == false && hero.stopL) {
            hero.moveRight(-50);
        } else {
            hero.stopL = false
            hero.stopT = true
        }
    //
        if (hero.top>=0 && hero.stopB == false && hero.stopL == false && hero.stopT) {
            hero.moveBottom(-50);
        } else {
            hero.stopT = false
            hero.stopR = true
        }
    //
    setTimeout(start, 100)
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

start()