//////////////// Header section func ////////////////

$('.Header-switch').on('click', function() {
  if ($('Header').is('.menu-show')) {
    $('.Header').removeClass('menu-show');
  } else {
    $('.Header').addClass('menu-show');
  }
});

//////////////// Navigation section func ////////////////

$('.Navigation-item').on('click', function() {
  var item = $(this);
  $('.Navigation-item').removeClass('active');
  item.addClass('active');
});

//////////////// Highlights section func ////////////////

$('.Highlights-item-extra-content-button').on('click', function() {
  alert('You will see some properties in here !');
});

var $carousel = $('.Highlights-slider').flickity({
  cellAlign: 'center',
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  friction: 0.15,
  freeScrollFriction: 0.03
});
var flkty = $carousel.data('flickity');

$carousel.on('staticClick.flickity', function(
  event,
  pointer,
  cellElement,
  cellIndex
) {
  if (!cellElement) {
    return;
  }
  $carousel.find('.is-expanded').removeClass('is-expanded');
  $(cellElement).addClass('is-expanded');

  $(`.Highlights-item-extra`).removeClass('is-showed');
  $(`.Highlights-item-extra:eq(${cellIndex})`).addClass('is-showed');

  $carousel.flickity('reposition');
  $carousel.flickity('select', cellIndex);
});

//////////////// Advantages section func ////////////////

$('.Advantages-boxes-box').on('click', function() {
  var click = $(this);
  $('.Advantages-boxes-box').removeClass('add-shadow');
  click.addClass('add-shadow');
});

//////////////// Wheretostay section func ////////////////

$('.Wheretostay-content-buttons-button').on('click', function() {
  var item = $(this);
  $('.Wheretostay-content-buttons-button').removeClass(
    'button wheretostay-button'
  );
  item.addClass('button wheretostay-button');
});

//////////////// Recommendation section func ////////////////

$('.Recommendation-content-buttons-button').on('click', function() {
  var item = $(this);
  $('.Recommendation-content-buttons-button').removeClass(
    'button wheretostay-button'
  );
  item.addClass('button wheretostay-button');
});
