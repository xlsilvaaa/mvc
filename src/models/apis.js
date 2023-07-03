// instalar o freemework mongoose será responsável pela conexão com o banco de dados
// js é casesensitive - o plural e o singular. 
import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true},
        casado: { type: Boolean, required: true},
        monogamico: { type: Boolean, required: true},
        jaPeguei: { type: Boolean, required: true},
        taEmpregado: { type: Boolean, required: true},
        votouEmLula2022: { type: Boolean, required: true},
        sexualidade: { type: String, required: true},
    }
) 

const apis = mongoose.model('apis', apiSchema); //é aqui q estamos chamando tudo!

module.exports = apis; 

//new é palavra construtora, é possível criar arrays, objetos etc.

//mongoose é fremewoork e usa parâmetros json
