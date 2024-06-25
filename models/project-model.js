const { Schema, model } = require('mongoose');

// Define collection and schema for Project
let ProjectSchem = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    githublink: {
        type: String,
        required: true
    },
    projectCreate: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Project = model('Project', ProjectSchem);

module.exports = Project;   