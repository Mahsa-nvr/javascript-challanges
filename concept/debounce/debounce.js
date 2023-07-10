function debounce(fn, delay) {
     let timeout = null;
    return () => {      
        clearTimeout(timeout);
        timeout = setTimeout(() => {
         fn();
        }, delay)
    }
}


document.querySelector('button').onclick= debounce(() => {
    alert();
}, 1000);