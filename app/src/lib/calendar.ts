export function buildGoogleCalendarUrl(title: string, start: string, end: string, location: string): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title + ' — Rahul & Supriya',
    dates: start + '/' + end,
    location,
  });
  return 'https://calendar.google.com/calendar/render?' + params.toString();
}

export function prefersAppleCalendar(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
}
