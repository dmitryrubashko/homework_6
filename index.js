const getPromise = (value, timeout) => {

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, timeout)
    });
    return promise.then(data => console.log(data)).catch(error => console.log(error));

}

getPromise('randomValue', 1500)