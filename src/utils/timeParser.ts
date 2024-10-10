export const timeDiff = (startTimeStr: string, endTimeStr: string) => {
    // const startTimeStr: string = "09:00 AM";
    // const endTimeStr: string = "12:00 PM";

    // Function to parse time strings into Date objects
    function parseTime(timeStr: string): Date {
        const [time, modifier] = timeStr.split(" ");
        // eslint-disable-next-line prefer-const
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) {
            hours += 12;
        } else if (modifier === "AM" && hours === 12) {
            hours = 0;
        }

        // Set the time on a fixed date
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);
        return date;
    }

    const startTime: Date = parseTime(startTimeStr);
    const endTime: Date = parseTime(endTimeStr);

    const diffTime: number =
        (endTime.getTime() - startTime.getTime()) / 3600000; // Divide by milliseconds in an hour

    // console.log(diffTime); // Output: 3
    return diffTime;
};


// console.log(timeDiff("09:00 AM","12:00 PM"))
