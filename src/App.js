import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ResultChat from "./pages/ResultChat";
import "./App.css";
function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path="/result-chat"
                    element={
                        <MainLayout>
                            <ResultChat />
                        </MainLayout>
                    }
                />
                <Route
                    path="/virtual-try-on"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
