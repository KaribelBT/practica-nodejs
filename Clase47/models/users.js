let = user_list = [];

class Users {
    createUserId = () => {
        return user_list.length + 1;
    }
    create(name, lastname, email, password){
        let newUser = {
            id: this.createUserId(),
            name,
            lastname,
            email,
            password,
        };
        user_list.push(newUser);
        return newUser
    };
    read(email){
        return user_list.find(u => u.email == email);
    };
    list(email){
        let user = this.read(email);
        if( user.hasOwnProperty('isAdmin') && user.isAdmin == true) {
         return user_list;
        }       
    };
    update(email, name, lastname, password){
        let user = this.read(email);
        user.name = name;
        user.lastname = lastname;
        user.password = password;  
        return user;      
    };
    setAdmin(email, isAdmin){
        let user = this.read(email);
        if (!user.hasOwnProperty('isAdmin')){
            user.isAdmin = false;
        }else{
            user.isAdmin = isAdmin;
        }
        return user
    }
    login(email, password){
        const userFiltered = user_list.find (u => u.email === email && u.password === password);
        if(userFiltered==undefined){
            return false;
        }else{ 
            return {
                logged:true,
                user:userFiltered
            }
        }        
    }
    userNotFound = (req, res, next) => {
        const { email } = req.params;
        const exist = this.read(email);
        if (!exist) return res.status(404).json({ error: `El usuario con el email ${email} no existe` });
        else{ next() };
    };
    userExist = (req, res, next) => {
        const { name, lastname, email } = req.body;
        const exist = user_list.find( u => u.name === name && u.lastname == lastname && u.email === email );
        if (exist) return res.status(409).json({ error: `Ya existe el usuario ${name} ${lastname} asociado a este email ${email}` });
        else{ next() };        
    };
};

module.exports = { Users }