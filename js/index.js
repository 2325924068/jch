var uls = document.querySelector('.ul').children;
console.log(uls);
for (let i = 0; i < uls.length; i++) {
    uls[i].onclick = function() {
        console.log('元素文本' + this.innerText);
        console.log('i值' + i);
    };
};