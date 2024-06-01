$(document).ready(function () {
  $('#header1').on('click', function() {
    if ($('#content1').hasClass('accessible-hidden')) {
      $('#content1').removeClass('accessible-hidden');
      $('#icon1').text('−');
    } else {
      $('#content1').addClass('accessible-hidden');
      $('#icon1').text('+');
    }
  });
});
