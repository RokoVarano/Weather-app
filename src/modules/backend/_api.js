const fetchWeather = async (cityName) => {
  const key = 'b48b5880b18acb3e39d1078bbf46d6c2';

  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`);

  const json = await response.text();

  sessionStorage.setItem('data', json);

  location.reload();
};

export { fetchWeather };
