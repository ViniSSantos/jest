import ListaDeTarefas from "../src/todo";

describe('ListaDeTarefas', () => {
  let listaDeTarefas;

  beforeEach(() => {
    listaDeTarefas = new ListaDeTarefas();
  });

  test('adiciona uma nova tarefa', () => {
    listaDeTarefas.adicionarTarefa('Comprar leite');
    expect(listaDeTarefas.obterTarefas()).toEqual([{ tarefa: 'Comprar leite', concluida: false }]);
  });

  test('remove uma tarefa existente', () => {
    listaDeTarefas.adicionarTarefa('Comprar pão');
    listaDeTarefas.removerTarefa('Comprar pão');
    expect(listaDeTarefas.obterTarefas()).toEqual([]);
  });

  test('lança erro ao tentar remover uma tarefa inexistente', () => {
    expect(() => listaDeTarefas.removerTarefa('Comprar café')).toThrow('Tarefa não encontrada');
  });
});

/*
Função expect
O que é: A função expect é utilizada para criar uma expectativa de um valor. É o ponto de partida para qualquer asserção em Jest.

Como funciona: Quando você chama expect, você está dizendo ao Jest para "esperar" que algo específico aconteça. Por exemplo, você espera que uma função retorne um valor específico, ou que uma variável tenha um certo valor.

Sintaxe básica:
expect(valor).matcher();
Onde valor é o que você está testando (pode ser uma função, variável, objeto, etc.), e matcher é uma função que compara o valor com o resultado esperado.

Exemplo:
expect(2 + 2).toBe(4);
Nesse exemplo, expect(2 + 2) cria uma expectativa de que o resultado da operação 2 + 2 seja algo específico. O matcher que usamos aqui é toBe, que verifica se o valor é exatamente 4.

Função toEqual
O que é: toEqual é um dos "matchers" que você usa com expect para comparar valores. Ele é usado para verificar se dois objetos ou valores são "iguais" em termos de estrutura e conteúdo.
Como funciona: toEqual verifica a igualdade profunda. Isso significa que, ao contrário de toBe, que testa a igualdade estrita (===), toEqual vai comparar os valores internos de objetos e arrays recursivamente.
Exemplo de comparação com objetos:

const objeto1 = { a: 1, b: 2 };
const objeto2 = { a: 1, b: 2 };

expect(objeto1).toEqual(objeto2); // Este teste passará
Neste exemplo, toEqual compara os conteúdos de objeto1 e objeto2. Mesmo que sejam dois objetos diferentes na memória, seus conteúdos são os mesmos, então o teste passa.

Diferença entre toBe e toEqual
toBe: Verifica igualdade estrita (usando ===). É usado para comparar primitivos ou para verificar se duas variáveis referem-se exatamente ao mesmo objeto na memória.

const a = { foo: 'bar' };
const b = a;
expect(a).toBe(b); // Este teste passa porque 'a' e 'b' referem-se ao mesmo objeto.
toEqual: Verifica igualdade de conteúdo. Ideal para comparar objetos e arrays, pois verifica se eles têm as mesmas propriedades e valores.

const a = { foo: 'bar' };
const b = { foo: 'bar' };
expect(a).toEqual(b); // Este teste passa porque 'a' e 'b' têm o mesmo conteúdo.

*/