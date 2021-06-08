import { fetchWeather } from "../backend/_api"

const formSection = () => {
  const section = document.createElement('section');
  section.id = 'form_section';
  section.classList.add('primary');

  section.appendChild(formForm());

  return section;
};

const formForm = () => {
  const form = document.createElement('form')
  const h1 = document.createElement('h1');
  h1.textContent = 'Weather';
  form.appendChild(h1);

  const inputText = document.createElement('input');
  inputText.type = 'text';
  form.appendChild(inputText);

  const submitButton = document.createElement('button');
  submitButton.textContent = 'submit';
  submitButton.type = 'button';
  submitButton.classList.add('primary');
  submitButton.addEventListener('click', () => 
    fetchWeather(inputText.value));
  form.appendChild(submitButton);

  return form;
}

const resultsSection = (jsonObject = null) => {
  const section = document.createElement('section');
  section.id = 'results_section';
  section.classList.add('secondary');
  section.innerHTML = '';

  if (jsonObject) {
    section.appendChild(resultsList(jsonObject.name, jsonObject.main.temp, jsonObject.weather[0].id, [['Wind', jsonObject.wind.speed], ['Humidity', jsonObject.main.humidity]]));
  }

  return section;
};

const resultsList = (cityName, temperature, forecast, otherData) => {
  const article = document.createElement('article');

  const h1 = document.createElement('h1');
  h1.textContent = cityName;
  article.appendChild(h1);

  const h3 = document.createElement('h3');
  h3.textContent = `${temperature} \u2103 `;
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-cloud');
  h3.appendChild(i);
  article.appendChild(h3);

  otherData?.map(data => {
    const p = document.createElement('p');
    p.textContent = `${data[0]}: ${data[1]}`;

    article.appendChild(p);
  });

  return article;
}

export { formSection, resultsSection };