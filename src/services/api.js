// Fichero src/services/api.js
const callToApi = () => {
    // Llamamos a la API
    return fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json') // Este 5 es el id de Leia Skywalker
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };
  
  export default callToApi;