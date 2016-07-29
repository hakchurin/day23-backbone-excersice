import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import postCollection from './postCollection';



const SinglePost = Backbone.View.extend({
    initialize: function(id) {
      console.log(id);
        if (!postCollection.get(id)) {
            postCollection.add({
                _id: id
            });
        }
        console.log(postCollection);
        this.model = postCollection.get(id);
        this.model.on('change',() => {
            this.render();
        });
        this.model.fetch();
      },
      template: function(){
        return `
        <p class= "title"> ${this.model.get('title')} </p>
        <p class= "body"> ${this.model.get('body')}</p>
        `;
      },
      render: function(){
        this.$el.html(this.template());
        return this;
      }

});
export default SinglePost;
