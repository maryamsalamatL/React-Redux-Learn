import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Cake from "./components/cake";
import Milk from "./components/Milk";

function App() {
  return (
    <Provider store={store}>
      <div>Redux</div>
      <Cake />
      <Milk />
    </Provider>
  );
}

export default App;
