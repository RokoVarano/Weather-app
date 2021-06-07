import "./styles.scss";
import { formSection, resultsSection } from './modules/frontend/_components'

const index = () => {
  const body = document.querySelector('body');
  body.appendChild(formSection());
  body.appendChild(resultsSection());
};

index();