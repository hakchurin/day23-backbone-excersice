 //Create a form for a person.
 //HAVE first name, last name, address, and phone number.
 //save the person to tiny-za-server



 import $ from 'jquery';
 import Backbone from 'backbone';
 import router from './router';
 import Info from './person';



 function renderPeople() {
     let $information = $(`
     <div class="postContainer">
       <h2>information</h2>
       <form>
         <input type="text" name="first-name" class="first-name" placeholder="First Name">
         <input type="text" name="last-name" class="last-name" placeholder="Last Name">
         <input type="text" name="address" class="address" placeholder="address">
         <input type="submit" class="submit" name="submit" value="submit">
       </form>
     </div>
   `);

     $information.find('input[type="submit"]').on('click', function(evt) {
         evt.preventDefault();
         var info = new Info({
             firstName: $('.first-name').val(),
             lastName: $('.last-name').val(),
             address: $('.address').val()
           });
         info.save();
     });
    //  $('.container').append($information);
     return $information;
 }
 export default renderPeople;
