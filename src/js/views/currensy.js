class CurrencyUI {
  constructor() {
    this.currency = document.querySelector('#currency');
  }

  get currencyValue () {
    return this.currency.value;
  }
}


const currencyUI = new CurrencyUI();

export default currencyUI;