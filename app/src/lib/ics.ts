export function buildIcsDataUrl(title: string, start: string, end: string): string {
  const body = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    'SUMMARY:' + title + ' — Rahul & Supriya',
    'DTSTART:' + start,
    'DTEND:' + end,
    'LOCATION:Farmhouse Collective, Bangalore',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  return 'data:text/calendar;charset=utf8,' + encodeURIComponent(body);
}
