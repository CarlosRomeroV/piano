import './style.css'
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

//este evento de abajo lo metimos en un bucle for para q ocupe menos lineas y sea mas comodo
//document.querySelector('[data-note="C4"]').addEventListener('click', () => playNote('C4') )

//array con todas las teclas
let keys = document.querySelectorAll('.key')
//recorre el array seleccionando cada uno de los items (keys)
for (let key of keys){
    //variabe que sea la nota q vamos a tocar
    let noteToPlay = key.getAttribute("data-note")
    key.addEventListener('mousedown', () => playNote(noteToPlay) )
    key.addEventListener('mouseup', () => stopNote() )
}

function playNote(note){
        synth.triggerAttackRelease(note);
}

function stopNote(note){
    synth.triggerRelease();
}