import './global.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Outlet} from "react-router-dom";
import {FooterComponent} from "./components/FooterComponent.tsx";
import {HeaderComponent} from "./components/HeaderComponent.tsx";
import {store} from "./store.ts";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div>
                <HeaderComponent/>

                <div className="col-10 mx-auto container-fluid">
                    <Outlet/>
                </div>

                <FooterComponent/>
            </div>
        </Provider>
    );
}

export default App
