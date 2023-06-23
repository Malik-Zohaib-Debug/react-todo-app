
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { GlobalProvider } from "./global/globalContext";
import TasksList from "./components/TasksList";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="App">
        <AddTask />
        <TasksList />
      </div>
    </GlobalProvider>
  );
}

export default App;
