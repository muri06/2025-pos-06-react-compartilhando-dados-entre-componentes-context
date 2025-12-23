
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-indigo-600 p-8 text-white">
          <h1 className="text-3xl font-extrabold mb-2">Atividade React Context</h1>
          <p className="text-indigo-100 opacity-90">Programação Orientada a Serviços (POS)</p>
        </div>
        
        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">Informações da Disciplina</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 uppercase font-bold mb-1">Instituição</p>
                <p className="font-medium">CNAT-IFRN (Natal-Central)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 uppercase font-bold mb-1">Curso</p>
                <p className="font-medium">Infoweb (Técnico Integrado)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 uppercase font-bold mb-1">Professor</p>
                <p className="font-medium">Leonardo Minora</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 uppercase font-bold mb-1">Status</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Em Desenvolvimento
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">Objetivos do Projeto</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-indigo-500 mt-1"></i>
                <span>Compartilhamento de dados via <strong>Context API</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-indigo-500 mt-1"></i>
                <span>Integração com <strong>DummyJSON API</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-indigo-500 mt-1"></i>
                <span>Navegação com <strong>HashRouter</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-indigo-500 mt-1"></i>
                <span>Estilização responsiva com <strong>Tailwind CSS</strong>.</span>
              </li>
            </ul>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/tarefas" 
              className="flex-1 bg-indigo-600 text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
            >
              Ver Lista de Tarefas
            </Link>
            <Link 
              to="/tarefas/nova" 
              className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 text-center py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
            >
              Adicionar Nova Tarefa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
