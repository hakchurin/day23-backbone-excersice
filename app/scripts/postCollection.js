import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import Write from './post';


const PostCollection= Backbone.Collection.extend({
  url:'https://tiny-za-server.herokuapp.com/collections/hakchurinblog',
  model: Write



});
let postCollection= new PostCollection();
export default postCollection;
