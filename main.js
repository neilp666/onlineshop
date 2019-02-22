$('.show-filters').on('click', function() {

  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show Filters')
  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide Filters')
  }
})