/* ==========================================================================
   単語データ（出典: Kanzen Master 1級漢字リスト No.1-498、読み方・ベトナム語訳）
   このファイルのデータのみを教材として使用する。ここにない単語・意味は追加しない。
   ========================================================================== */
const WORDS = [{"id":1,"word":"遭う","reading":"あう","meaning":"gặp (tai nạn)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.1"},{"id":2,"word":"飼う","reading":"かう","meaning":"nuôi (con vật)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.2"},{"id":3,"word":"沿う","reading":"そう","meaning":"dọc theo, men theo","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.3"},{"id":4,"word":"添う","reading":"そう","meaning":"đi cùng, theo, kết hôn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.4"},{"id":5,"word":"縫う","reading":"ぬう","meaning":"may, vá, khâu","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.5"},{"id":6,"word":"酔う","reading":"よう","meaning":"say, say tàu xe","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.6"},{"id":7,"word":"奪う","reading":"うばう","meaning":"cướp, đoạt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.7"},{"id":8,"word":"覆う","reading":"おおう","meaning":"che, phủ, gói, đậy","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.8"},{"id":9,"word":"嫌う","reading":"きらう","meaning":"ghét","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.9"},{"id":10,"word":"狂う","reading":"くるう","meaning":"điên, loạn, trục trặc","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.10"},{"id":11,"word":"誘う","reading":"さそう","meaning":"mời, rủ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.11"},{"id":12,"word":"誓う","reading":"ちかう","meaning":"thề","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.12"},{"id":13,"word":"倣う","reading":"ならう","meaning":"bắt chước, mô phỏng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.13"},{"id":14,"word":"扱う","reading":"あつかう","meaning":"đối phó, giải quyết, sử dụng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.14"},{"id":15,"word":"従う","reading":"したがう","meaning":"theo, tuân theo","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.15"},{"id":16,"word":"伴う","reading":"ともなう","meaning":"theo, phát sinh, tương ứng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.16"},{"id":17,"word":"裂く","reading":"さく","meaning":"xé (giấy)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.17"},{"id":18,"word":"敷く","reading":"しく","meaning":"trải, lát (nền)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.18"},{"id":19,"word":"炊く","reading":"たく","meaning":"nấu, thổi cơm","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.19"},{"id":20,"word":"就く","reading":"つく","meaning":"bắt tay vào làm, men theo, theo thầy","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.20"},{"id":21,"word":"吐く","reading":"はく","meaning":"khạc, nôn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.21"},{"id":22,"word":"履く","reading":"はく","meaning":"đi, xỏ giầy, dép","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.22"},{"id":23,"word":"弾く","reading":"ひく","meaning":"kéo, chơi đàn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.23"},{"id":24,"word":"描く","reading":"えがく","meaning":"vẽ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.24"},{"id":25,"word":"渇く","reading":"かわく","meaning":"khô, khát","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.25"},{"id":26,"word":"砕く","reading":"くだく","meaning":"đập tan, phá vỡ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.26"},{"id":27,"word":"響く","reading":"ひびく","meaning":"âm hưởng, vang","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.27"},{"id":28,"word":"驚く","reading":"おどろく","meaning":"ngạc nhiên, sửng sốt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.28"},{"id":29,"word":"輝く","reading":"かがやく","meaning":"toả sáng, lấp lánh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.29"},{"id":30,"word":"脱ぐ","reading":"ぬぐ","meaning":"cởi (quần áo)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.30"},{"id":31,"word":"稼ぐ","reading":"かせぐ","meaning":"kiếm tiền","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.31"},{"id":32,"word":"騒ぐ","reading":"さわぐ","meaning":"gây ồn ào, huyên náo","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.32"},{"id":33,"word":"挿す","reading":"さす","meaning":"gắn, cài, đính","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.33"},{"id":34,"word":"致す","reading":"いたす","meaning":"làm (khiêm nhường)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.34"},{"id":35,"word":"卸す","reading":"おろす","meaning":"bán buôn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.35"},{"id":36,"word":"隠す","reading":"かくす","meaning":"ẩn náu, giấu","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.36"},{"id":37,"word":"崩す","reading":"くずす","meaning":"phá huỷ, kéo đổ, làm rối loạn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.37"},{"id":38,"word":"壊す","reading":"こわす","meaning":"phá vỡ, làm hỏng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.38"},{"id":39,"word":"脅かす","reading":"おどかす","meaning":"uy hiếp, đe doạ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.39"},{"id":40,"word":"及ぼす","reading":"およぼす","meaning":"gây ra, đem đến","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.40"},{"id":41,"word":"繰り返す","reading":"くりかえす","meaning":"lặp lại","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.41"},{"id":42,"word":"撃つ","reading":"うつ","meaning":"bắn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.42"},{"id":43,"word":"討つ","reading":"うつ","meaning":"thảo phạt, chinh phạt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.43"},{"id":44,"word":"跳ぶ","reading":"とぶ","meaning":"nhảy, bật lên","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.44"},{"id":45,"word":"酌む","reading":"くむ","meaning":"mời rượu, nhậu cùng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.45"},{"id":46,"word":"澄む","reading":"すむ","meaning":"trở lên trong, sáng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.46"},{"id":47,"word":"踏む","reading":"ふむ","meaning":"dẫm, đạp lên","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.47"},{"id":48,"word":"恨む","reading":"うらむ","meaning":"hận, căm ghét, tức","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.48"},{"id":49,"word":"縮む","reading":"ちぢむ","meaning":"thu nhỏ, co lại","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.49"},{"id":50,"word":"悔やむ","reading":"くやむ","meaning":"hối hận, tiếc nuối","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.50"},{"id":51,"word":"刈る","reading":"かる","meaning":"cắt, gọt, tỉa","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.51"},{"id":52,"word":"釣る","reading":"つる","meaning":"câu cá","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.52"},{"id":53,"word":"撮る","reading":"とる","meaning":"chụp ảnh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.53"},{"id":54,"word":"振る","reading":"ふる","meaning":"vẫy, rắc, chỉ định (công việc)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.54"},{"id":55,"word":"彫る","reading":"ほる","meaning":"khắc, chạm, tạc","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.55"},{"id":56,"word":"盛る","reading":"もる","meaning":"làm đầy, đổ đầy, phục vụ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.56"},{"id":57,"word":"至る","reading":"いたる","meaning":"đạt đến, đạt tới, tới nơi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.57"},{"id":58,"word":"劣る","reading":"おとる","meaning":"kém, yếu thế, thấp kém","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.58"},{"id":59,"word":"飾る","reading":"かざる","meaning":"trang trí, tô điểm, trang hoàng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.59"},{"id":60,"word":"腐る","reading":"くさる","meaning":"thiu, hỏng (đồ ăn)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.60"},{"id":61,"word":"削る","reading":"けずる","meaning":"gọt, bào, cắt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.61"},{"id":62,"word":"茂る","reading":"しげる","meaning":"rậm rạp, um tùm, xanh tốt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.62"},{"id":63,"word":"縛る","reading":"しばる","meaning":"buộc, trói, ràng buộc","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.63"},{"id":64,"word":"絞る","reading":"しぼる","meaning":"vắt (chanh, giẻ lau), giới hạn (phạm vi, mục tiêu)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.64"},{"id":65,"word":"滑る","reading":"すべる","meaning":"trơn, trượt (tuyết)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.65"},{"id":66,"word":"迫る","reading":"せまる","meaning":"cưỡng bức, tiến sát, gấp gáp","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.66"},{"id":67,"word":"黙る","reading":"だまる","meaning":"im lặng, làm thinh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.67"},{"id":68,"word":"殴る","reading":"なぐる","meaning":"đánh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.68"},{"id":69,"word":"握る","reading":"にぎる","meaning":"nắm (tay)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.69"},{"id":70,"word":"濁る","reading":"にごる","meaning":"đục (nước)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.70"},{"id":71,"word":"巡る","reading":"めぐる","meaning":"dạo quanh, đi quanh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.71"},{"id":72,"word":"潜る","reading":"もぐる","meaning":"nhảy lao đầu xuống, lặn, trải qua","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.72"},{"id":73,"word":"譲る","reading":"ゆずる","meaning":"nhường","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.73"},{"id":74,"word":"謝る","reading":"あやまる","meaning":"tạ lỗi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.74"},{"id":75,"word":"偏る","reading":"かたよる","meaning":"thiên lệch, mất cân bằng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.75"},{"id":76,"word":"透き通る","reading":"すきとおる","meaning":"trong suốt, trong vắt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.76"},{"id":77,"word":"煮る","reading":"にる","meaning":"nấu","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.77"},{"id":78,"word":"診る","reading":"みる","meaning":"chẩn đoán, khám bệnh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.78"},{"id":79,"word":"飽きる","reading":"あきる","meaning":"chán, ngán","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.79"},{"id":80,"word":"飢える","reading":"うえる","meaning":"thèm, khát, đói","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.80"},{"id":81,"word":"殖える","reading":"ふえる","meaning":"tăng, nhân lên","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.81"},{"id":82,"word":"訴える","reading":"うったえる","meaning":"kiện tụng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.82"},{"id":83,"word":"蓄える","reading":"たくわえる","meaning":"tích trữ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.83"},{"id":84,"word":"掛ける","reading":"かける","meaning":"treo","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.84"},{"id":85,"word":"避ける","reading":"さける","meaning":"tránh, lảng tránh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.85"},{"id":86,"word":"漬ける","reading":"つける","meaning":"ngâm, tẩm, ướp, muối dưa","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.86"},{"id":87,"word":"怠ける","reading":"なまける","meaning":"lười biếng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.87"},{"id":88,"word":"揚げる","reading":"あげる","meaning":"thả, kéo (cờ), rán (tempura)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.88"},{"id":89,"word":"焦げる","reading":"こげる","meaning":"cháy, khê","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.89"},{"id":90,"word":"妨げる","reading":"さまたげる","meaning":"gây trở ngại, cản trở","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.90"},{"id":91,"word":"載せる","reading":"のせる","meaning":"chất (lên xe), đăng tải (báo)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.91"},{"id":92,"word":"慌てる","reading":"あわてる","meaning":"hoảng, bối rối, luống cuống","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.92"},{"id":93,"word":"隔てる","reading":"へだてる","meaning":"phân chia, ngăn cách, cách biệt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.93"},{"id":94,"word":"企てる","reading":"くわだてる","meaning":"dự tính, lên kế hoạch","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.94"},{"id":95,"word":"兼ねる","reading":"かねる","meaning":"kiêm nhiệm, kết hợp","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.95"},{"id":96,"word":"跳ねる","reading":"はねる","meaning":"bắn lên, nhảy, kết thúc","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.96"},{"id":97,"word":"尋ねる","reading":"たずねる","meaning":"hỏi, thăm hỏi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.97"},{"id":98,"word":"締める","reading":"しめる","meaning":"thắt, vặn chặt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.98"},{"id":99,"word":"攻める","reading":"せめる","meaning":"tấn công","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.99"},{"id":100,"word":"褒める","reading":"ほめる","meaning":"khen ngợi, tán dương","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.100"},{"id":101,"word":"納める","reading":"おさめる","meaning":"nộp, thu, cất giữ, tiếp thu","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.101"},{"id":102,"word":"勧める","reading":"すすめる","meaning":"gợi ý, khuyên, khuyến khích","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.102"},{"id":103,"word":"眺める","reading":"ながめる","meaning":"nhìn, ngắm","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.103"},{"id":104,"word":"慰める","reading":"なぐさめる","meaning":"an ủi, động viên","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.104"},{"id":105,"word":"揺れる","reading":"ゆれる","meaning":"rung, lắc, lay động","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.105"},{"id":106,"word":"縮れる","reading":"ちぢれる","meaning":"nhàu nát, nhăn nhúm","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.106"},{"id":107,"word":"離れる","reading":"はなれる","meaning":"xa cách, rời xa, tuột khỏi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.107"},{"id":108,"word":"負う","reading":"おう","meaning":"mang, vác, khuân, chịu trách nhiệm","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.108"},{"id":109,"word":"舞う","reading":"まう","meaning":"cuộn, nhảy múa, xao xuyến","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.109"},{"id":110,"word":"競う","reading":"きそう","meaning":"tranh giành nhau, ganh đua","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.110"},{"id":111,"word":"担う","reading":"になう","meaning":"cáng đáng, gánh vác","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.111"},{"id":112,"word":"損なう","reading":"そこなう","meaning":"làm hại, thất bại…","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.112"},{"id":113,"word":"恥じらう","reading":"はじらう","meaning":"cảm thấy xấu hổ, ngượng ngùng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.113"},{"id":114,"word":"説く","reading":"とく","meaning":"giải thích, biện hộ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.114"},{"id":115,"word":"築く","reading":"きずく","meaning":"xây dựng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.115"},{"id":116,"word":"背く","reading":"そむく","meaning":"phản bội, lìa bỏ, quay lưng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.116"},{"id":117,"word":"導く","reading":"みちびく","meaning":"hướng dẫn, dẫn dắt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.117"},{"id":118,"word":"接ぐ","reading":"つぐ","meaning":"ghép, nối","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.118"},{"id":119,"word":"研ぐ","reading":"とぐ","meaning":"mài, rũa","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.119"},{"id":120,"word":"召す","reading":"めす","meaning":"bị, ăn uống, mời, triệu, gọi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.120"},{"id":121,"word":"記す","reading":"しるす","meaning":"đánh dấu","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.121"},{"id":122,"word":"逃す","reading":"のがす","meaning":"bỏ lỡ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.122"},{"id":123,"word":"志す","reading":"こころざす","meaning":"ước muốn, ý muốn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.123"},{"id":124,"word":"明かす","reading":"あかす","meaning":"làm rõ, vạch trần, tiết lộ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.124"},{"id":125,"word":"生かす","reading":"いかす","meaning":"làm sống lại, phát huy, tận dụng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.125"},{"id":126,"word":"抜かす","reading":"ぬかす","meaning":"bỏ sót","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.126"},{"id":127,"word":"果たす","reading":"はたす","meaning":"hoàn thành (nhiệm vụ)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.127"},{"id":128,"word":"生やす","reading":"はやす","meaning":"mọc (râu, mốc), trồng trọt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.128"},{"id":129,"word":"費やす","reading":"ついやす","meaning":"dùng, tiêu phí","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.129"},{"id":130,"word":"交わす","reading":"かわす","meaning":"trao đổi, giao dịch","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.130"},{"id":131,"word":"冷やかす","reading":"ひやかす","meaning":"chọc ghẹo, chế nhiễu","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.131"},{"id":132,"word":"断つ","reading":"たつ","meaning":"cắt, chấm dứt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.132"},{"id":133,"word":"保つ","reading":"たもつ","meaning":"giữ, bảo vệ, duy trì","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.133"},{"id":134,"word":"尊ぶ","reading":"とうとぶ","meaning":"quý trọng, đánh giá cao","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.134"},{"id":135,"word":"生む","reading":"うむ","meaning":"sinh, đẻ, dẫn đến","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.135"},{"id":136,"word":"富む","reading":"とむ","meaning":"giàu có, phong phú","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.136"},{"id":137,"word":"病む","reading":"やむ","meaning":"bị ốm","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.137"},{"id":138,"word":"歩む","reading":"あゆむ","meaning":"bước đi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.138"},{"id":139,"word":"絡む","reading":"からむ","meaning":"cãi cọ, dính dáng, liên quan","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.139"},{"id":140,"word":"恵む","reading":"めぐむ","meaning":"cứu trợ, ban cho","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.140"},{"id":141,"word":"営む","reading":"いとなむ","meaning":"kinh doanh, điều khiển","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.141"},{"id":142,"word":"危ぶむ","reading":"あやぶむ","meaning":"lo sợ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.142"},{"id":143,"word":"赤らむ","reading":"あからむ","meaning":"trở nên ửng đỏ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.143"},{"id":144,"word":"反る","reading":"そる","meaning":"cong, vênh, ưỡn ngực","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.144"},{"id":145,"word":"練る","reading":"ねる","meaning":"trau chuốt, hoạch định, nhào trộn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.145"},{"id":146,"word":"煙る","reading":"けむる","meaning":"bốc khói, bốc hơi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.146"},{"id":147,"word":"募る","reading":"つのる","meaning":"chiêu mộ, trưng cầu, ngày càng mạnh (bão, tình cảm)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.147"},{"id":148,"word":"図る","reading":"はかる","meaning":"lập kế hoạch, tiến hành, mưu đồ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.148"},{"id":149,"word":"勝る","reading":"まさる","meaning":"vượt trội hơn, áp đảo hơn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.149"},{"id":150,"word":"操る","reading":"あやつる","meaning":"thao tác, vận hành, điều khiển","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.150"},{"id":151,"word":"誤る","reading":"あやまる","meaning":"lầm lỡ, sai lầm","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.151"},{"id":152,"word":"受かる","reading":"うかる","meaning":"thi đỗ, vượt qua","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.152"},{"id":153,"word":"群がる","reading":"むらがる","meaning":"tập hợp lại, kết thành đàn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.153"},{"id":154,"word":"連なる","reading":"つらなる","meaning":"chạy dài, xếp thành hàng dài (~ dãy núi)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.154"},{"id":155,"word":"交わる","reading":"まじわる","meaning":"giao nhau, cắt nhau, lẫn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.155"},{"id":156,"word":"老いる","reading":"おいる","meaning":"lão, già","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.156"},{"id":157,"word":"強いる","reading":"しいる","meaning":"ép, cưỡng bức","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.157"},{"id":158,"word":"率いる","reading":"ひきいる","meaning":"dẫn đầu, đi tiên phong","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.158"},{"id":159,"word":"恥じる","reading":"はじる","meaning":"ngượng ngùng, cảm thấy xấu hổ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.159"},{"id":160,"word":"重んじる","reading":"おもんじる","meaning":"kính trọng, tôn trọng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.160"},{"id":161,"word":"帯びる","reading":"おびる","meaning":"nhiễm, ảnh hưởng, mang, được giao phó…","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.161"},{"id":162,"word":"省みる","reading":"かえりみる","meaning":"nhìn lại (lịch sử), ngoái lại phía sau","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.162"},{"id":163,"word":"試みる","reading":"こころみる","meaning":"thử","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.163"},{"id":164,"word":"経る","reading":"へる","meaning":"kinh qua, trải qua, via…","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.164"},{"id":165,"word":"絶える","reading":"たえる","meaning":"tuyệt chủng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.165"},{"id":166,"word":"映える","reading":"はえる","meaning":"chiếu sáng lên, thấy đẹp","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.166"},{"id":167,"word":"甘える","reading":"あまえる","meaning":"chăm sóc, chăm sóc thái quá, lòng tốt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.167"},{"id":168,"word":"構える","reading":"かまえる","meaning":"để vào vị trí, kề (dao), lập gđ, định cư","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.168"},{"id":169,"word":"栄える","reading":"さかえる","meaning":"phồn vinh, hưng thịnh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.169"},{"id":170,"word":"仕える","reading":"つかえる","meaning":"phụng sự, phục vụ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.170"},{"id":171,"word":"生ける","reading":"いける","meaning":"cắm (hoa), tồn tại, sống","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.171"},{"id":172,"word":"化ける","reading":"ばける","meaning":"biến hoá","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.172"},{"id":173,"word":"老ける","reading":"ふける","meaning":"già, lão","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.173"},{"id":174,"word":"授ける","reading":"さずける","meaning":"ban, tặng, trao tặng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.174"},{"id":175,"word":"設ける","reading":"もうける","meaning":"thiết lập, trang bị","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.175"},{"id":176,"word":"告げる","reading":"つげる","meaning":"thông báo","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.176"},{"id":177,"word":"和らげる","reading":"やわらげる","meaning":"làm nguôi, làm dịu đi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.177"},{"id":178,"word":"果てる","reading":"はてる","meaning":"cùng tận, hoàn tất","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.178"},{"id":179,"word":"定める","reading":"さだめる","meaning":"làm ổn định, xác định","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.179"},{"id":180,"word":"乱れる","reading":"みだれる","meaning":"bị xáo trộn, rối bời, lúng túng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.180"},{"id":181,"word":"訪れる","reading":"おとずれる","meaning":"ghé thăm, ghé chơi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.181"},{"id":182,"word":"値する","reading":"あたいする","meaning":"xứng đáng (尊敬に～）","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.182"},{"id":183,"word":"襲う","reading":"おそう","meaning":"tấn công, công kích","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.183"},{"id":184,"word":"慕う","reading":"したう","meaning":"tưởng nhớ, ngưỡng mộ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.184"},{"id":185,"word":"潤う","reading":"うるおう","meaning":"ẩm ướt, phong phú, hưởng lợi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.185"},{"id":186,"word":"漂う","reading":"ただよう","meaning":"dạt dào, tràn đầy, lộ ra, trôi nổi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.186"},{"id":187,"word":"繕う","reading":"つくろう","meaning":"sắp gọn gàng, sửa chữa, chăm chút, vá","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.187"},{"id":188,"word":"賄う","reading":"まかなう","meaning":"chịu chi trả","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.188"},{"id":189,"word":"養う","reading":"やしなう","meaning":"nuôi dưỡng, vun đắp, xây dựng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.189"},{"id":190,"word":"裁く","reading":"さばく","meaning":"đánh giá, phán xét","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.190"},{"id":191,"word":"嘆く","reading":"なげく","meaning":"than thở, kêu than","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.191"},{"id":192,"word":"懐く","reading":"なつく","meaning":"theo, đi theo","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.192"},{"id":193,"word":"欺く","reading":"あざむく","meaning":"lừa gạt, bẫy","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.193"},{"id":194,"word":"赴く","reading":"おもむく","meaning":"tới, tiến, phát triển theo hướng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.194"},{"id":195,"word":"貫く","reading":"つらぬく","meaning":"xuyên qua, xuyên thủng, quán triệt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.195"},{"id":196,"word":"継ぐ","reading":"つぐ","meaning":"thừa kế, thừa hưởng, kế tục","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.196"},{"id":197,"word":"仰ぐ","reading":"あおぐ","meaning":"nhìn lên, phụ thuộc, ngưỡng mộ, hỏi (ý kiến)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.197"},{"id":198,"word":"揺らぐ","reading":"ゆらぐ","meaning":"rung, lắc, dao động, nao núng (quyết tâm)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.198"},{"id":199,"word":"侵す","reading":"おかす","meaning":"xâm nhập, vi phạm, tấn công","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.199"},{"id":200,"word":"脅す","reading":"おどす","meaning":"doạ nạt, hăm doạ, đe doạ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.200"},{"id":201,"word":"浸す","reading":"ひたす","meaning":"nhúng vào (nước)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.201"},{"id":202,"word":"促す","reading":"うながす","meaning":"thúc giục, khuyến khích, động viên","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.202"},{"id":203,"word":"施す","reading":"ほどこす","meaning":"bố thí, cứu tế, thi hành, viết thêm","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.203"},{"id":204,"word":"催す","reading":"もよおす","meaning":"tổ chức (họp), sắp sửa, cảm thấy","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.204"},{"id":205,"word":"覆る","reading":"くつがえる","meaning":"bị lật ngược, bị lật đổ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.205"},{"id":206,"word":"尽くす","reading":"つくす","meaning":"cạn kiệt, cống hiến, đối đãi như bạn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.206"},{"id":207,"word":"励ます","reading":"はげます","meaning":"khích lệ, động viên, cổ vũ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.207"},{"id":208,"word":"脅かす","reading":"おびやかす","meaning":"đe doạ, doạ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.208"},{"id":209,"word":"摘む","reading":"つむ","meaning":"hái (hoa)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.209"},{"id":210,"word":"挑む","reading":"いどむ","meaning":"thách thức","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.210"},{"id":211,"word":"臨む","reading":"のぞむ","meaning":"tiếp cận, đối mặt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.211"},{"id":212,"word":"励む","reading":"はげむ","meaning":"cố gắng, phấn đấu","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.212"},{"id":213,"word":"弾む","reading":"はずむ","meaning":"nảy (bóng), rộn ràng (trái tim)","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.213"},{"id":214,"word":"阻む","reading":"はばむ","meaning":"cản trở, ngăn cản, chắn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.214"},{"id":215,"word":"謹む","reading":"つつしむ","meaning":"kính cẩn, hân hạnh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.215"},{"id":216,"word":"惜しむ","reading":"おしむ","meaning":"tiếc, miễn cưỡng, tiết kiệm, coi trọng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.216"},{"id":217,"word":"織る","reading":"おる","meaning":"dệt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.217"},{"id":218,"word":"凝る","reading":"こる","meaning":"đông lại, cứng đờ, tập trung, nhiệt tình vào…","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.218"},{"id":219,"word":"擦る","reading":"する","meaning":"cọ xát, chà sát","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.219"},{"id":220,"word":"漏る","reading":"もる","meaning":"rò, rỉ, dột","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.220"},{"id":221,"word":"焦る","reading":"あせる","meaning":"sốt ruột, vội vàng, hấp tấp","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.221"},{"id":222,"word":"悟る","reading":"さとる","meaning":"giác ngộ, hiểu được, nhận thức được","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.222"},{"id":223,"word":"障る","reading":"さわる","meaning":"trở ngại, có hại, bất lợi","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.223"},{"id":224,"word":"粘る","reading":"ねばる","meaning":"dính, kiên trì","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.224"},{"id":225,"word":"諮る","reading":"はかる","meaning":"hỏi ý","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.225"},{"id":226,"word":"誇る","reading":"ほこる","meaning":"tự hào, kiêu hãnh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.226"},{"id":227,"word":"怠る","reading":"おこたる","meaning":"bỏ bê, sao nhãng, quên, tốt lên, khá hơn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.227"},{"id":228,"word":"遮る","reading":"さえぎる","meaning":"chặn đứng, cắt ngang","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.228"},{"id":229,"word":"賜る","reading":"たまわる","meaning":"nhận, được ban phát","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.229"},{"id":230,"word":"葬る","reading":"ほうむる","meaning":"chôn cất","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.230"},{"id":231,"word":"奉る","reading":"たてまつる","meaning":"mời, biếu","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.231"},{"id":232,"word":"滞る","reading":"とどこおる","meaning":"ứ lại, đình trệ, chậm trễ","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.232"},{"id":233,"word":"携わる","reading":"たずさわる","meaning":"tham gia vào việc","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.233"},{"id":234,"word":"尽きる","reading":"つきる","meaning":"cạn sức, cạn kiệt","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.234"},{"id":235,"word":"朽ちる","reading":"くちる","meaning":"mục nát, thối rữa","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.235"},{"id":236,"word":"滅びる","reading":"ほろびる","meaning":"bị phá huỷ, bị diệt vong","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.236"},{"id":237,"word":"染みる","reading":"しみる","meaning":"thấm, ngấm, nhiễm","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.237"},{"id":238,"word":"顧みる","reading":"かえりみる","meaning":"hồi tưởng, hình dung lại","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.238"},{"id":239,"word":"懲りる","reading":"こりる","meaning":"nhận được bài học, tỉnh ngộ, mở mắt ra","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.239"},{"id":240,"word":"据える","reading":"すえる","meaning":"đặt, để","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.240"},{"id":241,"word":"添える","reading":"そえる","meaning":"đính vào, thêm vào","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.241"},{"id":242,"word":"堪える","reading":"たえる","meaning":"chịu đựng được, vượt qua được","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.242"},{"id":243,"word":"耐える","reading":"たえる","meaning":"chịu đựng, tương ứng, thích hợp","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.243"},{"id":244,"word":"鍛える","reading":"きたえる","meaning":"rèn luyện, rèn giũa","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.244"},{"id":245,"word":"唱える","reading":"となえる","meaning":"tụng, xướng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.245"},{"id":246,"word":"控える","reading":"ひかえる","meaning":"kiềm chế, cận kề, ghi lại","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.246"},{"id":247,"word":"衰える","reading":"おとろえる","meaning":"sa sút, suy yếu, suy nhược","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.247"},{"id":248,"word":"踏まえる","reading":"ふまえる","meaning":"dựa trên, xem xét đến","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.248"},{"id":249,"word":"駆ける","reading":"かける","meaning":"chạy nhanh, phi nước đại, tiến triển nhanh","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.249"},{"id":250,"word":"遂げる","reading":"とげる","meaning":"đạt tới, đạt được, thực hiện","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.250"},{"id":251,"word":"掲げる","reading":"かかげる","meaning":"treo","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.251"},{"id":252,"word":"染める","reading":"そめる","meaning":"nhuộm màu, nhúng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.252"},{"id":253,"word":"傷める","reading":"いためる","meaning":"gây thương tích, làm tổn thương, làm hỏng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.253"},{"id":254,"word":"緩める","reading":"ゆるめる","meaning":"nới lỏng, làm chậm lại","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.254"},{"id":255,"word":"垂れる","reading":"たれる","meaning":"chảy nhỏ giọt, rủ xuống, trao cho","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.255"},{"id":256,"word":"廃れる","reading":"すたれる","meaning":"lỗi thời, phế bỏ, suy yếu","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.256"},{"id":257,"word":"膨れる","reading":"ふくれる","meaning":"to ra, phồng lên, bành trướng","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.257"},{"id":258,"word":"紛れる","reading":"まぎれる","meaning":"bị làm sao lãng, bị hướng sang hướng khác","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.258"},{"id":259,"word":"免れる","reading":"まぬかれる","meaning":"thoát được, tránh được, được miễn","pos":"動詞","source":"Kanzen Master 1級漢字リスト No.259"},{"id":260,"word":"良い","reading":"よい","meaning":"đúng, tốt, đẹp","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.260"},{"id":261,"word":"粗い","reading":"あらい","meaning":"thô mịch, gồ ghề, lổn nhổn","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.261"},{"id":262,"word":"堅い","reading":"かたい","meaning":"cứng, vững vàng, vững chắc","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.262"},{"id":263,"word":"臭い","reading":"くさい","meaning":"hôi, thối, tanh tưởi","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.263"},{"id":264,"word":"渋い","reading":"しぶい","meaning":"chát, đắng, cau có","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.264"},{"id":265,"word":"緩い","reading":"ゆるい","meaning":"lỏng, rộng (quần áo), loãng","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.265"},{"id":266,"word":"尊い","reading":"とうとい","meaning":"hiếm, quý giá","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.266"},{"id":267,"word":"貴い","reading":"とうとい","meaning":"quý giá, cao quý","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.267"},{"id":268,"word":"醜い","reading":"みにくい","meaning":"xấu xí","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.268"},{"id":269,"word":"快い","reading":"こころよい","meaning":"dễ chịu, sảng khoái, thoải mái","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.269"},{"id":270,"word":"惜しい","reading":"おしい","meaning":"tiếc, thương, quý giá","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.270"},{"id":271,"word":"怪しい","reading":"あやしい","meaning":"khó tin, vụng về","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.271"},{"id":272,"word":"卑しい","reading":"いやしい","meaning":"ti tiện, hạ cấp, đáng khinh bỉ","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.272"},{"id":273,"word":"厳しい","reading":"きびしい","meaning":"nghiêm khắc, hà khắc","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.273"},{"id":274,"word":"悔しい","reading":"くやしい","meaning":"đáng tiếc, hối hận","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.274"},{"id":275,"word":"詳しい","reading":"くわしい","meaning":"biết rõ, tường tận, hiểu rõ","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.275"},{"id":276,"word":"寂しい","reading":"さびしい","meaning":"buồn, cô đơn, hẻo lánh","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.276"},{"id":277,"word":"乏しい","reading":"とぼしい","meaning":"bần cùng, khốn khó, thiếu sót","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.277"},{"id":278,"word":"激しい","reading":"はげしい","meaning":"gắt, mãnh liệt","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.278"},{"id":279,"word":"著しい","reading":"いちじるしい","meaning":"đáng kể","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.279"},{"id":280,"word":"騒がしい","reading":"さわがしい","meaning":"inh ỏi, ồn ào","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.280"},{"id":281,"word":"懐かしい","reading":"なつかしい","meaning":"nhớ tiếc, mong nhớ","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.281"},{"id":282,"word":"悩ましい","reading":"なやましい","meaning":"quyến rũ, u sầu","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.282"},{"id":283,"word":"甚だしい","reading":"はなはだしい","meaning":"mãnh liệt, kinh khủng, ghê gớm","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.283"},{"id":284,"word":"華々しい","reading":"はなばなしい","meaning":"tươi thắm, tráng lệ","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.284"},{"id":285,"word":"煩わしい","reading":"わずらわしい","meaning":"phiền muộn, chán ngắt, phiền hà","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.285"},{"id":286,"word":"慌ただしい","reading":"あわただしい","meaning":"bận rộn, không yên ổn","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.286"},{"id":287,"word":"汚らわしい","reading":"けがらわしい","meaning":"bẩn, bẩn thỉu, hạ cấp","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.287"},{"id":288,"word":"紛らわしい","reading":"まぎらわしい","meaning":"không rõ ràng, gây bối rối","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.288"},{"id":289,"word":"平たい","reading":"ひらたい","meaning":"bằng phẳng, dễ hiểu, dẹt","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.289"},{"id":290,"word":"酸っぱい","reading":"すっぱい","meaning":"chua","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.290"},{"id":291,"word":"嫌な","reading":"いやな","meaning":"khó chịu, ghét, không vừa ý","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.291"},{"id":292,"word":"嫌いな","reading":"きらいな","meaning":"ghét","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.292"},{"id":293,"word":"愚かな","reading":"おろかな","meaning":"ngu ngốc, ngớ ngẩn, dại","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.293"},{"id":294,"word":"厳かな","reading":"おごそかな","meaning":"uy nghiêm, trang trọng, tráng lệ","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.294"},{"id":295,"word":"巧みな","reading":"たくみな","meaning":"khéo, khéo léo, khéo tay","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.295"},{"id":296,"word":"惨めな","reading":"みじめな","meaning":"đáng thương, đáng buồn","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.296"},{"id":297,"word":"哀れな","reading":"あわれな","meaning":"đáng thương, buồn thảm, bi ai","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.297"},{"id":298,"word":"盛んな","reading":"さかんな","meaning":"hưng thịnh, thịnh hành, ưa chuộng","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.298"},{"id":299,"word":"鮮やかな","reading":"あざやかな","meaning":"rực rỡ, chói lọi, nổi bật","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.299"},{"id":300,"word":"穏やかな","reading":"おだやかな","meaning":"êm đềm, ôn hoà, yên ả","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.300"},{"id":301,"word":"細やかな","reading":"こまやかな","meaning":"nhỏ bé, giản dị","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.301"},{"id":302,"word":"健やかな","reading":"すこやかな","meaning":"khoẻ mạnh, cường tráng, lành mạnh","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.302"},{"id":303,"word":"速やかな","reading":"すみやかな","meaning":"nhanh chóng, mau lẹ","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.303"},{"id":304,"word":"和やかな","reading":"なごやかな","meaning":"hoà nhã, thư thái, êm dịu, thân mật","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.304"},{"id":305,"word":"華やかな","reading":"はなやかな","meaning":"lộng lẫy, tươi thắm","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.305"},{"id":306,"word":"緩やかな","reading":"ゆるやかな","meaning":"nhẹ nhàng, thoải mái, lỏng lẻo","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.306"},{"id":307,"word":"清らかな","reading":"きよらかな","meaning":"sạch sẽ, trong lành, trong sáng","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.307"},{"id":308,"word":"滑らかな","reading":"なめらかな","meaning":"trơn tru","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.308"},{"id":309,"word":"朗らかな","reading":"ほがらかな","meaning":"sáng sủa, vui vẻ, hoan hỉ, phấn khởi","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.309"},{"id":310,"word":"月並みな","reading":"つきなみな","meaning":"thường thường, thông thường","pos":"な形容詞","source":"Kanzen Master 1級漢字リスト No.310"},{"id":311,"word":"幾","reading":"いく","meaning":"bao nhiêu","pos":"連体詞・接尾語","source":"Kanzen Master 1級漢字リスト No.311"},{"id":312,"word":"我が","reading":"わが","meaning":"của chúng tôi, của chúng ta","pos":"連体詞・接尾語","source":"Kanzen Master 1級漢字リスト No.312"},{"id":313,"word":"来る","reading":"きたる","meaning":"đến","pos":"連体詞・接尾語","source":"Kanzen Master 1級漢字リスト No.313"},{"id":314,"word":"沿い","reading":"ぞい","meaning":"dọc theo, men theo","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.314"},{"id":315,"word":"難い","reading":"がたい","meaning":"khó, khó khăn","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.315"},{"id":316,"word":"仮に","reading":"かりに","meaning":"giả sử, tạm thời, cứ cho là","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.316"},{"id":317,"word":"殊に","reading":"ことに","meaning":"đặc biệt, một cách đặc biệt","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.317"},{"id":318,"word":"既に","reading":"すでに","meaning":"đã, đã rồi","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.318"},{"id":319,"word":"甚だ","reading":"はなはだ","meaning":"rất, lắm, quá chừng, cực kỳ","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.319"},{"id":320,"word":"専ら","reading":"もっぱら","meaning":"hầu hết, chủ yếu","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.320"},{"id":321,"word":"極めて","reading":"きわめて","meaning":"cực kỳ, vô cùng, hết sức","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.321"},{"id":322,"word":"飽くまで","reading":"あくまで","meaning":"kiên trì, ngoan cố, tới cùng","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.322"},{"id":323,"word":"又","reading":"また","meaning":"lại còn, và, hơn nữa","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.323"},{"id":324,"word":"及び","reading":"および","meaning":"và","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.324"},{"id":325,"word":"故に","reading":"ゆえに","meaning":"do đó, kết quả là","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.325"},{"id":326,"word":"並びに","reading":"ならびに","meaning":"và, cũng như","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.326"},{"id":327,"word":"若しくは","reading":"もしくは","meaning":"hoặc là","pos":"副詞・接続詞","source":"Kanzen Master 1級漢字リスト No.327"},{"id":328,"word":"鐘","reading":"かね","meaning":"chuông /釣り鐘","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.328"},{"id":329,"word":"琴","reading":"こと","meaning":"đàn Koto","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.329"},{"id":330,"word":"鈴","reading":"すず","meaning":"cái chuông, quả chuông","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.330"},{"id":331,"word":"笛","reading":"ふえ","meaning":"sáo","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.331"},{"id":332,"word":"網","reading":"あみ","meaning":"lưới, võng, mạng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.332"},{"id":333,"word":"綱","reading":"つな","meaning":"dây thừng, chão","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.333"},{"id":334,"word":"縄","reading":"なわ","meaning":"dây thừng, chão","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.334"},{"id":335,"word":"鎖","reading":"くさり","meaning":"xích, xiềng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.335"},{"id":336,"word":"筒","reading":"つつ","meaning":"ống trụ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.336"},{"id":337,"word":"器","reading":"うつわ","meaning":"chậu, bát / khí chất, tài năng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.337"},{"id":338,"word":"杯","reading":"さかずき","meaning":"cốc, chén","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.338"},{"id":339,"word":"瀬戸物","reading":"せともの","meaning":"đồ sứ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.339"},{"id":340,"word":"柄","reading":"え","meaning":"chuôi, cán, quai","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.340"},{"id":341,"word":"傘","reading":"かさ","meaning":"ô","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.341"},{"id":342,"word":"旗","reading":"はた","meaning":"cờ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.342"},{"id":343,"word":"鏡","reading":"かがみ","meaning":"gương, đèn soi","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.343"},{"id":344,"word":"金槌","reading":"かなづち","meaning":"búa","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.344"},{"id":345,"word":"墨","reading":"すみ","meaning":"mực (viết)","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.345"},{"id":346,"word":"棚","reading":"たな","meaning":"giá, kệ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.346"},{"id":347,"word":"婿","reading":"むこ","meaning":"con rể","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.347"},{"id":348,"word":"嫁","reading":"よめ","meaning":"con dâu","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.348"},{"id":349,"word":"若者","reading":"わかもの","meaning":"người trẻ tuổi, trai trẻ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.349"},{"id":350,"word":"悪者","reading":"わるもの","meaning":"người xấu, kẻ xấu","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.350"},{"id":351,"word":"我々","reading":"われわれ","meaning":"chúng tôi, chúng ta","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.351"},{"id":352,"word":"鬼","reading":"おに","meaning":"con quỷ, sự độc ác","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.352"},{"id":353,"word":"頭","reading":"かしら","meaning":"đầu, ông chủ, kẻ cầm đầu","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.353"},{"id":354,"word":"侍","reading":"さむらい","meaning":"Samurai","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.354"},{"id":355,"word":"お供","reading":"おとも","meaning":"cùng với, cùng đi, bạn đồng hành","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.355"},{"id":356,"word":"地主","reading":"じぬし","meaning":"địa chủ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.356"},{"id":357,"word":"殿様","reading":"とのさま","meaning":"lãnh chúa phong kiến","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.357"},{"id":358,"word":"麻","reading":"あさ","meaning":"vải lanh, cây gai","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.358"},{"id":359,"word":"絹","reading":"きぬ","meaning":"lụa, vải lụa","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.359"},{"id":360,"word":"織物","reading":"おりもの","meaning":"vải dệt","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.360"},{"id":361,"word":"襟","reading":"えり","meaning":"cổ áo","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.361"},{"id":362,"word":"柄","reading":"がら","meaning":"mẫu, mô hình, da","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.362"},{"id":363,"word":"丈","reading":"たけ","meaning":"vạt áo, chiều dài, chiều cao","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.363"},{"id":364,"word":"喪服","reading":"もふく","meaning":"tang phục","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.364"},{"id":365,"word":"紫","reading":"むらさき","meaning":"màu tím","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.365"},{"id":366,"word":"冠","reading":"かんむり","meaning":"vương miện","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.366"},{"id":367,"word":"傷","reading":"きず","meaning":"vết thương, vết sẹo, sước","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.367"},{"id":368,"word":"舌","reading":"した","meaning":"lưỡi","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.368"},{"id":369,"word":"唇","reading":"くちびる","meaning":"môi","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.369"},{"id":370,"word":"裸","reading":"はだか","meaning":"loã thể, chuồng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.370"},{"id":371,"word":"手の平","reading":"てのひら","meaning":"gan bàn tay, lòng bàn tay","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.371"},{"id":372,"word":"癖","reading":"くせ","meaning":"thói, tật","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.372"},{"id":373,"word":"姿","reading":"すがた","meaning":"bóng dáng, phong thái, diện mạo","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.373"},{"id":374,"word":"振り","reading":"ふり","meaning":"vờ, vẻ bề ngoài, diện mạo, hình thức","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.374"},{"id":375,"word":"左利き","reading":"ひだりきき","meaning":"thuận tay trái","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.375"},{"id":376,"word":"恥","reading":"はじ","meaning":"sự xấu hổ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.376"},{"id":377,"word":"訳","reading":"わけ","meaning":"lý do, nguyên nhân","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.377"},{"id":378,"word":"誠","reading":"まこと","meaning":"trung thành, niềm tin, sự chân thực","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.378"},{"id":379,"word":"魂","reading":"たましい","meaning":"linh hồn","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.379"},{"id":380,"word":"志","reading":"こころざし","meaning":"ý chí, ước nguyện, lòng biết hơn","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.380"},{"id":381,"word":"怒り","reading":"いかり","meaning":"cơn giận, sự tức giận","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.381"},{"id":382,"word":"情け","reading":"なさけ","meaning":"lòng trắc ẩn, sự cảm thông","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.382"},{"id":383,"word":"過ち","reading":"あやまち","meaning":"sai lầm, lỗi lầm","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.383"},{"id":384,"word":"償い","reading":"つぐない","meaning":"bồi thường, đền bù","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.384"},{"id":385,"word":"戸惑い","reading":"とまどい","meaning":"lạc đường, mất phương hướng, không biết cách làm","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.385"},{"id":386,"word":"善し悪し","reading":"よしあし","meaning":"tốt và xấu, đúng sai, thiện ác.","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.386"},{"id":387,"word":"丘","reading":"おか","meaning":"đồi, quả đồi","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.387"},{"id":388,"word":"峰","reading":"みね","meaning":"chóp, ngọn, đỉnh","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.388"},{"id":389,"word":"峠","reading":"とうげ","meaning":"đèo","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.389"},{"id":390,"word":"岬","reading":"みさき","meaning":"mũi đất","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.390"},{"id":391,"word":"頂","reading":"いただき","meaning":"đỉnh","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.391"},{"id":392,"word":"滝","reading":"たき","meaning":"thác nước","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.392"},{"id":393,"word":"沼","reading":"ぬま","meaning":"ao, đầm","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.393"},{"id":394,"word":"霧","reading":"きり","meaning":"sương mù","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.394"},{"id":395,"word":"霜","reading":"しも","meaning":"sương, sương giá","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.395"},{"id":396,"word":"露","reading":"つゆ","meaning":"sương, sương mù","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.396"},{"id":397,"word":"滴","reading":"しずく","meaning":"giọt (nước)","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.397"},{"id":398,"word":"炎","reading":"ほのお","meaning":"ngọn lửa","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.398"},{"id":399,"word":"雷","reading":"かみなり","meaning":"sấm sét","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.399"},{"id":400,"word":"稲光","reading":"いなびかり","meaning":"chớp","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.400"},{"id":401,"word":"泡","reading":"あわ","meaning":"bong bóng, bọt","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.401"},{"id":402,"word":"渦","reading":"うず","meaning":"xoáy, lốc","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.402"},{"id":403,"word":"沖","reading":"おき","meaning":"biển khơi, khơi","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.403"},{"id":404,"word":"潮","reading":"しお","meaning":"thuỷ triều, dòng nước","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.404"},{"id":405,"word":"津波","reading":"つなみ","meaning":"sóng thần","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.405"},{"id":406,"word":"浜辺","reading":"はまべ","meaning":"bãi biển, bờ biển","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.406"},{"id":407,"word":"梅","reading":"うめ","meaning":"cây mai, mơ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.407"},{"id":408,"word":"杉","reading":"すぎ","meaning":"cây tuyết tùng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.408"},{"id":409,"word":"松","reading":"まつ","meaning":"cây thông","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.409"},{"id":410,"word":"桜","reading":"さくら","meaning":"hoa anh đào","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.410"},{"id":411,"word":"穂","reading":"ほ","meaning":"bông (lúa)","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.411"},{"id":412,"word":"芽","reading":"め","meaning":"mầm, búp","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.412"},{"id":413,"word":"稲","reading":"いね","meaning":"lúa","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.413"},{"id":414,"word":"株","reading":"かぶ","meaning":"gốc cây, cổ phiếu","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.414"},{"id":415,"word":"茎","reading":"くき","meaning":"cọng, cuống","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.415"},{"id":416,"word":"芝","reading":"しば","meaning":"cỏ, cây cỏ thấp sát đất","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.416"},{"id":417,"word":"筋","reading":"すじ","meaning":"gân, cốt truyện","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.417"},{"id":418,"word":"苗","reading":"なえ","meaning":"cây con","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.418"},{"id":419,"word":"幹","reading":"みき","meaning":"thân cây","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.419"},{"id":420,"word":"酢","reading":"す","meaning":"giấm","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.420"},{"id":421,"word":"汁","reading":"しる","meaning":"nước hoa quả ép, súp, canh","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.421"},{"id":422,"word":"乳","reading":"ちち","meaning":"sữa, vú","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.422"},{"id":423,"word":"豆","reading":"まめ","meaning":"đậu","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.423"},{"id":424,"word":"豚肉","reading":"ぶたにく","meaning":"thịt heo","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.424"},{"id":425,"word":"跡","reading":"あと","meaning":"dấu vết, vết tích","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.425"},{"id":426,"word":"穴","reading":"あな","meaning":"hang, lỗ hổng, khiếm khuyết","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.426"},{"id":427,"word":"墓","reading":"はか","meaning":"phần mộ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.427"},{"id":428,"word":"堀","reading":"ほり","meaning":"hào, kênh đào","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.428"},{"id":429,"word":"街","reading":"まち","meaning":"phố, khu","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.429"},{"id":430,"word":"溝","reading":"みぞ","meaning":"rãnh, khoảng cách","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.430"},{"id":431,"word":"扉","reading":"とびら","meaning":"cánh cửa","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.431"},{"id":432,"word":"井戸","reading":"いど","meaning":"giếng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.432"},{"id":433,"word":"お宮","reading":"おみや","meaning":"miếu, cung","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.433"},{"id":434,"word":"垣根","reading":"かきね","meaning":"hàng rào","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.434"},{"id":435,"word":"敷地","reading":"しきち","meaning":"nền đất, mặt bằng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.435"},{"id":436,"word":"踏切","reading":"ふみきり","meaning":"chắn đường tàu","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.436"},{"id":437,"word":"道端","reading":"みちばた","meaning":"ven đường, vệ đường","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.437"},{"id":438,"word":"縦","reading":"たて","meaning":"bề dọc, chiều dọc, chiều cao","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.438"},{"id":439,"word":"縁","reading":"ふち","meaning":"mép, lề, viền","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.439"},{"id":440,"word":"枠","reading":"わく","meaning":"khung, giá","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.440"},{"id":441,"word":"塊","reading":"かたまり","meaning":"cục, tảng, miếng (đá)","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.441"},{"id":442,"word":"斜め","reading":"ななめ","meaning":"nghiêng, chéo, xiên","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.442"},{"id":443,"word":"矢印","reading":"やじるし","meaning":"mũi tên chỉ hướng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.443"},{"id":444,"word":"蚊","reading":"か","meaning":"muỗi","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.444"},{"id":445,"word":"猿","reading":"さる","meaning":"khỉ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.445"},{"id":446,"word":"尾","reading":"お","meaning":"đuôi","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.446"},{"id":447,"word":"殻","reading":"から","meaning":"vỏ, lớp áo ngoài, trấu (gạo)","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.447"},{"id":448,"word":"角","reading":"つの","meaning":"sừng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.448"},{"id":449,"word":"翼","reading":"つばさ","meaning":"cánh, lá","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.449"},{"id":450,"word":"巣","reading":"す","meaning":"tổ (chim)","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.450"},{"id":451,"word":"雄","reading":"おす","meaning":"đực","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.451"},{"id":452,"word":"雌","reading":"めす","meaning":"cái","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.452"},{"id":453,"word":"獣","reading":"けもの","meaning":"loài thú, thú","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.453"},{"id":454,"word":"刃","reading":"は","meaning":"lưỡi (dao)","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.454"},{"id":455,"word":"矢","reading":"や","meaning":"mũi tên","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.455"},{"id":456,"word":"盾","reading":"たて","meaning":"khiên, mộc, tấm chắn","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.456"},{"id":457,"word":"弾","reading":"たま","meaning":"viên đạn","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.457"},{"id":458,"word":"的","reading":"まと","meaning":"cái đích, đối tượng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.458"},{"id":459,"word":"弓","reading":"ゆみ","meaning":"cung (tên)","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.459"},{"id":460,"word":"刀","reading":"かたな","meaning":"thanh kiếm, gươm","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.460"},{"id":461,"word":"鉛","reading":"なまり","meaning":"chì","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.461"},{"id":462,"word":"狩","reading":"かり","meaning":"cuộc đi săn","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.462"},{"id":463,"word":"獲物","reading":"えもの","meaning":"cuộc đi săn, thú săn được","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.463"},{"id":464,"word":"市","reading":"いち","meaning":"chợ phiên","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.464"},{"id":465,"word":"蔵","reading":"くら","meaning":"nhà kho, kho tàng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.465"},{"id":466,"word":"富","reading":"とみ","meaning":"của cải, tài sản, tài nguyên","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.466"},{"id":467,"word":"札","reading":"ふだ","meaning":"thẻ, nhãn","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.467"},{"id":468,"word":"値","reading":"あたい","meaning":"giá trị","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.468"},{"id":469,"word":"小銭","reading":"こぜに","meaning":"tiền lẻ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.469"},{"id":470,"word":"問屋","reading":"とんや","meaning":"hãng buôn bán, kho bán sỉ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.470"},{"id":471,"word":"残高","reading":"ざんだか","meaning":"số dư tk, sự cân đối (tài chính)","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.471"},{"id":472,"word":"お釣り","reading":"おつり","meaning":"tiền lẻ, tiền thừa","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.472"},{"id":473,"word":"小遣い","reading":"こづかい","meaning":"tiền tiêu vặt","pos":"い形容詞","source":"Kanzen Master 1級漢字リスト No.473"},{"id":474,"word":"喪","reading":"も","meaning":"quần áo tang, đồ tang","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.474"},{"id":475,"word":"技","reading":"わざ","meaning":"kỹ năng, kỹ nghệ, kỹ xảo","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.475"},{"id":476,"word":"暦","reading":"こよみ","meaning":"lịch","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.476"},{"id":477,"word":"公","reading":"おおやけ","meaning":"công cộng, công chúng, cái chung","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.477"},{"id":478,"word":"芝居","reading":"しばい","meaning":"kịch, mánh khoé, trò hề","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.478"},{"id":479,"word":"手際","reading":"てぎわ","meaning":"phương pháp, khả năng giải quyết công việc, tài nghệ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.479"},{"id":480,"word":"偽物","reading":"にせもの","meaning":"đồ giả","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.480"},{"id":481,"word":"夜更かし","reading":"よふかし","meaning":"sự thức khuya","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.481"},{"id":482,"word":"折","reading":"おり","meaning":"cơ hội, dịp","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.482"},{"id":483,"word":"暇","reading":"ひま","meaning":"rỗi, nhàn","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.483"},{"id":484,"word":"端","reading":"はし","meaning":"đầu (cầu, phố), cạnh, bờ","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.484"},{"id":485,"word":"隣","reading":"となり","meaning":"hàng xóm, lân cận, bên cạnh","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.485"},{"id":486,"word":"源","reading":"みなもと","meaning":"nguồn","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.486"},{"id":487,"word":"果て","reading":"はて","meaning":"sau cùng, cuối cùng, tận cùng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.487"},{"id":488,"word":"傍ら","reading":"かたわら","meaning":"bên cạnh, sát, trong khi","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.488"},{"id":489,"word":"延べ","reading":"のべ","meaning":"tổng cộng","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.489"},{"id":490,"word":"盛り","reading":"さかり","meaning":"đỉnh, thời kỳ hoàng kim","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.490"},{"id":491,"word":"兆し","reading":"きざし","meaning":"dấu hiệu, điềm báo","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.491"},{"id":492,"word":"半端","reading":"はんぱ","meaning":"chia lẻ, một nửa, không hoàn chỉnh","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.492"},{"id":493,"word":"影","reading":"かげ","meaning":"bóng, bóng hình","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.493"},{"id":494,"word":"陰","reading":"かげ","meaning":"bóng tối, sự u ám","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.494"},{"id":495,"word":"音","reading":"ね","meaning":"âm thanh","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.495"},{"id":496,"word":"趣","reading":"おもむき","meaning":"cảm giác, ấn tượng, sắc thái riêng, điểm mấu chốt","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.496"},{"id":497,"word":"初耳","reading":"はつみみ","meaning":"nghe lần đầu","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.497"},{"id":498,"word":"見晴らし","reading":"みはらし","meaning":"tầm nhìn, phong cảnh","pos":"名詞","source":"Kanzen Master 1級漢字リスト No.498"}];

