$(document).ready(function(){
    $('#atuacao').bind('inview', function (event, visible) {
  alert("teste");
      if (visible == true) {
        // element is now visible in the viewport
         $("h2").addClass('#active');
          alert('found h2!')
      } else {
       $("h2").removeClass('#active');
        // element has gone out of viewport
      }
    });
});