(function($) {
	var ListView = Backbone.View.extend({
	  el: $('body'),

	  events: {
	  	'click button#inc': 'incCounter',
	  	'click button#dec': 'decCounter',
	  	'click button#write': 'writeCounter'
	  },
	  initialize: function() {
	    _.bindAll(this,'render','incCounter','decCounter','writeCounter');
	    this.counter = 0;
	    this.render();
      },
      render: function(){
   	    $(this.el).append("<button id='inc'>inc</button>");
   	    $(this.el).append("<button id='dec'>dec</button>");
   	    $(this.el).append("<button id='write'>write</button>");
   	    $(this.el).append("<ul></ul>");  
   	    $(this.el).append("<div id='counter'></div>");
   	    $(this.el).append("<div id='text'></div>");
      },
      incCounter: function(){
        this.counter++;
        $('#counter', this.el).text(this.counter);
      },
      decCounter: function(){
        this.counter--;
        $('#counter', this.el).text(this.counter);
      },
      writeCounter: function(){
        $('#text', this.el).text('write:' + this.counter);
      }
	});
   var listView = new ListView();      
})(jQuery);
