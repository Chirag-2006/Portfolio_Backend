const Project = require("../models/project-model");

const project = async (req, res) => {
    try {
        const projects = await Project.find();
        if (!projects) {
            return res.status(404).json({ message: "No projects found" });
        }
        res.status(200).json({projects});
    } catch (error) {
        console.error(`PROJECT ERROR ❌❌ ${error.message}`);
        res.status(500).json({ message: "Failed to get projects" });
    }
};

module.exports = project ;