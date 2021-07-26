import './styles/global.scss'
import NavHeader from "./components/organisms/NavHeader";
import NavSidebar from "./components/organisms/NavSidebar";
import Landing from "./pages/Landing";
import {Route} from "wouter";
import SingleSchool from "./pages/SingleSchool";

function App() {
    return (
        <div className="App">
            <NavHeader/>
            <main>
                <NavSidebar/>
                <Route path="/" component={Landing}/>
                <Route path="/schools/:name">
                    {(params) => <SingleSchool name={params.name}/>}
                </Route>
            </main>
        </div>
    );
}

export default App;
