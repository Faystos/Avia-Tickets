import {getAutocompleteInstance, getDatePickerInstance} from '../plugins/materialize';
class FormUI {
  constructor(getAutocompleteInstance, getDatePickerInstance){
    this._form = document.forms['locationControls'];
    this.origin = document.querySelector('#autocomplete-origin');
    this.destination = document.querySelector('#autocomplete-destination');
    this.depart = document.querySelector('#datepicker-depart');
    this.return = document.querySelector('#datepicker-return');
    this.originAutocomplete = getAutocompleteInstance(this.origin);
    this.destinationAutocomplete = getAutocompleteInstance(this.destination);
    this.departDatePicker = getDatePickerInstance(this.depart);
    this.returntDatePicker = getDatePickerInstance(this.return);
  }

  get form () {
    return this._form;
  }

  get originValue () {
    return this.origin.value;
  }

  get destinationValue () {
    return this.destination.value;
  }

  get departValue () {
    return this.departDatePicker.toString();
  }
  
  get returnValue () {
    return this.returntDatePicker.toString();
  }

  setAutocompleteData (data) {
    this.originAutocomplete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }
}

const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance);

export default formUI;