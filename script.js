let lat = 0;
let lon = 0;
let map;

jQuery(document).ready(
    function($) {
        map = L.map('map').setView([lat, lon], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© YuweiMap'
        }).addTo(map);
        setInterval(()=>
        {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://api.open-notify.org/iss-now.json",
                success: function (data) {
                    lat = data.iss_position.latitude;
                    lon = data.iss_position.longitude;
                    $('#latitude').text("latitude : " + lat);
                    $('#longitude').text(" *** longitude : " + lon);

                    map.flyTo([lat, lon]);
                    L.circle([lat, lon], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.5,
                        radius: 1,
                        path:{
                            stroke: true
                        }
                    }).addTo(map);
                }
            });
        }, 10000);

    }

);
