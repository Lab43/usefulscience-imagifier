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

  $('#update_cat').click(function (e) {
    e.preventDefault();
    var cat = $('#cat').val();
    $('[data-cat]').attr('data-cat', cat);
  });

  $('#update_pos').click(function (e) {
    e.preventDefault();
    var pos = $('#pos').val();
    $('[data-pos]').attr('data-pos', pos);
  });

}(jQuery));
