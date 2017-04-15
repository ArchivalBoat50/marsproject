$(document).ready(function() {
  setTimeout(function() {
    $('.alpha').addClass('in');
  },1000)
   $(".main-button").click(function(event) {
     this.style.transform = "rotate(360deg)";
     
   })
})