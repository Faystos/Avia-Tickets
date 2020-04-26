import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const select = document.querySelectorAll('select');
const autocomplete = document.querySelectorAll('.autocomplete');
const datepicker = document.querySelectorAll('.datepicker');

// init select
M.FormSelect.init(select);

// init autocomplete
M.Autocomplete.init(autocomplete);

// init datepicker
M.Datepicker.init(datepicker, {
  showClearBtn: true
});


export function getSelectInstance (elem) {
  return M.FormSelect.getInstance(elem);
}

export function getAutocompleteInstance (elem) {
  return M.Autocomplete.getInstance(elem);
} 

export function getDatePickerInstance (elem) {
  return M.Datepicker.getInstance(elem);
}