var dress1={name: "Zeppellin Men's Solid Formal Shirt", srce:"../images/fomblu-fomti-m-original-imaegtgqfznsjv4a.jpeg", price : 371, desc: " * mens formal * full hand * free shipping" , category : "men" };
var dress2={name: "BIS creation Men's Shorts", srce:"../images/l-boxer1004-riverhill-original-imaf2eheh9szvtha.jpeg", price : 400, desc: " BIS Creations Self Design Men Red, Blue, Yellow Regular Shorts " , category : "men" };
var dress3={name: "Embroided Lehenga Choli", srce:"../images/free-rbsy-rockon806-beige-oomph-original-imaeqeu9zrudyhap.jpeg", price : 1199, desc: "* unstitched material * colour: Beige,red * free shipping", category : "women" };
var dress4={name: "Women's 3/4th Sleeve top ", srce:"../images/m-ep1602-pink-rare-original-imaeqct5fbzghe4q.jpeg", price : 405, desc: " Rare Casual 3/4th Sleeve Solid Women's Pink Top * free shipping  * cod not applicable ", category : "women" };
var dress5={name: "Full length party dress", srce:"../images/9-10-years-tdf114-tiny-toon-original-imaf4nyg5qbsehkx.jpeg", price : 599, desc: " Tiny Toon Girls Maxi/Full Length Party Dress  (Light Green, Sleeveless) * age : 9-10 yrs ", category : "kids" };
var dress6={name: "Levi's boys cotton T shirt", srce:"../images/12-13-years-917778-u09-levi-s-original-imaerfb8abrdmqg6.jpeg", price : 749, desc: "Levi's Boys Solid Cotton T Shirt  (Blue, Pack of 1) * age : 12-13 yrs " , category : "kids" };
var obj=[dress1,dress2,dress3,dress4,dress5,dress6];
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

function functionFil2(){
var no=0;
for(i=0;i<obj.length;i++)
{
if(obj[i].category=='men')
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
if(obj[i].category=='women')
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
if(obj[i].category=='kids')
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

