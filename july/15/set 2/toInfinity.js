function beyond(num) {
    if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
        console.log('And beyond');
    } else if (num > 0) {
        console.log('To infinity');
    } else if (num < 0) {
        console.log('To negative infinity');
    } else if (num === 0) {
        console.log('Staying home');
    }
}

beyond(2);
beyond(-3);
beyond(0);
beyond(Number.POSITIVE_INFINITY);
beyond(Number.NEGATIVE_INFINITY);
