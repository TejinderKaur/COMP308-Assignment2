/* Project Name: COMP308Assignment2
   File Name: contact.js
   Name: Tejinder Kaur
   Student id: 300976308
   Date: April 3, 2019 */
let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);