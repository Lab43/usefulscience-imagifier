(function ($, undefined) {
  'use strict';

  $('#update_img').click(function (e) {
    e.preventDefault();
    var src = $('#img').val();
    $('#preview img').attr('src', src);
  });

  $('#update_text').click(function (e) {
    e.preventDefault();
    var text = $('#text').val();
    $('#preview .post').text(text);
  });

}(jQuery));
