import '../css/style.css';
import './plugins/appPlugins.js';
import location from './store/location';
import formUI from './views/form';
import currencyUI from './views/currensy';
import ticketsUI from './views/tickets';
import { favorite } from './store/favorite';
import { favoritesUI } from './views/favorites';


document.addEventListener('DOMContentLoaded', () => {
  initApp();

  const form = formUI.form;
  const ticketsContainer = ticketsUI.container;

  // События
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    onSubmitForm();
  });

  ticketsContainer.addEventListener('click', onFavoriteTicket);

  // стартовые функции
  async function initApp() {
    await location.init();
    formUI.setAutocompleteData(location.shortCitiesList)
  }

  async function onSubmitForm () {
    const origin = location.getCityCodeByKey(formUI.originValue),
          destination = location.getCityCodeByKey(formUI.destinationValue),
          depart_date = formUI.departValue,
          return_date = formUI.returnValue,
          currency = currencyUI.currencyValue;
    await location.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency     
    });
    ticketsUI.renderTickets(location.lastSearch);           
  }

  function onFavoriteTicket (evt) {
    if(!evt.target.classList.contains('add-favorite')) return;

    const dataTicketId = evt.target.closest("[data-ticket-id]");
    const ticketId = Number(dataTicketId.dataset.ticketId);
    const ticket = location.getTicketById(ticketId);
    favorite.addFavorite(ticket);
    favoritesUI.renderFavorites(favorite.arrFavorite);    
  }
});