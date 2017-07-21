# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->

  clearNotice = ->
    $('.alert-info').animate { opacity: '0' }, 1500
    return

  $ ->
    setTimeout clearNotice, 1000


  $('.flexslider').flexslider
    animation: 'slide'
    animationLoop: false
    itemWidth: 210
    itemMargin: 5
    minItems: 2
    maxItems: 4
  return
