function ovarlayH() {
    var ovarlays = document.querySelectorAll('.ovarlay');
    var ovarlaysH = document.getElementById('overlayH');
    ovarlays.forEach(x => {
        x.style.lineHeight = ovarlaysH.offsetHeight + "px";
    });
    console.log("done");
    console.log(ovarlaysH.style.height + "px");
}

ovarlayH();
function activeClass(id) {
    var navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(x => {
        x.classList.remove('active');
    });
    var element = document.getElementById(id);
    element.classList.add('active');
}

function imgChange(id) {
    if (id == 1) {
        document.getElementById("myImg").src = "./img/portfolio/cabin.png";
        document.getElementById("title").innerText = "LOG CABIN";
    } else if (id == 2) {
        document.getElementById("myImg").src = "./img/portfolio/cake.png";
        document.getElementById("title").innerText = "TASTY CAKE";
    } else if (id == 3) {
        document.getElementById("myImg").src = "./img/portfolio/circus.png";
        document.getElementById("title").innerText = "CIRCUS TENT";
    } else if (id == 4) {
        document.getElementById("myImg").src = "./img/portfolio/game.png";
        document.getElementById("title").innerText = "CONTROLLER";
    } else if (id == 5) {
        document.getElementById("myImg").src = "./img/portfolio/safe.png";
        document.getElementById("title").innerText = "LOCKED SAFE";
    } else if (id == 6) {
        document.getElementById("myImg").src = "./img/portfolio/submarine.png";
        document.getElementById("title").innerText = "SUBMARINE";
    }
}
