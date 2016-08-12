
import Backbone from 'backbone';
import $Information from './information';

const Info = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/hakchurinblog',
  default: {
    //title: $('.post-title').val(),
    //body: $('textarea').val()
  }
});

export default Info;
