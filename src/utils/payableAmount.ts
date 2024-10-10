import { timeDiff } from "./timeParser";

export const payableAmount = (
    startTime: string,
    endTime: string,
    pricePerHour: number
) => {
    const time = timeDiff(startTime, endTime);
    return time * pricePerHour;
};
