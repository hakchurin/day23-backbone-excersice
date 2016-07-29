
import Backbone from 'backbone';
//import formPage from './entry';

const Write = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/hakchurinblog',

  idAttribute: '_id'
});

export default Write;
