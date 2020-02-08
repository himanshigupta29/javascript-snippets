

// const ride = new Promise(function(resolve, reject) {
//     setTimeout( () => {
//         resolve('Driver comes for pickup');
//     }, 3000);
// });


const ride = new Promise(function(resolve, reject) {
    setTimeout( () => {
        reject('Driver rejects the ride');
    }, 3000);
});

ride
    .then( val => {
        console.log(`successful: ${val}`);

    })
    .catch( err => {
        console.log(`Failue: ${err}`);
    });