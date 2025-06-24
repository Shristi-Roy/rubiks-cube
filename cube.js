class Cube {
  constructor() {
    // U face has unique letters so we can see rotation
    this.faces = {
      U: ['A','B','C','D','E','F','G','H','I'],
      D: Array(9).fill('Y'),
      F: Array(9).fill('R'),
      B: Array(9).fill('O'),
      L: Array(9).fill('G'),
      R: Array(9).fill('B'),
    };
  }

  getString() {
    let out = '';
    for (let face in this.faces) {
      out += `${face}: ${this.faces[face].join('')}\n`;
    }
    return out;
  }

  rotate(face) {
    if (face === 'U') {
      let f = this.faces.U;
      this.faces.U = [
        f[6], f[3], f[0],
        f[7], f[4], f[1],
        f[8], f[5], f[2]
      ];
    }
  }

  scramble() {
    for (let i = 0; i < 5; i++) {
      this.rotate('U');
    }
  }
}
