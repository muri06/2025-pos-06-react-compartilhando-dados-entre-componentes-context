
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { TarefaProvider } from './data/ContextTarefa.tsx';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Tarefas from './pages/Tarefas.tsx';
import NovaTarefa from './pages/NovaTarefa.tsx';

const App: React.FC = () => {
  return (
    <TarefaProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tarefas" element={<Tarefas />} />
              <Route path="/tarefas/nova" element={<NovaTarefa />} />
            </Routes>
          </main>
          
          <footer className="bg-white border-t border-gray-200 py-8">
            <div className="max-w-5xl mx-auto px-4 text-center text-gray-500 text-sm">
              <p>© 2025 Infoweb - IFRN Natal-Central</p>
              <p className="mt-1 font-medium text-gray-400">Disciplina: Programação Orientada a Serviços</p>
            </div>
          </footer>
        </div>
      </Router>
    </TarefaProvider>
  );
};

export default App;
