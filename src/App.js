import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewTodo } from './pages/NewTodo';
import { EditTodo } from './pages/EditTodo';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