/* ==========================================================================
   漢字マスター - 学習ロジック
   単語データ(WORDS)は本ファイル冒頭で定義済み。
   出典: Kanzen Master 1級漢字リスト（読み方・ベトナム語訳）
   このデータに存在しない単語・意味・例文は追加しない。
   ========================================================================== */

const STORAGE_KEY = 'kanjiMasterState_v1';
const STATE_LABELS = { unknown: '覚えていない', vague: 'あいまい', known: '覚えた', review: '要復習' };

/* ---------- 日付ユーティリティ ---------- */
function todayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function addDays(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

/* ---------- 永続化 ---------- */
function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.words && parsed.today) {
        if (!Array.isArray(parsed.sessionHistory)) parsed.sessionHistory = [];
        return parsed;
      }
    }
  } catch (e) { /* 破損データは初期化する */ }
  return { words: {}, today: { date: todayStr(), studied: [], correct: 0, total: 0 }, sessionHistory: [] };
}
let STORE = loadStore();
function saveStore() { localStorage.setItem(STORAGE_KEY, JSON.stringify(STORE)); }

/* 学習セッションの結果を記録する（次回開いたときに前回の結果を確認できるようにするため） */
function recordSessionResult(entry) {
  STORE.sessionHistory.unshift(Object.assign({ date: todayStr() }, entry));
  STORE.sessionHistory = STORE.sessionHistory.slice(0, 20);
  saveStore();
}

