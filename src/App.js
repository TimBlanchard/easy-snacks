import './styles/global.scss'
import NavHeader from "./components/organisms/NavHeader";
import NavSidebar from "./components/organisms/NavSidebar";
import Landing from "./pages/Landing";
import Alerts from "./pages/Alerts";
import {Route} from "wouter";
import SingleSchool from "./pages/SingleSchool";
import SingleDistributeur from "./pages/SingleDistributeur";

function App() {
    return (
        <div className="App">
            <NavHeader/>
            <main>
                <NavSidebar/>
                <Route path="/" component={Landing}/>
                <Route path="/notifications" component={Alerts}/>
                <Route path="/ecole/:id">
                    {(params) => <SingleSchool id={params.id}/>}
                </Route>
                <Route path="/distributeur/:id">
                    {(params) => <SingleDistributeur id={params.id}/>}
                </Route>
            </main>
        </div>
    );
}

export default App;
