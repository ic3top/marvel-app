import './errorMessage.scss';

export const ErrorMessage = ({ label = 'Hydra is currently attacking, sorry' }: {label?: string}) => (
  <div className="app__error-message">
    <span>404</span>
    <p>{label}</p>
  </div>
);
