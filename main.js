$('.show-filters').on('click', function() {

  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show Filters')
  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide Filters')
  }

  return false
})

$('.filters-list a').on('click', function() {

  var filter = $(this).attr('data-filter')
  // this block the link from following the href
  console.log(filter)

  $('.product').hide()
  $(filter).show()

  $('.filters-list a').removeClass('selected')

  $(this).addClass('selected')
  return false
})