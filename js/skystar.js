// poem
var words=[
    '所行皆所愿',
    '所遇皆温暖',
    '所念皆如愿',
    '未来可期',
    '生日快乐',
    '前程似锦',
    '万事顺遂',
    '生日快乐',
    '长岁常安',
    '快意人生',
    '乐得自在',
    '前路浩浩荡荡 万事尽可期待',
    '岁岁年年 承蒙时光不弃',
    '岁岁年年 万喜万般皆宜',
    '你曾是我灰色人生中的一道彩虹',
    '生日快乐',
    '岁岁如愿平安',
    '岁岁年年 共占春风',
    '常欢愉 皆胜意',
    '旦逢良辰 顺颂时宜',
    '且以喜乐 且以永日',
    '生而自由 生而无畏',
    '不负心中热爱',
    '万事皆可期待',
    '所行皆所愿',
    '所遇皆温暖',
    '所念皆如愿',
    '未来可期',
    '生日快乐',
    '前程似锦',
    '万事顺遂',
    '生日快乐',
    '长岁常安',
    '快意人生',
    '乐得自在',
    '前路浩浩荡荡 万事尽可期待',
    '岁岁年年 承蒙时光不弃',
    '岁岁年年 万喜万般皆宜',
    '岁岁如愿平安',
    '生日快乐',
    '岁岁年年 共占春风',
    '常欢愉 皆胜意',
    '旦逢良辰 顺颂时宜',
    '且以喜乐 且以永日',
    '生而自由 生而无畏',
    '生日快乐',
    '不负心中热爱',
    '万事皆可期待',
    '生日快乐',
    '旦逢良辰 顺颂时宜',
    '且以喜乐 且以永日',
    '生而自由 生而无畏',
    '不负心中热爱',  
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#e4f007ee';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.style.color = '#E8F9FD';
        textone.style.fontFamily = '楷体'
        textone.style.fontSize = '70px'
        texttwo.style.color = '#E8F9FD';
        texttwo.style.fontFamily = '楷体'
        texttwo.style.fontSize = '70px'
        textthree.style.color = '#E8F9FD';
        textthree.style.fontFamily = '楷体'
        textthree.style.fontSize = '65px'
        textone.innerHTML = '生日快乐';
        texttwo.innerHTML = '逢考必过 永不挂科';
        textthree.innerHTML = '前路浩浩荡荡 万事尽可期待'       
      },0)
        setTimeout(function(){
        textone.innerHTML = '生日快乐';
        texttwo.innerHTML = '逢考必过 永不挂科';
        textthree.innerHTML = '前路浩浩荡荡 万事尽可期待'       

      },2000)




 
