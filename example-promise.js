// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         resolve(40);
//         reject('City Not Found.');
//     });
// }
//
// getTempPromise('Dubai').then(function(temp) {
//     console.log('Promise success', temp);
// }, function(err) {
//     console.log('Promise error', err);
// });

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('At least one input is not a number.');
        }
    });
}

addPromise(2, 8).then(function(result) {
    console.log('sum is', result);
}, function(err) {
    console.log(err);
});
addPromise(2, 'x').then(function(a, b) {
    console.log('sum is', result);
}, function(err) {
    console.log(err);
});;
