const fetchWeather = async (cityName, cf) => {
  const key = 'b48b5880b18acb3e39d1078bbf46d6c2';

  const cfName = cf === '0' ? 'metric' : 'imperial';

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${cfName}&appid=${key}`);

  const json = await response.text();

  sessionStorage.setItem('data', json);
  sessionStorage.setItem('cf', cf);

  window.location.reload();
};

export default fetchWeather;
