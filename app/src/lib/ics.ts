export function buildIcsBlobUrl(title: string, start: string, end: string): string {
  const body = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    'SUMMARY:' + title + ' — Supriya & Rahul',
    'DTSTART:' + start,
    'DTEND:' + end,
    'LOCATION:Farmhouse Collective, Bangalore',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  const blob = new Blob([body], { type: 'text/calendar;charset=utf-8' });
  return URL.createObjectURL(blob);
}
