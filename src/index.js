const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = expr.match(/.{1,10}/g);
    let words = [];
    let morse = [];
    let str = '';
    for (let item of arr) {
        words.push(item.match(/.{1,2}/g));
    }
    words.forEach((item) => {
        let char = '';
        for (let i = 0; i < item.length; i++) {
            switch (item[i]) {
                case '10':
                    char += '.';
                    break;
                case '11':
                    char += '-';
                    break;
                case '**':
                    char += item[i];
                    break;
            }
        }
        morse.push(char);
    })

    str = morse.map((char) => {
        if (char === '**********') {
            return ' ';
        } else {
            return MORSE_TABLE[char];
        }

    });
    return str.join('');
}

module.exports = {
    decode
}