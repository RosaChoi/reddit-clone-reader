import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['data.score'],
  sortAscending: false,
  actions: {
    changeSort: function() {
      this.toggleProperty('sortAscending');
    }
  }
});
