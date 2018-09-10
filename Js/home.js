var lap3={name: "HP Pavilion x360", srce:"images/hp-na-2-in-1-laptop-original-imaf6b86z5cj3vux.jpeg", price: 55990 ,desc :"* Intel Core i5 Processor (8th Gen) * 8 GB DDR4 RAM * 1 TB HDD|8 GB SSD * 64 bit windows 10 Operating System * 14 inch touchscreen Display " }; 
var lap2={name: "Lenovo Ideapad 320", srce:"images/34-332-728-V01.jpg",  price: 30990 , desc:"* Intel Core i3 Processor (6th Gen) * 4 GB DDR4 RAM * 1 TB HDD * DOS Operating System * 15.6 inch Display "};
var dress4={name: "Women's 3/4th Sleeve top ", srce:"images/m-ep1602-pink-rare-original-imaeqct5fbzghe4q.jpeg", price : 405, desc: " Rare Casual 3/4th Sleeve Solid Women's Pink Top * free shipping  * cod not applicable ", category : "women" };
var dress6={name: "Levi's boys cotton T shirt", srce:"images/12-13-years-917778-u09-levi-s-original-imaerfb8abrdmqg6.jpeg", price : 749, desc: "Levi's Boys Solid Cotton T Shirt  (Blue, Pack of 1) * age : 12-13 yrs " , category : "kids" };
var pd4={name: "Hello Kitty Pendrive", srce:"images/dragon-3d-cartoon-hello-kitty-shape-toy-8gb-capacity-cute-flash-original-imaegyfcysrz6twh.jpeg", price : 699, desc: "* USB 2.0 | 8 GB *  Rubber * For Laptop, Audio Player, Desktop Computer, Televison * Color : Muticolor " , capacity : 8 };
var pd6={name: "Microware 16 Gb Pendrive", srce:"images/microware-8gb-bullet-metal-shape-original-imadthbbve5gbqts.jpeg", price : 799, desc: "* Bullet Metal Shape * USB 2.0 | 16 Gb * Metal * Color : Silver" , capacity : 16 };
var mobile4={name: "Redmie Note 5", srce:"images/index_redmi5plus_black.png" , price: 9999,desc: "* 3 GB RAM | 32 GB ROM\n*  12 MP rear camera\n* 5 MP front camera\n* 4000 mAh li polymer battery" };
var toy1={name: "Caterpillar soft toy", srce:"images/caterpillar-55-gifteria-original-imaeq5t4wspahakd.jpeg", price : 209 , desc: "PIST Soft Toys Caterpillar 55 Cm Multicolor - 55 cm  (Multicolor)" };
var toy6={name: "Dimpy penguin", srce:"images/71jmDFLTdCL._SL1413_.jpg", price : 265, desc: "funny land Stuff Penguin with Ear Muffs, Blue (20cm)" };

var obj=[toy1,toy6,dress4,lap3,lap2,dress6,pd4,pd6,mobile4];
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
for(j=no;j<10;j++)
{
var no1=j+1;
document.getElementById(no1+"tit").style.display = 'none';
document.getElementById(no1+"img").style.display = 'none';
document.getElementById(no1+"pri").style.display = 'none';
document.getElementById(no1+"desc").style.display = 'none';
}
}
