
import ToDo from "./components/templates/to-do/to-do";
import { GifProvider } from './context/todo-context/todo-context';
GifProvider

function App() {
  return(
    <>
    <GifProvider>
      <ToDo/>
    </GifProvider>
    </>
  );
  
}

export default App;
