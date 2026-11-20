//アルバムデータの作成
const album=[
    {src:'img/1.jpg',
    alt:'新緑が美しい高尾山の山道',
    msg:'山道の緑が気持ちいい',
    },

    {src:'img/2.jpg',
    alt:'高尾山薬王院の門に続く上り階段',
    msg:'階段きつかった',
    },

    {src:'img/3.jpg',
    alt:'高尾山薬王院のカラス天狗像',
    msg:'高尾山薬王院！',
    },

    {src:'img/4.jpg',
    alt:'高尾山のロープウェイを下る様子',
    msg:'帰りはロープウェイでスイスイ',
    },

    {src:'img/5.jpg',
    alt:'とろろが添えられた暖かいかけ蕎麦',
    msg:'〆のお蕎麦です。',
    },
];

//最初に表示される写真
const mainFlame = document.querySelector('.main');
const mainImage = document.createElement('img');
mainImage.src = album[0].src; //一枚目の写真のファイルパス
mainImage.alt = album[0].alt; //一枚目の写真のalt属性の値

//最初に表示されるキャプション
const mainMsg = document.createElement('p');
mainMsg.textContent = album[0].msg;

console.log(mainMsg);

//mainFlameに画像とキャプション追加
mainFlame.append(mainImage);
mainFlame.append(mainMsg);

//サムネイル写真の表示
const thumbFlame = document.querySelector('.thumb')
album.forEach((item)=>{
    //img要素を作る
    const thumbImage = document.createElement('img');
    //src属性セットする
    thumbImage.src = item.src;
    //alt属性セットする
    thumbImage.alt = item.alt;
    //キャプションの文字列をカスタムデータ属性で記憶させる
    thumbImage.dataset.msg = item.msg;
    //thumbFlameに追加thumb
    thumbFlame.append(thumbImage);
});
//サムネイルをクリックしたときの処理
thumbFlame.addEventListener('click',(event) => {
    if(event.target.src){
 console.log(event.target.src);
 mainImage.src = event.target.src
 mainImage.alt = event.target.alt
 mainMsg.textContent = event.target.dataset.msg;
}
});