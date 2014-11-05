DominionStrategyClone.Views.BoardsIndex = Backbone.View.extend({

  url: 'api/boards',
  template: JST['boards/index'],
  render: function(){
    var renderedContent = this.template({
      boards: this.collection
    })
    this.$el.html(renderedContent)
    return this;
  },
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render)
    this.collection.fetch();
  },
  events: {
      'click button': 'deleteBoard'
  },
  deleteBoard: function(){
    event.preventDefault();
    var id = parseInt(event.target.id);
    var model = this.collection.get(id);
    model.destroy();
    this.collection.fetch();
  }

})
