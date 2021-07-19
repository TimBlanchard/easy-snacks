import './styles/global.scss'
import NavHeader from "./components/organisms/NavHeader";
import NavSidebar from "./components/organisms/NavSidebar";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
        <NavHeader/>
        <main>
            <NavSidebar/>
            <Landing />
        </main>
    </div>
  );
}

export default App;
