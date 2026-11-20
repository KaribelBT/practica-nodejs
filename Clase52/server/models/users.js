let = user_list = [];

class Users {
    createUserId = () => {
        return user_list.length + 1;
    }
    create(name, lastname, email, username, password){
        let newUser = {
            id: this.createUserId(),
            name,
            lastname,
            email,
            username,
            password
        }
        user_list.push(newUser);
        return newUser
    }    
    userExist = (req, res, next) => {
        const { email, username } = req.body
        const exist = user_list.find( u => u.email === email && u.username === username )
        if (exist) return res.status(409).json({ error: `Ya existe el usuario ${username} asociado a este email ${email}` });
        else{ next() };        
    }
    logIn(username, password){
        const userFiltered = user_list.find (u => u.username === username && u.password === password);
        if(userFiltered==undefined){
            return false;
        }else{ 
            return {
                logged:true,
                user:userFiltered
            }
        }
        
    }
    addAccounts(id,accounts){
        let user = user_list.find (u => u.id === id);
        user.accounts = accounts
        return user
    }
    validAccount = (req, res, next) => {
        const { id, origAccount } = req.body
        const user = user_list.find( u => u.id === id )
        const account = user.accounts.find(a => a.cbu == origAccount)
        if(!account){
            return res.status(409).json({ error: 'CBU inválido' });
        }else{
            next()
        }       
    }
};

module.exports = { Users }