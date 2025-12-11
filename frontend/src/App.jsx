import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { MainLayout } from "./components/layout/MainLayout";
import Register from "./page/Register";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={"/"} element={<Home />} />
      </Route>
      <Route path={"/register"} element={<Register />} />
    </Routes>
  );
};

export default App;
