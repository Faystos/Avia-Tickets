import '../css/style.css';
import './plugins/appPlugins.js';
import location from './store/location';

location.init()
.then(res => {  
 console.log(res); 
 
});