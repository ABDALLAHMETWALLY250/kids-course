document.querySelector('.cahr').addEventListener('click', function() {
    var messageImage = document.querySelector('.message');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // إخفاء صورة message بنعومة
    messageImage.style.opacity = '0';
    messageImage.style.visibility = 'hidden';

    // إظهار القائمة المنسدلة بعد إخفاء الصورة
    setTimeout(function() {
      dropdownMenu.style.display = 'block';
    }, 500); // يجب أن تكون هذه المدة نفس مدة الانتقال في CSS
  });