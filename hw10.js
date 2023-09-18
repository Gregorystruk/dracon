<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delayed Price Change</title>
    <script>
        window.onload = function () {
            const lastUpdateTime = localStorage.getItem('lastUpdateTime');
            const currentTime = new Date().getTime();

            if (!lastUpdateTime || currentTime - lastUpdateTime >= 10000) {
                let currentValue = localStorage.getItem('price');
                if (!currentValue) {
                    currentValue = 100;
                }
                currentValue = parseInt(currentValue, 10) + 10;
                localStorage.setItem('price', currentValue);
                localStorage.setItem('lastUpdateTime', currentTime);
                document.getElementById('price').innerHTML = currentValue + ' грн';
            }
        };
    </script>
</head>
<body>
    <div id="price">100 грн</div>
</body>
</html>
