const Contact = require('../models/contact-models');

const contactForm = async (req, res) => {
    try {
        const { username, email, message } = req.body;
        const contact = await Contact.create({ username, email, message });
        res.status(201).send({ message: "Message sent successfully", contact });
    } catch (error) {
        console.error(`CONTACT FORM ERROR ❌❌ ${error.message}`);
        res.status(500).json({ message: "Failed to send message" });
    }
};

module.exports = { contactForm };