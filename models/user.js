const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,

    },
    aadharnumber: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['voter', 'admin'],
        default: 'voter',
    },
    isVoted: {
        type: Boolean,
        default: false,
    }
});


userSchema.pre('save', async function (next) {
    const user = this;
    // when user not creates new user or modified his own password the next() function is called and not hashing is done
    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
};



const User = mongoose.model('user', userSchema);
module.exports = User;
