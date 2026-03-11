function spinWheel(){

var wheel=document.getElementById("wheel");

var deg=Math.floor(2000+Math.random()*1000);

wheel.style.transform="rotate("+deg+"deg)";

}