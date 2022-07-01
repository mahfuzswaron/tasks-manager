import { Routes, Route } from 'react-router-dom';
import CalendarCompo from './components/pages/Calendar/CalendarCompo';
import CompletedTasks from './components/pages/completed-tasks/CompletedTasks';
import ToDos from './components/pages/to-dos/ToDos';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import NotFound from './components/shared/NotFound';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ToDos />} />
        <Route path='/todos' element={<ToDos />} />
        <Route path='/completedTasks' element={<CompletedTasks />} />
        <Route path='/calendar' element={<CalendarCompo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
