export interface TimeDisplayValues {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

export const generateTimeDisplay = (targetDate: number): TimeDisplayValues => {
    const timeNow = new Date().getTime();
    const difference = targetDate - timeNow;
    const formattedTime = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
        seconds: Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0')
    };
    return formattedTime;
};