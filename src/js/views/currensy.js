class CurrencyUI {
  constructor() {
    this.currency = document.querySelector('#currency');
    this.dictionary = {
      USD: '$',
      EUR: '€',
      RUB: '₽'
    };
  }

  get currencyValue () {
    return this.currency.value;
  }

  getCurrencySymbol () {
    return this.dictionary[this.currencyValue];
  }
}


const currencyUI = new CurrencyUI();

export default currencyUI;