function redirectToVideo(url) {
    window.location.href = url;
}
document.addEventListener('DOMContentLoaded', function () {
    var numLikes = 1;

    function aumentarLikes() {
        if (numLikes < 2) {
            numLikes++;
            document.getElementById('NumLikes').textContent = numLikes;
        }
    }

    document.getElementById('BtnLike').addEventListener('click', aumentarLikes);
});