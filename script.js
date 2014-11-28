/*jslint browser: true, devel: true, plusplus: true, space: true, latedef: nofunc*/
/*global $, jQuery, alert*/
$(document).ready(function(){
  $('.login').mouseenter(function(){
    $('.login').fadeTo('fast', 1);
  });
});

$(document).ready(function(){
  $('.login').mouseleave(function(){
    $('.login').fadeTo('fast', 0.5);
  });
});
