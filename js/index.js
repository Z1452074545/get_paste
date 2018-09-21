var area1 = new LArea();
area1.init({
    'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
    'valueTo': '#value1', //选择完毕后id属性输出到该位置
    'keys': {
        id: 'id',
        name: 'name'
    }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
    'type': 1, //数据源类型
    'data': LAreaData //数据源
});
area1.value = [1, 13, 3]; //控制初始位置，注意：该方法并不会影响到input的value

(function() {
    var phone = document.querySelector(".phone input");
    phone.onblur = function() {
        var phone_val = phone.value;
        if (!(/^1[34578]\d{9}$/.test(phone_val))) {
            phone.value = "手机号错误,请重新输入！";
            phone.style.color = "red";
            return false;
        }
    }
    phone.onfocus = function() {
        phone.value = "";
        phone.style.color = "#fff";
    }

    // 获取后状态
    var falg = false;
    var but_submit = document.querySelector(".but_submit");
    var popup_succeed = document.querySelector(".popup_succeed");
    var popup_defeated = document.querySelector(".popup_defeated");
    but_submit.onclick = function() {
            if (falg == true) {
                popup_succeed.style.display = "block";
                popup_defeated.style.display = "none";
            } else {
                popup_succeed.style.display = "none";
                popup_defeated.style.display = "block";
            }

        }
        // 关闭弹窗
    var succeed_cancel = document.querySelector('.succeed_cancel');
    var succeed_confirm = document.querySelector('.succeed_confirm');
    var defeated_cancel = document.querySelector('.defeated_cancel');
    var defeated_confirm = document.querySelector('.defeated_confirm');
    succeed_cancel.onclick = function() {
        popup_succeed.style.display = "none";

    }
    succeed_confirm.onclick = function() {
        popup_succeed.style.display = "none";

    }
    defeated_cancel.onclick = function() {
        popup_defeated.style.display = "none";

    }
    defeated_confirm.onclick = function() {
        popup_defeated.style.display = "none";

    }
})()