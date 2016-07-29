import $ from 'jquery';
import Backbone from 'backbone';
import $posts from './formPage';
import $information from './personForm';
import PostView from './postView';
import SinglePost from './singlePostView';
import loginView from './login';



const Router = Backbone.Router.extend({
    routes: {
        posts: 'postsFunction',
  information: 'informationFunction',
  'posts/:id':  'singlePostFunction',
        login: 'loginFunction'



    },
    postsFunction: function() {
      let postView = new PostView();
      postView.render();


        $('.container').empty().append($posts).append(postView.$el);

    },
    informationFunction: function() {
        $('.container').append($information);
        console.log('hi');
    },
    singlePostFunction: function(id){
      let postView = new PostView();
      let singlePost = new SinglePost(id);
      postView.render();
      singlePost.render();
      $('.container').empty().append($posts).append(postView.$el).append($(`<div id="blogContainer">
        </div>`));
      //postView.$el.find('#blogContainer').append(singlePost.$el);
      $('#blogContainer').empty().append(singlePost.$el);
    },
    loginFunction: function(){
    //  let loginView = new LoginView();
    //  loginView.render();
      $('.container').empty().append(loginView.$el);

    }
});



const router = new Router();
export default router;
