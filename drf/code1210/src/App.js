import './App.css';
import Logo_main from "./images/mai.png";
import Logo_sub from "./images/sub.png"

const App = () => {
  return (
    <div>
      <div className="logoMain">
        <img src={Logo_main} alt="Logo_main" />
      </div>
      <div className="logoSub">
        <img src={Logo_sub} alt="Logo_sub" />
      </div>
    </div>
  );
};

export default App;