class ListaDeTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adicionarTarefa(tarefa) {
      if (!tarefa || typeof tarefa !== 'string') {
        throw new Error('A tarefa deve ser uma string não vazia');
      }
      this.tarefas.push({ tarefa, concluida: false });
    }
  
    removerTarefa(tarefa) {
      const index = this.tarefas.findIndex(todo => todo.tarefa === tarefa);
      if (index > -1) {
        this.tarefas.splice(index, 1);
      } else {
        throw new Error('Tarefa não encontrada');
      }
    }
  
    obterTarefas() {
      return this.tarefas;
    }
}
  
export default ListaDeTarefas;
  