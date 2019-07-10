const firebase = require('firebase')
require('firebase/firestore')

export class Firebase{

    constructor(){

        this._config = {
            apiKey: "AIzaSyCw7fDHaWaSQWjoxX_mBdBJeOGTwOhAFSc",
            authDomain: "whatsapp-clone-c6525.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-c6525.firebaseio.com",
            projectId: "whatsapp-clone-c6525",
            storageBucket: "whatsapp-clone-c6525.appspot.com",
            messagingSenderId: "946024789427",
            appId: "1:946024789427:web:902e44858e1a7924"
          };
        

        this.init()
    }

    init(){

        if(!window._initalizedFirebase){
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                //timestampsInSnapshots: true
            })

            window._initalizedFirebase = true
        }
    }

    static db(){

        return firebase.firestore()
    }

    static hd(){

        return firebase.storage()
    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider)
            .then(result=>{

                let token = result.credential.acessToken
                let user = result.user

                s({
                    user,
                    token
                })
            })
            .catch(err=>{
                f(err)
            })
        })
    }
    

}