//cw = 1, ccw = 2
var orientation = 1;
document.addEventListener("click", promijeniSmjerRotacije);
 
function promijeniSmjerRotacije() {
    if (orientation === 1) {
        document.getElementById('frame').className = 'okvir-ccw';
        orientation = 2;
    } else {
        document.getElementById('frame').className = 'okvir-cw';
        orientation = 1;
    }
}