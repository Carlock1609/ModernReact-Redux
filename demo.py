import requests


url = 'https://maps.googleapis.com/maps/api/geocode/json'
response = requests.get(url, params={
    'address': {
               "lat": 37.4267861,
               "lng": -122.0806032
            },
    'key': 'AIzaSyCWcCyhkJRzozcz8kDYoxRd0uCIpI--z2Q',
})



data = response.json()
print(data['results'][0]['geometry']['location']['lat'])