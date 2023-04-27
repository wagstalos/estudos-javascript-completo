// function init(){
//     let isValid = false;
//     console.log('init menu', isValid)
// }

// init()

(function(n1, n2, n3, win, doc){
    'use strict'
    let isValid = false;
    console.log('init menu', isValid, n1, n2, n3)

    function init(){
        console.log('init menu');
    }

    init()
})(1,2,'wagner', window, document)