document.addEventListener('DOMContentLoaded', function () {
  const am = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      am[$(this).data().id] = $(this).data().name;
    } else {
      delete am[$(this).data().id];
    }
    const ns = [];
    for (const n in am) {
      ns.push(am[n]);
    }
    $('DIV.amenities H4').text(ns.join(', '));
  });
});
$.get('http://0.0.0.0:5001/api/v1/places_search/', function (data, status) {
    if (status) {
	$('div').addClass('available');
    } else {
	$('div').removeClass('available');
    }
});
$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  type: 'POST',
  data: '{}',
  dataType: 'json',
  contentType: 'application/json',
  success: function (data) {
    for (let i = 0; i < data.length; i++) {
      let place = data[i];
      $('section.places').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + '</div></div><div class="description">' + place.description + '</div></article>');
    }
  }
});
