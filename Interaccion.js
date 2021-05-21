var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var boton = document.getElementById("boton");
boton.addEventListener("click", guardarImagen);
document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
var x = 212.5;
var y = 212.5;

dibujarLinea(" #ff1919 ", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  var colorcito = "#ff1919";
  var movimiento = 6;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
  }
}
function guardarImagen() {
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  window.location.href = image;
}
