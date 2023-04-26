// Essa sessão vai acessar todos os arquivos diretamento do banco de dados


const connection = require('./connection');

//Fução vai listar todas as tasks que estão no banco de dados
const getAll = async () => {
//Função para salvar as tasks que vão vir do banco de dados
/*Dessa forma com os colchetes eu pega as informações da tabela tasks e armazeno dentro da const
tasks, dessa forma não precisa mais usar o "return tasks[0]"*/
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const addTask = async (task) => {

    //Dessa forma a const está retirando o titulo
    const { title } = task;
    //Configuração para gerar a data de acordo com o local do usuario
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';

    /*A "connetion" nesse caso é uma forma da const se comunicar com o banco de dados.
    O comando executar vai conter os comandos SQL dentro do banco de dados*/
    const [addTask] = await connection.execute(query, [title, 'pendente', dateUTC ]);
    return {insertId: addTask.insertId};
};

const deleteTask = async (id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    const { title, status } = task;
    
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask;
};

module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask
};