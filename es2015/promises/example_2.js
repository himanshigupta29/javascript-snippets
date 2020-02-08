const neft_trxn = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Transaction successful');
    }, 3000);
});
// const neft_trxn = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Transaction failed');
//     }, 3000);
// });

neft_trxn
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally( _ => {
        console.log('Transaction finished');
    });

