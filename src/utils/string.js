export function getRecordDate(date) {
  if (!date) return null;

  const parsedDate = new Date(date);

  if (isNaN(parsedDate)) return null;

  return new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(parsedDate);
}
