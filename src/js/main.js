//= patrials/is.mobile.js
//= patrials/jquery.maskedinput.min.js
//= patrials/validator.min.js
//= patrials/script.js
//= patrials/jquery.modal.js
//= patrials/typed.js


$(function(){
        $("#typed").typed({
            stringsElement: $('#typed_strings'),
            typeSpeed: 100,
            contentType: 'html',
            // call when done callback function
            callback: function() {
              $("#head_animation").addClass("animated bounceInDown")
            }
        });

    });