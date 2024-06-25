const User = require('../models/user-models');
const Contact = require('../models/contact-models');


// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        if (!users) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        console.log("ERROR: fetching users ", error.message)
        // next(error);
    }
}

// Get all contact
const getAllContact = async (req, res) => {
    try {
        const contact = await Contact.find();
        if (!contact) {
            return res.status(404).json({ message: "No contact found" });
        }
        return res.status(200).json(contact);
    } catch (error) {
        console.log("ERROR: fetching contact", error.message)
        // next(error);
    }
}

// delete a user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "No user found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log("ERROR: deleting user", error.message)
        // next(error);
    }
}

// get a single user
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "No user found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.log("ERROR: fetching user", error.message)
        // next(error);
    }
}

// update a user by id
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userUpdatedData = req.body;

        const updatedData = await User.updateOne({ _id: id }, { $set: userUpdatedData });
        if (!updatedData) {
            return res.status(404).json({ message: "No user found" });
        }
        return res.status(200).json(updatedData);
    }
    catch (error) {
        console.log("ERROR: updating user in backend", error.message)
        // next(error);
    }
}

// delete a contact
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "No contact found" });
        }
        return res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.log("ERROR: deleting contact", error.message)
        // next(error);
    }
}


module.exports = { getAllUsers, getAllContact, deleteUser, getUserById, updateUserById, deleteContact};
