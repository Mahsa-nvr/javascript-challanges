function debounce(fn, delay) {
     let timeout = null;
    return (...args) => {      
        clearTimeout(timeout);
        timeout = setTimeout(() => {
         fn(...args);
        }, delay)
    }
}


document.querySelector('button').onclick= debounce(() => {
    alert();
}, 1000);