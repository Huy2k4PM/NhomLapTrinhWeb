// listFilm.js

document.getElementById("show-now-showing").addEventListener("click", function() {
    document.getElementById("now-showing").style.display = "block";  // Hiển thị phim đang chiếu
    document.getElementById("coming-soon").style.display = "none";  // Ẩn phim sắp chiếu
});

document.getElementById("show-coming-soon").addEventListener("click", function() {
    document.getElementById("coming-soon").style.display = "block";  // Hiển thị phim sắp chiếu
    document.getElementById("now-showing").style.display = "none";  // Ẩn phim đang chiếu
});
