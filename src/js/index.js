import '../css/style.css';
import './plugins/appPlugins.js';
import location from './store/location';
import formUI from './views/form';


document.addEventListener('DOMContentLoaded', () => {
  initApp();

  const form = formUI.form;

  // События
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    onSubmitForm();
  });


  // стартовые функции
  async function initApp() {
    await location.init();
    formUI.setAutocompleteData(location.shortCitiesList)
  }

  async function onSubmitForm () {
    const origin = location.getCityCodeByKey(formUI.originValue),
          destination = location.getCityCodeByKey(formUI.destinationValue),
          depart_date = formUI.departValue,
          return_date = formUI.returnValue;
    await location.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
    });
  }
});
// location.init()
// .then(res => {  
//  console.log(res); 
 
// });