var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * number);
}

function txtColChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.getElementById("txt").style.color = rndCol;
}

btn.addEventListener('click', txtColChange);