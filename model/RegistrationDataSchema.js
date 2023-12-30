const database = require('../db/connect');
const jwt = require('jsonwebtoken');
const RegistrationDataSchema = new database.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    userid: {
        type: Number,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    role: {
        type: Number,
        trim: true,
        default: 0
    },
    registrationno: {
        type: Number,
        require: true,
        trim: true,
        unique: true
    }, emailid: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },

    tokens: [
        {
            token: {
                type: String,
                trim: true,
            }
        }
    ]

}, { timestamps: true })

RegistrationDataSchema.methods.genratetokens = async function () {
    const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ "token": token });
    await this.save();
    return token;
}

const RegistrationDatamodel = database.model('ParticipantData', RegistrationDataSchema);
module.exports = RegistrationDatamodel;