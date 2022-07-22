import db from './util/database.ts'

const cadastrar = async () => {


  const users = db.getCollection('users');
  /*  users.insert({ name: "neto", age: 999 });
   db.saveDatabase();
  */
  for (let index = 0; index < 10000; index++) {
    const contato = {
      nome: 'neto martins',
      email: 'neto@neto.com',
      age: 40
    };

    users.insert(contato)
  }

  db.saveDatabase();

  console.log('db', users.data);
}

const consultar = async () => {
  const users = db.getCollection('users');

  // implicit (assumes $eq operator)
  const results = users.find({ 'age': 40 });

  console.log('users', users.data)
  console.log('result', results)
}


function App() {


  return (
    <div>
      <button onClick={cadastrar} title="Cadastrar">
        Cadastrar
      </button>

      <button onClick={consultar} title="consultar">
        Consultar
      </button>
    </div>
  );
}

export default App;
