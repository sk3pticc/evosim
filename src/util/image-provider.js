class ImageProvider {
    constructor() {
        this.imgs = {};
    }

    loadImages() {
        this.imgs.teeb = loadImage('/img/teeb.png');
    }

    getImage(name) {
        return this.imgs[name];
    }
};

const imageProvider = new ImageProvider();

export default imageProvider;