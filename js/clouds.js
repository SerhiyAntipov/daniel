window.onload = function (event) {


    // render cloud ====================
    (function cloud() {
        let cloud = document.getElementById("cloud");
        let ctxCloud = cloud.getContext("2d");
        ctxCloud.beginPath();
        ctxCloud.moveTo(50, 70);
        ctxCloud.bezierCurveTo(50, 20, 150, 20, 150, 50);
        ctxCloud.bezierCurveTo(170, 30, 230, 30, 230, 80);
        ctxCloud.bezierCurveTo(280, 80, 280, 170, 200, 160);
        ctxCloud.bezierCurveTo(200, 200, 100, 200, 100, 150);
        ctxCloud.bezierCurveTo(0, 170, 0, 70, 50, 70);
        ctxCloud.fillStyle = "white";
        ctxCloud.shadowBlur = 10;
        ctxCloud.shadowOffsetX = 5;
        ctxCloud.shadowOffsetY = 5;
        ctxCloud.shadowColor = "#2d73a4";
        ctxCloud.fill();
    }());



    // Render  Canvas -> Teddy Bear String
    function TeddyBearString(event) {
        let canvasTeddyBearString = document.getElementById("teddy-bear-string");
        let teddyBear = document.querySelector('.teddy-bear');
        let widthCanvasTeddyBearString = event.currentTarget.innerWidth;
        console.log(widthCanvasTeddyBearString)

        canvasTeddyBearString.style.height = teddyBear.height + "px";
        canvasTeddyBearString.style.marginBottom = "-" + teddyBear.height + "px"

        if (event.currentTarget.innerWidth <= 1920) {
            canvasTeddyBearString.style.width = event.currentTarget.innerWidth + "px";
        } else {
            canvasTeddyBearString.style.width = 1920 + "px";
        }


        let ctxString = canvasTeddyBearString.getContext("2d");
        ctxString.beginPath();
        ctxString.moveTo(0, 0);
        ctxString.quadraticCurveTo(1920 - 1920 / 5, 120, 1920, 0);
        ctxString.strokeStyle = "#007db1";
        ctxString.stroke();


        // window resize -> resize canvas
        window.onresize = function (event) {
            canvasTeddyBearString.style.height = teddyBear.height + "px";
            canvasTeddyBearString.style.marginBottom = "-" + teddyBear.height + "px";

            if (event.target.innerWidth < 1920) {
                canvasTeddyBearString.style.width = event.target.innerWidth + "px";
                ctxString.quadraticCurveTo(1920 - 1920 / 5, 120, 1920, 0);
            } else {
                canvasTeddyBearString.style.width = 1920 + "px"
            }
        }

    };
    TeddyBearString(event);
}

