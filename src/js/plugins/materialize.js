import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const select = document.querySelectorAll('select');
const autocomplete = document.querySelectorAll('.autocomplete');
const datepicker = document.querySelectorAll('.datepicker');
const dropdowns = document.querySelectorAll(".dropdown-trigger");

// init select
M.FormSelect.init(select);

// init autocomplete
M.Autocomplete.init(autocomplete);

// init datepicker
M.Datepicker.init(datepicker, {
  showClearBtn: true,
  format: 'yyyy-mm'
});

// init dropdowns
M.Dropdown.init(dropdowns);


export function getSelectInstance (elem) {
  return M.FormSelect.getInstance(elem);
}

export function getAutocompleteInstance (elem) {
  return M.Autocomplete.getInstance(elem);
} 

export function getDatePickerInstance (elem) {
  return M.Datepicker.getInstance(elem);
}



