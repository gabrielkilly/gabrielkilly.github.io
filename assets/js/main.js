$(document).ready(function(){
  console.log("helo");
  $('.loader').hide();
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  // $('.about-btn, .modal-helper').on('click touchstart', function(evt) {
  //     evt.preventDefault();
  //     $(".modal-helper").toggle();
  // });
  $('.about-btn').on('click touchstart', function(evt) {
      evt.preventDefault();
      $(".modal-helper").css("opacity", "1").css("visibility", "visible");
  });
  $('.modal-helper').on('click touchstart', function(evt) {
      evt.preventDefault();
      $(".modal-helper").css("opacity", "0").css("visibility", "hidden");
  });

});

$(window).load(function(){
  // $('.loader').hide(1000);
});
