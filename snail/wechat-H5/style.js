var send=document.getElementById('send');
var parent=document.getElementById('content-items');
send.addEventListener('click',function(){
    //jq
    // var html=  $('<li class="content-item">'+
    //                 '<div class="left-pic">'+
    //                     '<img src="./images/3.jpg" alt="">'+
    //                 '</div>'+
    //                 '<div class="message">'+
    //                     '<p class="name">绫波</p>'+
    //                     '<p class="detail">绫波的武器，现在还能变形成乐器···指挥官，想听听看吗？</p>'+
    //                 '</div>'+
    //                 '<div class="time">'+
    //                     '<span>下午 6:40</span>'+
    //                 '</div>'+
    //             '</li>')
    // html.appendTo(parent);

    //原生js
    var li=document.createElement('li');
    li.setAttribute('class','content-item');
    var divPic=document.createElement('div');
    divPic.setAttribute('class','left-pic');
    li.appendChild(divPic);
    var leftimg=document.createElement('img');
    leftimg.setAttribute('src','./images/3.jpg');
    divPic.appendChild(leftimg);
    var message=document.createElement('div');
    message.setAttribute('class','message');
    li.appendChild(message);

    var p1=document.createElement('p');
    p1.setAttribute('class','name');
    var p1text=document.createTextNode('绫波');
    p1.appendChild(p1text);
    message.appendChild(p1);
    var p2=document.createElement('p');
    p2.setAttribute('class','detail');
    var p2text=document.createTextNode('绫波的武器，现在还能变形成乐器···指挥官，想听听看吗？');
    p2.appendChild(p2text);
    message.appendChild(p2);

    var time=document.createElement('div');
    time.setAttribute('class','time');
    var span=document.createElement('span');

    var spantext=document.createTextNode('6:30');
    span.appendChild(spantext);
    time.appendChild(span);
    li.appendChild(time);
    parent.appendChild(li);
})