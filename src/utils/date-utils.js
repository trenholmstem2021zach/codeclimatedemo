import { format } from "date-fns";

/**
 * Format a date to a string.
 * @param {Date} date
 * @returns a string with the date
 */
export function formatDate(date) {
  let dateString = "";

  if (date) {
    dateString = format(date, "EEE, MMM d yyyy, h:mm:ss a");
  }
  return dateString;
}

/**
 * Format a date to a string.
 * @param {Date} date
 * @returns a string with the date without time
 */
export function formatDateOnly(date) {
  let dateString = "";

  if (date) {
    dateString = format(date, "EEE, MMM d yyyy");
  }
  return dateString;
}
