const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
    unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    default: 'DNE',
    type: String,
    trim: true,
    lowercase: true
  },
  lastName: {
    default: 'DNE',
    type: String,
    trim: true,
    lowercase: true
  },
  phoneNum: {
    default: 'DNE',
    type: String
  },
  profilePic: {
    default: 'DNE',
    type: String
  },
  glider: {
    default: 'DNE',
    type: String
  },
  ushpaRating: {
    default: 'DNE',
    type: String
  },
  medicalInfo: {
    default: 'DNE',
    type: String
  },
  emergencyContactName: {
    default: 'DNE',
    type: String,
    lowercase: true
  },
  emergencyContactRelation: {
    default: 'DNE',
    type: String
  },
  emergencyContactPhone: {
    default: 'DNE',
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Execute before each user.save() call
UserSchema.pre('save', function (callback) {
  let user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function (err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);