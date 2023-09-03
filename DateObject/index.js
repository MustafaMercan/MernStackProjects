//How To Work With Node.js Date Functions


/**
 * Creating A New Date Object
 * To instantiate a new Date object, simply call the Date constructor. The default will represent the current date and time.
 */

const currDate = new Date(2001,0,25,14,30); // January's index is 0 and  December's index is 1 
console.log(currDate); //This date is in the Zulu (UTC) time zone.
const options = {
    timeZone:"Europe/Istanbul"
}
const turkishDate = currDate.toLocaleString("tr-TR",options); // This date is in the Turkish time zone
console.log(turkishDate)


/**
 * UTC Vs. Local Time
 * By default, the methods of the Date object work in local time. However, there are corresponding UTC (Universal Time Coordinated) methods that 
 * return date components in UTC.
 */
const utcDate = new Date(Date.UTC(2001,0,25,14,30))
console.log(utcDate);


const year = utcDate.getFullYear();
const month = utcDate.getMonth();
const hours = utcDate.getHours();
const minutes = utcDate.getMinutes();
const seconds = utcDate.getSeconds();
const milliseconds = utcDate.getMilliseconds();

console.log("date -> ", year,month,hours,minutes, seconds, milliseconds)

/**
 * Date Object Timestamps
 * 
 * Every Date object in JavaScript holds a timestamp: milliseconds since the Unix Epoch (January 1, 1970). 
 * This uniform reference point allows for simple date comparisons and arithmetic.
 */

const timestamp = utcDate.getTime();
console.log("timestamp -> ", timestamp)



/**
 * Setting Date Values
 * Beyond retrieving date components, the Date object also provides methods to set values for year, month, day, etc. 
 * It's an effective way to adjust or create specific dates.
 */


const newDate = utcDate;


newDate.setFullYear(2024);
newDate.setDate(15);
newDate.setMonth(11);
newDate.setUTCHours(3)
newDate.setUTCMinutes(30)
console.log("new date", newDate)


/**
 * Formatting Dates: Common Methods
 * Managing date objects efficiently in Node.js necessitates using proper formatting techniques. 
 * JavaScript provides an array of methods that make this task effortless and effective.
 */

/**
 * The Utility Of ToLocaleDateString And ToLocaleTimeString
 * These methods are staples for straightforward date and time string representations, especially when locale-specific formatting is needed.
 */

console.log(newDate.toLocaleDateString())//"MM/DD/YYYY"
console.log(newDate.toLocaleTimeString())//"HH:MM:SSAM/PM"

/**
 * Delving Into Intl.DateTimeFormat
 * When the situation demands fine-tuned control over the presentation, turn to the Intl.DateTimeFormat object. 
 * It's designed for custom, language-sensitive date formatting.
 */


/*
const formatOptions = {year:'numeric', month:'long', day:'numeric'}
const dataFormatter = new Intl.DateTimeFormat('tr-TR',formatOptions);
console.log(dataFormatter.format(newDate))
*/

const formatOptions = {
    timeZone:"Europe/Istanbul",
    year:'numeric',
    month:'long',
    day:'numeric'
}
const outputDate = newDate.toLocaleString("tr-TR",formatOptions)
console.log(outputDate);



// Reference : https://marketsplash.com/tutorials/node-js/node-js-date/