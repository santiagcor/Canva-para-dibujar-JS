document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove",dibujarMouse);

var cuadrito =document.getElementById("espacio_dibujo");
var papel=cuadrito.getContext("2d");
var x=250;
var y=250;
var estado_click=0;
var colordef="black";

var imagen="imagen.jpg";

var fondo=new Image();
fondo.src=imagen;
fondo.addEventListener("load",dibujarfondo);


function dibujarfondo()
{
    papel.drawImage(fondo,0,0);
}

 dibujarlinea(colordef,0,0,0,500,papel)
 dibujarlinea(colordef,500,0,500,500,papel)
 dibujarlinea(colordef,0,500,500,500,papel)
 dibujarlinea(colordef,0,0,500,0,papel)

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle =color;
    lienzo.lineWidth=3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarMouse(evento)
{   
    
    var opcion=estado_click;
    if(opcion==1)
    {
        dibujarlinea(colordef,x,y,evento.layerX,evento.layerY,papel)
    }
    x=evento.layerX;
    y=evento.layerY;
    
}

function presionarMouse(evento)
{
    estado_click=1;
    return estado_click;

}

function soltarMouse(evento)
{
    estado_click=0; 
    return estado_click;
}