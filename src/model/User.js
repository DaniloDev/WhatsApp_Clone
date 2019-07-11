import { Firebase } from './../util/Firebase'
import { Model } from './Model';

export class User extends Model{

    constructor(id){

        super()

        if(id) this.getById(id)
    }

    get name(){ return this._data.name }
    set name(value){ this._data.name = value }

    get email(){ return this._data.email }
    set email(value){ this._data.email = value; }

    get photo(){ return this._data.photo }
    set photo(value){ this._data.photo = value; }

    getById(id){

        return new Promise((s, f)=>{

            User.findByEmail(id).onSnapshot(doc=>{

                this.fromJSON(doc.data())

                s(doc)
            })
        })
    }

    save(){

        return User.findByEmail(this.email).set(this.toJSON())
    }

    saveEmail(){

        return User.findByEmail(this.email).set(this.toJSON())
    }

    static getRef(){

        return Firebase.db().collection('/users')
    }
    
    static getContactsRef(id){

        return User.getRef()
        .doc(id)
        .collection('contacts')

    }

    static findByEmail(email){

        return User.getRef().doc(email)
    }

    addContact(contact){

        return User.getContactsRef(this.email)
        .doc(btoa(contact.email))
        .set(contact.toJSON());
    }
    
    getContacts(){

        return new Promise((s, f)=>{

            User.getContactsRef(this.email).onSnapshot(docs=>{

                let contacs = []

                docs.forEach(doc=>{

                    let data = doc.data()

                    data.id = doc.id

                    contacs.push(data)

                })

                this.trigger('contactschange', docs)

                s(contacs)

            })
           
        })

    }

}