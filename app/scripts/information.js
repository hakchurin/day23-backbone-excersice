 //Create a form for a person.
 //HAVE first name, last name, address, and phone number.
 //save the person to tiny-za-server



 import $ from 'jquery';
 import Backbone from 'backbone';
 import router from './router';
 import Info from './person';
import Navigation from './nav';


 function renderPeople() {
     let $information = $(`
     <div class="postContainer">
       <h2>Login</h2>
       <form id="loginForm">
         <input type="text" name="username" class="username" placeholder="Username">
         <input type="password" name="password" class="password" placeholder="password">
         <input type="submit" class="submit" name="submit" value="submit">
       </form>
     </div>
   `);

     $information.find('input[type="submit"]').on('click', function(evt) {
         evt.preventDefault();
        //  var info = new Info({
        //      firstName: $('.first-name').val(),
        //      lastName: $('.last-name').val(),
        //      password: $('.password').val()
        //    });
           router.navigate('posts', {trigger:true});

        //  info.save();
     });
    //  $('.container').append($information);
     return $information;
 }
 export default renderPeople;