function ensureToday() {
  if (STORE.today.date !== todayStr()) {
    STORE.today = { date: todayStr(), studied: [], correct: 0, total: 0 };
    saveStore();
  }
}

function getWordState(id) {
  if (!STORE.words[id]) {
    STORE.words[id] = { mastery: 'unknown', needsReview: false, correct: 0, incorrect: 0, studyCount: 0, lastStudied: null, nextReview: null, lastType: null };
  }
  const st = STORE.words[id];
  if (st.mastery === undefined) {
    /* 旧バージョン（state一本化）からの移行 */
    st.mastery = st.state === 'review' ? 'unknown' : (st.state || 'unknown');
    st.needsReview = st.state === 'review';
    delete st.state;
  }
  return st;
}
function updateWordState(id, patch) {
  Object.assign(getWordState(id), patch);
  saveStore();
}
/* 学習状態の表示用ラベル：要復習フラグが立っていれば覚えた/あいまい/覚えていないより優先して表示する */
function displayState(st) { return st.needsReview ? 'review' : st.mastery; }
/* ユーザー自身が手動で学習状態を選ぶための唯一の入口（クイズの自動処理からは呼ばない） */
function setUserMastery(id, key) {
  const st = getWordState(id);
  if (key === 'review') {
    st.needsReview = true;
  } else {
    st.mastery = key;
    st.needsReview = false;
    if (key === 'known') st.nextReview = addDays(7);
    else if (key === 'vague') st.nextReview = addDays(1);
    else st.nextReview = todayStr();
  }
  saveStore();
}

