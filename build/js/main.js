function is_mobile(){var t=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}!function(t){var e,o=function(){var t=document.createElement("input"),e="onpaste";return t.setAttribute(e,""),"function"==typeof t[e]?"paste":"input"}()+".mask",i=navigator.userAgent,s=/iphone/i.test(i),n=/android/i.test(i);t.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},t.fn.extend({caret:function(t,e){var o;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof t?(e="number"==typeof e?e:t,this.each(function(){this.setSelectionRange?this.setSelectionRange(t,e):this.createTextRange&&(o=this.createTextRange(),o.collapse(!0),o.moveEnd("character",e),o.moveStart("character",t),o.select())})):(this[0].setSelectionRange?(t=this[0].selectionStart,e=this[0].selectionEnd):document.selection&&document.selection.createRange&&(o=document.selection.createRange(),t=0-o.duplicate().moveStart("character",-1e5),e=t+o.text.length),{begin:t,end:e})},unmask:function(){return this.trigger("unmask")},mask:function(i,a){var r,l,h,c,d,u;return!i&&this.length>0?(r=t(this[0]),r.data(t.mask.dataName)()):(a=t.extend({placeholder:t.mask.placeholder,completed:null},a),l=t.mask.definitions,h=[],c=u=i.length,d=null,t.each(i.split(""),function(t,e){"?"==e?(u--,c=t):l[e]?(h.push(RegExp(l[e])),null===d&&(d=h.length-1)):h.push(null)}),this.trigger("unmask").each(function(){function r(t){for(;u>++t&&!h[t];);return t}function p(t){for(;--t>=0&&!h[t];);return t}function m(t,e){var o,i;if(!(0>t)){for(o=t,i=r(e);u>o;o++)if(h[o]){if(!(u>i&&h[o].test(C[i])))break;C[o]=C[i],C[i]=a.placeholder,i=r(i)}y(),w.caret(Math.max(d,t))}}function f(t){var e,o,i,s;for(e=t,o=a.placeholder;u>e;e++)if(h[e]){if(i=r(e),s=C[e],C[e]=o,!(u>i&&h[i].test(s)))break;o=s}}function v(t){var e,o,i,n=t.which;8===n||46===n||s&&127===n?(e=w.caret(),o=e.begin,i=e.end,0==i-o&&(o=46!==n?p(o):i=r(o-1),i=46===n?r(i):i),b(o,i),m(o,i-1),t.preventDefault()):27==n&&(w.val(E),w.caret(0,k()),t.preventDefault())}function g(e){var o,i,s,l=e.which,c=w.caret();e.ctrlKey||e.altKey||e.metaKey||32>l||l&&(0!=c.end-c.begin&&(b(c.begin,c.end),m(c.begin,c.end-1)),o=r(c.begin-1),u>o&&(i=String.fromCharCode(l),h[o].test(i)&&(f(o),C[o]=i,y(),s=r(o),n?setTimeout(t.proxy(t.fn.caret,w,s),0):w.caret(s),a.completed&&s>=u&&a.completed.call(w))),e.preventDefault())}function b(t,e){var o;for(o=t;e>o&&u>o;o++)h[o]&&(C[o]=a.placeholder)}function y(){w.val(C.join(""))}function k(t){var e,o,i=w.val(),s=-1;for(e=0,pos=0;u>e;e++)if(h[e]){for(C[e]=a.placeholder;pos++<i.length;)if(o=i.charAt(pos-1),h[e].test(o)){C[e]=o,s=e;break}if(pos>i.length)break}else C[e]===i.charAt(pos)&&e!==c&&(pos++,s=e);return t?y():c>s+1?(w.val(""),b(0,u)):(y(),w.val(w.val().substring(0,s+1))),c?e:d}var w=t(this),C=t.map(i.split(""),function(t){return"?"!=t?l[t]?a.placeholder:t:void 0}),E=w.val();w.data(t.mask.dataName,function(){return t.map(C,function(t,e){return h[e]&&t!=a.placeholder?t:null}).join("")}),w.attr("readonly")||w.one("unmask",function(){w.unbind(".mask").removeData(t.mask.dataName)}).bind("focus.mask",function(){clearTimeout(e);var t;E=w.val(),t=k(),e=setTimeout(function(){y(),t==i.length?w.caret(0,t):w.caret(t)},10)}).bind("blur.mask",function(){k(),w.val()!=E&&w.change()}).bind("keydown.mask",v).bind("keypress.mask",g).bind(o,function(){setTimeout(function(){var t=k(!0);w.caret(t),a.completed&&t==w.val().length&&a.completed.call(w)},0)}),k()}))}})}(jQuery),function(t){"use strict";function e(e){return e.is('[type="checkbox"]')?e.prop("checked"):e.is('[type="radio"]')?!!t('[name="'+e.attr("name")+'"]:checked').length:e.is("select[multiple]")?(e.val()||[]).length:e.val()}function o(e){return this.each(function(){var o=t(this),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),n=o.data("bs.validator");(n||"destroy"!=e)&&(n||o.data("bs.validator",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(o,s){this.options=s,this.validators=t.extend({},i.VALIDATORS,s.custom),this.$element=t(o),this.$btn=t('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]')),this.update(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",t.proxy(this.onInput,this)),this.$element.on("submit.bs.validator",t.proxy(this.onSubmit,this)),this.$element.on("reset.bs.validator",t.proxy(this.reset,this)),this.$element.find("[data-match]").each(function(){var o=t(this);t(o.attr("data-match")).on("input.bs.validator",function(){e(o)&&o.trigger("input.bs.validator")})}),this.$inputs.filter(function(){return e(t(this))&&!t(this).closest(".has-error").length}).trigger("focusout"),this.$element.attr("novalidate",!0)};i.VERSION="0.11.9",i.INPUT_SELECTOR=':input:not([type="hidden"], [type="submit"], [type="reset"], button)',i.FOCUS_OFFSET=20,i.DEFAULTS={delay:500,html:!1,disable:!0,focus:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},i.VALIDATORS={native:function(t){var e=t[0];return e.checkValidity?!e.checkValidity()&&!e.validity.valid&&(e.validationMessage||"error!"):void 0},match:function(e){var o=e.attr("data-match");return e.val()!==t(o).val()&&i.DEFAULTS.errors.match},minlength:function(t){var e=t.attr("data-minlength");return t.val().length<e&&i.DEFAULTS.errors.minlength}},i.prototype.update=function(){var e=this;return this.$inputs=this.$element.find(i.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function(){e.clearErrors(t(this))})),this.toggleSubmit(),this},i.prototype.onInput=function(e){var o=this,i=t(e.target),s="focusout"!==e.type;this.$inputs.is(i)&&this.validateInput(i,s).done(function(){o.toggleSubmit()})},i.prototype.validateInput=function(o,i){var s=(e(o),o.data("bs.validator.errors"));o.is('[type="radio"]')&&(o=this.$element.find('input[name="'+o.attr("name")+'"]'));var n=t.Event("validate.bs.validator",{relatedTarget:o[0]});if(this.$element.trigger(n),!n.isDefaultPrevented()){var a=this;return this.runValidators(o).done(function(e){o.data("bs.validator.errors",e),e.length?i?a.defer(o,a.showErrors):a.showErrors(o):a.clearErrors(o),s&&e.toString()===s.toString()||(n=e.length?t.Event("invalid.bs.validator",{relatedTarget:o[0],detail:e}):t.Event("valid.bs.validator",{relatedTarget:o[0],detail:s}),a.$element.trigger(n)),a.toggleSubmit(),a.$element.trigger(t.Event("validated.bs.validator",{relatedTarget:o[0]}))})}},i.prototype.runValidators=function(o){function i(t){return o.attr("data-"+t+"-error")}function s(){var t=o[0].validity;return t.typeMismatch?o.attr("data-type-error"):t.patternMismatch?o.attr("data-pattern-error"):t.stepMismatch?o.attr("data-step-error"):t.rangeOverflow?o.attr("data-max-error"):t.rangeUnderflow?o.attr("data-min-error"):t.valueMissing?o.attr("data-required-error"):null}function n(){return o.attr("data-error")}function a(t){return i(t)||s()||n()}var r=[],l=t.Deferred();return o.data("bs.validator.deferred")&&o.data("bs.validator.deferred").reject(),o.data("bs.validator.deferred",l),t.each(this.validators,t.proxy(function(t,i){var s=null;!e(o)&&!o.attr("required")||void 0===o.attr("data-"+t)&&"native"!=t||!(s=i.call(this,o))||(s=a(t)||s,!~r.indexOf(s)&&r.push(s))},this)),!r.length&&e(o)&&o.attr("data-remote")?this.defer(o,function(){var i={};i[o.attr("name")]=e(o),t.get(o.attr("data-remote"),i).fail(function(t,e,o){r.push(a("remote")||o)}).always(function(){l.resolve(r)})}):l.resolve(r),l.promise()},i.prototype.validate=function(){var e=this;return t.when(this.$inputs.map(function(){return e.validateInput(t(this),!1)})).then(function(){e.toggleSubmit(),e.focusError()}),this},i.prototype.focusError=function(){if(this.options.focus){var e=this.$element.find(".has-error:first :input");0!==e.length&&(t("html, body").animate({scrollTop:e.offset().top-i.FOCUS_OFFSET},250),e.focus())}},i.prototype.showErrors=function(e){var o=this.options.html?"html":"text",i=e.data("bs.validator.errors"),s=e.closest(".form-group"),n=s.find(".help-block.with-errors"),a=s.find(".form-control-feedback");i.length&&(i=t("<ul/>").addClass("list-unstyled").append(t.map(i,function(e){return t("<li/>")[o](e)})),void 0===n.data("bs.validator.originalContent")&&n.data("bs.validator.originalContent",n.html()),n.empty().append(i),s.addClass("has-error has-danger"),s.hasClass("has-feedback")&&a.removeClass(this.options.feedback.success)&&a.addClass(this.options.feedback.error)&&s.removeClass("has-success"))},i.prototype.clearErrors=function(t){var o=t.closest(".form-group"),i=o.find(".help-block.with-errors"),s=o.find(".form-control-feedback");i.html(i.data("bs.validator.originalContent")),o.removeClass("has-error has-danger has-success"),o.hasClass("has-feedback")&&s.removeClass(this.options.feedback.error)&&s.removeClass(this.options.feedback.success)&&e(t)&&s.addClass(this.options.feedback.success)&&o.addClass("has-success")},i.prototype.hasErrors=function(){function e(){return!!(t(this).data("bs.validator.errors")||[]).length}return!!this.$inputs.filter(e).length},i.prototype.isIncomplete=function(){function o(){var o=e(t(this));return!("string"==typeof o?t.trim(o):o)}return!!this.$inputs.filter("[required]").filter(o).length},i.prototype.onSubmit=function(t){this.validate(),(this.isIncomplete()||this.hasErrors())&&t.preventDefault()},i.prototype.toggleSubmit=function(){this.options.disable&&this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())},i.prototype.defer=function(e,o){return o=t.proxy(o,this,e),this.options.delay?(window.clearTimeout(e.data("bs.validator.timeout")),void e.data("bs.validator.timeout",window.setTimeout(o,this.options.delay))):o()},i.prototype.reset=function(){return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success),this.$inputs.removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var e=t(this),o=e.data("bs.validator.timeout");window.clearTimeout(o)&&e.removeData("bs.validator.timeout")}),this.$element.find(".help-block.with-errors").each(function(){var e=t(this),o=e.data("bs.validator.originalContent");e.removeData("bs.validator.originalContent").html(o)}),this.$btn.removeClass("disabled"),this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"),this},i.prototype.destroy=function(){return this.reset(),this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),this.$inputs.off(".bs.validator"),this.options=null,this.validators=null,this.$element=null,this.$btn=null,this.$inputs=null,this};var s=t.fn.validator;t.fn.validator=o,t.fn.validator.Constructor=i,t.fn.validator.noConflict=function(){return t.fn.validator=s,this},t(window).on("load",function(){t('form[data-toggle="validator"]').each(function(){var e=t(this);o.call(e,e.data())})})}(jQuery),function(t){jQuery.fn.exists=function(){return jQuery(this).length},t(function(){if(!is_mobile()&&(t("#user_phone").exists()&&(t("#user_phone").each(function(){t(this).mask("(999) 999-99-99")}),t("#user_phone").removeAttr("required").removeAttr("pattern").removeAttr("title").attr({placeholder:"(___) ___ __ __"})),t("#user_phone2").exists()&&(t("#user_phone2").each(function(){t(this).mask("(999) 999-99-99")}),t("#user_phone2").removeAttr("required").removeAttr("pattern").removeAttr("title").attr({placeholder:"(___) ___ __ __"})),t(".phone_form").exists())){var e=t(".phone_form"),o=e.find(".btn-submit-phone");e.find(".rfield").addClass("empty_field"),setInterval(function(){if(t("#user_phone").exists()){var i=t("#user_phone");i.val().indexOf("_")!=-1||""==i.val()?i.addClass("has-error"):i.removeClass("has-error")}if(e.find(".has-error").size()>0){if(o.hasClass("disabled"))return!1;o.addClass("disabled")}else o.removeClass("disabled")},200),o.click(function(){if(t(this).hasClass("disabled"))return!1;e.submit()})}})}(jQuery),function(t){"object"==typeof module&&"object"==typeof module.exports?t(require("jquery"),window,document):t(jQuery,window,document)}(function(t,e,o,i){var s=[],n=function(){return s.length?s[s.length-1]:null},a=function(){var t,e=!1;for(t=s.length-1;t>=0;t--)s[t].$blocker&&(s[t].$blocker.toggleClass("current",!e).toggleClass("behind",e),e=!0)};t.modal=function(e,o){var i,a;if(this.$body=t("body"),this.options=t.extend({},t.modal.defaults,o),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),this.$blocker=null,this.options.closeExisting)for(;t.modal.isActive();)t.modal.close();if(s.push(this),e.is("a"))if(a=e.attr("href"),/^#/.test(a)){if(this.$elm=t(a),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=t("<div>"),this.$body.append(this.$elm),i=function(t,e){e.elm.remove()},this.showSpinner(),e.trigger(t.modal.AJAX_SEND),t.get(a).done(function(o){if(t.modal.isActive()){e.trigger(t.modal.AJAX_SUCCESS);var s=n();s.$elm.empty().append(o).on(t.modal.CLOSE,i),s.hideSpinner(),s.open(),e.trigger(t.modal.AJAX_COMPLETE)}}).fail(function(){e.trigger(t.modal.AJAX_FAIL),n().hideSpinner(),s.pop(),e.trigger(t.modal.AJAX_COMPLETE)});else this.$elm=e,this.$body.append(this.$elm),this.open()},t.modal.prototype={constructor:t.modal,open:function(){var e=this;this.block(),this.options.doFade?setTimeout(function(){e.show()},this.options.fadeDuration*this.options.fadeDelay):this.show(),t(o).off("keydown.modal").on("keydown.modal",function(t){var e=n();27==t.which&&e.options.escapeClose&&e.close()}),this.options.clickClose&&this.$blocker.click(function(e){e.target==this&&t.modal.close()})},close:function(){s.pop(),this.unblock(),this.hide(),t.modal.isActive()||t(o).off("keydown.modal")},block:function(){this.$elm.trigger(t.modal.BEFORE_BLOCK,[this._ctx()]),this.$body.css("overflow","hidden"),this.$blocker=t('<div class="jquery-modal blocker current"></div>').appendTo(this.$body),a(),this.options.doFade&&this.$blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(t.modal.BLOCK,[this._ctx()])},unblock:function(e){!e&&this.options.doFade?this.$blocker.fadeOut(this.options.fadeDuration,this.unblock.bind(this,!0)):(this.$blocker.children().appendTo(this.$body),this.$blocker.remove(),this.$blocker=null,a(),t.modal.isActive()||this.$body.css("overflow",""))},show:function(){this.$elm.trigger(t.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=t('<a href="#close-modal" rel="modal:close" class="close-modal close'+this.options.closeClass+'"> <span aria-hidden="true">&times;</span></a>'),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker),this.options.doFade?this.$elm.css("opacity",0).show().animate({opacity:1},this.options.fadeDuration):this.$elm.show(),this.$elm.trigger(t.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(t.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove();var e=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){e.$elm.trigger(t.modal.AFTER_CLOSE,[e._ctx()])}):this.$elm.hide(0,function(){e.$elm.trigger(t.modal.AFTER_CLOSE,[e._ctx()])}),this.$elm.trigger(t.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||t('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,$blocker:this.$blocker,options:this.options}}},t.modal.close=function(e){if(t.modal.isActive()){e&&e.preventDefault();var o=n();return o.close(),o.$elm}},t.modal.isActive=function(){return s.length>0},t.modal.getCurrent=n,t.modal.defaults={closeExisting:!0,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",spinnerHtml:null,showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},t.modal.BEFORE_BLOCK="modal:before-block",t.modal.BLOCK="modal:block",t.modal.BEFORE_OPEN="modal:before-open",t.modal.OPEN="modal:open",t.modal.BEFORE_CLOSE="modal:before-close",t.modal.CLOSE="modal:close",t.modal.AFTER_CLOSE="modal:after-close",t.modal.AJAX_SEND="modal:ajax:send",t.modal.AJAX_SUCCESS="modal:ajax:success",t.modal.AJAX_FAIL="modal:ajax:fail",t.modal.AJAX_COMPLETE="modal:ajax:complete",t.fn.modal=function(e){return 1===this.length&&new t.modal(this,e),this},t(o).on("click.modal",'a[rel~="modal:close"]',t.modal.close),t(o).on("click.modal",'a[rel~="modal:open"]',function(e){e.preventDefault(),t(this).modal()})}),function(t,e,o){"use strict";var i=function(t,e){var i=this;this.el=t,this.options={},Object.keys(s).forEach(function(t){i.options[t]=s[t]}),Object.keys(e).forEach(function(t){i.options[t]=e[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,o&&this.options.stringsElement instanceof o?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};i.prototype={constructor:i,init:function(){var t=this;t.timeout=setTimeout(function(){for(var e=0;e<t.strings.length;++e)t.sequence[e]=e;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;if(this.showCursor===!0&&(this.cursor=e.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";Array.prototype.slice.apply(this.stringsElement.children).forEach(function(e){t.strings.push(e.innerHTML)})}this.init()},typewrite:function(t,e){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var o=0,s=t.substr(e);if("^"===s.charAt(0)){var n=1;/^\^\d+/.test(s)&&(s=/\d+/.exec(s)[0],n+=s.length,o=parseInt(s)),t=t.substring(0,e)+t.substring(e+n)}if("html"===i.contentType){var a=t.substr(e).charAt(0);if("<"===a||"&"===a){var r="",l="";for(l="<"===a?">":";";t.substr(e+1).charAt(0)!==l&&(r+=t.substr(e).charAt(0),!(++e+1>t.length)););e++,r+=l}}i.timeout=setTimeout(function(){if(e===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,i.loop===!1||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,e)},i.backDelay)}else{0===e&&i.options.preStringTyped(i.arrayPos);var o=t.substr(0,e+1);i.attr?i.el.setAttribute(i.attr,o):i.isInput?i.el.value=o:"html"===i.contentType?i.el.innerHTML=o:i.el.textContent=o,e++,i.typewrite(t,e)}},o)},o)}},backspace:function(t,e){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.backSpeed,i=this;i.timeout=setTimeout(function(){if("html"===i.contentType&&">"===t.substr(e).charAt(0)){for(var o="";"<"!==t.substr(e-1).charAt(0)&&(o-=t.substr(e).charAt(0),!(--e<0)););e--,o+="<"}var s=t.substr(0,e);i.attr?i.el.setAttribute(i.attr,s):i.isInput?i.el.value=s:"html"===i.contentType?i.el.innerHTML=s:i.el.textContent=s,e>i.stopNum?(e--,i.backspace(t,e)):e<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.shuffle&&(i.sequence=i.shuffleArray(i.sequence)),i.init()):i.typewrite(i.strings[i.sequence[i.arrayPos]],e))},o)}},shuffleArray:function(t){var e,o,i=t.length;if(i)for(;--i;)o=Math.floor(Math.random()*(i+1)),e=t[o],t[o]=t[i],t[i]=e;return t},reset:function(){var t=this;clearInterval(t.timeout);this.el.getAttribute("id");this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},i.new=function(t,o){Array.prototype.slice.apply(e.querySelectorAll(t)).forEach(function(t){var e=t._typed,s="object"==typeof o&&o;e&&e.reset(),t._typed=e=new i(t,s),"string"==typeof o&&e[o]()})},o&&(o.fn.typed=function(t){return this.each(function(){var e=o(this),s=e.data("typed"),n="object"==typeof t&&t;s&&s.reset(),e.data("typed",s=new i(this,n)),"string"==typeof t&&s[t]()})}),t.Typed=i;var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery),$(function(){$("#typed").typed({stringsElement:$("#typed_strings"),typeSpeed:100,contentType:"html",callback:function(){$("#head_animation").addClass("animated bounceInDown")}})});
//# sourceMappingURL=main.js.map