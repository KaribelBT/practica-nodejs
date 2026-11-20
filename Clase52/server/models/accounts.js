let user_accounts = {} //inicio el objeto 

class Accounts {
    //genero CBU random
    getCBU(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //genero las cuentas
    create(id) {
        user_accounts[id] = {
            account_list: [
                {
                    cbu: this.getCBU(11111111111111, 99999999999999),
                    type: 'Caja de Ahorro en Pesos',
                    balance: 500
                },
                {
                    cbu: this.getCBU(11111111111111, 99999999999999),
                    type: 'Cuenta Corriente en Pesos',
                    balance: 100
                },
                {
                    cbu: this.getCBU(11111111111111, 99999999999999),
                    type: 'Cuenta Proyecto en Pesos',
                    balance: 200
                }
            ]
        }
    }
    //busco cuentas por id de usuario
    getAccountsByUser(id) {
        return user_accounts[id].account_list
    }
    //transfiero entre cuentas
    transfer(cbuOrigen, cbuDestino, amount) {
        let account_list = []
        let origAccount = {}
        let destAccount = {}
        for (const key in user_accounts) {
            if (user_accounts.hasOwnProperty(key)) {
                    user_accounts[key].account_list.forEach(element => {
                    account_list.push(element)
                });
            }
        }
        origAccount = account_list.find(a => a.cbu == cbuOrigen);
        destAccount = account_list.find(a => a.cbu == cbuDestino);
        if (origAccount && destAccount) {
            if (origAccount.balance >= amount) {
                origAccount.balance = parseFloat(origAccount.balance) - parseFloat(amount);
                destAccount.balance = parseFloat(destAccount.balance) + parseFloat(amount);
                return { ok: 200 }
            } else {
                return { error: 412 }
            }
        } else {
            return { error: 404 }
        }
    }
}

module.exports = { Accounts }