/* ---------- 汎用ユーティリティ ---------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function stateLabel(s) { return STATE_LABELS[s] || s; }
function wordById(id) { return WORDS.find(w => w.id === id); }

/* ---------- スマート復習の優先度 ---------- */
function tierOf(st) {
  if (st.incorrect >= 2) return 1;
  if (st.mastery === 'unknown') return 2;
  if (st.mastery === 'vague') return 3;
  if (st.needsReview) return 4;
  return 5;
}
function buildQueue(ids, count, includeAllKnown) {
  const now = todayStr();
  let candidates = ids.filter(id => {
    const st = getWordState(id);
    if (displayState(st) === 'known' && !includeAllKnown) return !st.nextReview || st.nextReview <= now;
    return true;
  });
  if (candidates.length === 0) candidates = ids.slice();
  const groups = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  candidates.forEach(id => groups[tierOf(getWordState(id))].push(id));
  Object.keys(groups).forEach(k => { groups[k] = shuffle(groups[k]); });
  const ordered = [1, 2, 3, 4, 5].flatMap(t => groups[t]);
  const n = count && count > 0 ? Math.min(count, ordered.length) : ordered.length;
  return ordered.slice(0, n);
}

/* 今日の学習（新しい単語50% + あいまい25% + 間違えた単語25%、不足分は優先度順で補充）
   count を省略／0（すべて）の場合は配分せず全単語をスマート優先順で返す */
