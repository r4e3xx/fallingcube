let square=document.getElementById("square1");
let square1=document.getElementById("square2")
let here=0;
let v=0;
let g=4;
let deg=0;
let deg2=0;
let vdeg=0;
let adeg=0.5;
let l=1000;
let vleft=15;
let left=0;
let left2=0;
let part=document.getElementById("part");
let parthere=0;
let vpart=-50;
let partdeg1=85;
let partdeg=0;
let vpartdeg=1;
let part1=document.getElementById("part1");
let part2=document.getElementById("part2");
let part3=document.getElementById("part3");
let part4=document.getElementById("part4")
let vleftpart1=29;
let vleftpart2=17;
let vleftpart3=15;
let vleftpart4=33;
let leftpart1=0;
let leftpart2=0;
let leftpart3=0;
let leftpart4=0;
function move() {
    if (here >= l) {
    	v = v*0.8;
    	adeg = adeg*0.8;
    	reflect();
    	glass();
        return 0;
    }
    here += v;
    v += g;
    deg += vdeg;
    deg2 -= vdeg;
    vdeg += adeg;
    square.style.transform = "translateY(" + here + "px) rotateX(" + deg2 + "deg) rotateZ(" + deg2 + "deg) rotateY(" + deg2 + "deg)";
    square1.style.transform = "translateY(" + here + "px) rotateX(" + deg + "deg) rotateZ(" + deg + "deg) rotateY(" + deg + "deg)";
    setTimeout(move, 20);
}
function glass(){
	if (parthere >= l) {
		return 0;
	}
	parthere += vpart;
	vpart += g;
	partdeg1 -= vpartdeg
	partdeg += vpartdeg;
	leftpart1 -= vleftpart1;
	leftpart2 -= vleftpart2;
	leftpart3 += vleftpart3;
	leftpart4 += vleftpart4;
    part.style.transform = "translateY(" + parthere + "px) rotateX(" + -partdeg1 + "deg) rotateZ(" + partdeg + "deg) rotateY(" + -partdeg + "deg)";
    part1.style.transform = "translateY(" + parthere + "px) translateX(" + leftpart1 + "px) rotateX(" + partdeg1 + "deg) rotateZ(" + -partdeg + "deg) rotateY(" + partdeg + "deg)";
    part2.style.transform = "translateY(" + parthere + "px) translateX(" + leftpart2 + "px) rotateX(" + partdeg1 + "deg) rotateZ(" + -partdeg + "deg) rotateY(" + partdeg + "deg)";
    part3.style.transform = "translateY(" + parthere + "px) translateX(" + leftpart3 + "px) rotateX(" + -partdeg1 + "deg) rotateZ(" + -partdeg + "deg) rotateY(" + -partdeg + "deg)";
    part4.style.transform = "translateY(" + parthere + "px) translateX(" + leftpart4 + "px) rotateX(" + partdeg1 + "deg) rotateZ(" + -partdeg + "deg) rotateY(" + -partdeg + "deg)";
    setTimeout(glass, 20);
}
function reflect(){
	if (here >= l*2) {
		return 0;
	}
	left2 -= vleft;
	left += vleft;
	here -= v;
	v -= g;
    deg += vdeg;
    deg2 -= vdeg;
    vdeg += adeg;
    square.style.transform = "translateX(" + left2 + "px) translateY(" + here + "px) rotateX(" + deg2 + "deg) rotateZ(" + deg2 + "deg) rotateY(" + deg2 + "deg)";
    square1.style.transform = "translateX(" + left + "px) translateY(" + here + "px) rotateX(" + deg + "deg) rotateZ(" + deg + "deg) rotateY(" + deg + "deg)";
    setTimeout(reflect, 20);
} 