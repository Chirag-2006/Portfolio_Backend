const adminMiddlewares = (req, res, next) => {
    try {
        // console.log(req.user)
        const isAdmin = req.user.isAdmin;
        if (!isAdmin) {
            return res.status(401).send({ message: "Access denied: user is not an admin" });
        }
        // res.status(200).send({ message : req.user});
        next();
    }
    catch (error) {
        res.status(401).send({ message: "Please authenticate for excess the admin panel" });
        next(error);
    }
}

module.exports = adminMiddlewares;