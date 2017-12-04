$(document).ready(function(){

   /* Gestion burger menu */
   /* Ouveture / Fermeture nav */
    $('.burger').click(function(evt) {
       evt.preventDefault();
        $('.public ul').slideToggle('slow',function(){
        });
    });

    /* Gestion retour haut de page */
    var offset = 150;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.top').fadeIn(duration);
        } else {
            $('.top').fadeOut(duration);
        }
    });
        
    $('.top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});// Fin chargement DOM 