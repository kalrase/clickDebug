var clickCount = 0
        // 设置连点监听
        document.addEventListener('click', function() {
            clickCount++;
            if(clickCount === 10) {
                showConsole()
				clearInterval(initCount);
            }
        })
        var initCount = setInterval(function() {
            clickCount = 0
            console.log('置零')
        }, 2000)
        function showConsole() {
           (function () { var script = document.createElement('script'); script.src="http://cdn.jsdelivr.net/eruda/1.0.5/eruda.min.js"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();
        }