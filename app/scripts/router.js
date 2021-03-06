import $ from 'jquery';
import Backbone from 'backbone';
import $posts from './formPage';
import $information from './information';
import PostView from './postView';
import SinglePost from './singlePostView';
import loginView from './login';
import Navigation from './nav';


const Router = Backbone.Router.extend({
    routes: {
        posts: 'postsFunction',
  information: 'informationFunction',
  'posts/:id':  'singlePostFunction',

        '/*': 'informationFunction'




    },
    postsFunction: function() {
      let postView = new PostView();
      postView.render();

      let navigation = new Navigation();
      navigation.render()


        $('.container').empty().append($posts).append(postView.$el).append(navigation.$el);

    },
    informationFunction: function() {
      let navigation = new Navigation();
      navigation.render()
        $('.container').empty().append($information).append(navigation.$el);


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
      $('#blogContainer').append(singlePost.$el);
    },


    // loginFunction: function(){
    // //  let loginView = new LoginView();
    // //  loginView.render();
    //   $('.container').empty().append(loginView.$el);
    //
    // }
});



const router = new Router();
export default router;
