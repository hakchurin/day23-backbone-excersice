import $ from 'jquery';
import backbone from 'backbone';
import router from './router';





const Navigation = Backbone.View.extend({
  tagName: 'navigation',
  initialize: function (){

  },

  template: function(){
    return `
    <nav>
    </nav>


    `;
  },

  render: function(){
    this.$el.html(this.template());
    let
  }
});
