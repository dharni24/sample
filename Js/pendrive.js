var pd1={name: "Sandisk Cruzer Blade 16 GB", srce:"../images/sandisk-cruzer-blade-16-gb-original-imad4dyumyqy3b4y.jpeg", price : 425 , desc: "* USB 2.0 | 16 GB * plastic * For Laptop, Desktop Computer * Color : Red and Black" , capacity: 16};
var pd2={name: "Sandisk Cruzer Blade 32 GB", srce:"../images/sandisk-sdcz50-032g-a11-original-imad9xzhqsgkprnu.jpeg", price : 679, desc: "* USB 2.0 | 32 GB * plastic * For Laptop, Desktop Computer * Color : Red and Black" , capacity: 32 };
var pd3={name: "HP V215b USB Flash Drive", srce:"../images/hp-v215b-usb-flash-drive-pendrive-32gb-usb-2-0-original-imaf3ryaa9fgy6sn.jpeg", price : 665 , desc: "* USB 2.0 | 32 GB * Metal * For Laptop, Audio Player, Desktop Computer, Televison * Color : Silver " , capacity : 32 };
var pd4={name: "Hello Kitty Pendrive", srce:"../images/dragon-3d-cartoon-hello-kitty-shape-toy-8gb-capacity-cute-flash-original-imaegyfcysrz6twh.jpeg", price : 699, desc: "* USB 2.0 | 8 GB *  Rubber * For Laptop, Audio Player, Desktop Computer, Televison * Color : Muticolor " , capacity : 8 };
var pd5={name: "Sandisk 64 GB Pendrive", srce:"../images/sandisk-cz-48-original-imadnwggxcspffrc.jpeg", price : 1699, desc: "* USB 3.0 | 64 GB * plastic * For Laptop, Desktop Computer * Color : Black" , capacity: 64 };
var pd6={name: "Microware 16 Gb Pendrive", srce:"../images/microware-8gb-bullet-metal-shape-original-imadthbbve5gbqts.jpeg", price : 799, desc: "* Bullet Metal Shape * USB 2.0 | 16 Gb * Metal * Color : Silver" , capacity : 16 };
var obj=[ pd1,pd2,pd3,pd4,pd5,pd6];
function functionAll() {
var no;
for(i=0;i<obj.length;i++)
{
no=i+1;
document.getElementById(no+"tit").innerHTML = obj[i].name;
document.getElementById(no+"img").src=obj[i].srce;
document.getElementById(no+"pri").innerHTML = "Now @ Rs. "+obj[i].price;
document.getElementById(no+"desc").innerHTML = obj[i].desc;
document.getElementById(no+"tit").style.display = 'block';
document.getElementById(no+"img").style.display = 'block';
document.getElementById(no+"pri").style.display = 'block';
document.getElementById(no+"desc").style.display = 'block';

}
for(j=no;j<7;j++)
{
var no1=j+1;
document.getElementById(no1+"tit").style.display = 'none';
document.getElementById(no1+"img").style.display = 'none';
document.getElementById(no1+"pri").style.display = 'none';
document.getElementById(no1+"desc").style.display = 'none';
}
}

function functionFil1(){
var no=0;
for(i=0;i<obj.length;i++)
{
if(obj[i].capacity==8)
{
no=no+1;
document.getElementById(no+"tit").innerHTML = obj[i].name;
document.getElementById(no+"img").src=obj[i].srce;
document.getElementById(no+"pri").innerHTML = "Now @ Rs. "+obj[i].price;
document.getElementById(no+"desc").innerHTML = obj[i].desc;
document.getElementById(no+"tit").style.display = 'block';
document.getElementById(no+"img").style.display = 'block';
document.getElementById(no+"pri").style.display = 'block';
document.getElementById(no+"desc").style.display = 'block';
}
}
for(j=no+1;j<7;j++)
{
document.getElementById(j+"tit").style.display = 'none';
document.getElementById(j+"img").style.display = 'none';
document.getElementById(j+"pri").style.display = 'none';
document.getElementById(j+"desc").style.display = 'none';

}

}

function functionFil2(){
var no=0;
for(i=0;i<obj.length;i++)
{
if(obj[i].capacity==16)
{
no=no+1;
document.getElementById(no+"tit").innerHTML = obj[i].name;
document.getElementById(no+"img").src=obj[i].srce;
document.getElementById(no+"pri").innerHTML = "Now @ Rs. "+obj[i].price;
document.getElementById(no+"desc").innerHTML = obj[i].desc;
document.getElementById(no+"tit").style.display = 'block';
document.getElementById(no+"img").style.display = 'block';
document.getElementById(no+"pri").style.display = 'block';
document.getElementById(no+"desc").style.display = 'block';
}
}
for(j=no+1;j<7;j++)
{
document.getElementById(j+"tit").style.display = 'none';
document.getElementById(j+"img").style.display = 'none';
document.getElementById(j+"pri").style.display = 'none';
document.getElementById(j+"desc").style.display = 'none';

}
}
function functionFil3(){
var no=0;
for(i=0;i<obj.length;i++)
{
if(obj[i].capacity==32)
{
no=no+1;
document.getElementById(no+"tit").innerHTML = obj[i].name;
document.getElementById(no+"img").src=obj[i].srce;
document.getElementById(no+"pri").innerHTML = "Now @ Rs. "+obj[i].price;
document.getElementById(no+"desc").innerHTML = obj[i].desc;
document.getElementById(no+"tit").style.display = 'block';
document.getElementById(no+"img").style.display = 'block';
document.getElementById(no+"pri").style.display = 'block';
document.getElementById(no+"desc").style.display = 'block';
}
}
for(j=no+1;j<7;j++)
{
document.getElementById(j+"tit").style.display = 'none';
document.getElementById(j+"img").style.display = 'none';
document.getElementById(j+"pri").style.display = 'none';
document.getElementById(j+"desc").style.display = 'none';

}

}

function functionFil4(){
var no=0;
for(i=0;i<obj.length;i++)
{
if(obj[i].capacity==64)
{
no=no+1;
document.getElementById(no+"tit").innerHTML = obj[i].name;
document.getElementById(no+"img").src=obj[i].srce;
document.getElementById(no+"pri").innerHTML = "Now @ Rs. "+obj[i].price;
document.getElementById(no+"desc").innerHTML = obj[i].desc;
document.getElementById(no+"tit").style.display = 'block';
document.getElementById(no+"img").style.display = 'block';
document.getElementById(no+"pri").style.display = 'block';
document.getElementById(no+"desc").style.display = 'block';
}
}
for(j=no+1;j<7;j++)
{
document.getElementById(j+"tit").style.display = 'none';
document.getElementById(j+"img").style.display = 'none';
document.getElementById(j+"pri").style.display = 'none';
document.getElementById(j+"desc").style.display = 'none';

}

}