function buildTodayQueue(count) {
  const all = WORDS.map(w => w.id);
  if (!count) return buildQueue(all, 0);
  const newCount = Math.round(count * 0.5);
  const vagueCount = Math.round(count * 0.25);
  const wrongCount = Math.max(0, count - newCount - vagueCount);
  const newWords = all.filter(id => getWordState(id).studyCount === 0);
  const vague = all.filter(id => getWordState(id).mastery === 'vague');
  const wrong = all.filter(id => getWordState(id).needsReview);
  let picks = [];
  picks.push(...shuffle(newWords).slice(0, newCount));
  picks.push(...shuffle(vague).slice(0, vagueCount));
  picks.push(...shuffle(wrong).slice(0, wrongCount));
  picks = Array.from(new Set(picks));
  if (picks.length < count) {
    const rest = all.filter(id => !picks.includes(id));
    const need = count - picks.length;
    picks = picks.concat(buildQueue(rest, need));
  }
  return buildQueue(picks, picks.length);
}

/* ---------- 学習記録の更新 ----------
   覚えた／あいまい／覚えていない（mastery）はユーザーが手動でつける評価であり、
   クイズの正誤では自動的に変更しない（setUserMastery からのみ変更する）。
   クイズが自動で扱ってよいのは「要復習」フラグ（needsReview）と正解/不正解の回数だけ。 */
