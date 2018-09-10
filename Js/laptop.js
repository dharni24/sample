var lap1={name: "Acer Aspire 3", srce:"../images/acer-na-laptop-original-imaf4fuwgy6dfsb4.jpeg", price : 27990, desc: "* Intel Core i3 Processor (7th Gen) * 4 GB DDR4 RAM * 1 TB HDD * Linux/Ubuntu Operating System * 15.6 inch Display" };
var lap2={name: "Lenovo Ideapad 320", srce:"../images/34-332-728-V01.jpg",  price: 30990 , desc:"* Intel Core i3 Processor (6th Gen) * 4 GB DDR4 RAM * 1 TB HDD * DOS Operating System * 15.6 inch Display "};
var lap3={name: "HP Pavilion x360", srce:"../images/hp-na-2-in-1-laptop-original-imaf6b86z5cj3vux.jpeg", price: 55990 ,desc :"* Intel Core i5 Processor (8th Gen) * 8 GB DDR4 RAM * 1 TB HDD|8 GB SSD * 64 bit windows 10 Operating System * 14 inch touchscreen Display " }; 
var lap4={name: "Acer Aspire 5", srce:"../images/acer-na-laptop-original-imaf64gnj4zrf6ft.jpeg",price: 47490, desc: "Intel Core i5 Processor (8th Gen) * 8 GB DDR4 RAM * 1 TB HDD * Linux/Ubuntu Operating System * 15.6 inch Display" };
var lap5={name: "Dell inspiron 14 3000", srce:"../images/dell-na-laptop-original-imaf4zfgdm7nekzz.jpeg" ,price: 26989, desc: "* Intel Core i3 Processor (6th Gen) * 4 GB DDR4 RAM * 1 TB HDD * 64 bit Windows 10 Operating System * 14 Display "};
var lap6={name: "Apple MacBook Air", srce:"../images/apple-na-notebook-original-imaevdrcvuksg2zv.jpeg" ,price:54989, desc: "* Intel Core i5 Processor (5th Gen) * 8 GB DDR3 RAM * 1 TB HDD|128 GB SSD * 64 bit Mac OS Operating System * 13.3 inch touchscreen Display " };
var obj=[lap1,lap2,lap3,lap4,lap5,lap6];
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
if(obj[i].price<30000)
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
if(obj[i].price<50000)
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
if(obj[i].price>50000)
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

