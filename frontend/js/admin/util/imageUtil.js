export default {
    createImageFromFile(file) {
        let img = document.createElement("img");
        img.src = window.URL.createObjectURL(file);
        img.height = 60;
        img.onload = function() {
            window.URL.revokeObjectURL(this.src);
        };

        return img;
    }
}