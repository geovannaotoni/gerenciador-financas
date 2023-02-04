// Array que vai receber varios objetos sendo os vários registros de gastos/ganhos
let registers = [];

const registerTypes = {
  income: 1,
  expense: 2,
};

// const exampleRegister = {
//   id: 'Coquinha gelada - 5.60 - 19/01/2023',
//   type: registerTypes.expense,
//   info: {
//     value: 5.60,
//     date: '19/01/2023',
//     details: {
//       title: 'Coquinha gelada',
//       description: 'Comprei no dia que fui ao mercado',
//     },
//   },
// };

// Função para adicionar um registro
const addRegister = (register) => {
  registers.push(register);
};

// Função para deletar um registro já adicionado
const deleteRegister = (id) => {
  const updatedRegisters = [];

  for (const register of registers) {
    if (register.id !== id) {
      updatedRegisters.push(register);
    }
  }

  registers = updatedRegisters;
};

// Função para editar um registro (recebe um id e um objeto registro com novos dados)
const editRegister = (id, newData) => {
  const updatedRegisters = [];

  for (const register of registers) {
    if (register.id === id) {
      updatedRegisters.push(newData);
    } else {
      updatedRegisters.push(register);
    }
  }

  registers = updatedRegisters;
};

/*
// Exemplos
// addRegister({
//   id: 'Coquinha gelada - 5.60 - 19/01/2023',
//   type: registerTypes.expense,
//   info: {
//     value: 5.60,
//     date: '19/01/2023',
//     details: {
//       title: 'Coquinha gelada',
//       description: 'Comprei no dia que fui ao mercado',
//     }
//   }
// });

// addRegister({
//   id: 'Achei na rua - 2.20 - 19/01/2023',
//   type: registerTypes.income,
//   info: {
//     value: 2.20,
//     date: '19/01/2023',
//     details: {
//       title: 'Achei na rua',
//       description: 'Um dia feliz',
//     }
//   }
// });

// editRegister('Achei na rua - 2.20 - 19/01/2023', {
//   id: 'Achei na rua - 50 - 19/01/2023',
//   type: registerTypes.income,
//   info: {
//     value: 50,
//     date: '19/01/2023',
//     details: {
//       title: 'Achei na rua',
//       description: 'Um dia MUUUUUITO feliz',
//     }
//   }
// });

// deleteRegister('Coquinha gelada - 5.60 - 19/01/2023');
*/

const generateId = (title, value, date) => `${title} - ${value} - ${date}`;

const submitData = () => {
  const title = document.getElementById('title').value;
  const value = document.getElementById('amount').value;
  const date = document.getElementById('date').value;

  const registerToAdd = {
    id: generateId(title, value, date),
    type: registerTypes[document.getElementById('register-type').value],
    info: {
      value: value,
      date: date,
      details: {
        title: title,
        description: document.getElementById('description').value,
      }
    }
  };

  addRegister(registerToAdd);
  console.log(registers);
}

window.onload = () => {
  const form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', submitData);
};

/*
Próximos passos:
- Criar a função que cria os elementos de cada registro, e os adiciona na página, para isso:
Criar separadamente uma função que cria os elementos de um registro;
A lógica de adicionar os registros na página deve excluir todos os registros adicionados, para adicionar novamente com as devidas atualizações.
- Criar uma função para buscar o nome de um tipo de registro, através de seu Id.
- Criar função que exclui um registro da página.
*/
