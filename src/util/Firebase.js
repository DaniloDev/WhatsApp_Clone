const firebase = require('firebase')
require('firebase/firestore')

export class Firebase{

    constructor(){

        this._config = {
            apiKey: "AIzaSyCw7fDHaWaSQWjoxX_mBdBJeOGTwOhAFSc",
            authDomain: "whatsapp-clone-c6525.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-c6525.firebaseio.com",
            projectId: "whatsapp-clone-c6525",
            storageBucket: "",
            messagingSenderId: "946024789427",
            appId: "1:946024789427:web:902e44858e1a7924"
          };
        

        this.init()
    }

    init(){

        if(!this._initalized){
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            })

            this._initalized = true
        }
    }

    static db(){

        return firebase.firestore()
    }

    static hd(){

        return firebase.storage()
    }
    

}