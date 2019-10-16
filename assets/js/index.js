$(document).ready(function () {
    $("#link_nosotros").bind("click", function () {
        alert("I am clicked !");
    });
});
function potencia(base, potencia) {
    return Math.pow(base, potencia);
}
console.log(potencia(2, 33));
