import db from './util/database.ts'

const cadastrar = async () => {


  const users = db.getCollection('users');
  /*  users.insert({ name: "neto", age: 999 });
   db.saveDatabase();
  */
  for (let index = 0; index < 100000; index++) {
    const contato = {
      nome: 'neto',
      email: 'neto@neto.com',
      age: 40
    };

    users.insert(contato)
  }

  const locale = db.getCollection('cities');

  for (let index = 0; index < 100000; index++) {
    const city = {
      city: 'Moc',
      uf: 'Mg',
      country: 'Brazil'
    };

    locale.insert(city)
  }

  db.saveDatabase();

  console.log('Users', users.data);
  console.log('Cities', locale.data);
}

const consultar = async () => {
  const users = db.getCollection('users');
  const cities = db.getCollection('cities');

  // implicit (assumes $eq operator)
  // const results = users.find({ 'age': 40 });

  console.log('users', users.data)
  console.log('cities', cities.data)
  // console.log('result', results)
}

const atualizar = async () => {
  const users = db.getCollection('users');

  var neto = users.findOne({ nome: "neto" });
  neto.nome = "ivy";

  users.update(neto);
  console.log('nome', neto)
}

const deletar = async () => {
  const users = db.getCollection('users');

  var neto = users.findOne({ nome: "ivy" });
  users.remove(neto);

  console.log('nome', neto)
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
      <button onClick={atualizar} title="atualizar">
        Atualizar
      </button>
      <button onClick={deletar} title="deletar">
        Deletar
      </button>
    </div>
  );
}

export default App;
