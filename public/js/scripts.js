(function ($, undefined) {
  'use strict';

  // update img url
  $('#img').change(function (e) {
    var src = $(this).val();
    $('.img').attr('src', src);
  });

  // update post text
  $('#text').on('change keyup paste', function (e) {
    var text = $(this).val();
    $('.text').text(text);
  });

  // update data-??? attributes
  $.each(['color','cat','pos','back'], function (i, attr) {
    $('#' + attr).change(function (e) {
      var val = $(this).val();
      $('[data-' + attr + ']').attr('data-' + attr, val);
    });
  });

  // prevent enter key from submitting form
  $('input,select').keypress(function (e) {
    return e.keyCode != 13;
  });

}(jQuery));
