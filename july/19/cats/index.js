'use strict';

$(function () {

  $('.thumbnail').on('click', function(event)  {
		const grab = $(this).find('img').attr('src');
    const grabA = $(this).find('img').attr('alt');
    $('.hero img').attr('src', grab).attr('alt', grabA);

  });

});
