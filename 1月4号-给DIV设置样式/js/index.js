window.onload = fnLoad;

function fnLoad(){
    var text = document.getElementById('text');
    text.onclick = text_block;

    function text_block(){
        console.log(1);
        document.getElementById('item').style.display = 'block';
    }

    var wrap = document.getElementById('wrap');

    var one=document.getElementById('one');
    one.onclick = one_click;

    function one_click(){
        wrap.style.background='red';
    }

    var two=document.getElementById('two');
    two.onclick = one_click1;

    function one_click1(){
        wrap.style.background='yellow';
    }

    var three=document.getElementById('three');
    three.onclick = one_click2;

    function one_click2(){
        wrap.style.background='blue';
    }

    var four=document.getElementById('four');
    four.onclick = four_click;

    function four_click(){
        wrap.style.width='200px';
    }

    var five=document.getElementById('five');
    five.onclick = five_click;

    function five_click(){
        wrap.style.width='300px';
    }

    var six=document.getElementById('six');
    six.onclick = six_click;
    function six_click(){
        wrap.style.width='400px';
    }

    var seven=document.getElementById('seven');
    seven.onclick =  seven_click;
    function seven_click(){
        wrap.style.height='200px';
    }

    var eight=document.getElementById('eight');
    eight.onclick = eight_click;

    function eight_click(){
        wrap.style.height='300px';
    }

    var nine=document.getElementById('nine');
    nine.onclick = nine_click;
    function nine_click(){
        wrap.style.height='400px';
    }

    var first=document.getElementById('first');
    first.onclick = first_click;

    function first_click(){
        wrap.style.cssText = "width:200px;height:200px;background:#fff;";
    }

    var second=document.getElementById('second');
    second.onclick =second_click;

    function second_click(){
        document.getElementById('item').style.display='none';
    }
}