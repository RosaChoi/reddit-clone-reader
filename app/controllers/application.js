import Ember from 'ember';

export default Ember.Controller.extend({
  searchSubreddits: false,
  actions: {
    searchSubreddits: function() {
      var searchTerm = this.get('subSearch');
      this.transitionToRoute('subSearch', searchTerm);
    }
  }
});
