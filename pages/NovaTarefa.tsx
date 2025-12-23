
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTarefas } from '../data/ContextTarefa.tsx';

const NovaTarefa: React.FC = () => {
  const [todo, setTodo] = useState('');
  const { addTarefa } = useTarefas();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim()) {
      addTarefa(todo);
      navigate('/tarefas');
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all">
        <div className="bg-indigo-600 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-2xl font-bold">Adicionar Tarefa</h1>
            <p className="text-indigo-100">O que você precisa realizar hoje?</p>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-indigo-500 rounded-full opacity-50"></div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label htmlFor="todo" className="block text-sm font-semibold text-gray-700 mb-2">
              Descrição da Atividade
            </label>
            <textarea
              id="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Ex: Finalizar projeto de POS..."
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/tarefas')}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-plus text-sm"></i>
              Criar Tarefa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NovaTarefa;
