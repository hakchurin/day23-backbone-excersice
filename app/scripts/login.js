import $ from 'jquery';
import Backbone from 'backbone';
import Router from './router';






const loginView = Backbone.View.extend({
  tagName: 'div',
  className: 'loginForm',
  
  events:{
    'click #loginBtn': 'loginFunction',
  },
  loginFunction: function(evt){
    evt.preventDefault();
    let username = this.$('#username').val();
    let password = this.$('#password').val();
    session.loginView(username,password);
    router.navigate('posts', {trigger:true});
  },

  template: function(){
    return `
    <h2> Login </h2>
    <input type="text" id="username" name="username" placeholder="username">
    <input type="text" id="password" name="password" placeholder="password">
    <button id="loginBtn"> Submit</button>
      `;
  },
  render: function(){
     this.$el.html(this.template());
     return this;
  },
});
export default loginView;
