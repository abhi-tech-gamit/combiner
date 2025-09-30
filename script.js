function addToCombined(song) {
    Object.entries(song.sections).forEach(([type, lyrics]) => {
        // Changed from '\\n' to '\n'
        combinedLyrics.push(`[${type.toUpperCase()} - ${song.title}]\n${lyrics.join('\n')}`);
    });
    renderCombined();
}

function renderCombined() {
    // Changed from '\\n\\n' to '\n\n'
    document.getElementById('combinedLyrics').innerText = combinedLyrics.join('\n\n');
}
