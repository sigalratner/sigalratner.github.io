$(document).ready(function() {
  $('.navbar .nav > li > a').click(function() {
    $('.navbar-collapse.navbar-ex1-collapse.in').removeClass('in').addClass('collapse').css('height', '0');
  });
  if (iPadVersion != 1) $('#topnav').localScroll({ hash: true });
  ssm.addStates([
    {
        id: 'mobile',
        width: 767,
        onEnter: function() {
        }
    },
    {
        id: 'tablet',
        width: 979,
        onEnter: function() {
        }
    },
    {
        id: 'desktop',
        width: 9999,
        onEnter: function() {
          if (!isiOS()) {
            $('#about').parallax("30%", 0.5);
          }
        }
    }
  ]);
  ssm.ready();
  
  $('.quote-fader li:gt(0)').hide();
  setInterval(function(){
    $('.quote-fader li:first-child').fadeOut(1000)
      .next('li').fadeIn(1000)
      .end().appendTo('.quote-fader');}, 
    12000);
});


function refreshScrollspy() {
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })
};

var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshScrollspy, 100);
});

function isiOS(){
  return (
    //Detect iPad
    (navigator.platform.indexOf("iPad") != -1) ||
    //Detect iPhone
    (navigator.platform.indexOf("iPhone") != -1) ||
    //Detect iPod
    (navigator.platform.indexOf("iPod") != -1)
  );
}

function iPadVersion() {
  //Detect iPad 1
  if (navigator.platform.indexOf("Mobile/8F190") != -1) return 1;
  //Detect iPad 2
  else if (navigator.platform.indexOf("Mobile/8F191") != -1) return 2;
  //Detect iPad 3
  else if (navigator.platform.indexOf("Mobile/9B176") != -1) return 3;
  else return 0;
}