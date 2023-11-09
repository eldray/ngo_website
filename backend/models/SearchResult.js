const mongoose = require('mongoose');

const searchResultSchema = new mongoose.Schema({
  title: String,
  // Define other fields as needed
});

const SearchResult = mongoose.model('SearchResult', searchResultSchema);

module.exports = SearchResult;
