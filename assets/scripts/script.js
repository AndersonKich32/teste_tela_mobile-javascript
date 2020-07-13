var cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', function(event){
    let positionX = event.pageX - 550
    let positionY = event.pageY - 50

    if((event.pageX >= 495 && event.pageX <=860) && (event.pageY >= 50 && event.pageY <= 450)){
        cursor.style.opacity = 1
    }else{
        cursor.style.opacity = 0
    }

    cursor.style.left = positionX + 'px'
    cursor.style.top = positionY + 'px' 
})


var platform = new H.service.Platform({
'apikey': 'BGQCLkFsaGwGapp202_xTMtpkhmG5WZvelQqNlhJPgg'
});

var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,{zoom: 16,center: { lat: 52.5, lng: 13.4 }
});

var service = platform.getSearchService();

const form = document.getElementById('form')

form.addEventListener('submit', function(event){
event.preventDefault();
const endereco = document.getElementById('endereco').value+'Brazil'
    
service.geocode({q: endereco}, (result) => {
result.items.forEach((item) => {map.addObject(new H.map.Marker(item.position));map.setCenter(item.position)});
    }, alert);
})
