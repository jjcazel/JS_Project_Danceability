import './styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').innerText = "Hello World!";
});

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCB9EOGCh5IJCSUYF8MyBIAQLJjWv5K7i3icNRpxFaF_-hWua93bk6AW8kfe0Y2B2IxddsqqVpLF59zm9H0Eorv2OeJZV7_zrRiICFIlCMxZI470pZkq2HjmqnJf6bcTdARS_0KAjuaDD744g9BheYKzqVgKD82';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
};