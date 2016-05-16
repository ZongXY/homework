function $(id) {
    if(typeof id === 'string') {
        return document.getElementById(id);
    } else {
        return id;
    }
}