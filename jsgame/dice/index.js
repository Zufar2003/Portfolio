var n = Math.floor(Math.random()*6)+1;
var image1 = "images/dice" + n + ".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);

var m = Math.floor(Math.random()*6)+1;
var image2 = "images/dice"+m+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);

if (n>m){
    document.querySelector("h1").innerHTML = "1-O'yinchi g'olib bo'ldi";
}

else if (m>n){
    document.querySelector("h1").innerHTML = "2-O'yinchi g'olib bo'ldi";
}

else {
    document.querySelector("h1").innerHTML = "Durang";
}
