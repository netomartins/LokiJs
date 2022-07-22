import loki from 'lokijs';
import LokiIndexedAdapter from 'lokijs/src/loki-indexed-adapter';


function databaseInitialize() {
  if (!db.getCollection("users")) {
    db.addCollection("users");
  }
}

var idbAdapter = new LokiIndexedAdapter('finance');
var pa = new loki.LokiPartitioningAdapter(idbAdapter, { paging: true });
var db = new loki("test", {
  adapter: pa,
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 2000
});



export default db; 