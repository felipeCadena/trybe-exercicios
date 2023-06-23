// fetch(URL, config)
fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')
  .then(response => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log('Erro ao fazer requisição.', error.message));