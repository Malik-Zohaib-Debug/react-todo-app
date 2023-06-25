import Header from "./components/Header";
import AddTasks from "./components/AddTasks";
import TasksLists from "./components/TasksLists";
import GlobalProvider from "./global/globalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="App">
        <AddTasks />
        <TasksLists />
      </div>
    </GlobalProvider>
  );
}

export default App;
