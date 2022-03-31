const { failed } = require('../helpers/response')
const auth = (req, res, next) => {
    const { token } = req.headers;
    if (token) {
        next();
    } else {
        failed(res, 'error', 'failed', 'Invalid token');
    }
}

module.exports = {
    auth
}