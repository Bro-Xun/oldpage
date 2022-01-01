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
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: '落日与晚风',
            artist: 'IN-K&王忻辰&苏星婕',
            url: 'assets/music/落日与晚风.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/99/97/320349880.jpg',
            lrc: 'assets/lyrics/落日与晚风.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'Don\'t Forget',
            artist: 'Toby Fox/Laura Shigihara',
            url: 'assets/music/df.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/61/89/1099360121.jpg.jpg',
            lrc: 'assets/lyrics/Dont Forget.lrc',
            theme: '#46718b'
        },
		{
            name: 'An Ending',
            artist: 'Toby Fox',
            url: 'assets/music/An Ending.mp3',
            cover: 'http://p4.music.126.net/oZe-JSuWYAR8zSa29g9g0g==/3254554423361647.jpg',
            theme: '#1502cc'
        },
		{
            name: '错位时空（女版）',
            artist: '韩可可',
            url: 'assets/music/错位时空（女版）.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/56/21/3217813879.jpg',
            lrc: 'assets/lyrics/错位时空（女版）.lrc',
            theme: '#ff8eb3'
        },
		{
            name: '浪子闲话',
            artist: '花僮',
            url: 'assets/music/浪子闲话.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001FNnvf0BP22o.jpg',
            lrc: 'assets/lyrics/浪子闲话.lrc',
            theme: '#ebd0c2'
        },
		{
            name: 'Sorry',
            artist: 'Alan Walker/ISAK',
            url: 'assets/music/Sorry.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/85/20/2985458254.jpg',
            lrc: 'assets/lyrics/Sorry.lrc',
            theme: '#46718b'
        },
		{
            name: 'Before the Story',
            artist: 'Toby Fox',
            url: 'assets/music/Before the Story.mp3',
            cover: 'http://p4.music.126.net/oZe-JSuWYAR8zSa29g9g0g==/3254554423361647.jpg',
            theme: '#ebd0c2'
        },
		{
            name: '所念皆星河',
            artist: '房东的猫',
            url: 'assets/music/所念皆星河.mp3',
            cover: 'http://p4.music.126.net/JtevaRk1N7ecpmwZCIvwzQ==/109951165293262893.jpg',
            lrc: 'assets/lyrics/所念皆星河.lrc',
            theme: '#ff8eb3'
        },
		{
            name: '海底',
            artist: '一支榴莲',
            url: 'assets/music/海底.mp3',
            cover: 'http://p3.music.126.net/YRFYXG6YaJfTyy_mQntS4A==/109951164799337803.jpg',
            lrc: 'assets/lyrics/海底.lrc',
            theme: '#000000'
        },
		{
            name: '不再联系',
            artist: '夏天Alex/崔子格',
            url: 'assets/music/不再联系.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/32/90/1138900336.jpg',
            lrc: 'assets/lyrics/不再联系.lrc',
            theme: '#46718b'
        },
		{
            name: 'Apologize',
            artist: 'Besomorph&Anthony',
            url: 'assets/music/Apologize.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/39/37/3771217502.jpg',
            lrc: 'assets/lyrics/Apologize.lrc',
            theme: '#46718b'
        },
		{
            name: '穿越时空的思念',
            artist: '和田薰',
            url: 'assets/music/穿越时空的思念.mp3',
            cover: 'http://p4.music.126.net/JI9uLRvH629NZ5GZLE06AQ==/2330964650912440.jpg',
            theme: '#5565cc'
        },
		{
            name: '飞鸟和蝉',
            artist: '任然',
            url: 'assets/music/飞鸟和蝉.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/87/25/2241738210.jpg',
            lrc: 'assets/lyrics/飞鸟和蝉.lrc',
            theme: '#46718b'
        },
		{
            name: '南山南',
            artist: '马頔',
            url: 'assets/music/南山南.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/92/59/4186450784.jpg',
            lrc: 'assets/lyrics/南山南.lrc',
            theme: '#112158'
        },
		{
            name: '同桌的你',
            artist: '胡夏',
            url: 'assets/music/同桌的你.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/88/38/3293903921.jpg',
            lrc: 'assets/lyrics/同桌的你.lrc',
            theme: '#46718b'
        },
		{
            name: '多幸运',
            artist: '韩安旭',
            url: 'assets/music/多幸运.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/95/83/3726924869.jpg',
            lrc: 'assets/lyrics/多幸运.lrc',
            theme: '#f848ee'
        },
		{
            name: '明年今日',
            artist: '陈奕迅',
            url: 'assets/music/明年今日.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/22/29/1632616915.jpg',
            lrc: 'assets/lyrics/明年今日.lrc',
            theme: '#46718b'
        },
		{
            name: '白玫瑰',
            artist: '陈奕迅',
            url: 'assets/music/白玫瑰.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/61/8/208529230.jpg',
            lrc: 'assets/lyrics/白玫瑰.lrc',
            theme: '#46718b'
        },
		{
            name: '潮汐（Natural）',
            artist: '安苏羽/傅梦彤',
            url: 'assets/music/潮汐.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/59/48/3085702005.jpg',
            lrc: 'assets/lyrics/潮汐.lrc',
            theme: '#46718b'
        },
		{
            name: '消愁',
            artist: '毛不易',
            url: 'assets/music/消愁.mp3',
            cover: 'http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg',
            lrc: 'assets/lyrics/消愁.lrc',
            theme: '#46718b'
        },
		{
		    name: '一个人过冬天',
            artist: '斌杨Remix',
            url: 'assets/music/一个人过冬天.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/54/2/593351098.jpg',
            theme: '#46718b'
        },
		{
            name: '世界这么大还是遇见你',
            artist: '程响',
            url: 'assets/music/世界这么大还是遇见你.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ls5Jo4EFBIH.jpg',
            lrc: 'assets/lyrics/世界这么大还是遇见你.lrc',
            theme: '#46718b'
        },
		{
            name: 'All Time Low',
            artist: 'Sam Tsui/Casey Breves/Kurt Hugo Schneider',
            url: 'assets/music/All Time Low.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/86/7/930240116.jpg',
            lrc: 'assets/lyrics/All Time Low.lrc',
            theme: '#46718b'
        },
		{
            name: '遥远的你 (女生版)',
            artist: 'Uu/高鱼/解语花/魏晗（懋懋）',
            url: 'assets/music/遥远的你.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/89/65/2859120721.jpg',
            lrc: 'assets/lyrics/遥远的你.lrc',
            theme: '#ef8525'
        },
		{
            name: '云与海',
            artist: '阿YueYue',
            url: 'assets/music/云与海.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/93/74/1831171246.jpg',
            lrc: 'assets/lyrics/云与海.lrc',
            theme: '#46718b'
        },
		{
            name: 'Illusionary Daytime',
            artist: 'Shirfine',
            url: 'assets/music/ID.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/29/63/3855349646.jpg',
            theme: '#4671ff'
        },
		{
            name: '旧梦一场',
            artist: '阿悠悠',
            url: 'assets/music/旧梦一场.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/71/46/3694962587.jpg',
            lrc: 'assets/lyrics/旧梦一场.lrc',
            theme: '#46718b'
        },
		{
            name: 'TA',
            artist: '不是花火呀',
            url: 'assets/music/TA.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/71/63/3774536108.jpg',
            lrc: 'assets/lyrics/TA.lrc',
            theme: '#46718b'
        },
		{
            name: '追光者',
            artist: '岑宁儿',
            url: 'assets/music/追光者.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/15/21/3851538759.jpg',
            lrc: 'assets/lyrics/追光者.lrc',
            theme: '#46718b'
        },
		{
            name: '绿色',
            artist: '陈雪凝',
            url: 'assets/music/绿色.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/92/93/306713154.jpg',
            lrc: 'assets/lyrics/绿色.lrc',
            theme: '#46718b'
        },
		{
            name: '四季予你',
            artist: '程响',
            url: 'assets/music/四季予你.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/43/80/395133447.jpg',
            lrc: 'assets/lyrics/四季予你.lrc',
            theme: '#46718b'
        },
		{
            name: '错季',
            artist: '秋原依',
            url: 'assets/music/错季.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/75/97/3404257853.jpg',
            lrc: 'assets/lyrics/错季.lrc',
            theme: '#46718b'
        },
		{
            name: '蒲公英的约定',
            artist: '周杰伦',
            url: 'assets/music/蒲公英的约定.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/36/9/13515874.jpg',
            lrc: 'assets/lyrics/蒲公英的约定.lrc',
            theme: '#46718b'
        },
		{
            name: '青花瓷',
            artist: '周杰伦',
            url: 'assets/music/青花瓷.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/36/9/13515874.jpg',
            lrc: 'assets/lyrics/青花瓷.lrc',
            theme: '#46718b'
        },
		{
            name: '半生雪',
            artist: '七叔',
            url: 'assets/music/半生雪.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/64/22/1839376303.jpg',
            lrc: 'assets/lyrics/半生雪.lrc',
            theme: '#46718b'
        },
		{
            name: '桥边姑娘',
            artist: '海伦',
            url: 'assets/music/桥边姑娘.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/48/79/1272165134.jpg',
            lrc: 'assets/lyrics/桥边姑娘.lrc',
            theme: '#46718b'
        },
		{
            name: '星辰大海',
            artist: '黄霄云',
            url: 'assets/music/星辰大海.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/13/26/3224659704.jpg',
            lrc: 'assets/lyrics/星辰大海.lrc',
            theme: '#46718b'
        },
		{
            name: '补习街',
            artist: '郑智化',
            url: 'assets/music/补习街.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/55/57/2542813831.jpg',
            lrc: 'assets/lyrics/补习街.lrc',
            theme: '#46718b'
        },
		{
            name: '最美的期待',
            artist: '周笔畅',
            url: 'assets/music/最美的期待.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/85/65/3490087360.jpg',
            lrc: 'assets/lyrics/最美的期待.lrc',
            theme: '#46718b'
        },
		{
            name: '十年',
            artist: '陈奕迅',
            url: 'assets/music/十年.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/91/30/2595482136.jpg',
            lrc: 'assets/lyrics/十年.lrc',
            theme: '#46718b'
        },
		{
            name: '毕业说分手',
            artist: '冰冰超人',
            url: 'assets/music/毕业说分手.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/1/22/3704634296.jpg',
            lrc: 'assets/lyrics/毕业说分手.lrc',
            theme: '#46718b'
        },
		{
            name: 'MEGALOVANIA',
            artist: 'Toby Fox',
            url: 'assets/music/MEGALOVANIA.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/92/8/2593305688.jpg',
            theme: '#46718b'
        },
		{
            name: '被人',
            artist: '薛之谦',
            url: 'assets/music/被人.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/50/92/3367594293.jpg',
            lrc: 'assets/lyrics/被人.lrc',
            theme: '#46718b'
        },
		{
            name: '间距',
            artist: 'en',
            url: 'assets/music/间距.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/6/91/2789738879.jpg',
            lrc: 'assets/lyrics/间距.lrc',
            theme: '#46718b'
        },
		{
            name: '绅士',
            artist: '薛之谦',
            url: 'assets/music/绅士.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/82/10/1723937125.jpg',
            lrc: 'assets/lyrics/绅士.lrc',
            theme: '#46718b'
        },
		{
            name: '演员',
            artist: '薛之谦',
            url: 'assets/music/演员.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/82/10/1723937125.jpg',
            lrc: 'assets/lyrics/演员.lrc',
            theme: '#46718b'
        },
		{
            name: '差一步',
            artist: '大壮',
            url: 'assets/music/差一步.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000lEj821EaXUu.jpg',
            lrc: 'assets/lyrics/差一步.lrc',
            theme: '#46718b'
        },
		{
            name: '我很好',
            artist: '刘大壮',
            url: 'assets/music/我很好.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000QeahL3pTfM6.jpg',
            lrc: 'assets/lyrics/我很好.lrc',
            theme: '#46718b'
        },
		{
            name: '我们的爱',
            artist: '飞儿乐团',
            url: 'assets/music/我们的爱.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000015qGHu3KjkCl.jpg',
            lrc: 'assets/lyrics/我们的爱.lrc',
            theme: '#46718b'
        },
		{
            name: '安和桥（唢呐版）',
            url: 'assets/music/ahq.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/63/5/1829303511.jpg',
            theme: '#46718b'
        },
		{
            name: 'Windy Hill',
            artist: '羽肿',
            url: 'assets/music/wh.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/41/74/779071888.jpg',
            theme: '#46718b'
        },
		{
            name: '夏恋 雨道 彩月 幻昼',
            artist: 'Oct.',
            url: 'assets/music/xych.mp3',
            cover: 'https://img1.kuwo.cn/star/starheads/120/33/62/1254921456.jpg',
			lrc:'assets/lyrics/xych.lrc',
            theme: '#46718b'
        },
		{
            name: '她的微笑',
            artist: '阳山伟伟',
            url: 'assets/music/她的微笑.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/83/5/977951276.jpg',
            theme: '#46718b'
        },
		{
            name: '城南花已开',
            artist: '三亩地',
            url: 'assets/music/城南花已开.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/59/87/905948084.jpg',
            lrc: 'assets/lyrics/城南花已开.lrc',
            theme: '#46718b'
        },
		{
            name: 'The Truth that You Leave',
            artist: '3D环绕版',
            url: 'assets/music/ttyl.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/11/58/1029795230.jpg',
            theme: '#46718b'
        },
		{
            name: '安和桥',
            artist: '宋冬野',
            url: 'assets/music/安和桥.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002VeS6r4L5fLZ.jpg',
            lrc: 'assets/lyrics/安和桥.lrc',
            theme: '#46718b'
        },{
            name: '朋友 天堂好吗',
            artist: '郑智化',
            url: 'assets/music/朋友 天堂好吗.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/55/57/2542813831.jpg',
            lrc: 'assets/lyrics/朋友 天堂好吗.lrc',
            theme: '#46718b'
        },{
            name: '水手',
            artist: '郑智化',
            url: 'assets/music/水手.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/89/95/2185698330.jpg',
            lrc: 'assets/lyrics/水手.lrc',
            theme: '#46718b'
        },{
            name: 'You',
            artist: 'Approaching Nirvana',
            url: 'assets/music/You.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/94/38/3007115528.jpg',
            theme: '#46718b'
        },{
            name: 'Time Back',
            artist: 'Approaching Nirvana',
            url: 'assets/music/tb.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/93/10/2310330111.jpg',
            theme: '#46718b'
        },{
            name: 'Dream It Possible',
            artist: 'Delacey',
            url: 'assets/music/Dream It Possible.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/19/18/1365855201.jpg',
			lrc: 'assets/lyrics/Dream It Possible.lrc',
            theme: '#46718b'
        },{
            name: 'Paris',
            artist: 'Else',
            url: 'assets/music/Paris.mp3',
            cover: 'http://p3.music.126.net/h58MkalValADsLZPdhuOwg==/109951164855899615.jpg',
            theme: '#46718b'
        },{
            name: '落差',
            artist: 'IN-K',
            url: 'assets/music/落差.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/1/60/1105455938.jpg',
			lrc: 'assets/lyrics/落差.lrc',
            theme: '#46718b'
        },{
            name: 'Star Sky',
            artist: '',
            url: 'assets/music/ss.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003to8Rb0CPSkO.jpg',
            theme: '#46718b'
        },{
            name: '中国式家长-最后一道大题',
            artist: '中国式家长BGM',
            url: 'assets/music/最后一道大题.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002bG4Iy3O8rq6.jpg',
            theme: '#46718b'
        },{
            name: '阿拉斯加海湾',
            artist: '蓝心羽',
            url: 'assets/music/alsj.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/58/72/3795397878.jpg',
			lrc: 'assets/lyrics/alsj.lrc',
            theme: '#46718b'
        },{
            name: '风居住的街道',
            artist: '矶村由纪子',
            url: 'assets/music/fjzdjd.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/37/35/589151443.jpg',
            theme: '#46718b'
        },{
            name: 'My Soul',
            artist: 'JULY',
            url: 'assets/music/ms.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/76/32/828050279.jpg',
            theme: '#46718b'
        },{
            name: 'Monsters',
            artist: 'Katie Sky',
            url: 'assets/music/mr.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/90/21/1085920919.jpg',
			lrc: 'assets/lyrics/mr.lrc',
            theme: '#46718b'
        },{
            name: '刚刚好',
            artist: '薛之谦',
            url: 'assets/music/刚刚好.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/82/10/1723937125.jpg',
			lrc: 'assets/lyrics/刚刚好.lrc',
            theme: '#46718b'
        },{
            name: '渐冷',
            artist: '雪二',
            url: 'assets/music/渐冷.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/24/1/2605506967.jpg',
			lrc: 'assets/lyrics/渐冷.lrc',
            theme: '#46718b'
        },{
            name: '迷失幻境',
            artist: 'IN-K',
            url: 'assets/music/迷失幻境.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/62/78/477539205.jpg',
			lrc: 'assets/lyrics/迷失幻境.lrc',
            theme: '#46718b'
        },{
            name: 'Lemon',
            artist: '米津玄师',
            url: 'assets/music/Lemon.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/27/96/2001854924.jpg',
			lrc: 'assets/lyrics/Lemon.lrc',
            theme: '#46718b'
        },{
            name: '打上花火',
            artist: '米津玄师',
            url: 'assets/music/打上花火.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002rLPlR0CXaWS.jpg',
			lrc: 'assets/lyrics/打上花火.lrc',
            theme: '#46718b'
        },{
            name: 'My Sunset',
            artist: '',
            url: 'assets/music/mt.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/16/61/3195025135.jpg',

            theme: '#46718b'
        },{
            name: '我对您的思念，飘落在世界的每个角落',
            artist: '私に闻いて风i/酥糖Yuki',
            url: 'assets/music/sn.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/120/37/58/3778134116.jpg',
            theme: '#46718b'
        },{
            name: 'Soul',
            artist: '吴宇深',
            url: 'assets/music/sl.mp3',
            cover: 'http://p3.music.126.net/HTBu-4rLoO_lC29h1HVeMg==/109951163821564216.jpg',
            theme: '#46718b'
        },{
            name: '爱河（DJ版）',
            artist: '蒋雪儿',
            url: 'assets/music/ah.mp3',
			lrc:'assets/lyrics/ah.lrc',
            theme: '#46718b'
        },{
            name: '小朋友',
            artist: '任然',
			cover:'https://y.gtimg.cn/music/photo_new/T002R300x300M000001wKqoP19x4zo.jpg',
            url: 'assets/music/xpy.mp3',
			lrc:'assets/lyrics/xpy.lrc',
            theme: '#46718b'
        },{
            name: '这一生关于你的风景',
            artist: '枯木逢春',
			cover:'https://img4.kuwo.cn/star/albumcover/120/7/85/3315785481.jpg',
            url: 'assets/music/zys.mp3',
			lrc:'assets/lyrics/zys.lrc',
            theme: '#46718b'
        }
		//
    ]
});