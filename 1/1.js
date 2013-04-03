(function($) {
	var ListView = Backbone.View.extend({
	  el_body: $('body'),
	  initialize: function() {
	    _.bindAll(this,'render');
	    this.render();
      },
      render: function(){
   	    $(this.el_body).append("<ul> <li>hello world</li> </ul>");  
      }
	});
   var listView = new ListView();      
})(jQuery);
