const quotes = [{
    quote: `"The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful."`,
    person: `Roy Mustang`,
    source: `Full Metal Alchemist`
}, {
    quote: `"To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have."`,
    person: `Matsumoto Rangiku`,
    source: `Bleach`
}, {
    quote: `“We are all like fireworks: We climb, we shine and always go our separate ways and become further apart. But even when that time comes, let’s not disappear like a firework and continue to shine… forever.”`,
    person: `Hitsugaya Toshiro`,
    source: `Bleach`
}, {
    quote: `“Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But, of course, it will! Whoever wins this war becomes justice!”`,
    person: `Don Quixote Doflamingo`,
    source: `One Piece`
}, {
    quote: `“Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.”`,
    person: `Gildarts Clive`,
    source: `Fairy Tail`
}, {
    quote: `“Religion, ideology, resources, land, spite, love or just because no matter how pathetic the reason, it’s enough to start war. War will never cease to exist… reasons can be thought up after the fact. Human nature pursues strife.”`,
    person: `Pain`,
    source: `Naruto Shippuden`
}, {
    quote: `“People, who can’t throw something important away, can never hope to change anything.”`,
    person: `Armin Arlert`,
    source: `Attack on Titan`
}, {
    quote: `“If you don’t take risks, you can’t create a future!”`,
    person: `Monkey D. Luffy`,
    source: `One Piece`
}, {
    quote: `“When you give up, that’s when the game ends.”`,
    person: `Mitsuyoshi Anzai`,
    source: `Slam Dunk`
}, {
    quote: `“You will never be able to love anybody else until you love yourself.”`,
    person: `Lelouch Lamperouge`,
    source: `Code Geass`
}, {
    quote: `“Destiny. Fate. Dreams. These unstoppable ideas are held deep in the heart of man. As long as there are people who seek freedom in this life, these things shall not vanish from the Earth.”`,
    person: `Gold D. Roger`,
    source: `One Piece`
}, {
    quote: `“Forgetting is like a wound. The wound may heal but it has already left a scar.”`,
    person: `Monkey D Luffy`,
    source: `One Piece`
}]

let cur = 0;

document.querySelector('#new-quote').addEventListener('click',() => {
    let index = Math.floor(Math.random() * quotes.length);
    while (cur === index) index = Math.floor(Math.random() * quotes.length);
    cur = index;
    document.querySelector('.quote').innerText = quotes[index].quote;
    document.querySelector('.person').innerText = quotes[index].person;
    document.querySelector('.source').innerText = `(` +quotes[index].source + `)`;
})