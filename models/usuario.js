const { Schema, model } =  require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROL'
    },
    google: {
        type: Boolean,
        default: false
    }
});

UsuarioSchema.method('toJSON', function() {
  const {_v, _id, password , ...object} = this.toObject();
  object.id = _id;
  return object;
}); 

module.exports = model('Usuario', UsuarioSchema) 