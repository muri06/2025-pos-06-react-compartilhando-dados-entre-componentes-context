
export interface Tarefa {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TarefaContextType {
  tarefas: Tarefa[];
  loading: boolean;
  addTarefa: (todo: string) => void;
  toggleTarefa: (id: number) => void;
  removeTarefa: (id: number) => void;
}
