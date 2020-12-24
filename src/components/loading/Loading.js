import Spinner from 'react-bootstrap/Spinner';
import './Styles.scss';

const Loading = () => {
  return (
    <div className="loadingContainer">
      <Spinner className="loadingContainer__spinner" animation="border" />
    </div>
  );
};

export default Loading;
