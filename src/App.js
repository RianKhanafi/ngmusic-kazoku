import "./App.css";
import { useMusic } from "./modules/music/hook";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";

function App() {
  const { searchParams, data, fetchMusic, status } = useMusic();

  return (
    <div className="container">
      {searchParams?.search ? (
        <Home props={{ searchParams, data, fetchMusic, status }} />
      ) : (
        <SplashScreen props={{ searchParams, data, fetchMusic }} />
      )}
    </div>
  );
}

export default App;
