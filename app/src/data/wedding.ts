import { buildIcsBlobUrl } from '../lib/ics';
import { buildGoogleCalendarUrl } from '../lib/calendar';

export const WEDDING_DATETIME = '2026-11-12T17:00:00+05:30';

export interface EventInfo {
  id: string;
  date: string;
  title: string;
  time: string;
  description: string;
  dress: string;
  where: string;
  icsHref: string;
  icsFilename: string;
  googleHref: string;
}

export const events: EventInfo[] = [
  {
    id: 'haldi',
    date: 'Nov 11 2026',
    title: 'Haldi',
    time: '11 AM to 2 PM',
    description:
      'Turmeric, marigolds and a lot of laughter in the garden courtyard. Come ready to be coloured.',
    dress: 'Yellow & white, comfortable cottons',
    where: 'The Farmhouse Backyard',
    icsHref: buildIcsBlobUrl('Haldi', '20261111T053000Z', '20261111T083000Z'),
    icsFilename: 'haldi.ics',
    googleHref: buildGoogleCalendarUrl('Haldi', '20261111T053000Z', '20261111T083000Z', 'Farmhouse Collective, Bangalore'),
  },
  {
    id: 'sangeet',
    date: 'Nov 11 2026',
    title: 'Sangeet',
    time: '6 PM onwards',
    description: 'An evening of music, dance, and dinner under the stars.',
    dress: 'Elegant evening wear with a touch of glamour.',
    where: 'The Farmhouse Backyard',
    icsHref: buildIcsBlobUrl('Sangeet', '20261111T123000Z', '20261111T170000Z'),
    icsFilename: 'sangeet.ics',
    googleHref: buildGoogleCalendarUrl('Sangeet', '20261111T123000Z', '20261111T170000Z', 'Farmhouse Collective, Bangalore'),
  },
  {
    id: 'wedding',
    date: 'Nov 12 2026',
    title: 'Wedding',
    time: '5 PM onwards',
    description: 'The muhurtham at dusk followed by dinner and blessings.',
    dress: 'Traditional formal, ivory & gold welcome',
    where: 'The Farmhouse Collective',
    icsHref: buildIcsBlobUrl('Wedding', '20261112T113000Z', '20261112T170000Z'),
    icsFilename: 'wedding.ics',
    googleHref: buildGoogleCalendarUrl('Wedding', '20261112T113000Z', '20261112T170000Z', 'Farmhouse Collective, Bangalore'),
  },
];

export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Farmhouse+Collective+Bangalore';