function recordQuizAnswer(id, isCorrect) {
  ensureToday();
  const st = getWordState(id);
  st.studyCount++;
  st.lastStudied = todayStr();
  if (isCorrect) {
    st.correct++;
    st.needsReview = false;
  } else {
    st.incorrect++;
    st.needsReview = true;
  }
  STORE.today.total++;
  if (isCorrect) STORE.today.correct++;
  if (!STORE.today.studied.includes(id)) STORE.today.studied.push(id);
  saveStore();
}
function recordFlashcardRating(id, newMastery) {
  ensureToday();
  const st = getWordState(id);
  st.studyCount++;
  st.lastStudied = todayStr();
  setUserMastery(id, newMastery);
  if (!STORE.today.studied.includes(id)) STORE.today.studied.push(id);
  saveStore();
}

/* ==========================================================================
   画面遷移
   ========================================================================== */
function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
  document.querySelectorAll('.tab-view').forEach(v => v.classList.toggle('active', v.id === 'tab-' + name));
  if (name === 'home') renderHome();
  if (name === 'quiz') updateQuizSetupLabel();
  if (name === 'flashcard' && !flashSession) renderFlashcardIntro();
  if (name === 'review') renderReviewGroups();
  if (name === 'list') renderWordList();
  if (name === 'history') renderHistory();
}

/* ==========================================================================
   ホーム
   ========================================================================== */
