/*
 * 工具;
 * */

/**
 * 小于10的数字加0
 *
 * */
function addZero(num){
    if(typeof num!="number"){
        num="addZero参数类型错误";
    }else{
        num=num<10?"0"+num:num;
    }
    return num;
}
/**
 * 根据id获取元素
 * 替代document.getElementById()
 *
 * */
function getID(_id){
    var element=document.getElementById(_id);
    if(element){
        return element;
    }else{
        return "元素为空";
    }
}
/**
 * 创建表格
 * */
function createTable(row,col){
    var str="<table>";
    for(var i=0;i<row;i++){
        str+="<tr>";
        for(var j=0;j<col;j++){
            str+="<td>j</td>";
        }
        str+="</tr>";
    }
    str+="</table>";
    return str;
}
/**
 * 获取窗口的尺寸
 * @returns {{width: (number|Number), height: (number|Number)}}
 */
function getWindowSize(){
    return{
        "width":document.documentElement.clientWidth||window.innerWidth,
        "height":document.documentElement.clientHeight||window.innerHeight
    }
}
/**
 * 获取滚动条的宽度和高度
 * @returns {{top: number, left: number}}
 */
function getScrollSize(){
    return{
        "top":document.documentElement.clientTop||document.body.scrollTop,
        "left":document.documentElement.clientLeft||document.body.scrollLeft
    }
}
/**
 * 元素居中
 */
function Center(element){
    element.style.left=((getWindowSize().width-element.offsetWidth)/2+getScrollSize().left)+"px";
    element.style.top=((getWindowSize().height-element.offsetHeight)/2+getScrollSize().top)+"px";
}

function Diffent(event){
    return event=event||window.event;
}

function preventDefaule(event){
    if(window.event){
        window.event.returnValue=false;
    }else{
        event.preventDefault();
    }
}

function stopPropagation(event){
    if(window.event){
        window.event.cancelBubble=true;
    }else{
        event.stopPropagation();
    }
}

/*
* 密码强度验证
* */
function pwd_validate(content){
    var num=0;
    if(!/[\d]/.test(content)){
        num++;
    }
    if(!/[a-z]/.test(content)){
        num++;
    }
    if(!/[A-Z]/.test(content)){
        num++;
    }
    if(!/[\W]/.test(content)){
        num++;
    }
    return num;
}

/*验证邮箱格式*/

function email_validte(content,tip){
    var pattern=/^[a-z0-9]+([\._-][a-z0-9]+)?@[a-z0-9]+([_-][a-z0-9]+)?\.[a-z]{2,5}$/i;
    //qq.a@a-1.qq
    if(content){
        if(!pattern.test(content)){
            tip.html("邮箱格式不正确！")
        }else{
            tip.html("邮箱格式正确！");
        }
    }
}