const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true // Corrected typo
    },
    quantity: {
        type: String,
        required: true // Corrected typo
    },
});

const commentSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const moreSchema = new Schema({
    prep_time: {
        type: String,
        required: true
    },
    cook_time: {
        type: String,
        required: true
    },
    servings: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
});

const ItemSchema = new Schema({
    name: {
        type: String, // Added missing type
        required: true
    },
    thumbnail_image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    tags: [String],
    ingredients: {
        type: [ingredientSchema],
        required: true
    },
    comments: {
        type: [commentSchema],
        required: true
    },
    more: {
        type: moreSchema, // Fixed to be an object instead of an array
        required: true
    }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
