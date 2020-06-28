import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import enLocale from 'date-fns/locale/en-GB';

export default function formatDate(date: string | number) {
  const d = new Date(date);
  const now = Date.now();
  const diff = now - new Date(date).getTime();
  // less than 5 minutes
  if (diff < 1000 * 60 * 5) {
    return 'just now';
  }
  if (diff < 1000 * 60 * 60 * 24) {
    return distanceInWordsToNow(d, { addSuffix: true, locale: enLocale });
  }
  if (diff < 1000 * 60 * 60 * 36) {
    return 'yesterday';
  }
  if (diff < 1000 * 60 * 60 * 24 * 7) {
    return distanceInWordsToNow(d, { addSuffix: true, locale: enLocale });
  }
  return format(d, 'yyyy-M-d');
}