function renderHome() {
  ensureToday();
  const counts = { unknown: 0, vague: 0, known: 0, review: 0 };
  WORDS.forEach(w => { counts[displayState(getWordState(w.id))]++; });
  const total = WORDS.length;
  document.getElementById('stat-grid').innerHTML = `
    <div class="stat-card total"><div class="stat-num">${total}</div><div class="stat-label">総単語数</div></div>
    <div class="stat-card known"><div class="stat-num">${counts.known}</div><div class="stat-label">覚えた</div></div>
    <div class="stat-card vague"><div class="stat-num">${counts.vague}</div><div class="stat-label">あいまい</div></div>
    <div class="stat-card unknown"><div class="stat-num">${counts.unknown}</div><div class="stat-label">覚えていない</div></div>
    <div class="stat-card review"><div class="stat-num">${counts.review}</div><div class="stat-label">要復習</div></div>
  `;
  const pct = total ? Math.round((counts.known / total) * 100) : 0;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${counts.known} / ${total}語（${pct}%）`;
  const hasToday = STORE.today.total > 0;
  const acc = hasToday ? Math.round((STORE.today.correct / STORE.today.total) * 100) : null;
  document.getElementById('today-stats').innerHTML = `
    <p>今日勉強した単語：<strong>${STORE.today.studied.length}</strong>語</p>
    <p>今日の正答率：<strong>${acc === null ? 'ー' : acc + '%'}</strong></p>
  `;
  renderLastSession();
}

/* 前回・過去の学習セッション結果（次に開いたときに進み具合を確認できるように） */
function renderLastSession() {
  const box = document.getElementById('last-session-box');
  const history = STORE.sessionHistory || [];
  if (history.length === 0) {
    box.innerHTML = `<p class="hint">まだ学習記録がありません。クイズかフラッシュカードに挑戦してみましょう。</p>`;
    return;
  }
  const last = history[0];
  const lastLine = last.mode === 'quiz'
    ? `前回のクイズ（${last.date}）：${last.correct} / ${last.total}問正解（正答率 ${last.accuracy}%）`
    : `前回のフラッシュカード（${last.date}）：${last.count}枚を確認`;
  const recentList = history.slice(0, 5).map(h => {
    const line = h.mode === 'quiz'
      ? `クイズ ${h.correct}/${h.total}問（${h.accuracy}%）`
      : `フラッシュカード ${h.count}枚`;
    return `<li>${h.date}　${line}</li>`;
  }).join('');
  box.innerHTML = `
    <p class="last-session-line">${lastLine}</p>
    <details class="session-history-details">
      <summary>過去の学習記録を見る（最新${history.slice(0, 5).length}件）</summary>
      <ul class="session-history-list">${recentList}</ul>
    </details>
  `;
}

/* ==========================================================================
   クイズ
   ========================================================================== */
let quizSession = null;
let quizEntryMode = 'normal'; /* 'today' のときだけ出題数選択後に buildTodayQueue を使う */

function updateQuizSetupLabel() {
  const desc = document.getElementById('quiz-setup-desc');
  if (!desc) return;
  desc.textContent = quizEntryMode === 'today'
    ? '今日の学習：新しい単語・あいまいな単語・間違えた単語をバランスよく出題します。出題数を選んでください。'
    : '出題数を選んでください（優先度の高い単語から出題されます）';
}

function pickQuestionType(id) {
  const st = getWordState(id);
  const types = ['meaning', 'reading', 'word'];
  const avail = types.filter(t => t !== st.lastType);
  return avail[Math.floor(Math.random() * avail.length)];
}
function pickDistractors(field, correctValue, excludeId, count) {
  const pool = shuffle(WORDS.filter(w => w.id !== excludeId && w[field] !== correctValue));
  const result = [];
  const seen = new Set([correctValue]);
  for (const w of pool) {
    if (result.length >= count) break;
    if (seen.has(w[field])) continue;
    seen.add(w[field]);
    result.push(w[field]);
  }
  return result;
}

function startQuiz(pool, count) {
  const queueIds = buildQueue(pool, count);
  if (queueIds.length === 0) {
    alert('このグループには出題できる単語がありません。');
    return;
  }
  quizSession = {
    items: queueIds.map(id => ({ id, type: pickQuestionType(id), retries: 0 })),
    idx: 0, correct: 0, total: 0
  };
  document.getElementById('quiz-setup').classList.add('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-play').classList.remove('hidden');
  document.getElementById('app-header').classList.add('hidden');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const item = quizSession.items[quizSession.idx];
  const word = wordById(item.id);
  let questionText, field, correctValue;
  if (item.type === 'meaning') {
    questionText = `「${word.word}」（${word.reading}）の意味として最も適切なものはどれですか？`;
    field = 'meaning'; correctValue = word.meaning;
  } else if (item.type === 'reading') {
    questionText = `「${word.word}」の読み方として正しいものはどれですか？`;
    field = 'reading'; correctValue = word.reading;
  } else {
    questionText = `次の意味を表す単語はどれですか？　「${word.meaning}」`;
    field = 'word'; correctValue = word.word;
  }
  const options = shuffle([correctValue, ...pickDistractors(field, correctValue, word.id, 3)]);

  quizSession.currentCorrectIndex = options.indexOf(correctValue);
  quizSession.currentWord = word;
  quizSession.currentField = field;
  quizSession.currentType = item.type;

  document.getElementById('quiz-progress').textContent = `第${quizSession.idx + 1}問 / 全${quizSession.items.length}問`;
  document.getElementById('quiz-question').textContent = questionText;

  const letters = ['A', 'B', 'C', 'D'];
  const optDiv = document.getElementById('quiz-options');
  optDiv.classList.remove('hidden');
  optDiv.innerHTML = '';
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${escapeHtml(opt)}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    optDiv.appendChild(btn);
  });
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-next-btn').classList.add('hidden');
}

function selectAnswer(i) {
  if (quizSession.answered) return;
  quizSession.answered = true;
  const word = quizSession.currentWord;
  const isCorrect = i === quizSession.currentCorrectIndex;
  quizSession.total++;
  if (isCorrect) quizSession.correct++;

  recordQuizAnswer(word.id, isCorrect);
  updateWordState(word.id, { lastType: quizSession.currentType });

  const letters = ['A', 'B', 'C', 'D'];
  const optionButtons = document.querySelectorAll('#quiz-options .option-btn');
  const selectedText = optionButtons[i] ? optionButtons[i].querySelector('.opt-text').textContent : '';
  /* 選択肢はどれだけ長い文章でも、回答後は画面から消して縦スペースを確保する */
  document.getElementById('quiz-options').classList.add('hidden');

  const correctText = quizSession.currentField === 'reading' ? word.reading
    : quizSession.currentField === 'word' ? word.word : word.meaning;
  const yourAnswerLine = isCorrect ? '' : `<p><strong>あなたの回答：</strong>${letters[i]}. ${escapeHtml(selectedText)}</p>`;
  document.getElementById('quiz-feedback').classList.remove('hidden');
  document.getElementById('quiz-feedback').innerHTML = `
    <p class="result-line ${isCorrect ? 'correct-text' : 'incorrect-text'}">${isCorrect ? '○ 正解！' : '× 不正解'}</p>
    ${yourAnswerLine}
    <p><strong>正しい答え：</strong>${letters[quizSession.currentCorrectIndex]}. ${escapeHtml(correctText)}</p>
    <p><strong>単語：</strong>${escapeHtml(word.word)}（${escapeHtml(word.reading)}）</p>
    <p><strong>意味：</strong>${escapeHtml(word.meaning)}</p>
    <p><strong>品詞（参考）：</strong>${escapeHtml(word.pos || '―')}　<span class="muted-note">※例文なし</span></p>
    <p><strong>出典：</strong>${escapeHtml(word.source)}</p>
  `;

  const currentItem = quizSession.items[quizSession.idx];
  if (!isCorrect && currentItem.retries < 2) {
    const otherTypes = ['meaning', 'reading', 'word'].filter(t => t !== quizSession.currentType);
    const nextType = otherTypes[Math.floor(Math.random() * otherTypes.length)];
    const insertPos = Math.min(quizSession.items.length, quizSession.idx + 3 + Math.floor(Math.random() * 3));
    quizSession.items.splice(insertPos, 0, { id: word.id, type: nextType, retries: currentItem.retries + 1 });
  }
  document.getElementById('quiz-next-btn').classList.remove('hidden');
}

function nextQuizQuestion() {
  quizSession.answered = false;
  quizSession.idx++;
  if (quizSession.idx >= quizSession.items.length) showQuizResult();
  else renderQuizQuestion();
}
function showQuizResult() {
  document.getElementById('quiz-play').classList.add('hidden');
  document.getElementById('app-header').classList.remove('hidden');
  const acc = quizSession.total ? Math.round((quizSession.correct / quizSession.total) * 100) : 0;
  const res = document.getElementById('quiz-result');
  res.classList.remove('hidden');
  res.innerHTML = `
    <h3>クイズ結果</h3>
    <p>正解数：${quizSession.correct} / ${quizSession.total}問（正答率 ${acc}%）</p>
    <button id="quiz-restart-btn" class="primary-btn">クイズ選択に戻る</button>
  `;
  document.getElementById('quiz-restart-btn').addEventListener('click', () => {
    res.classList.add('hidden');
    document.getElementById('quiz-setup').classList.remove('hidden');
  });
  recordSessionResult({ mode: 'quiz', correct: quizSession.correct, total: quizSession.total, accuracy: acc });
  renderHome();
}
function quitQuiz() {
  quizSession = null;
  document.getElementById('quiz-play').classList.add('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-setup').classList.remove('hidden');
  document.getElementById('app-header').classList.remove('hidden');
  renderHome();
}

/* ==========================================================================
   フラッシュカード
   ========================================================================== */
let flashSession = null;
let mistakePool = [];

/* フラッシュカードは「これまでに一度でも間違えた単語」だけを集めたコレクション */
function buildMistakePool() {
  return WORDS.filter(w => getWordState(w.id).incorrect > 0).map(w => w.id);
}
function renderFlashcardIntro() {
  document.getElementById('flashcard-play').classList.add('hidden');
  document.getElementById('flashcard-result').classList.add('hidden');
  document.getElementById('flashcard-intro').classList.remove('hidden');
  mistakePool = buildMistakePool();
  const count = mistakePool.length;
  document.getElementById('flashcard-count-text').textContent = `間違えた単語：${count}語`;
  document.getElementById('flashcard-start-btn').classList.toggle('hidden', count === 0);
  document.getElementById('flashcard-empty-msg').classList.toggle('hidden', count > 0);
}
function startFlashcards(pool, count, includeAllKnown) {
  const ids = buildQueue(pool, count, includeAllKnown);
  if (ids.length === 0) {
    alert('このグループには出題できる単語がありません。');
    return;
  }
  flashSession = { ids, idx: 0, flipped: false };
  document.getElementById('flashcard-intro').classList.add('hidden');
  document.getElementById('flashcard-result').classList.add('hidden');
  document.getElementById('flashcard-play').classList.remove('hidden');
  renderFlashcard();
}
function renderFlashcard() {
  const word = wordById(flashSession.ids[flashSession.idx]);
  flashSession.flipped = false;
  document.getElementById('flash-progress').textContent = `第${flashSession.idx + 1}枚 / 全${flashSession.ids.length}枚`;
  document.getElementById('flashcard-front').innerHTML = `<div class="fc-word">${escapeHtml(word.word)}</div>`;
  document.getElementById('flashcard-back').classList.add('hidden');
  document.getElementById('flashcard-back').innerHTML = `
    <p><strong>読み方（ふりがな）：</strong>${escapeHtml(word.reading)}</p>
    <p><strong>意味：</strong>${escapeHtml(word.meaning)}</p>
    <p><strong>出典：</strong>${escapeHtml(word.source)}</p>
  `;
  document.getElementById('flip-hint').classList.remove('hidden');
  document.getElementById('flash-buttons').classList.add('hidden');
}
function flipFlashcard() {
  if (!flashSession || flashSession.flipped) return;
  flashSession.flipped = true;
  document.getElementById('flashcard-back').classList.remove('hidden');
  document.getElementById('flip-hint').classList.add('hidden');
  document.getElementById('flash-buttons').classList.remove('hidden');
}
function rateFlashcard(newState) {
  const wordId = flashSession.ids[flashSession.idx];
  recordFlashcardRating(wordId, newState);
  flashSession.idx++;
  if (flashSession.idx >= flashSession.ids.length) showFlashResult();
  else renderFlashcard();
}
function showFlashResult() {
  document.getElementById('flashcard-play').classList.add('hidden');
  const res = document.getElementById('flashcard-result');
  res.classList.remove('hidden');
  res.innerHTML = `
    <h3>お疲れさまでした</h3>
    <p>${flashSession.ids.length}枚のカードを確認しました。</p>
    <button id="flash-restart-btn" class="primary-btn">間違えた単語カードに戻る</button>
  `;
  document.getElementById('flash-restart-btn').addEventListener('click', renderFlashcardIntro);
  recordSessionResult({ mode: 'flashcard', count: flashSession.ids.length });
  renderHome();
}
function quitFlashcards() {
  flashSession = null;
  renderFlashcardIntro();
  renderHome();
}

/* ==========================================================================
   復習
   ========================================================================== */
let selectedReviewGroup = null;

function renderReviewGroups() {
  const groups = [
    { key: 'review', label: '間違えた単語（要復習）' },
    { key: 'unknown', label: '覚えていない単語' },
    { key: 'vague', label: 'あいまいな単語' },
    { key: 'known', label: '覚えた単語' },
    { key: 'all', label: 'すべての単語' }
  ];
  const container = document.getElementById('review-groups');
  container.innerHTML = '';
  groups.forEach(g => {
    const ids = g.key === 'all' ? WORDS.map(w => w.id) : WORDS.filter(w => displayState(getWordState(w.id)) === g.key).map(w => w.id);
    const btn = document.createElement('button');
    btn.className = 'review-group-btn rg-' + g.key;
    btn.innerHTML = `<span class="rg-label">${g.label}</span><span class="rg-count">${ids.length}語</span>`;
    btn.addEventListener('click', () => selectReviewGroup(g.key, g.label, ids));
    container.appendChild(btn);
  });
  document.getElementById('review-actions').classList.add('hidden');
}
function selectReviewGroup(key, label, ids) {
  selectedReviewGroup = { key, label, ids };
  document.querySelectorAll('.review-group-btn').forEach(b => b.classList.toggle('active', b.classList.contains('rg-' + key)));
  document.getElementById('review-group-label').textContent = `${label}（${ids.length}語）`;
  document.getElementById('review-actions').classList.remove('hidden');
}
function reviewWithQuiz() {
  if (!selectedReviewGroup || selectedReviewGroup.ids.length === 0) return;
  switchTab('quiz');
  startQuiz(selectedReviewGroup.ids, 0);
}
function reviewWithFlashcards() {
  if (!selectedReviewGroup || selectedReviewGroup.ids.length === 0) return;
  switchTab('flashcard');
  startFlashcards(selectedReviewGroup.ids, 0);
}

/* ==========================================================================
   単語一覧
   ========================================================================== */
let currentFilter = 'all';
let currentSearch = '';

function renderFilterRow() {
  const filters = [
    { key: 'all', label: 'すべて' },
    { key: 'known', label: '覚えた' },
    { key: 'vague', label: 'あいまい' },
    { key: 'unknown', label: '覚えていない' },
    { key: 'review', label: '要復習' }
  ];
  const row = document.getElementById('filter-row');
  row.innerHTML = '';
  filters.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (currentFilter === f.key ? ' active' : '');
    btn.textContent = f.label;
    btn.addEventListener('click', () => {
      currentFilter = f.key;
      renderFilterRow();
      renderWordList();
    });
    row.appendChild(btn);
  });
}
function renderWordList() {
  const tbody = document.querySelector('#word-table tbody');
  tbody.innerHTML = '';
  const q = currentSearch.trim().toLowerCase();
  const filtered = WORDS.filter(w => {
    const st = displayState(getWordState(w.id));
    if (currentFilter !== 'all' && st !== currentFilter) return false;
    if (!q) return true;
    return w.word.toLowerCase().includes(q) || w.reading.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q);
  });
  document.getElementById('list-count').textContent = `${filtered.length}件`;
  filtered.forEach(w => {
    const ds = displayState(getWordState(w.id));
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${escapeHtml(w.word)}</td><td>${escapeHtml(w.reading)}</td><td>${escapeHtml(w.meaning)}</td>
      <td><span class="badge badge-${ds}">${stateLabel(ds)}</span></td>`;
    tr.addEventListener('click', () => showWordDetail(w.id));
    tbody.appendChild(tr);
  });
}
function showWordDetail(id) {
  const w = wordById(id);
  const st = getWordState(id);
  const panel = document.getElementById('word-detail');
  panel.classList.remove('hidden');
  panel.innerHTML = `
    <h3>${escapeHtml(w.word)}（${escapeHtml(w.reading)}）</h3>
    <p><strong>意味：</strong>${escapeHtml(w.meaning)}</p>
    <p><strong>品詞（語形からの自動分類・参考）：</strong>${escapeHtml(w.pos || '―')}</p>
    <p><strong>出典：</strong>${escapeHtml(w.source)}</p>
    <p><strong>学習状態を変更：</strong></p>
    <div class="state-btn-row" id="detail-state-buttons"></div>
    <button id="close-detail-btn" class="secondary-btn">閉じる</button>
  `;
  const pairs = [['unknown', '覚えていない'], ['vague', 'あいまい'], ['known', '覚えた'], ['review', '要復習']];
  const currentDisplay = displayState(st);
  const row = document.getElementById('detail-state-buttons');
  pairs.forEach(([key, label]) => {
    const b = document.createElement('button');
    b.className = 'state-choice-btn' + (currentDisplay === key ? ' active' : '');
    b.textContent = label;
    b.addEventListener('click', () => {
      setUserMastery(id, key);
      renderWordList();
      renderHome();
      showWordDetail(id);
    });
    row.appendChild(b);
  });
  document.getElementById('close-detail-btn').addEventListener('click', () => panel.classList.add('hidden'));
}

