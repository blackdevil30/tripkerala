const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const whereschema = new mongoose.Schema({
    advtype: String,
    name: String,
    district: String,
    description: String,
    img: String
})
var WhereToGo = mongoose.model('WhereToGo', whereschema);
module.exports = WhereToGo;