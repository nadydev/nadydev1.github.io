let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector('.menu');
menu.onclick=() =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');

}


// Notification Animation
let bell= document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active');
}

//Swiper     
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay:5000,
        disableOneInteraction:false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  // Scroll Bar 
  window.onscroll = function() {
    scrollAction()
  };

  function scrollAction(){
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winscroll / height) * 100 ;
    document.getElementById('scroll-bar').style.width =scrolled + '%';
  }


  var flag = true;


  // function changeColor() {
  //     if (flag) {
  //         r.style.setProperty('--main-color', '#0d81ec');//blue colour
  //        document.getElementById("color").style.backgroundColor="#0d81ec"
  //         flag = false;
  //     }
  //     else {
  //         r.style.setProperty('--main-color', '#fa5353'); //The main colour
  //         document.getElementById("color").style.backgroundColor="#fa5353"
  //         flag = true;
  //     }
  // }
  
  function changeColor(){
  var root = document.querySelector(':root');

    // while(true){
  

      var r =Math.round(Math.random()*255);
      var g =Math.round(Math.random()*255);
      var b =Math.round(Math.random()*255);
      var randomColor = `rgba( ${r}, ${g}, ${b})`;
      root.style.setProperty('--main-color', randomColor);//blue colour

      // var a =Math.random()
   document.getElementById("color").style.backgroundColor= randomColor;
  
    
  }
  // }
