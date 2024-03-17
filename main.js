// JavaScript để hiển thị và ẩn form đăng nhập khi người dùng nhấp vào liên kết "Đăng nhập" và nút "Đóng"
document.getElementById("loginLink").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = "block";
});

document.getElementById("closeLoginForm").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = "none";
});
