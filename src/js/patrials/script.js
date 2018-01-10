(function($){
	
	//// ---> Проверка на существование элемента на странице
	jQuery.fn.exists = function() {
	   return jQuery(this).length;
	}
	
	$(function() {
		
    if(!is_mobile()){
        
        //// Маска первого поля с формы для обратного звонка
      if($('#user_phone').exists()){
        
        $('#user_phone').each(function(){
          $(this).mask("(999) 999-99-99");
        });
        $('#user_phone')
          .removeAttr('required')
          .removeAttr('pattern')
          .removeAttr('title')
          .attr({'placeholder':'(___) ___ __ __'});
      }
       //// Маска второго поля телефона с формы длясбора контактов
      if($('#user_phone2').exists()){
        
        $('#user_phone2').each(function(){
          $(this).mask("(999) 999-99-99");
        });
        $('#user_phone2')
          .removeAttr('required')
          .removeAttr('pattern')
          .removeAttr('title')
          .attr({'placeholder':'(___) ___ __ __'});
      }        
       //// Валидация  формы обратного звонка
      if($('.phone_form').exists()){
        
        var form = $('.phone_form'),
          btn = form.find('.btn-submit-phone');
        
        form.find('.rfield').addClass('empty_field');
      
        setInterval(function(){
        
          if($('#user_phone').exists()){
            var pmc = $('#user_phone');
            if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
              pmc.addClass('has-error');
            } else {
                pmc.removeClass('has-error');
            }
          }
          
          var sizeEmpty = form.find('.has-error').size();
          
          if(sizeEmpty > 0){
            if(btn.hasClass('disabled')){
              return false
            } else {
              btn.addClass('disabled')
            }
          } else {
            btn.removeClass('disabled')
          }
          
        },200);

        btn.click(function(){
          if($(this).hasClass('disabled')){
            return false
          } else {
            form.submit();
          }
        });
        
      }

  }    
 });
})( jQuery );