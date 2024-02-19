let bulbbodies = document.getElementsByClassName("bulbbody")
let on = 0, off = bulbbodies.length - 1, id = null

function reset() {
    for (let i = 0; i < bulbbodies.length; i++) {
        let bulbbody = bulbbodies[i];
        bulbbody.style.backgroundColor = "white"
    }
}
function closeAll() {
    clearInterval(id);
    reset();
}

function startAll() {
    clearInterval(id)
    reset();
    console.log("startAll")
    id = setInterval(change, 1000)
}

function start1By1() {
    clearInterval(id)
    reset();
    console.log("start1By1")
    id = setInterval(change1By1, 1000)
}

function change() {
    for (let i = 0; i < bulbbodies.length; i++) {
        let bulbbody = bulbbodies[i];
        if (bulbbody.style.backgroundColor === "white") {
            bulbbody.style.backgroundColor = "yellow"
        }
        else {
            bulbbody.style.backgroundColor = "white"
        }
    }
}

function change1By1() {
    bulbbodies[on].style.backgroundColor = "yellow"
    bulbbodies[off].style.backgroundColor = "white"
    on = (on + 1) % bulbbodies.length
    off = (off + 1) % bulbbodies.length
}