export class ElementsPrototype{

    elementsPrototype(){

        Element.prototype.hide = function(){
            this.style.display = 'none'
            return this
        }

        Element.prototype.show = function(){
            this.style.display = 'block'
            return this
        }

        Element.prototype.toggle = function(){
            this.style.display = (this.style.display === 'none') ? 'block' : 'none'
            return this
        }

        Element.prototype.on = function(events, fn){
            events.split(' ').forEach(event=>{
                this.addEventListener(event, fn)
            })
            return this
        }

        Element.prototype.css = function(styles){
            for (let name in styles){
                this.style[name] = styles[name]
            }
            return this
        }

        Element.prototype.addClass = function(name){
            this.classList.add(name)
            return this
        }

        Element.prototype.removeClass = function(name){
            this.classList.remove(name)
            return this
        }

        Element.prototype.toggleClass = function(name){
            this.classList.toggle(name)
            return this
        }

        Element.prototype.hasClass = function(name){
            return this.classList.contains(name)
        }

        HTMLElement.prototype.getForm = function(){

            return new FormData(this)
        }

        HTMLElement.prototype.toJSON = function(){

            let json = {}

            this.getForm().forEach((value, key)=>{
                json[key] = value
            })
            return json
        }
    }
}