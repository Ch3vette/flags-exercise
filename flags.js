$(document).ready(() => {
  $('#intro').on('mouseenter', () => {
    $('#intro').css({
      color: '#e06563'
    });
  });

  $('#intro').on('mouseleave', () => {
    $('#intro').css({
      color: '#000000'
    });
  });

  $('.flag').on('mouseenter', event => {
    $(event.currentTarget).addClass('flag-picked')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('flag-picked')
  });

  $('#f1').on('click', () => {
    $('#card1').toggle().siblings().hide();
  });

  $('#f2').on('click', () => {
    $('#card2').toggle().siblings().hide();
  });

  $('#f3').on('click', () => {
    $('#card3').toggle().siblings().hide();
  });


});
