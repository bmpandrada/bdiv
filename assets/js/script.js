
$(document).ready(function () {
  //THIS IS FOR INTRO CONTENT
  const content = "Bruce Div";
  
  const ele = "<span>" + content.split("").join("</span><span>") + "</span>";

  $(ele)
    .hide()
    .appendTo(".container h2")
    .each(function (i) {
      $(this)
        .delay(100 * i)
        .css({
          display: "inline",
          opacity: 0,
        })
        .animate(
          {
            opacity: 1,
          },
          100
        );
    });

  //THIS IS FOR MENU TOGGLE
  //MENU TAB WILL APPEAR AFTER MINIMIZING
  $(".menu-btn").click(function () {
    $(this).toggleClass("active");

    $(".navbar .menu").toggleClass("active");
    $(".menu-btn img").toggleClass("active");
  });

  //THIS IS FOR AFTER CLICK MENU//
  $(".navbar .menu").on("click", (event) => {
    $(event.currentTarget).toggleClass("active");
    $(this).find(".menu-btn").toggleClass("active");
  });

  //THIS IS FOR read/less text
  $(".about-container .right .read .readmore").click(function() {
    $(this).text($(this).text() == 'See Less' ? 'Read more...' : 'See Less');
});
$('.about-container .right .read').click(function() {
    $(this).toggleClass('active');
    $('.about-container .right .more').delay(200).slideToggle(500)("active");
});

  //THIS IS FOR link smooth behavior
  $("a").click(function () {
    $("*").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1000
    );
  });

//banner parallax


$(".dummy").mousemove(function(event) {
  // get vertical mouse coordinate inside div
  var mouseVertical = event.clientX;
  
  // adjust css to follow mouse position
  $("#player").css({
    "transform" : "rotate(-" + (mouseVertical * 0.) + "deg)",
    "margin-top" : 0 - (mouseVertical * 0.02),
    "margin-left" : 0 + (mouseVertical * 0.03)
  });
});


window.addEventListener('scroll', function(){
  var value  = window.scrollY;

  spaceship.style.left = +value * 0.5 + 'px';
  

  moon.style.top = +value * 0.08 + 'px';
  moon.style.left = value * 0.1 + 'px';

  astro.style.top = value * 1.2 + 'px';
  astro.style.left = +value * 0.2 + 'px';
  ball.style.left = +value * 0.1 + 'px';

  // space2.style.top = -value * 0.1 + 'px';
  

  
  
});




  //navigation switch sticky
  $(window).scroll(function () {

    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
      $('nav .max-width').addClass("sticky");
      $('.menu-btn').addClass("sticky")
  } else {
      $('.navbar').removeClass('sticky');
      $('nav .max-width').removeClass('sticky');
      $('.menu-btn').removeClass('sticky');
  }



    


  


   


    if (this.scrollY > 20) {
      $(".navbar .menu li a").addClass("sticky");
    } else {
      $(".navbar .menu li a").removeClass("sticky");
    }
    if (this.scrollY > 20) {
      $(".logo h1 a").addClass("sticky");
    } else {
      $(".logo h1 a").removeClass("sticky");
    }
    if (this.scrollY > 400) {
      $(
        ".about .about-content .left img,  .about .about-content .right"
      ).addClass("sticky");
    } else {
      $(
        ".about .about-content .left img, .about .about-content .right"
      ).removeClass("sticky");
    }
    if (this.scrollY > 820) {
      $(".service .title, .service .service-content .card").addClass("sticky");
    } else {
      $(".service .title, .service .service-content .card").removeClass(
        "sticky"
      );
    }
  });
});


//carousel //
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
