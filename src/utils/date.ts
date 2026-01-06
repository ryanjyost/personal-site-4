/**
 * Converts a date string in format "YYYY-MM-DD" to "Month Day, Year" format
 * @param dateString - Date string in format "YYYY-MM-DD" (e.g., "2020-03-17")
 * @returns Formatted date string (e.g., "March 17, 2020")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Check if date is valid
  if (isNaN(date.getTime())) {
    return dateString; // Return original string if invalid
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
