import db from './util/database.ts'

const TAMANHO = 20;
const create = async () => {

  const users = db.getCollection('users');

  console.time('bulk');
  const contatos = [];
  for (let index = 0; index < TAMANHO; index++) {
    const contato = {
      id:  index,
      nome: 'neto@neto.com',
      idade: index
    };

    contatos.push(contato);
  }
  //users.insert(contatos);
  //console.log(contatos)
  salvar(users, contatos);
  console.timeEnd('bulk');
  console.log('Users', users.data);
  /* console.log('Cities', locale.data); */
}

const update = async () => {

  const users = db.getCollection('users');


  console.time('bulk');
  const contatos = [];
  for (let index = 0; index < TAMANHO; index++) {

   if (index % 2 === 0) { 
    const contato = {
      id:  index,
      nome: 'par*******',
      idade: 0
    };
  } else {
    const contato = {
      id:  index,
      nome: 'neto@neto.com',
      idade: index
    };
  }

    contatos.push(contatos);
  }

  salvar(users, contatos);
  console.timeEnd('bulk');
  console.log('Users', users.data);
}

const read = async () => {
  const users = db.getCollection('users');
  const cities = db.getCollection('cities');

  // implicit (assumes $eq operator)
  // const results = users.find({ 'age': 40 });

  console.log('users', users.data)
  console.log('cities', cities.data)
  // console.log('result', results)
}

const update_old = async () => {
  const users = db.getCollection('users');

  //console.log('use', users.data)
  //db.saveDatabase();

  const neto = [
    {
      id: 1,
      nome: 'maria',
      idade: 80
    },
    {
      id: 2,
      nome: 'maria 5',
      idade: 50 
    },{
      id: 3,
      nome: 'maria 3',
      idade: 803
    },{
      id: 6,
      nome: 'maria 6',
      idade: 66
    }
  ];

  // const neto = [
  //   {
  //     id: 1,
  //     nome: 'maria',
  //     idade: 90
  //   },
  //   {
  //     id: 2,
  //     nome: 'maria 5',
  //     idade: 50 
  //   }
  // ];

  salvar(users, neto);

 // console.log('neto', neto)

  /* users.update(neto);
  console.log('nome', neto) */
}

const salvar = (table, items) => {

  const itemsInsert = [];
  const itemsUpdate= [];

  items.forEach(item => {
    
    let obj = table.findOne({ id: item.id});

    if (obj !== null) {
      obj.data={ ...item};
      //table.update(obj);
      itemsUpdate.push(obj);
    } else {
      //table.insert(item);
      itemsInsert.push(item);
    }
  })

  if (itemsInsert.length > 0) {
    console.log('INSERT');
    table.insert(itemsInsert);
  }

  if (itemsUpdate.length > 0) {
    console.log('UPDATE');
    table.update(itemsUpdate);
  }
 db.saveDatabase();
}

const del = async () => {
  const users = db.getCollection('users');

  var neto = users.findOne({ nome: "ivy" });
  users.remove(neto);

  console.log('nome', neto)
}


function App() {

  return (
    <div>
      <button onClick={create} title="create">
        Create
      </button>

      <button onClick={read} title="read">
        Read
      </button>
      <button onClick={update} title="update">
        Update
      </button>
      <button onClick={del} title="delete">
        Delete
      </button>
    </div>
  );
}

export default App;
