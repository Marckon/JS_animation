/**
 * Created by lcz on 2017/5/23.
 */
function move(json, obj, fn) {

    var icur = 0;
    var speed = 0;
    var flag;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        for (var i in json) {
            flag=false;
            if(flag!=true){
                if (i == 'opacity') {
                    icur = Math.round(parseFloat(getStyle(i, obj)) * 100);
                } else {
                    icur = parseInt(getStyle(i, obj));
                }
                speed = (json[i] - icur) / 3;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (icur == json[i]) {
                    flag=true;
                    if (fn) {
                        fn();
                    }
                } else {
                    if (i == 'opacity') {
                        obj.style[i] = (icur + speed) / 100;
                    } else {
                        obj.style[i] = icur + speed + 'px';
                    }

                }
            }
            else {
                clearInterval(obj.timer);
            }
        }
    }, 20)
}


function getStyle(attr, obj) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}
