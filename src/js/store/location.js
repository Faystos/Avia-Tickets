import api from '../services/apiService';
import {formatDate} from '../helpers/date';

class Location {
  constructor(api, helpers) {
    this.api = api;
    this.countries = null;
    this.cities = null;    
    this.shortCitiesList = {};
    this.lastSearch = {};
    this.airlines = {};
    this.formatDate = helpers.formatDate;
  }

  async init () {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
      this.api.airlines()
    ]);

    const [countries, cities, airlines] = response;
    this.countries = this.serializeCountries(countries);
    this.cities = this.serializeCities(cities);
    this.shortCitiesList = this.createShortsCitiesList(this.cities);
    this.airlines = this.serializAirlines(airlines);    
    
    return response;
  }

  getCityCodeByKey(key) {
    const city = Object.values(this.cities).find(item => item.full_name === key);    
    return city.code;
  }

  getCityNameByCode(code) {
    return this.cities[code].name;
  }

  getAirlineNameByCode (code) {
    return this.airlines[code] ? this.airlines[code].name : '';
  }

  getAirlineLogoByCode (code) {
    return this.airlines[code] ? this.airlines[code].logo : '';
  }

  getTicketById (id) {
    const ticket = this.lastSearch.find(el => el.id === id);
    return ticket;
  }

  createShortsCitiesList(cities) {
    return Object.entries(cities).reduce((acc, [, city]) => {
      acc[city.full_name] = null;
      return acc;
    }, {});
  }

  serializeCountries(countries) {
    return countries.reduce((acc, country) => {
      acc[country.code] = country;
      return acc;
    }, {});
  }
  
  serializeCities(cities) {
    return cities.reduce((acc, city) => {      
      const country_name = this.countries[city.country_code].name;
      city.name = city.name || city.name_translations.en; 
      const full_name = `${city.name},${country_name}`;
      acc[city.code] = {
        ...city,
        country_name,
        full_name,
      };
      return acc;
    }, {});   
  }

  serializAirlines (airlines) {
    return airlines.reduce((acc, item) => {
      item.logo = `http://pics.avs.io/200/200/${item.code}.png`;
      item.name = item.name || item.name_translations.en;
      acc[item.code] = item;
      return acc;
    }, {});
  }  

  async fetchTickets(params) {
    const response = await this.api.prices(params);    
    this.lastSearch = this.serializeTickets(response.data);
    console.log(this.lastSearch);
  }

  serializeTickets (tickets) {
    return Object.values(tickets).map((ticket, i) => {
      return {
        ...ticket,
        origin_name: this.getCityNameByCode(ticket.origin),
        destination_name: this.getCityNameByCode(ticket.destination),
        airline_logo: this.getAirlineLogoByCode(ticket.airline),
        airline_name: this.getAirlineNameByCode(ticket.airline),
        departure_at: this.formatDate(ticket.departure_at, 'dd MMM yyyy hh:mm'),
        return_at: this.formatDate(ticket.return_at, 'dd MMM yyyy hh:mm'),
        id: `${ticket.origin}${ticket.destination}${i}`,
      }
    });
  }
}
const location = new Location(api, { formatDate });
export default location;