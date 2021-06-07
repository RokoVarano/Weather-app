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
  form.appendChild(submitButton);

  return form;
}

const resultsSection = () => {
  const section = document.createElement('section');
  section.id = 'results_section';
  section.classList.add('secondary');

  return section;
};

export { formSection, resultsSection };