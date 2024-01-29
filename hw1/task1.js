const albums = [{
        title: "Mutter",
        artist: "Rammstein",
        year: "2001",
    },

    {
        title: "Krylia",
        artist: "Nautilus Pompilius",
        year: "1996",
    },

    {
        title: "Hypnotize",
        artist: "System of a Down",
        year: "2006",
    },
];

const musicCollection = {
    albums: [...albums],
    [Symbol.iterator]: function() {
        let countAlbums = 0;
        return {
            next: () => {
                if (countAlbums >= this.albums.length) {
                    return { done: true };
                } else {
                    return {
                        value: this.albums[countAlbums++],
                        done: false,
                    };
                }
            },
        };
    },
};
for (const albums of musicCollection) {
    console.log(`${albums.title} - ${albums.artist} (${albums.year})`);
}