import { Record } from 'immutable';

export default class Cleanup extends Record({
  id: undefined,
  location: null,
  organizer: null,
  date: null,
  time: null
}) {
}
