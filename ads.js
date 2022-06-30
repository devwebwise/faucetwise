jQuery.adBlock = false;
window.adBlock = false;
jQuery.adblock = false;
window.adblock = false;
window.adsptcryptobux = true;
jQuery.adsptcryptobux = true;
function G0t0H3LL(){
    window.href = "/adblock";
}
function Madpop(id, callback){
    var poops = setInterval(function(){
        if(document.getElementById(id)){
            clearInterval(poops);
            callback();
        }
    }, 1);
}
function M4dpop(id, callback){
    var poops = setInterval(function(){
        var attr = $('#faucet').attr(id);
        if (typeof attr !== typeof undefined && attr !== false) {
            clearInterval(poops);
            callback();
        }
    }, 1);
}
(function($){
    if($.adblock === undefined){$.adblock = true;G0t0H3LL();}
    $.fn.showOnAdBlock = function(){if($.adblock){this.show();}return this;};
})(jQuery);
if(!('adBlock' in window) || !('adblock' in window)){G0t0H3LL();}
if(window.adsptcryptobux === undefined){G0t0H3LL();}
$(document).ready(function(){
    $('#form_ptcryptobux').bind('keydown', function(e) {if (e.keyCode == 13) {e.preventDefault();}});
});
