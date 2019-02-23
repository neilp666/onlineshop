$('.show-filters').on('click', function() {

  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show Filters')
  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide Filters')
  }
})

$('.filters-list a').on('click', function() {

  var filter = $(this).attr('data-filter')
  // this block the link from following the href
  console.log(filter)

  $('.product').hide()
  $(filter).show()

  return false
})