import fetchWeather from '../backend/_api';

const formForm = () => {
  const form = document.createElement('form');
  const h1 = document.createElement('h1');
  h1.textContent = 'Weather';
  form.appendChild(h1);

  const inputText = document.createElement('input');
  inputText.type = 'text';
  form.appendChild(inputText);

  const cfSelector = document.createElement('input');
  cfSelector.id = 'cfSelector';
  cfSelector.type = 'range';
  cfSelector.min = '0';
  cfSelector.max = '1';
  cfSelector.value = '0';

  const selectorContainer = document.createElement('div');
  selectorContainer.id = 'selectorContainer';
  const pCelcius = document.createElement('p');
  pCelcius.textContent = ' \u2103';
  const pFarenheit = document.createElement('p');
  pFarenheit.textContent = ' \u2109';
  selectorContainer.appendChild(pCelcius);
  selectorContainer.appendChild(cfSelector);
  selectorContainer.appendChild(pFarenheit);

  const submitButton = document.createElement('button');
  submitButton.textContent = 'submit';
  submitButton.type = 'button';
  submitButton.classList.add('primary');
  submitButton.addEventListener('click', () => fetchWeather(inputText.value, cfSelector.value));
  form.appendChild(submitButton);
  form.appendChild(selectorContainer);

  return form;
};

const formSection = () => {
  const section = document.createElement('section');
  section.id = 'form_section';
  section.classList.add('secondary');

  section.appendChild(formForm());

  return section;
};

const resultsList = (cf, cityName, temperature, picture, otherData) => {
  const article = document.createElement('article');

  const icon = document.createElement('img');
  icon.src = `http://openweathermap.org/img/wn/${picture}@2x.png`;
  article.appendChild(icon);

  const h1 = document.createElement('h1');
  h1.textContent = cityName;
  article.appendChild(h1);

  const cfName = cf === '0' ? '\u2103' : '\u2109';

  const h3 = document.createElement('h3');
  h3.textContent = `${temperature} ${cfName}`;
  article.appendChild(h3);

  otherData.map((data) => {
    const p = document.createElement('p');
    p.textContent = `${data[0]} ${data[1]} ${data[2]}`;

    article.appendChild(p);

    return p;
  });

  return article;
};

const resultsSection = (jsonObject = null, cf = '0') => {
  const section = document.createElement('section');
  section.id = 'results_section';
  section.classList.add('primary');
  section.innerHTML = '';

  if (jsonObject === null) {
    return section;
  }

  if (jsonObject.cod !== '404') {
    section.appendChild(resultsList(cf, jsonObject.name, jsonObject.main.temp, jsonObject.weather[0].icon, [[jsonObject.weather[0].description, '', ''], ['Wind', jsonObject.wind.speed, 'km/h'], ['Humidity', jsonObject.main.humidity, '%']]));
  } else {
    const errorMessage = document.createElement('h1');
    errorMessage.textContent = jsonObject.message;
    section.appendChild(errorMessage);
  }

  return section;
};

export { formSection, resultsSection };