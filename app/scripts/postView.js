import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import $information from './information';
import $posts from './formPage';
import postCollection from './postCollection';





const PostView = Backbone.View.extend({
  tagName: 'div',

  initialize: function(){
    postCollection.on('update', ()=>{
    this.render();

    });
    postCollection.fetch();

  },

    template: function(){
      return `
        <ul id= "posts">
        </ul>

      `;
    },

    render: function(){
      this.$el.html(this.template());
      postCollection.each((post) =>{
        let $visualPost = $(`<li>${post.get('title')}</li>`);
        this.$('#posts').append($visualPost);
        $visualPost.on('click', function(){
          router.navigate(`posts/${post.get('_id')}`,{trigger:true});

        });

      });
      return this;
    }

});

export default PostView;
