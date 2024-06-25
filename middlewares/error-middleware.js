const errorMiddleware = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong in Backend";
    const extradetails = error.extradetails || "No extra details available";

    res.status(status).json({ message, extradetails });
};

module.exports = { errorMiddleware };