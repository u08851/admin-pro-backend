const { Schema, model } =  require('mongoose');

const MedicoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId, 
        ref: 'Usuario',
        require: true
    },
    hospital: {
        type: Schema.Types.ObjectId, 
        ref: 'Hospital',
        require: true
    }
});

MedicoSchema.method('toJSON', function() {
  const {_v, password , ...object} = this.toObject();
  return object;
}); 

module.exports = model('Medico', MedicoSchema) 