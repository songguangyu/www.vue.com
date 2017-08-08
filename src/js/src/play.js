import Chimee from 'chimee';
//mport ui from 'chimee-plugin-controlbar';
//Chimee.install(ui);
const play = new Chimee({
    wrapper: '#wrapper',
    src: 'http://192.168.204.61/media/1fb433aa2aee9b7ad3d3957b582787de.f4v',
    //plugins: [ui.name],
    controls: true,
    autoplay: true,
    box: "flv",
    events: {
        play() {
            console.log('play!!');
        }
    }
});