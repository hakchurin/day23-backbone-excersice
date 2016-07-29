import $ from 'jquery';
import Backbone from 'backbone';
import Write from './post';


//
//
// const PostView = Backbone.View.extend({
//     initialize: function() {},
//     tagName: 'form',
//     events: {
//         'click #submitBtn': 'submitFunction',
//     },
// postViewFunction: function(evt) {
//         evt.preventDefault();
//         let title = this.$('input[name="title"]').val();
//         let write = this.$('input[name="write"]').val();
//
//         // session.save({
//         //         title: title,
//         //         write: write,
//
//             },
//
//     template: function() {
//         return `
//       <h2> Sign Up </h2>
//       <input type="text" id="title"  name="title" placeholder="title"/>
//       <input type="text" id="write"  name="write" placeholder="write here"/>
//       `;
//     },
//     render: function() {
//         this.$el.html(this.template());
//         return this;
//     }
//
// });
// export default PostView;



//
function renderPosts() {
    let $posts = $(`
      <h2>New Post</h2>
      <form>
      <div class= "post">
        <input type="text" id="postTitle" name="title" class="post-title" placeholder="Title">
        </div>
        <div>
        <textarea name="body" id="writeHere" placeholder="write here"></textarea>
        </div>
        <div>
        <input type="submit" id="submit" class="submit" name="submit" value="submit">
        </div>
      </form>

  `);
    $posts.find('input[type="submit"]').on('click', function(evt) {
        evt.preventDefault();
        var write = new Write({
            title: $('.post-title').val(),
            body: $('textarea').val()
          });
            write.save();
      });




    return $posts;
}
export default renderPosts;
