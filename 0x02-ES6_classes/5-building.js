export default class Building {
  constructor(sqft) {
    console.log(this.constructor);
    if (
      this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    if (typeof sqft !== 'number') {
      throw new TypeError();
    } else {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError();
    } else {
      this._sqft = value;
    }
  }
}
