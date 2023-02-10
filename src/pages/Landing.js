import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Welcome to <span>EmergenSee </span>Services
          </h1>
          <p>We are here for you !</p>
          <Link to="/personData" className="btn btn-hero">
            Get person details
          </Link>
          <br />
          <br />
          <Link to="/register" className="btn btn-hero">
            Upload the person details
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
