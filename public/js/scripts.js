(function ($, undefined) {
  'use strict';

  $('#update_img').click(function (e) {
    e.preventDefault();
    var src = $('#img').val();
    $('.img').attr('src', src);
  });

  $('#update_text').click(function (e) {
    e.preventDefault();
    var text = $('#text').val();
    $('.text').text(text);
  });

  // update data-??? attributes
  $.each(['color','cat','pos','back'], function (i, attr) {
    $('#update_' + attr).click(function (e) {
      e.preventDefault();
      var val = $('#' + attr).val();
      $('[data-' + attr + ']').attr('data-' + attr, val);
    });
  });

}(jQuery));
