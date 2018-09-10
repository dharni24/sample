var mobile1={name: "Samsung Galaxy S9 plus", srce:"../images/samsung-galaxy-s9-plus-g9650-dual-sim-4g-f0lklq.jpg", price : 68900, desc: "* 6 GB RAM | 128 GB ROM\n* 12MP + 12MP dual rear camera\n* 8MP front camera\n* battery : 3500 mAh" };
var mobile2={name: "Samsung J4", srce:"../images/samsung j4.jpg",  price: 9990, desc:"* 2 gb RAM | 16 GB ROM\n* 13MP rear camera\n* 5MP front camera\n*battery 3000 mAh"};
var mobile3={name: "Redmie Note 5 pro", srce:"../images/Xiaomi-Redmi-Note-5-Pro-Design.jpg", price: 14999,desc : "*4 GB RAM | 64 GB ROM\n* 12MP + 5MP dual rear camera\n* 20MP front camera\n* battery : 4000 mAh li polymer battery" }; 
var mobile4={name: "Redmie Note 5", srce:"../images/index_redmi5plus_black.png" , price: 9999,desc: "* 3 GB RAM | 32 GB ROM\n*  12 MP rear camera\n* 5 MP front camera\n* 4000 mAh li polymer battery" };
var mobile5={name: "Apple iPhone 8", srce:"../images/iphone8-plus-spgray-select-2018.jpg" ,price: 67499, desc: "* 64 GB ROM * 12MP Rear camera * 7MP Front Camera * lithium-ion Battery "};
var mobile6={name: "VIVO V9 Youth", srce:"../images/vivo_v9_youth.png" ,price:18990, desc: "* 4GB RAM | 32 GB ROM * 16MP + 2MP Dual Rear Camera | 16MP Front camera * 3260 mAh li-ion Battery "};
var mobile=[mobile1,mobile2,mobile3,mobile4,mobile5,mobile6];
function functionAll() {
var no;
for(i=0;i<mobile.length;i++)
{
no=i+1;
document.getElementById(no+"mobiletit").innerHTML = mobile[i].name;
document.getElementById(no+"mobileimg").src=mobile[i].srce;
document.getElementById(no+"mobilepri").innerHTML = "Now @ Rs. "+mobile[i].price;
document.getElementById(no+"mobiledesc").innerHTML = mobile[i].desc;
document.getElementById(no+"mobiletit").style.display = 'block';
document.getElementById(no+"mobileimg").style.display = 'block';
document.getElementById(no+"mobilepri").style.display = 'block';
document.getElementById(no+"mobiledesc").style.display = 'block';

}
for(j=no;j<7;j++)
{
var no1=j+1;
document.getElementById(no1+"mobiletit").style.display = 'none';
document.getElementById(no1+"mobileimg").style.display = 'none';
document.getElementById(no1+"mobilepri").style.display = 'none';
document.getElementById(no1+"mobiledesc").style.display = 'none';
}
}

function functionFil1(){
var no=0;
for(i=0;i<mobile.length;i++)
{
if(mobile[i].price<10000)
{
no=no+1;
document.getElementById(no+"mobiletit").innerHTML = mobile[i].name;
document.getElementById(no+"mobileimg").src=mobile[i].srce;
document.getElementById(no+"mobilepri").innerHTML = "Now @ Rs. "+mobile[i].price;
document.getElementById(no+"mobiledesc").innerHTML = mobile[i].desc;
document.getElementById(no+"mobiletit").style.display = 'block';
document.getElementById(no+"mobileimg").style.display = 'block';
document.getElementById(no+"mobilepri").style.display = 'block';
document.getElementById(no+"mobiledesc").style.display = 'block';

}
}
for(j=no+1;j<7;j++)
{
document.getElementById(j+"mobiletit").style.display = 'none';
document.getElementById(j+"mobileimg").style.display = 'none';
document.getElementById(j+"mobilepri").style.display = 'none';
document.getElementById(j+"mobiledesc").style.display = 'none';

}

}

function functionFil2(){
var no=0;
for(i=0;i<mobile.length;i++)
{
if(mobile[i].price<20000)
{
no=no+1;
document.getElementById(no+"mobiletit").innerHTML = mobile[i].name;
document.getElementById(no+"mobileimg").src=mobile[i].srce;
document.getElementById(no+"mobilepri").innerHTML = "Now @ Rs. "+mobile[i].price;
document.getElementById(no+"mobiledesc").innerHTML = mobile[i].desc;
document.getElementById(no+"mobiletit").style.display = 'block';
document.getElementById(no+"mobileimg").style.display = 'block';
document.getElementById(no+"mobilepri").style.display = 'block';
document.getElementById(no+"mobiledesc").style.display = 'block';
}
}
for(j=no+1;j<7;j++)
{
document.getElementById(j+"mobiletit").style.display = 'none';
document.getElementById(j+"mobileimg").style.display = 'none';
document.getElementById(j+"mobilepri").style.display = 'none';
document.getElementById(j+"mobiledesc").style.display = 'none';
}

}

function functionFil3(){
var no=0;
for(i=0;i<mobile.length;i++)
{
if(mobile[i].price>30000)
{
no=no+1;
document.getElementById(no+"mobiletit").innerHTML = mobile[i].name;
document.getElementById(no+"mobileimg").src=mobile[i].srce;
document.getElementById(no+"mobilepri").innerHTML = "Now @ Rs. "+mobile[i].price;
document.getElementById(no+"mobiledesc").innerHTML = mobile[i].desc;
document.getElementById(no+"mobiletit").style.display = 'block';
document.getElementById(no+"mobileimg").style.display = 'block';
document.getElementById(no+"mobilepri").style.display = 'block';
document.getElementById(no+"mobiledesc").style.display = 'block';
}
}
for(j=no+1;j<7;j++)
{
document.getElementById(j+"mobiletit").style.display = 'none';
document.getElementById(j+"mobileimg").style.display = 'none';
document.getElementById(j+"mobilepri").style.display = 'none';
document.getElementById(j+"mobiledesc").style.display = 'none';
}

}

