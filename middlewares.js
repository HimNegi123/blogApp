const bcrypt = require("bcrypt");

const encryptPassword = async function(req, res, next) {
    const password = req.body.password;

    try {
        const hashPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            });
        });

        req.body.password = hashPassword;
        console.log(`bcrypt password: ${hashPassword}`);
        next();
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { encryptPassword };
