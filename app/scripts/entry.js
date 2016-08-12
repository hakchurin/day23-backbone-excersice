// Create a form
//A title and a body.
//function for new posts
// save blog posts

//possible use ajax





import $ from 'jquery';
import Backbone from 'backbone';
import routerPage from './router';
// import session from './session';

Backbone.history.start();
routerPage.navigate('posts', {trigger:true})


//
// $(document).ajaxSend(function(e, xhrAjax, jqueryAjax) {
//   console.log('intercepting');
//   if (session.authtoken) {
//     console.log('session auth');
//     xhrAjax.setRequestHeader('Authorization', `Kinvey ${session.authtoken}`);
//   } else {
//     console.log('basic');
//     xhrAjax.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`);
//   }
// });
