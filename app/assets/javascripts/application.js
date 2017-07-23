// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sass-official
//= require rails.validations
//= require rails.validations.simple_form
//= require jquery.flexslider-min
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  $('#new_user').submit(function() {
    // Get the Login Name value and trim it
    var name = $.trim($('#user_name').val());
    // Check if empty of not
    console.log(name)
    //return false;
    if (name  === '') {
      console.log("in the loop")
      $('#user_name').val("Anonymous");
      // return false;
    }
  });
});
