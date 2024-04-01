export function getPreviousDate(days = 0) {
    const currentDate = new Date();

    if (days > 0) {
        const previousDate = new Date(currentDate);
        previousDate.setDate(currentDate.getDate() - days);

        // Set time to midnight
        previousDate.setHours(0);
        previousDate.setMinutes(0);
        previousDate.setSeconds(0);
        previousDate.setMilliseconds(0);

        return previousDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'short' });
    } else {
        // Set time to midnight
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);

        return currentDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'short' });
    }
}
