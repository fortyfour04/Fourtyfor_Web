console.log('%cCopyright © 2024 Fourtyfor.net',
    'background-color: #ff00ff; color: white; font-size: 24px; font-weight: bold; padding: 10px;'
);
console.log('%c   /\\_/\\', 'color: #8B4513; font-size: 20px;');
console.log('%c  ( o.o )', 'color: #8B4513; font-size: 20px;');
console.log(' %c  > ^ <', 'color: #8B4513; font-size: 20px;');
console.log('  %c /  ~ \\', 'color: #8B4513; font-size: 20px;');
console.log('  %c/______\\', 'color: #8B4513; font-size: 20px;');

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

function handlePress(event) {
    this.classList.add('pressed');
}

function handleOver(event){
    this.classList.add('over');
}

function handleRelease(event) {
    this.classList.remove('pressed');
}

function handleCancel(event) {
    this.classList.remove('pressed');
}

var buttons = document.querySelectorAll('.projectItem');

buttons.forEach(function (button) {
    button.addEventListener('mousedown', handlePress);
    button.addEventListener('mouseup', handleRelease);
    button.addEventListener('mouseleave', handleCancel);
    // button.addEventListener('mouseover',handleOver)
    button.addEventListener('touchstart', handlePress);
    button.addEventListener('touchend', handleRelease);
    button.addEventListener('touchcancel', handleCancel);
});

function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

// 显示图片
function pop(imageURL) {
    var tcMainElement = document.querySelector(".tc-img");
    if (imageURL) {
        tcMainElement.src = imageURL;
    }
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

var tc = document.getElementsByClassName('tc');
var tc_main = document.getElementsByClassName('tc-main');

tc[0].addEventListener('click', function (event) {
    pop();
});

tc_main[0].addEventListener('click', function (event) {
    event.stopPropagation();
});

// 显示Cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}


var pageLoading = document.querySelector("#Fourtyfor-loading");
window.addEventListener('load', function() {
    setTimeout(function () {
        pageLoading.style.opacity = '0';
    }, 100);
});

let totop = document.querySelector('.toTop')
    // 页面滚动窗口监听事件
    window.onscroll = function() {
      // 获取浏览器卷去的高度
      let high = document.documentElement.scrollTop || document.body.scrollTop
      if (high >= 300) {
        totop.style.display = 'block'
      } else {
        totop.style.display = 'none'
      }
    }
    // 点击返回顶部，可以加动画使其慢慢回到顶部
    toTop.addEventListener('click',() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })

    // 点击跳转
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }


    window.onscroll = function () {
        let sections = ['1', '2','3','4','5','6','7','8','9','10','11','12'];
        sections.forEach(section => {
            let element = document.getElementById(section);
            let position = element.getBoundingClientRect();
            if (position.top <= 150 && position.bottom >= 150) {
                document.querySelectorAll('.side-nav-item').forEach(div => {
                    div.classList.remove('active');
                });
                document.querySelector(`.side-nav-item[onclick="scrollToSection('${section}')"]`).classList.add('active');
            }
        });
    };