let Hero = function(image, top, left, size) {
    this.image = image
    this.top = top || 0
    this.left = left || 0
    this.size = size || 100

    this.stopR = false
    this.stopB = true
    this.stopL = true
    this.stopT = true

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
}

let hero = new Hero('doraemon.jpg', 0, 0, 200);

function start1() {
    if (hero.left < window.innerWidth - hero.size - 50 && hero.stopR == false && hero.stopT && hero.stopL && hero.stopB) {
        hero.moveRight(50)
    } else {
        hero.stopR = true
        hero.stopB = false
    }

    if (hero.top < window.innerHeight - hero.size - 50 && hero.stopR && hero.stopT && hero.stopB == false) {
        hero.moveBottom(50)
    } else {
        hero.stopB = true
        hero.stopL = false
    }

    if (hero.left > 0 && hero.stopR && hero.stopB && hero.stopL == false) {
        hero.moveRight(-50);
    } else {
        hero.stopL = true
        hero.stopT = false
    }
    //
    if (hero.top > 0 && hero.stopB && hero.stopL && hero.stopT == false) {
        hero.moveBottom(-50);
    } else {
        hero.stopT = true
        hero.stopR = false
    }
    //
    setTimeout(start1, 100)
    document.getElementById('game').innerHTML = hero.getHeroElement();
}
start1()