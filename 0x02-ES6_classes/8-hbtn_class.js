// export default class HolbertonClass {
//   constructor(size, location, teacher) {
//     this._size = size;
//     this._location = location;
//     this._teacher = teacher;
//   }

//   [Symbol.toPrimitive](hint) {
//     if (hint === 'number') return this._size;
//     if (hint === 'string') return this._location;
//     return this._teacher;
//   }
// }

class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

export default HolbertonClass;
