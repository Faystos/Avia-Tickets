import location from './store/location'

location.init()
.then(res => {  
 console.log(location.getCitiesByCountryCode('BS'));
});