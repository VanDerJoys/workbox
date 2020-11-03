const Model = require('../Modèle/model');
const Login = require('../Inscription/Login');
class SignUp{
    constructor(nom, prénom, téléphone, email, login, password){
        this.nom = nom;
        this.prénom = prénom;
        this.téléphone = téléphone;
        this.email = email;
        this.login = login;
        this.password = password;
    }

    async signUp(){
        let pwd = new Login(this.login, this.password);
        let db = new Model();
        db.insertUser(this.nom,this.prénom,this.téléphone,this.email,this.login,pwd.hashPassword());
    }
}

module.exports = SignUp;