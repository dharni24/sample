var toy1={name: "Caterpillar soft toy", srce:"../images/caterpillar-55-gifteria-original-imaeq5t4wspahakd.jpeg", price : 209 , desc: "PIST Soft Toys Caterpillar 55 Cm Multicolor - 55 cm  (Multicolor)" };
var toy2={name: "Giant Pink Teddy ", srce:"../images/soft-lovable-hugable-cute-teddy-bear-pink-best-for-someone-original-imaf2q37hycmukpy.jpeg", price : 998, desc: " CLICK4DEAL Soft lovable hugable cute teddy bear Pink - 122 cm  (Pink) " };
var toy3={name: "SHOPMELIVE SML-ELEP", srce:"../images/mother-elephant-with-2-babies-soft-toy-38-cm-38-shopmelive-original-imae6eprnxtszhmx.jpeg", price : 262 , desc: " Mother elephant with two babies soft toy - 40 cm - 41 cm (Bron) " };
var toy4={name: "Toy Mela Joker", srce:"../images/joker-clown-multi-colur-plush-super-cute-38cm-imported-best-original-imaf3rzcy24yzqsz.jpeg", price : 599, desc: " Toy Mela Joker / Clown Multi-Colur Plush Super Cute 38cm Imported Best Cartoon Figure - 38 cm  (Multicolor)" };
var toy5={name: "Pink Teddy bear", srce:"../images/ultra-15-angel-teddy-soft-toy-original-imaencwscxe9hrjm.jpeg", price : 474, desc: "Ultra Angel Teddy Soft Toy - 15 inch  (Pink)" };
var toy6={name: "Dimpy penguin", srce:"../images/71jmDFLTdCL._SL1413_.jpg", price : 265, desc: "funny land Stuff Penguin with Ear Muffs, Blue (20cm)" };
var obj=[ toy1,toy2,toy3,toy4,toy5,toy6];
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
if(obj[i].price<300)
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
if(obj[i].price<500)
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
if(obj[i].price>500)
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

