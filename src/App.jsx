import { HashRouter, Route, Routes } from "react-router-dom";
import UsersDetails from "./components/UserDetails";
import UserList from "./components/UserList";
import UserLogin from "./components/UserLogin";
import "./App.css";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/api/login" element={<UserLogin />} />
                    <Route path="/api/users" element={<UserList />} />
                    <Route path="/api/usersDetails" element={<UsersDetails />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
