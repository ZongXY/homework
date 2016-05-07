var myDiv = document.getElementById('myDiv');
var addBtn = document.getElementById('addBtn');
var myIpt = document.getElementById('myIpt');

var ul = document.createElement('ul');
myDiv.appendChild(ul);

addBtn.onclick = function() {
    var newElements = getMoreElements();
    var len = ul.getElementsByTagName('li').length;
    if(len>=4) {
       addBtn.disabled = 'disabled';
    }
}

function getMoreElements() {
    var li = document.createElement('li');
    ul.appendChild(li);
    var input = document.createElement('input'),
        button = document.createElement('button'),
        delText = document.createTextNode('删除'),
        nbsp = document.createTextNode('\r\n');

    button.style.backgroundColor = '#F44336';
    button.style.color = '#fff';
    button.style.borderColor = '#F44336';
    
    button.onclick = function() {
        var r = confirm('确定要删除吗？');

        if(r) {
            ul.removeChild(this.parentNode);
            var len = ul.getElementsByTagName('li').length;
            if(len<4) {
                addBtn.disabled = '';
            }
        }
    }

    input.type = 'text';
    li.appendChild(input);
    li.appendChild(nbsp);
    li.appendChild(button);
    button.appendChild(delText);
    
    return li;
}

var sureBtn = document.getElementById('sureBtn');
var result = document.getElementById('result');

sureBtn.onclick = function() {
    var inputs = divWp.getElementsByTagName('input');
    var rArr = [],
        len = inputs.length; 

    for(var i=0; i<len; i++) {
        rArr.push(inputs[i].value);
    }
    // rArr.unshift(myIpt.value);
    result.innerHTML = '你的爱好有：' + rArr.join(' ');
    result.style.color = '#FF9800';
}