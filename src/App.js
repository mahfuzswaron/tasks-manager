import { Routes, Route } from 'react-router-dom';
import Calendar from './components/pages/Calendar/Calendar';
import CompletedTasks from './components/pages/completed-tasks/CompletedTasks';
import ToDos from './components/pages/to-dos/ToDos';
import NotFound from './components/shared/NotFound';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ToDos />} />
        <Route path='/todos' element={<ToDos />} />
        <Route path='/completedTasks' element={<CompletedTasks />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
