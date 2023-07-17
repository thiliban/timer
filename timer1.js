const timer = function(times) {
    if(!times.length) {
        return;
    }
    for (let time of times) {
        const timeInNumbers = Number(time);
        setTimeout(() => {
            console.log(`Beeps at ${timeInNumbers} seconds`);
            processstdout.write('\x07');
        }, timeInNumbers * 1000);
    }
}
