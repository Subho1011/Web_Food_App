import './Error.css';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  return(
    <div className="error">
      <h1>Ooopsss!</h1>
      <p>Something went wrong!</p>
    </div>
  );
};

export default Error;