(function($) {
    var Item = Backbone.Model.extend({
    	defaults: {
    		part1: 'hecclo',
    		part2: 'wocld'
    	}
    });

    var List = Backbone.Collection.extend({
    	model: Item
    });

    var ListView = Backbone.View.extend({
	  el: $('body'),

	  events: {
	  	'click button#add': 'addItem',
      'click button#write': 'writeItem'
	  },
	  initialize: function() {
	    _.bindAll(this,'render','addItem','appendItem','writeItem');

	    this.collection = new List();
	    this.collection.bind('add', this.appendItem);

      var item = new Item();
      item.set({
        part1: 'aaaaa',
        part2: 'bbbbb'
      })

      this.collection.add(item);

	    this.counter = 0;
	    this.render();
      },
      render: function(){
      	$(this.el).append("<button id='add'>Add list item</button>");
        $(this.el).append("<button id='write'>write list item</button>");
        $(this.el).append("<ul></ul>");
      },
      addItem: function(){
        this.counter++;
        var item = new Item();
        item.set({
        	part2: item.get('part2') + this.counter
        })
        this.collection.add(item,{silent: true});
      },
      appendItem: function(item){
        $('ul', this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+"</li>");
      },
      writeItem: function(){
        var self = this;
        _(this.collection.models).each(function(item) {
          self.appendItem(item);
        }, this);
      },
	});
   var listView = new ListView();      
})(jQuery);
