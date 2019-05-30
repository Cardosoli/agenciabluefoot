import Api from '../Api/api';

const Codcnpj = '12345678000123'

class cnpjService {
    
    static validateCNPJ(number) {
        return new Promise((resolve, reject) => {
            Api.get(`quote/${number}`);
            if (number === Codcnpj) {
                return resolve({
                valid: true
                })
            } 
            else {
                return reject({
                    valid: false
                })
            }
        })        
    }
}

export default cnpjService;


