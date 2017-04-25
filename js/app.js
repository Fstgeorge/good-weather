/**
 * Created by Fabian St. George wo on 4/25/2017.
 */

// v3.1.0
//Docs at http://simpleweatherjs.com

function go2location(location) {
    $.simpleWeather({
        location: location,
        woeid: '',
        unit: 'f',
        success: function (weather) {
            html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul>';

            $("#weather").html(html);
        },
        error: function (error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
}

// HTML Geolocation
/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
    $('.js-geolocation').show();
} else {
    $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude); //load weather using your lat/lng coordinates
    });
});

/* Current Location Button */
var city = $('.city');

city.on('click', function (e) {
    e.preventDefault();

    var $this = $(this);
    //load weather using click region
    console.log('==', $this.text());
    // loadWeather($this, '');

});

$('#current-location').on('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude); //load weather using your lat/lng coordinates
    });
});

/*
 * Test Locations
 * Austin lat/long: 30.2676,-97.74298
 * Austin WOEID: 2357536
 */
$(document).ready(function () {
    //@params location, woeid
    loadWeather('Austin, TX', '');
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function (weather) {
            html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';
            html += '<li>' + weather.alt.temp + '&deg;C</li></ul>';

            $("#weather").html(html);
        },
        error: function (error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
}


