import { Record } from 'immutable';

export default class Cleanup extends Record({
  id: undefined,
  location: null,
  organizer: null,
  startTime: null,
  endTime: null,
}) {
  timesAreValid() {
    return (
      (this.startTime != null && this.endTime != null) &&
      this.startTime > Date.now() &&
      this.endTime > this.startTime
    );
  }
}
