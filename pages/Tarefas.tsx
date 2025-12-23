
import React from 'react';
import { useTarefas } from '../data/ContextTarefa.tsx';

const Tarefas: React.FC = () => {
  const { tarefas, loading, toggleTarefa, removeTarefa } = useTarefas();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium">Carregando tarefas do DummyJSON...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lista de Tarefas</h1>
          <p className="text-gray-500">Gerencie suas atividades acadêmicas</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase font-bold">Total</p>
            <p className="text-xl font-bold text-indigo-600">{tarefas.length}</p>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase font-bold">Feitas</p>
            <p className="text-xl font-bold text-green-600">{tarefas.filter(t => t.completed).length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {tarefas.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <i className="fa-solid fa-clipboard-list text-6xl mb-4 opacity-20"></i>
            <p className="text-lg">Nenhuma tarefa encontrada.</p>
            <p className="text-sm">Comece adicionando uma nova no botão acima.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {tarefas.map(tarefa => (
              <li 
                key={tarefa.id} 
                className={`flex items-center gap-4 p-5 transition-all hover:bg-gray-50 group ${tarefa.completed ? 'bg-gray-50' : ''}`}
              >
                <button 
                  onClick={() => toggleTarefa(tarefa.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    tarefa.completed 
                      ? 'bg-indigo-600 border-indigo-600 text-white' 
                      : 'bg-white border-gray-300 text-transparent hover:border-indigo-400'
                  }`}
                >
                  <i className="fa-solid fa-check text-xs"></i>
                </button>
                
                <span className={`flex-grow text-gray-800 transition-all ${tarefa.completed ? 'line-through text-gray-400 italic' : 'font-medium'}`}>
                  {tarefa.todo}
                </span>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => removeTarefa(tarefa.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Excluir tarefa"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tarefas;
