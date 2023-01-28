// Array que vai receber varios objetos sendo os vários registros de gastos/ganhos
let registers = [];

const registerTypes = {
  income: 1,
  expense: 2,
};

const exampleRegister = {
  id: 'Coquinha gelada - 5.60 - 19/01/2023',
  type: registerTypes.expense,
  info: {
    value: 5.60,
    date: '19/01/2023',
    details: {
      title: 'Coquinha gelada',
      description: 'Comprei no dia que fui ao mercado',
    },
  },
};

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

addRegister({
  id: 'Coquinha gelada - 5.60 - 19/01/2023',
  type: registerTypes.expense,
  info: {
    value: 5.60,
    date: '19/01/2023',
    details: {
      title: 'Coquinha gelada',
      description: 'Comprei no dia que fui ao mercado',
    }
  }
});

addRegister({
  id: 'Achei na rua - 2.20 - 19/01/2023',
  type: registerTypes.income,
  info: {
    value: 2.20,
    date: '19/01/2023',
    details: {
      title: 'Achei na rua',
      description: 'Um dia feliz',
    }
  }
});

editRegister('Achei na rua - 2.20 - 19/01/2023', {
  id: 'Achei na rua - 50 - 19/01/2023',
  type: registerTypes.income,
  info: {
    value: 50,
    date: '19/01/2023',
    details: {
      title: 'Achei na rua',
      description: 'Um dia MUUUUUITO feliz',
    }
  }
});

deleteRegister('Coquinha gelada - 5.60 - 19/01/2023');