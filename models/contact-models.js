const {model , Schema} = require('mongoose');

const contactSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true });


const Contact =  model('Contact', contactSchema);
module.exports = Contact;