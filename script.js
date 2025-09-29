let songs = [];
let combinedLyrics = [];

async function loadSongs() {
    try {
        const songFiles = [
            "songs/bohemian_rhapsody.json",
            "songs/shape_of_you.json"
        ];
        const promises = songFiles.map(file => fetch(file).then(res => res.json()));
        songs = await Promise.all(promises);
        renderSongs();
    } catch (err) {
        console.error("Error loading songs:", err);
    }
}

function renderSongs() {
    const songsList = document.getElementById('songsList');
    songsList.innerHTML = '';
    songs.forEach(song => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${song.title}</strong> - ${song.artist}`;
        div.onclick = () => addToCombined(song);
        songsList.appendChild(div);
    });
}

function addToCombined(song) {
    Object.entries(song.sections).forEach(([type, lyrics]) => {
        combinedLyrics.push(`[${type.toUpperCase()} - ${song.title}]\n${lyrics.join('\\n')}`);
    });
    renderCombined();
}

function renderCombined() {
    document.getElementById('combinedLyrics').innerText = combinedLyrics.join('\\n\\n');
}

loadSongs();
