const TOTAL = 25;
let cards, current;
const excludeFirst = ['01.webp', '11.webp', '12.webp', '19.webp'];

init();
console.log(cards)
function init() {
    current = 0;
    cards = prepareCards(TOTAL);
    while (true) {
        shuffle(cards);
        if (!excludeFirst.includes(cards[0])) {
            break;
        }
    }
    change();
}

function prepareCards(num) {
    let cards = []
    for (let i = 1; i <= num; i++) {
        cards.push(i.toString().padStart(2, '0') + '.webp')
    }
    return cards
}

function shuffle(cards) {
    let len = cards.length;
    let index, temp
    while (len > 0) {
        index = Math.floor(Math.random() * len)
        temp = cards[len - 1]
        cards[len - 1] = cards[index]
        cards[index] = temp
        len--
    }
}

function change() {
    console.log('current', current);
    if (current === TOTAL) {
        init();
        return
    }
    if (current === 0) {
        // let tipDom = document.getElementById('tip');
        // tipDom.classList.remove("hidden")
    } else {
        let tipDom = document.getElementById('tip');
        tipDom.classList.add("hidden")
    }
    let imgDom = document.getElementById('img');
    imgDom.setAttribute('src', `./webp/${cards[current]}`);
    current++
}