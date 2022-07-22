import loki from 'lokijs';
import LokiIndexedAdapter from 'lokijs/src/loki-indexed-adapter';


function databaseInitialize() {
  if (!db.getCollection("users")) {
    db.addCollection("users", {unique:['id']});
  }
  if (!db.getCollection("cities")) {
    db.addCollection("cities");
  }
}

var idbAdapter = new LokiIndexedAdapter('finance');
var pa = new loki.LokiPartitioningAdapter(idbAdapter, { paging: true });
var db = new loki("test", {
  adapter: pa,
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: false,
  autosaveInterval: 20000
});



export default db; 