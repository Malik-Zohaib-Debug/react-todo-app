import GlobalProvider from './global/globalContext';
import Header from "./components/Header";
import AddTask from "./components/AddTask";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="App">
        <AddTask />
      </div>
    </GlobalProvider>
  );
}

export default App;
