import { ReactComponent as YellowCar } from 'assets/images/yellow-car.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div>
              <h1> O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
          <div className="home-image-container">
            <YellowCar />
          </div>
        </div>
        <div className="home-card2">
          <Link to="/products">
            <ButtonIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;