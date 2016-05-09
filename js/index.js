window.onload=function(){
//banner轮播图的setInterval进程（K）
//楼层轮播图setInterval进程（J）
//天天低价轮播setInterval进程（）

var fixed=getClass("fixed")[0];
  var onebottom=getClass("onebottom")[0];
     rightSolid(fixed,onebottom)
     for(var i=0;i<7;i++){
      var fu=getClass("fixed")[i];
      var zi=getClass("rightsolidbottom")[i];
      rightSolid(fu,zi);
     }



//banner下面的换一批看看
var cnxhImgs=getClass("cnxhImgs");
var cnxhBtn=getClass("cnxh-topright")[0];
var s=0;
cnxhBtn.onclick=function(){
  s++;
  if(s==cnxhImgs.length){
    s=0
  }
  for(var i=0;i<cnxhImgs.length;i++){
    cnxhImgs[i].style="display:none";

  }
  cnxhImgs[s].style="display:block";
}


//右侧显示弹出的动画
  function rightSolid(mouse,change){
        mouse.onmouseover=function(){
          animate(change,{right:30},300,Tween.Quad.easeIn)
        }
        mouse.onmouseout=function(){
          animate(change,{right:-30},400,Tween.Bounce.easeOut)
        }
  }





//   // 一楼选项卡
  var onechose=getClass("one-top-right")[0].getElementsByTagName("div");
  var oneimg=getClass("onechose");
  wheel(onechose,oneimg);

// 二楼选项卡
  var twochose=getClass("two-top-right")[0].getElementsByTagName("div");
  var twoimg=getClass("twochose");
  wheel(twochose,twoimg)

//三楼选项卡
  var threechose=getClass("three-top-right")[0].getElementsByTagName("div");
  var threeimg=getClass("threechose");
  wheel(threechose,threeimg);
  //四楼选项卡
  var fourchose=getClass("four-top-right")[0].getElementsByTagName("div");
  var fourimg=getClass("fourchose");
  wheel(fourchose,fourimg)
  //五楼选项卡
  var fivechose=getClass("five-top-right")[0].getElementsByTagName("div");
  var fiveimg=getClass("fivechose");
  wheel(fivechose,fiveimg)
  //六楼选项卡
  var sixchose=getClass("six-top-right")[0].getElementsByTagName("div");
  var siximg=getClass("sixchose");
  wheel(sixchose,siximg)
  //七楼选项卡
  var sevenchose=getClass("seven-top-right")[0].getElementsByTagName("div");
  var sevenimg=getClass("sevenchose");
  wheel(sevenchose,sevenimg)
  //八楼选项卡
  var eightchose=getClass("eight-top-right")[0].getElementsByTagName("div");
  var eightimg=getClass("eightchose");
  wheel(eightchose,eightimg)
  //九楼选项卡
  var ninechose=getClass("nine-top-right")[0].getElementsByTagName("div");
  var nineimg=getClass("ninechose");
  wheel(ninechose,nineimg)
  //十楼选项卡
  var tenchose=getClass("ten-top-right")[0].getElementsByTagName("div");
  var tenimg=getClass("tenchose");
  wheel(tenchose,tenimg)


  function wheel(chose,img){ //chose是上面的选项 img是下面的图片
    for(i=0;i<img.length;i++){
    chose[i].index=[i];
    chose[0].className="onechosechange"
    chose[i].onmouseover=function(){
      for(var j=0; j<chose.length; j++){
        img[j].style.display="none";
        chose[j].className="onechosenochange"
      }
            img[this.index].style.cssText="display:block;"
            chose[this.index].className="onechosechange"
    }
   }
  }



   //banner轮播图

    var img=getClass("bannerimgs")[0].getElementsByTagName('a');
    var divs=getClass("lunbo")[0].getElementsByTagName('div');
    var num=0;                                                   //在开始前就应该让第一张图片的透明度为1，其他的透明度为0
    divs[0].className="bannergundong"
    img[0].style.opacity="1";
    img[img.length-1].style.opacity="0";
    var k=setInterval(move,2000)
    function move(){
      num++;
    if(num==img.length){num=0;}
    for(var i=0;i<img.length;i++){
       animate(img[i],{opacity:0},500);//循环让不显示的z-index变成空；
       divs[i].className="banneryuan";
       }
        animate(img[num],{opacity:1},500)
        divs[num].className="bannergundong"
    }

        // console.log(num);
        
  //鼠标移入banner时候全部停止轮播,移出是可以继续
  var bannerbj=getClass("banner")[0];
   bannerbj.onmouseover=function(){
    clearInterval(k);
   }
   bannerbj.onmouseout=function(){
    k=setInterval(move,2000);
   }
  //banner处左右箭头，
    var leftBtn=getClass("leftbtn")[0];//之前获取到的是下层半透明的层级，点击事件发生不了
    var rightBtn=getClass("rightbtn")[0];
    rightBtn.onclick=function(){     //当点击没有反应的时候，可以在时间里面输出一些东西
      move()
    }
    leftBtn.onclick=function(){
       num--;
    if(num==-1){num=img.length-1;}
    for(var i=0;i<img.length;i++){
       animate(img[i],{opacity:0},500);//循环让不显示的z-index变成空；
       divs[i].className="banneryuan";
       }
        animate(img[num],{opacity:1},500)
        divs[num].className="bannergundong"
    }
    //banner轮播按钮
    for(var i=0;i<divs.length;i++){
      divs[i].index=i;
      divs[i].onclick=function(){
         for(var j=0;j<divs.length;j++){
          animate(img[j],{opacity:0},500);
          divs[j].className="banneryuan";
         }
         divs[this.index].className="bannergundong";
        animate(img[this.index],{opacity:1},500)
      }
    }


//banner下面的轮播图
   var bannerxiawheel=getClass("bannerbottomwheel")[0];//固定的盒子
   var bannerLbtn=getClass("banner-bottomzjt")[0];//左箭头
   var bannerRbtn=getClass("banner-bottomyjt")[0];//右箭头
   var bannerxiadiv=getClass("bannerbottomWheelimg")[0];//轮播的长幅

  onlyBtn(bannerLbtn,bannerRbtn,bannerxiadiv,1000)
  function onlyBtn(lbtn,rbtn,div,length){//左按钮 右按钮  放图片的整个长条  每次移动的长度
    l=0;
    function move(){
       l++;
       if(l==4){
        l=0
       }
       animate(div,{marginLeft:-l*length},500)
    }
    rbtn.onclick=function(){
      move()
    }
    lbtn.onclick=function(){
        l--;
        if(l==-1){
          l=3;
        }
        animate(div,{marginLeft:-l*length},500)
    
    }
  }

  //
  var headBottomNo=getClass("headBottomNo")[0];
  var headBottomNoBj=getClass("headBottom")[0];
  headBottomNo.onclick=function(){
    headBottomNoBj.style="display:none;"
  }



//天天低价竖直轮播
  var ttdjWheel=getClass("ttdjWheel")[0];
  var ttdjdiv=getClass("TTDJ")[0];
      d=0;
    setInterval(TTDJMOVE,3000);
    function TTDJMOVE(){
     // alert(1)
       d--;
       if(d==-1){
        d=4
       }
       animate(ttdjdiv,{marginTop:-d*120},500)
    }


// var allimg=getClass("lunbowheelimgs")[3].getElementsByTagName("div");
// var imgW=parseInt(getStyle(allimg[0],"width"));
// console.log(imgW)



//更改以后的轮播   双下标
var allfloor=$(".lunbowheel");
for(var b=0;b<allfloor.length;b++){
  g(b);
}

function g(b){
    var now=0;
    var next=0;
    var bigbackground=getClass("lunbowheel")[b];//固定盒子  共同类名lunbowheel
    var allimg=getClass("lunbowheelimgs")[b].getElementsByTagName("div"); //lunbowheelimgs
    var imgW=parseInt(getStyle(allimg[0],"width"));
    var btn=getClass("lunboLunbo")[b].getElementsByTagName("div");//lunboLunbo
    var leftbtn=getClass("lunboZjt")[b];// lunboZjt
    var rightbtn=getClass("lunboYjt")[b];//  lunboYjt

//最大的背景，所有图片，每个图片的宽度，轮播按钮，左边的按钮，右边的按钮，
    allimg[0].style.left=0+'px';
    var t=setInterval(move,3000);

    function move(){
      if(!flag){
        return
      }
      flag=false;
      next++;
      if(next==allimg.length){
        next=0;
      }
      btn[now].className="nochangexiaoheidian";
      btn[next].className="changexiaoheidian";
      allimg[next].style.left=436+'px';//哪个是下一个就把哪个放到后面
      animate(allimg[now],{left:-436},300,function(){
        flag=true;
      });//前一个挪走
      animate(allimg[next],{left:0},300);//后一个变为0
      now=next;

    }
    bigbackground.onmousemove=function(){
      clearInterval(t)
    }
    bigbackground.onmouseout=function(){
      t=setInterval(move,3000)
    }
    for(var i=0;i<btn.length;i++){
      btn[i].index=i;
      var flag=true;
      btn[i].onclick=function(){
        if(this.index>now){
          if(now==this.index||!flag){//开关是解决两三张图duang，duang，duang一起来，now==this.index是解决按同一个轮播按钮的时候会一直动画。
          return;
          }
          flag=false;
          allimg[this.index].style.left=436+"px";//让下一次要获取的放在右边
          animate(allimg[now],{left:-436},300);
          animate(allimg[this.index],{left:0},300,
            function(){
              flag=true;
            });
          btn[now].className="nochangexiaoheidian";
          btn[this.index].className="changexiaoheidian";
          now=this.index;
          next=this.index;//为了把点击轮播按钮的图片和上面的next关联起来；
        }else{
          if(now==this.index||!flag){//开关是解决两三张图duang，duang，duang一起来，now==this.index是解决按同一个轮播按钮的时候会一直动画。
          return;
          }
          flag=false;
          allimg[this.index].style.left=-436+"px";//让下一次要获取的放在右边
          animate(allimg[now],{left:436},300);
          animate(allimg[this.index],{left:0},300,
            function(){
              flag=true;
            });
          btn[now].className="nochangexiaoheidian";
          btn[this.index].className="changexiaoheidian";
          now=this.index;
          next=this.index;//为了把点击轮播按钮的图片和上面的next关联起来；
        }
    
      }
    }
    rightbtn.onclick=function(){//点击右箭头
      move()
    }
    leftbtn.onclick=function(){//点击左箭头
  
      if(!flag){
        return;
      }
      flag=false;
      next--;
      if(next==-1){
        next=allimg.length-1;
      }
      btn[now].className="nochangexiaoheidian";
      btn[next].className="changexiaoheidian";
      allimg[next].style.left=-436+'px';//哪个是下一个就把哪个放到后面
      animate(allimg[now],{left:436},300,function(){
        flag=true;
      });//前一个挪走
      animate(allimg[next],{left:0},300);//后一个变为0
      now=next;
    }
}





// 鼠标移入图片图片会动一下
  var ttdjImg=getClass("ttdjBodyLeftChange")[0].getElementsByTagName("img");
  // console.log(ttdjImg)
  for(var i=0;i<ttdjImg.length;i++){
mouseoverMove(ttdjImg[i],ttdjImg[i])
  }
  // mouseoverMove(ttdjImg[i],ttdjImg[i])
  // mouseoverMove(ttdjImg[2],ttdjImg[2])
   function mouseoverMove(change,move){
   change.onmouseover=function(){
      animate(move,{marginLeft:10},300)
    }
    change.onmouseout=function(){
      animate(move,{marginLeft:0},300)
    }
  }

//楼层的选择
var leftChose=$(".leftchosebox")//获取的每层楼的大盒子
var leftclick=$(".box1",($(".leftChose")[0]))
var leftarr=[];
var lefttop=$(".top",($(".leftChose")[0]));
var leftfoot=$(".foot",($(".leftChose")[0]));
for(var i=0;i<leftChose.length;i++){
  leftarr.push(leftChose[i].offsetTop)//将每层到顶部的高度 放入数组中
  leftclick[i].index=i;
  var doc=document.body.scrollTop?document.body:document.documentElement;
  leftclick[i].onclick=function(){
      animate(doc,{scrollTop:leftarr[this.index]},500)
 }
}
window.onscroll=function(){
  var wh=document.documentElement.clientHeight;
  var weizhi=document.body.scrollTop?document.body:document.documentElement;
  var stop=weizhi.scrollTop;
  var leftwheel=$(".leftChose")[0]//左侧楼层控制的大盒子
  // console.log(leftwheel)
  if(stop<=leftarr[0]-wh){
      leftwheel.style.cssText+="display:none!important";
  }
  if(stop>leftarr[0]-wh){
      leftwheel.style.cssText+="display:block!important";
  }
  for(var j=0;j<leftChose.length;j++){
    if(stop>=leftarr[j]-wh){//当滚动条的高度 大于数组里面的某个值得时候，就改变了。
      for(var z=0;z<leftChose.length;z++){
        lefttop[z].style="display:block";
        leftfoot[z].style="display:none";
      }
      lefttop[j].style="display:none";
      leftfoot[j].style="display:block";
    }

  }

//将asrc属性的值赋值给src
    var axjz=document.querySelectorAll(".anxujiazai");
    var axjzarr=[];
    for(var aj=0;aj<axjz.length;aj++){
        axjzarr.push(axjz[aj].offsetTop)//将每层到顶部的高度 放入数组中
    }
  for(var y=0;y<axjz.length;y++){
    if(stop>=axjzarr[y]-wh){
      getImg(y)
    }
  }
function getImg(y){

  var imgs=axjz[y].getElementsByTagName("img")//获取每层的img
  for(var j=0;j<imgs.length;j++){
    imgs[j].src=imgs[j].getAttribute("asrc");
  }
}


//返回顶部
var solidFoot=$(".totop")[0];
 solidFoot.onclick=function(){
    animate(doc,{scrollTop:0},500)
  }

}

}



