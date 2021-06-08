import '@babel/polyfill';
import './styles.scss';
import { formSection, resultsSection } from './modules/frontend/_components';

const index = () => {
  const storageString = sessionStorage.getItem('data');
  const cf = sessionStorage.getItem('cf');
  const json = JSON.parse(storageString);

  const body = document.querySelector('body');
  body.appendChild(formSection());
  body.appendChild(resultsSection(json, cf));
};

index();