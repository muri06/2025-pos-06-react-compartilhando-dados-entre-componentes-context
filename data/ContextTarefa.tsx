
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Tarefa, TarefaContextType } from '../types/tarefa.ts';

const TarefaContext = createContext<TarefaContextType | undefined>(undefined);

export const TarefaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Initial load from DummyJSON
  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos?limit=10');
        const data = await response.json();
        setTarefas(data.todos);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTarefas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTarefa = useCallback((todo: string) => {
    const novaTarefa: Tarefa = {
      id: Date.now(), // Usando timestamp para ID local simplificado
      todo,
      completed: false,
      userId: 1
    };
    setTarefas(prev => [novaTarefa, ...prev]);
  }, []);

  const toggleTarefa = useCallback((id: number) => {
    setTarefas(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  }, []);

  const removeTarefa = useCallback((id: number) => {
    setTarefas(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <TarefaContext.Provider value={{ tarefas, loading, addTarefa, toggleTarefa, removeTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
};

export const useTarefas = () => {
  const context = useContext(TarefaContext);
  if (context === undefined) {
    throw new Error('useTarefas deve ser usado dentro de um TarefaProvider');
  }
  return context;
};
