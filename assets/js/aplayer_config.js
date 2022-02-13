const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FF8EB3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.3,
    mutex: true,
    listFolded: true,
    listMaxHeight: 250,
    lrcType: 3,
    audio: [
        {
            name: '落日与晚风',
            artist: 'IN-K&王忻辰&苏星婕',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/落日与晚风.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/99/97/320349880.jpg',
            lrc: 'assets/lyrics/落日与晚风.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'Don\'t Forget',
            artist: 'Toby Fox/Laura Shigihara',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/df.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/61/89/1099360121.jpg.jpg',
            lrc: 'assets/lyrics/Dont Forget.lrc',
            theme: '#46718b'
        },
		{
            name: 'An Ending',
            artist: 'Toby Fox',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/An Ending.mp3',
            cover: 'http://p4.music.126.net/oZe-JSuWYAR8zSa29g9g0g==/3254554423361647.jpg',
            theme: '#1502cc'
        },
		{
            name: '错位时空（女版）',
            artist: '韩可可',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/错位时空（女版）.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/56/21/3217813879.jpg',
            lrc: 'assets/lyrics/错位时空 (女版).lrc',
            theme: '#ff8eb3'
        },
		{
            name: '浪子闲话',
            artist: '花僮',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/浪子闲话.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001FNnvf0BP22o.jpg',
            lrc: 'assets/lyrics/浪子闲话.lrc',
            theme: '#ebd0c2'
        },
		{
            name: 'Sorry',
            artist: 'Alan Walker/ISAK',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/Sorry.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/85/20/2985458254.jpg',
            lrc: 'assets/lyrics/Sorry.lrc',
            theme: '#46718b'
        },
		{
            name: 'Before the Story',
            artist: 'Toby Fox',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/Before the Story.mp3',
            cover: 'http://p4.music.126.net/oZe-JSuWYAR8zSa29g9g0g==/3254554423361647.jpg',
            theme: '#ebd0c2'
        },
		{
            name: '所念皆星河',
            artist: '房东的猫',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/所念皆星河.mp3',
            cover: 'http://p4.music.126.net/JtevaRk1N7ecpmwZCIvwzQ==/109951165293262893.jpg',
            lrc: 'assets/lyrics/所念皆星河.lrc',
            theme: '#ff8eb3'
        },
		{
            name: '海底',
            artist: '一支榴莲',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/海底.mp3',
            cover: 'http://p3.music.126.net/YRFYXG6YaJfTyy_mQntS4A==/109951164799337803.jpg',
            lrc: 'assets/lyrics/海底.lrc',
            theme: '#000000'
        },
		{
            name: '不再联系',
            artist: '夏天Alex/崔子格',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/不再联系.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/32/90/1138900336.jpg',
            lrc: 'assets/lyrics/不再联系.lrc',
            theme: '#46718b'
        },
		{
            name: 'Apologize',
            artist: 'Besomorph&Anthony',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/Apologize.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/39/37/3771217502.jpg',
            lrc: 'assets/lyrics/Apologize.lrc',
            theme: '#46718b'
        },
		{
            name: '穿越时空的思念',
            artist: '和田薰',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/穿越时空的思念.mp3',
            cover: 'http://p4.music.126.net/JI9uLRvH629NZ5GZLE06AQ==/2330964650912440.jpg',
            theme: '#5565cc'
        },
		{
            name: '飞鸟和蝉',
            artist: '任然',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/飞鸟和蝉.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/87/25/2241738210.jpg',
            lrc: 'assets/lyrics/飞鸟和蝉.lrc',
            theme: '#46718b'
        },
		{
            name: '南山南',
            artist: '马頔',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/南山南.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/92/59/4186450784.jpg',
            lrc: 'assets/lyrics/南山南.lrc',
            theme: '#112158'
        },
		{
            name: '同桌的你',
            artist: '胡夏',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/同桌的你.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/88/38/3293903921.jpg',
            lrc: 'assets/lyrics/同桌的你.lrc',
            theme: '#46718b'
        },
		{
            name: '多幸运',
            artist: '韩安旭',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/多幸运.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/95/83/3726924869.jpg',
            lrc: 'assets/lyrics/多幸运.lrc',
            theme: '#f848ee'
        },
		{
            name: '明年今日',
            artist: '陈奕迅',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/明年今日.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/22/29/1632616915.jpg',
            lrc: 'assets/lyrics/明年今日.lrc',
            theme: '#46718b'
        },
		{
            name: '白玫瑰',
            artist: '陈奕迅',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/白玫瑰.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/61/8/208529230.jpg',
            lrc: 'assets/lyrics/白玫瑰.lrc',
            theme: '#46718b'
        },
		{
            name: '潮汐（Natural）',
            artist: '安苏羽/傅梦彤',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/潮汐.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/59/48/3085702005.jpg',
            lrc: 'assets/lyrics/潮汐.lrc',
            theme: '#46718b'
        },
		{
            name: '消愁',
            artist: '毛不易',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/消愁.mp3',
            cover: 'http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg',
            lrc: 'assets/lyrics/消愁.lrc',
            theme: '#46718b'
        },
		{
		    name: '一个人过冬天',
            artist: '斌杨Remix',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/一个人过冬天.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/54/2/593351098.jpg',
            theme: '#46718b'
        },
		{
            name: '世界这么大还是遇见你',
            artist: '程响',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/世界这么大还是遇见你.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ls5Jo4EFBIH.jpg',
            lrc: 'assets/lyrics/世界这么大还是遇见你.lrc',
            theme: '#46718b'
        },
		{
            name: 'All Time Low',
            artist: 'Sam Tsui/Casey Breves/Kurt Hugo Schneider',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/All Time Low.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/86/7/930240116.jpg',
            lrc: 'assets/lyrics/All Time Low.lrc',
            theme: '#46718b'
        },
		{
            name: '遥远的你 (女生版)',
            artist: 'Uu/高鱼/解语花/魏晗（懋懋）',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/遥远的你.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/89/65/2859120721.jpg',
            lrc: 'assets/lyrics/遥远的你.lrc',
            theme: '#ef8525'
        },
		{
            name: '云与海',
            artist: '阿YueYue',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/云与海.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/93/74/1831171246.jpg',
            lrc: 'assets/lyrics/云与海.lrc',
            theme: '#46718b'
        },
		{
            name: 'Illusionary Daytime',
            artist: 'Shirfine',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/ID.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/29/63/3855349646.jpg',
            theme: '#4671ff'
        },
		{
            name: '旧梦一场',
            artist: '阿悠悠',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/旧梦一场.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/71/46/3694962587.jpg',
            lrc: 'assets/lyrics/旧梦一场.lrc',
            theme: '#46718b'
        },
		{
            name: 'TA',
            artist: '不是花火呀',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/TA.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/71/63/3774536108.jpg',
            lrc: 'assets/lyrics/TA.lrc',
            theme: '#46718b'
        },
		{
            name: '追光者',
            artist: '岑宁儿',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/追光者.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/15/21/3851538759.jpg',
            lrc: 'assets/lyrics/追光者.lrc',
            theme: '#46718b'
        },
		{
            name: '绿色',
            artist: '陈雪凝',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/绿色.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/92/93/306713154.jpg',
            lrc: 'assets/lyrics/绿色.lrc',
            theme: '#46718b'
        },
		{
            name: '四季予你',
            artist: '程响',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/四季予你.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/43/80/395133447.jpg',
            lrc: 'assets/lyrics/四季予你.lrc',
            theme: '#46718b'
        },
		{
            name: '错季',
            artist: '秋原依',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/错季.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/75/97/3404257853.jpg',
            lrc: 'assets/lyrics/错季.lrc',
            theme: '#46718b'
        },
		{
            name: '蒲公英的约定',
            artist: '周杰伦',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/蒲公英的约定.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/36/9/13515874.jpg',
            lrc: 'assets/lyrics/蒲公英的约定.lrc',
            theme: '#46718b'
        },
		{
            name: '青花瓷',
            artist: '周杰伦',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/青花瓷.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/36/9/13515874.jpg',
            lrc: 'assets/lyrics/青花瓷.lrc',
            theme: '#46718b'
        },
		{
            name: '半生雪',
            artist: '七叔',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/半生雪.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/64/22/1839376303.jpg',
            lrc: 'assets/lyrics/半生雪.lrc',
            theme: '#46718b'
        },
		{
            name: '桥边姑娘',
            artist: '海伦',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/桥边姑娘.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/48/79/1272165134.jpg',
            lrc: 'assets/lyrics/桥边姑娘.lrc',
            theme: '#46718b'
        },
		{
            name: '星辰大海',
            artist: '黄霄云',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/星辰大海.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/13/26/3224659704.jpg',
            lrc: 'assets/lyrics/星辰大海.lrc',
            theme: '#46718b'
        },
		{
            name: '补习街',
            artist: '郑智化',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/补习街.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/55/57/2542813831.jpg',
            lrc: 'assets/lyrics/补习街.lrc',
            theme: '#46718b'
        },
		{
            name: '最美的期待',
            artist: '周笔畅',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/最美的期待.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/85/65/3490087360.jpg',
            lrc: 'assets/lyrics/最美的期待.lrc',
            theme: '#46718b'
        },
		{
            name: '十年',
            artist: '陈奕迅',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/十年.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/91/30/2595482136.jpg',
            lrc: 'assets/lyrics/十年.lrc',
            theme: '#46718b'
        },
		{
            name: '毕业说分手',
            artist: '冰冰超人',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/毕业说分手.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/1/22/3704634296.jpg',
            lrc: 'assets/lyrics/毕业说分手.lrc',
            theme: '#46718b'
        },
		{
            name: 'MEGALOVANIA',
            artist: 'Toby Fox',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/MEGALOVANIA.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/92/8/2593305688.jpg',
            theme: '#46718b'
        },
		{
            name: '被人',
            artist: '薛之谦',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/被人.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/50/92/3367594293.jpg',
            lrc: 'assets/lyrics/被人.lrc',
            theme: '#46718b'
        },
		{
            name: '间距',
            artist: 'en',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/间距.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/6/91/2789738879.jpg',
            lrc: 'assets/lyrics/间距.lrc',
            theme: '#46718b'
        },
		{
            name: '绅士',
            artist: '薛之谦',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/绅士.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/82/10/1723937125.jpg',
            lrc: 'assets/lyrics/绅士.lrc',
            theme: '#46718b'
        },
		{
            name: '演员',
            artist: '薛之谦',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/演员.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/82/10/1723937125.jpg',
            lrc: 'assets/lyrics/演员.lrc',
            theme: '#46718b'
        },
		{
            name: '差一步',
            artist: '大壮',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/差一步.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000lEj821EaXUu.jpg',
            lrc: 'assets/lyrics/差一步.lrc',
            theme: '#46718b'
        },
		{
            name: '我很好',
            artist: '刘大壮',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/我很好.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000QeahL3pTfM6.jpg',
            lrc: 'assets/lyrics/我很好.lrc',
            theme: '#46718b'
        },
		{
            name: '我们的爱',
            artist: '飞儿乐团',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/我们的爱.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000015qGHu3KjkCl.jpg',
            lrc: 'assets/lyrics/我们的爱.lrc',
            theme: '#46718b'
        },
		{
            name: '安和桥（唢呐版）',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/ahq.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/63/5/1829303511.jpg',
            theme: '#46718b'
        },
		{
            name: 'Windy Hill',
            artist: '羽肿',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/wh.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/41/74/779071888.jpg',
            theme: '#46718b'
        },
		{
            name: '夏恋 雨道 彩月 幻昼',
            artist: 'Oct.',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/xych.mp3',
            cover: 'https://img1.kuwo.cn/star/starheads/120/33/62/1254921456.jpg',
			lrc:'assets/lyrics/xych.lrc',
            theme: '#46718b'
        },
		{
            name: '她的微笑',
            artist: '阳山伟伟',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/她的微笑.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/83/5/977951276.jpg',
            theme: '#46718b'
        },
		{
            name: '城南花已开',
            artist: '三亩地',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/城南花已开.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/59/87/905948084.jpg',
            lrc: 'assets/lyrics/城南花已开.lrc',
            theme: '#46718b'
        },
		{
            name: 'The Truth that You Leave',
            artist: '3D环绕版',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/ttyl.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/11/58/1029795230.jpg',
            theme: '#46718b'
        },
		{
            name: '安和桥',
            artist: '宋冬野',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/安和桥.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002VeS6r4L5fLZ.jpg',
            lrc: 'assets/lyrics/安和桥.lrc',
            theme: '#46718b'
        },{
            name: '朋友 天堂好吗',
            artist: '郑智化',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/朋友 天堂好吗.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/55/57/2542813831.jpg',
            lrc: 'assets/lyrics/朋友 天堂好吗.lrc',
            theme: '#46718b'
        },{
            name: '水手',
            artist: '郑智化',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/水手.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/89/95/2185698330.jpg',
            lrc: 'assets/lyrics/水手.lrc',
            theme: '#46718b'
        },{
            name: 'You',
            artist: 'Approaching Nirvana',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/You.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/94/38/3007115528.jpg',
            theme: '#46718b'
        },{
            name: 'Time Back',
            artist: 'Approaching Nirvana',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/tb.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/93/10/2310330111.jpg',
            theme: '#46718b'
        },{
            name: 'Dream It Possible',
            artist: 'Delacey',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/Dream It Possible.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/19/18/1365855201.jpg',
			lrc: 'assets/lyrics/Dream It Possible.lrc',
            theme: '#46718b'
        },{
            name: 'Paris',
            artist: 'Else',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/Paris.mp3',
            cover: 'http://p3.music.126.net/h58MkalValADsLZPdhuOwg==/109951164855899615.jpg',
            theme: '#46718b'
        },{
            name: '落差',
            artist: 'IN-K',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/落差.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/1/60/1105455938.jpg',
			lrc: 'assets/lyrics/落差.lrc',
            theme: '#46718b'
        },{
            name: 'Star Sky',
            artist: '',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/ss.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003to8Rb0CPSkO.jpg',
            theme: '#46718b'
        },{
            name: '中国式家长-最后一道大题',
            artist: '中国式家长BGM',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/最后一道大题.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002bG4Iy3O8rq6.jpg',
            theme: '#46718b'
        },{
            name: '阿拉斯加海湾',
            artist: '蓝心羽',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/alsj.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/58/72/3795397878.jpg',
			lrc: 'assets/lyrics/alsj.lrc',
            theme: '#46718b'
        },{
            name: '风居住的街道',
            artist: '矶村由纪子',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/fjzdjd.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/37/35/589151443.jpg',
            theme: '#46718b'
        },{
            name: 'My Soul',
            artist: 'JULY',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/ms.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/76/32/828050279.jpg',
            theme: '#46718b'
        },{
            name: 'Monsters',
            artist: 'Katie Sky',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/mr.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/90/21/1085920919.jpg',
			lrc: 'assets/lyrics/mr.lrc',
            theme: '#46718b'
        },{
            name: '刚刚好',
            artist: '薛之谦',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/刚刚好.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/82/10/1723937125.jpg',
			lrc: 'assets/lyrics/刚刚好.lrc',
            theme: '#46718b'
        },{
            name: '渐冷',
            artist: '雪二',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/渐冷.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/24/1/2605506967.jpg',
			lrc: 'assets/lyrics/渐冷.lrc',
            theme: '#46718b'
        },{
            name: '迷失幻境',
            artist: 'IN-K',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/迷失幻境.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/62/78/477539205.jpg',
			lrc: 'assets/lyrics/迷失幻境.lrc',
            theme: '#46718b'
        },{
            name: 'Lemon',
            artist: '米津玄师',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/Lemon.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/27/96/2001854924.jpg',
			lrc: 'assets/lyrics/Lemon.lrc',
            theme: '#46718b'
        },{
            name: '打上花火',
            artist: '米津玄师',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/打上花火.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002rLPlR0CXaWS.jpg',
			lrc: 'assets/lyrics/打上花火.lrc',
            theme: '#46718b'
        },{
            name: 'My Sunset',
            artist: '',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/mt.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/16/61/3195025135.jpg',

            theme: '#46718b'
        },{
            name: '我对您的思念，飘落在世界的每个角落',
            artist: '私に闻いて风i/酥糖Yuki',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/sl.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/37/58/3778134116.jpg',
            theme: '#46718b'
        },{
            name: 'Soul',
            artist: '吴宇深',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/sn.mp3',
            cover: 'http://p3.music.126.net/HTBu-4rLoO_lC29h1HVeMg==/109951163821564216.jpg',
            theme: '#46718b'
        },{
            name: '爱河（DJ版）',
            artist: '蒋雪儿',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/ah.mp3',
			lrc:'assets/lyrics/ah.lrc',
            theme: '#46718b'
        },{
            name: '小朋友',
            artist: '任然',
			cover:'https://y.gtimg.cn/music/photo_new/T002R300x300M000001wKqoP19x4zo.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/xpy.mp3',
			lrc:'assets/lyrics/xpy.lrc',
            theme: '#46718b'
        },{
            name: '这一生关于你的风景',
            artist: '枯木逢春',
			cover:'https://img4.kuwo.cn/star/albumcover/120/7/85/3315785481.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/zys.mp3',
			lrc:'assets/lyrics/zys.lrc',
            theme: '#46718b'
        },{
            name: '城南花已开，愿君常安在',
            artist: 'AirJordy',
			cover:'assets/img/2.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/2.mp3',
			lrc:'assets/lyrics/2.lrc',
            theme: '#46718b'
        },{
            name: '墙外',
            artist: '黄明志/小花',
			cover:'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/img/1.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/1.mp3',
			lrc:'assets/lyrics/1.lrc',
            theme: '#46718b'
        },{
            name: 'Apologize',
            artist: 'One Republic',
			cover:'assets/img/3.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/3.mp3',
			lrc:'assets/lyrics/3.lrc',
            theme: '#46718b'
        },{
            name: 'Bad Apple!! feat. nomico',
            artist: 'のみこ',
			cover:'assets/img/4.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/4.mp3',
			lrc:'assets/lyrics/4.lrc',
            theme: '#46718b'
        },{
            name: '静之守候',
            artist: 'Candy_Wind',
			cover:'assets/img/5.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/5.mp3',
			lrc:'assets/lyrics/5.lrc',
            theme: '#46718b'
        },{
            name: 'Undertale (Chime Remix)',
            artist: 'Chime/Toby Fox',
			cover:'assets/img/6.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/6.mp3',
			lrc:'assets/lyrics/6.lrc',
            theme: '#46718b'
        },{
            name: 'Remind You',
            artist: 'Christopher',
			cover:'assets/img/7.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/7.mp3',
			lrc:'assets/lyrics/7.lrc',
            theme: '#46718b'
        },{
            name: 'Croatian Rhapsody',
            artist: '马克西姆&Nikša Bratoš&Remi Kazinoti&Craig Pruess&Orchestra',
			cover:'assets/img/8.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/8.mp3',
			lrc:'assets/lyrics/8.lrc',
            theme: '#46718b'
        },{
            name: 'mong đợi',
            artist: 'dai kieu',
			cover:'assets/img/9.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/9.mp3',
			lrc:'assets/lyrics/9.lrc',
            theme: '#46718b'
        },{
            name: 'falling again',
            artist: 'Soldierbanks',
			cover:'assets/img/10.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/10.mp3',
			lrc:'assets/lyrics/10.lrc',
            theme: '#46718b'
        },{
            name: 'Play',
            artist: 'K-391/Alan Walker/Tungevaag/Mangoo',
			cover:'assets/img/11.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/11.mp3',
			lrc:'assets/lyrics/11.lrc',
            theme: '#46718b'
        },{
            name: 'Music Box Dancer',
            artist: '...',
			cover:'assets/img/12.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/12.mp3',
			lrc:'assets/lyrics/12.lrc',
            theme: '#46718b'
        },{
            name: '晚星',
            artist: 'NSZX',
			cover:'assets/img/13.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/13.mp3',
			lrc:'assets/lyrics/13.lrc',
            theme: '#46718b'
        },{
            name: 'Time To Love',
            artist: 'October',
			cover:'assets/img/14.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/14.mp3',
			lrc:'assets/lyrics/14.lrc',
            theme: '#46718b'
        },{
            name: 'Old Doll',
            artist: 'Mad Father',
			cover:'assets/img/15.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/15.mp3',
			lrc:'assets/lyrics/15.lrc',
            theme: '#46718b'
        },{
            name: 'Pneumatic Tokyo',
            artist: 'ENV',
			cover:'assets/img/16.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/16.mp3',
			lrc:'assets/lyrics/16.lrc',
            theme: '#46718b'
        },{
            name: 'fantasy',
            artist: 'Rkps',
			cover:'assets/img/17.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/17.mp3',
			lrc:'assets/lyrics/17.lrc',
            theme: '#46718b'
        },{
            name: '那些年',
            artist: 'Uu',
			cover:'assets/img/18.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/18.mp3',
			lrc:'assets/lyrics/18.lrc',
            theme: '#46718b'
        },{
            name: '夏天的风',
            artist: 'Uu',
			cover:'assets/img/19.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/19.mp3',
			lrc:'assets/lyrics/19.lrc',
            theme: '#46718b'
        },{
            name: 'Nevada',
            artist: 'Vicetone/Cozi Zuehlsdorff',
			cover:'assets/img/20.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/20.mp3',
			lrc:'assets/lyrics/20.lrc',
            theme: '#46718b'
        },{
            name: 'You Raise Me Up',
            artist: 'Westlife',
			cover:'assets/img/21.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/21.mp3',
			lrc:'assets/lyrics/21.lrc',
            theme: '#46718b'
        },{
            name: 'いつも何度でも',
            artist: '日本群星',
			cover:'assets/img/22.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/22.mp3',
			lrc:'assets/lyrics/22.lrc',
            theme: '#46718b'
        },{
            name: 'フリージア',
            artist: 'Uru',
			cover:'assets/img/23.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/23.mp3',
			lrc:'assets/lyrics/23.lrc',
            theme: '#46718b'
        },{
            name: 'みちしるべ',
            artist: '茅原実里 (ちはらみのり)',
			cover:'assets/img/24.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/24.mp3',
			lrc:'assets/lyrics/24.lrc',
            theme: '#46718b'
        },{
            name: '想把我唱给你听',
            artist: '阿金/玄子',
			cover:'assets/img/25.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/25.mp3',
			lrc:'assets/lyrics/25.lrc',
            theme: '#46718b'
        },{
            name: '因为爱情',
            artist: '陈奕迅/王菲',
			cover:'assets/img/26.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/26.mp3',
			lrc:'assets/lyrics/26.lrc',
            theme: '#46718b'
        },{
            name: '开往冬天的地铁',
            artist: '地铁兄弟',
			cover:'assets/img/27.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/27.ogg',
			lrc:'assets/lyrics/27.lrc',
            theme: '#46718b'
        },{
            name: '关键词',
            artist: '林俊杰',
			cover:'assets/img/28.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/28.mp3',
			lrc:'assets/lyrics/28.lrc',
            theme: '#46718b'
        },{
            name: 'いのちの名前',
            artist: '広橋真紀子',
			cover:'assets/img/29.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/29.mp3',
			lrc:'assets/lyrics/29.lrc',
            theme: '#46718b'
        },{
            name: '恋愛サーキュレーション (恋爱循环)',
            artist: '花澤香菜',
			cover:'assets/img/30.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/30.mp3',
			lrc:'assets/lyrics/30.lrc',
            theme: '#46718b'
        },{
            name: '醒不来的梦',
            artist: '回小仙',
			cover:'assets/img/31.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/31.mp3',
			lrc:'assets/lyrics/31.lrc',
            theme: '#46718b'
        },{
            name: '江南',
            artist: '伶伶er',
			cover:'assets/img/32.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/32.mp3',
			lrc:'assets/lyrics/32.lrc',
            theme: '#46718b'
        },{
            name: 'lit(var)',
            artist: '牛尾憲輔 (agraph)',
			cover:'assets/img/33.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/33.mp3',
			lrc:'assets/lyrics/33.lrc',
            theme: '#46718b'
        },{
            name: '兄弟抱一下',
            artist: '庞龙',
			cover:'assets/img/34.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/34.mp3',
			lrc:'assets/lyrics/34.lrc',
            theme: '#46718b'
        },{
            name: '白桦林',
            artist: '朴树',
			cover:'assets/img/35.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/35.mp3',
			lrc:'assets/lyrics/35.lrc',
            theme: '#46718b'
        },{
            name: '清白之年',
            artist: '朴树',
			cover:'assets/img/36.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/36.mp3',
			lrc:'assets/lyrics/36.lrc',
            theme: '#46718b'
        },{
            name: '她说',
            artist: '林俊杰',
			cover:'assets/img/37.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/37.mp3',
			lrc:'assets/lyrics/37.lrc',
            theme: '#46718b'
        },{
            name: '有点甜',
            artist: '汪苏泷/花澤香菜',
			cover:'assets/img/38.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/38.mp3',
			lrc:'assets/lyrics/38.lrc',
            theme: '#46718b'
        },{
            name: '空欢喜',
            artist: '王靖雯不胖',
			cover:'assets/img/39.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/39.mp3',
			lrc:'assets/lyrics/39.lrc',
            theme: '#46718b'
        },{
            name: '善变',
            artist: '王靖雯不胖',
			cover:'assets/img/40.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/40.mp3',
			lrc:'assets/lyrics/40.lrc',
            theme: '#46718b'
        },{
            name: '回家的路',
            artist: '小阚',
			cover:'assets/img/41.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/41.mp3',
			lrc:'assets/lyrics/41.lrc',
            theme: '#46718b'
        },{
            name: '夜空中最亮的星',
            artist: '逃跑计划',
			cover:'assets/img/42.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/42.mp3',
			lrc:'assets/lyrics/42.lrc',
            theme: '#46718b'
        },{
            name: 'There For You',
            artist: '元一',
			cover:'assets/img/43.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/43.mp3',
			lrc:'assets/lyrics/43.lrc',
            theme: '#46718b'
        },{
            name: '成都',
            artist: '赵雷',
			cover:'assets/img/44.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/44.mp3',
			lrc:'assets/lyrics/44.lrc',
            theme: '#46718b'
        },{
            name: '工具人之歌',
            artist: 'Potter King',
			cover:'assets/img/45.jpg',
            url: 'https://cdn.jsdelivr.net/gh/bro-xun/oldpage/assets/music/45.mp3',
			lrc:'assets/lyrics/45.lrc',
            theme: 'pink'
        }
		//
    ]
});