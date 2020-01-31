//Fase 1
var ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6;
document.write("Hauràs d'introduïr el nom de sis ciutats" + "<br>");
ciutat1 = prompt("Introduex el nom d'una ciutat:",'');
ciutat2 = prompt("Introduex el nom d'una ciutat:",'');
ciutat3 = prompt("Introduex el nom d'una ciutat:",'');
ciutat4 = prompt("Introduex el nom d'una ciutat:",'');
ciutat5 = prompt("Introduex el nom d'una ciutat:",'');
ciutat6 = prompt("Introduex el nom d'una ciutat:",'');

document.write("Has introduït aquestes ciutats:" + "<br>");
document.write(ciutat1 + "<br>");
document.write(ciutat2 + "<br>");
document.write(ciutat3 + "<br>");
document.write(ciutat4 + "<br>");
document.write(ciutat5 + "<br>");
document.write(ciutat6 + "<br>");

//Fase 2
var ciutats = new Array(ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6);
document.write("<br>");
document.write("Ordenem les ciutats per ordre alfabètic i les mostrem:" + "<br>");
document.write((ciutats.sort()).toString());

//Fase 3
document.write("<br>");
document.write("En una nova array canviarem les 'a' per '4' i les ordenarem alfabèticament:" + "<br>");
var ciutatsmodificades = new Array((ciutat1.replace(/a/gi, '4')), (ciutat2.replace(/a/gi, '4')), (ciutat3.replace(/a/gi, '4')), (ciutat4.replace(/a/gi, '4')), (ciutat5.replace(/a/gi, '4')), (ciutat6.replace(/a/gi, '4')) );
document.write((ciutatsmodificades.sort()).toString());

//Fase 4
document.write("<br>");
document.write("En una nova array per cada ciutat, guardarem les lletres i les treurem del dret i del revés:" + "<br>");
var Arrayciutat1 = new Array();
var Arrayciutat2 = new Array();
var Arrayciutat3 = new Array();
var Arrayciutat4 = new Array();
var Arrayciutat5 = new Array();
var Arrayciutat6 = new Array();
var i;

for (i = 0; i < ciutat1.length; i++)
{
    Arrayciutat1.push(ciutat1.substr(i,1));
}

for (i = 0; i < ciutat2.length; i++)
{
    Arrayciutat2.push(ciutat2.substr(i,1));
}

for (i = 0; i < ciutat3.length; i++)
{
    Arrayciutat3.push(ciutat3.substr(i,1));
}

for (i = 0; i < ciutat4.length; i++)
{
    Arrayciutat4.push(ciutat4.substr(i,1));
}

for (i = 0; i < ciutat5.length; i++)
{
    Arrayciutat5.push(ciutat5.substr(i,1));
}

for (i = 0; i < ciutat6.length; i++)
{
    Arrayciutat6.push(ciutat6.substr(i,1));
}

var dret = "";
var reves = "";
var juntar = "";
var separador = "-";

for (i = 0; i < Arrayciutat1.length; i++)
{
    juntar = dret;
    dret = juntar + Arrayciutat1[i];
}
reves = dret + separador;
for (i = Arrayciutat1.length - 1; i >= 0; i--)
{
    juntar = reves;
    reves = juntar + Arrayciutat1[i];
}
document.write(reves + "<br>");
dret = "";
reves = "";
juntar = "";
for (i = 0; i < Arrayciutat2.length; i++)
{
    juntar = dret;
    dret = juntar + Arrayciutat2[i];
}
reves = dret + separador;
for (i = Arrayciutat2.length - 1; i >= 0; i--)
{
    juntar = reves;
    reves = juntar + Arrayciutat2[i];
}
document.write(reves + "<br>");
dret = "";
reves = "";
juntar = "";
for (i = 0; i < Arrayciutat3.length; i++)
{
    juntar = dret;
    dret = juntar + Arrayciutat3[i];
}
reves = dret + separador;
for (i = Arrayciutat3.length - 1; i >= 0; i--)
{
    juntar = reves;
    reves = juntar + Arrayciutat3[i];
}
document.write(reves + "<br>");
dret = "";
reves = "";
juntar = "";
for (i = 0; i < Arrayciutat4.length; i++)
{
    juntar = dret;
    dret = juntar + Arrayciutat4[i];
}
reves = dret + separador;
for (i = Arrayciutat4.length - 1; i >= 0; i--)
{
    juntar = reves;
    reves = juntar + Arrayciutat4[i];
}
document.write(reves + "<br>");
dret = "";
reves = "";
juntar = "";
for (i = 0; i < Arrayciutat5.length; i++)
{
    juntar = dret;
    dret = juntar + Arrayciutat5[i];
}
reves = dret + separador;
for (i = Arrayciutat5.length - 1; i >= 0; i--)
{
    juntar = reves;
    reves = juntar + Arrayciutat5[i];
}
document.write(reves + "<br>");
dret = "";
reves = "";
juntar = "";
for (i = 0; i < Arrayciutat6.length; i++)
{
    juntar = dret;
    dret = juntar + Arrayciutat6[i];
}
reves = dret + separador;
for (i = Arrayciutat6.length - 1; i >= 0; i--)
{
    juntar = reves;
    reves = juntar + Arrayciutat6[i];
}
document.write(reves + "<br>");