/* ==========================================================================
   学習履歴
   ========================================================================== */
function renderHistory() {
  const tbody = document.querySelector('#history-table tbody');
  tbody.innerHTML = '';
  const q = (document.getElementById('history-search').value || '').trim().toLowerCase();
  let rows = WORDS.map(w => {
    const st = getWordState(w.id);
    const total = st.correct + st.incorrect;
    const rate = total ? Math.round((st.correct / total) * 100) : null;
    return { w, st, rate, total };
  });
  if (q) {
    rows = rows.filter(r => r.w.word.toLowerCase().includes(q) || r.w.reading.toLowerCase().includes(q) || r.w.meaning.toLowerCase().includes(q));
  }
  const sortMode = document.getElementById('history-sort').value;
  if (sortMode === 'weak') rows.sort((a, b) => (a.rate === null ? -1 : a.rate) - (b.rate === null ? -1 : b.rate) || b.st.incorrect - a.st.incorrect);
  else if (sortMode === 'recent') rows.sort((a, b) => (b.st.lastStudied || '').localeCompare(a.st.lastStudied || ''));
  else if (sortMode === 'studyCount') rows.sort((a, b) => b.st.studyCount - a.st.studyCount);

  document.getElementById('history-count').textContent = `${rows.length}件`;
  rows.forEach(({ w, st, rate }) => {
    const ds = displayState(st);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${escapeHtml(w.word)}（${escapeHtml(w.reading)}）</td>
      <td>${st.studyCount}</td><td>${st.correct}</td><td>${st.incorrect}</td>
      <td>${rate === null ? '―' : rate + '%'}</td><td>${st.lastStudied || '―'}</td>
      <td><span class="badge badge-${ds}">${stateLabel(ds)}</span></td>`;
    tbody.appendChild(tr);
  });
}

/* ==========================================================================
   初期化
   ========================================================================== */
function init() {
  ensureToday();

  document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.tab === 'quiz') quizEntryMode = 'normal';
    switchTab(b.dataset.tab);
  }));

  document.getElementById('start-today-btn').addEventListener('click', () => {
    quizEntryMode = 'today';
    document.getElementById('quiz-play').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-setup').classList.remove('hidden');
    switchTab('quiz');
  });

  document.querySelectorAll('#quiz-setup .count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const count = parseInt(btn.dataset.count, 10) || 0;
      const pool = quizEntryMode === 'today' ? buildTodayQueue(count) : WORDS.map(w => w.id);
      startQuiz(pool, count);
      quizEntryMode = 'normal';
    });
  });
  document.getElementById('quiz-next-btn').addEventListener('click', nextQuizQuestion);
  document.getElementById('quiz-quit-btn').addEventListener('click', quitQuiz);

  document.getElementById('flashcard-start-btn').addEventListener('click', () => {
    startFlashcards(mistakePool, 0, true);
  });
  document.getElementById('flashcard').addEventListener('click', flipFlashcard);
  document.querySelectorAll('#flash-buttons button').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); rateFlashcard(btn.dataset.state); });
  });
  document.getElementById('flashcard-quit-btn').addEventListener('click', quitFlashcards);

  document.getElementById('review-quiz-btn').addEventListener('click', reviewWithQuiz);
  document.getElementById('review-flash-btn').addEventListener('click', reviewWithFlashcards);

  renderFilterRow();
  document.getElementById('search-input').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderWordList();
  });

  document.getElementById('history-search').addEventListener('input', renderHistory);
  document.getElementById('history-sort').addEventListener('change', renderHistory);

  switchTab('home');
}

document.addEventListener('DOMContentLoaded', init);
