import "./style.css";
import logopic from "../assets/logo.svg";

const LoadingScreen = () => {
  return (
    <div className="loading-spinner">
      <img id="image" src={logopic} alt="logo" />
    </div>
  );
};

export default LoadingScreen;
