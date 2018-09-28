//This is our schema set-up for the collections (journal entries) that will
// be handled and entered

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const journalSchema = new Schema(
    {
    username: String,
    title: String,
    entry: String,
    date: Date
    });

const journals = mongoose.model('journals', journalSchema);

module.exports = journals;