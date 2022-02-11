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
$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (status) {
	$('div').addClass('available');
    } else {
	$('div').removeClass('available');
    }
});
