import { format } from 'date-fns';

export function formatDate (strDate, typeDate) {
  const date = new Date(strDate);
  return format(date, typeDate);
}