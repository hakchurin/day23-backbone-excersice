
 import $ from 'jquery';
 import Backbone from 'backbone';
 import router from './router';
 import Info from './person';
import Navigation from './nav';


 function logout() {
     let $logout = $(`
     <div class="postContainer">

       <form>
         <input type="submit" class="logout" name="logout" value="submit">
       </form>
     </div>
   `);

     $logout.find('input[type="submit"]').on('click', function(evt) {
         evt.preventDefault();
        //  var info = new Info({
        //      firstName: $('.first-name').val(),
        //      lastName: $('.last-name').val(),
        //      password: $('.password').val()
        //    });
           router.navigate('information', {trigger:true});

        //  info.save();
     });
    //  $('.container').append($information);
     return $logout;
 }
 export default logout;
