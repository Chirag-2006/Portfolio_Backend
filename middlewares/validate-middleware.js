
const validate = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();

    } catch (err) {
        const status = 400;
        const message = err.errors[0].message;
        const extradetails = err.errors[0].path;

        next({ status, message, extradetails })
    }
}


module.exports = { validate };