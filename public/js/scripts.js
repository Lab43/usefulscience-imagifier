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

}(jQuery));
