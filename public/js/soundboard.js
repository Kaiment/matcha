$(document).ready( () => {

    $(sounds).on('click', 'button', (event) => {
        let sound = new Audio('/soundboard/' + event.target.id + '.mp3');
        sound.play();
    })

})