import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Cake from "./components/cake";
import Milk from "./components/Milk";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      <div>Redux</div>
      <Cake />
      <Milk />
      <Users />
    </Provider>
  );
}

export default App;
