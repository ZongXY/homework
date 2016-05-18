function $(id) {
    if(typeof id === 'string') {
        return document.getElementById(id);
    } else {
        return id;
    }
}


function fill0(num) {
    return num < 10 ? '0' + num : num;
}

 