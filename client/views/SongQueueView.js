// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
  this.model.on('add', this.render, this);
  this.render();
  },

  render: function() {
    console.log('here this songQueueTHIS', this);
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.model.map(function(song){ //model?
        return new SongQueueEntryView({model: song}).render();
      }) // line 16 creates an array for each song and appends them under the Library element.
    );
  }

});


