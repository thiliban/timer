const timer = function(times) {
    if(!times.length) {
        return;
    }
    for (let time of times) {
        const timeInNumbers = Number(time);
        setTimeout(() => {
            console.log(`Beeps at ${timeInNumbers} seconds`);
            process.stdout.write('\x07');
        }, timeInNumbers * 1000);
    }
};
console.log(timer([10,5,6,7,9]));
