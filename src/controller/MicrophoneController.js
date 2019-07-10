export class MicrophoneController{

    constructor(){

        navigator.mediaDevices.getUserMedia({audio:true}).then(screenStream=>{
            
            this._screenStream = screenStream  
            
            let audio = new Audio()

            audio.srcObject = screenStream;

            audio.play()

        }).catch(err => {
            console.error(err)
        })

        
    }

    stop(){

        this._screenStream.getTracks().forEach(track=>{
            track.stop()
        })
        
    }



}