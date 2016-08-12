import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
// import Backbone from './backbone';




//
// function renderNav () {
//   let $nav = $(`
//       <ul class="nav">
//         <li>read</li>
//         <li>write</li>
//         <li>join</li>
//       </ul>
//   `);
//
//   $nav.find('li').on('click', function(evt){
//     evt.preventDefault();
//     let navLink = $(this)[0].innerText.toLowerCase();
//
//
//     router.navigate(navLink, {trigger: true});
//   });
//
//   return $nav;
// }
//
// export default renderNav;
//
//
//// <button>Home</button>
// //

const Navigation = Backbone.View.extend({
  tagName: 'navigation',
  // initialize: function (){
  //
  // },

  template: function(){
    return `
    <nav>

    </nav>
  `;
  },


  render: function(){
    this.$el.html(this.template());
    let $information = $('<button class="first-name"> login </button>');
    let $logout = $('<button class="logout"> logout </button>');

    this.$('nav').append($information).append($logout);

    $information .on('click', function(){
      router.navigate('information', {trigger:true});
    });
    $logout .on('click', function(){
      router.navigate('information', {trigger:true});
    });

    return this;
  }
});
export default Navigation;
