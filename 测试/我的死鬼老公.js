var storyContent = ﻿{"inkVersion":20,"root":[["^6月14日 15:39","\n","^高级检察官办公室1202","\n","^这是一个平凡的不能再平凡的工作日。","\n","^御剑怜侍，最有希望继任局长的优秀检察官，正在整理最近一起案件的卷宗，其中有几份等着他签字，还有几份需要退回给亚内武文重新整理。","\n","^真是一如既往繁忙的工作日......好在现在是下午茶时间。","\n",{"->":"office"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"office":[[["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop",{"->":".^.^.23"},null],"s1":["pop","^ ",{"->":".^.^.23"},null],"s2":["pop","^————“咚、咚、咚” 门外传来了有规律的敲门声。 ",{"->":"Gumshoe_Trucy"},{"->":".^.^.23"},null],"#f":5}],"\n","ev","str","^只是品茶","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^看卷宗","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^看今天的报纸","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ ",{"->":"tea"},"\n",{"#f":5}],"c-1":["^ ",{"->":"case1"},"\n",{"#f":5}],"c-2":["^ ",{"->":"newspaper"},"\n",{"#f":5}]}],{"#f":1}],"tea":[["^今天的空气无比潮湿，红茶冒出的热蒸汽打在脸上，御剑感觉自己的领巾都要变得湿湿嗒嗒的了。","\n","^此时一道闪电从窗外闪过，瞬间照亮了整个房间，在强光的照耀下，茶杯里映出御剑疲惫的双眼。","\n","^轰鸣的雷声紧接着到来，御剑把红茶一饮而尽，大雨终于倾盆而下。","\n","^一定是因为下雨天太适合睡觉了，御剑躺在尺寸并不适合的沙发上舒展自己的脖子和肩膀，那个男人不止一次把他描述成一只喜欢强行钻进小纸箱的大猫。","\n","^蜷缩的睡姿不够舒适，但在如潮水一般的困意面前也不算什么。御剑感觉自己被投入一片宁静的水中，空气里过饱和的水汽沉甸甸地压在他身上。","\n",["ev",{"^->":"tea.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^不能睡......还有工作没有做完! ",{"->":"$r","var":true},null]}],"ev","str","^......","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"tea.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"->":"office"},"\n",{"#f":5}],"c-1":["^ ",{"->":"tea.tea1"},"\n",{"#f":5}]}],{"tea1":["^直到当天晚上，御剑才从睡梦中苏醒。","\n","^窗外的雨还在下，考虑到PESS正在家里挨饿，御剑只好匆匆抓起一叠急需处理的文件，把那堆沉重的纸一股脑塞进公文包。","\n","^路过警卫室时，零木真子告诉他今天下午糸锯刑警曾带着一个小女孩去他的办公室，可惜御剑没有听到敲门声，最后糸锯刑警把小女孩送回了家。","\n","^御剑对此感到抱歉，一丝异样从他心里升起，但他没有多余的时间深思这件事，任由自己的疑虑滑向黑暗之中。","\n","^裹紧外衣，快步来到地下车库，扎眼的红色跑车独自驶向大雨中空旷的街道。","\n",{"->":"ending.miss"},{"#f":1}],"#f":1}],"case1":["^御剑以对待工作格外认真严肃的作风在地方检察厅闻名遐迩，休息时间也不例外，毕竟合理利用时间是提高工作效率的关键。在喝茶的同时，御剑翻阅起其中一份卷宗。","\n","^【 --地方检察厅","\n","^起诉书〔20220364）","\n","^被告人长谷川忠一，男，1972年生人，中学毕业，系国立勇盟大学校工。2022年6月13日因持刀伤人被批准逮捕。辩护律师里村友惠，牙琉律师事务所见习律师。","\n","^本案由警视厅侦查结束，以被告人涉嫌故意伤害罪，于当日移送起诉。现已告知被告人有权委托辩护人，告知了被告人认罪认罚可能导致的法律后果，按照辩方律师的意见，审查了全部案件材料。","\n","^2023年6月13日7时许，被告人长谷川忠一持斧头在教学楼内砍伤十余名学生，其中三人当场死亡。据长谷川的妻子证词，被告人前一天没有回家，与以往习惯并不相同。学校学生曾在6月12日晚目击到被告人在校图书馆闭馆时仍不愿意离去，并且与管理员爆发了激烈的争吵。该管理员已于6月13日确认溺毙于图书馆卫生间马桶内，已进行并案处理。被告人被逮捕后神志不清，无法正常回答审问，经鉴定为重度精神分裂症患者。被告人的上司证言被告人曾是一位热心负责任的下属。相识的好友也认可他的为人。导致精神疾病的原因有待进一步调查。","\n","^认定上述事实的证据如下:","\n","^1.凶器斧头上沾有被害人血迹和被告人的指纹，且凶器来源于校工休息室的工具箱","\n","^2.被害管理员指甲内发现了被告的皮肤组织","\n","^3.被告人被逮捕时嘴里有撕下的一块书页，材质经鉴定为人皮","\n","^4.案发时教学楼内监控记录了犯罪过程","\n","^此致","\n","^裁判所","\n","^检察官亚内武文 】","\n","^唉......","\n","^御剑眉头紧锁，最近这样动机不明的案件有增多的趋势，虽然证据都很充足，一定可以拿到有罪判决，但相似的案件井喷式爆发总令人感到不安。","\n","^是不是应该让糸锯刑警去着手调查一下呢？","\n","^御剑在卷宗上签下自己的名字。","\n",{"->":"office"},{"#f":1}],"newspaper":["^早上上班时，御剑顺手把送到家里的报纸带在了身上。既然决定要休息，不妨关心一下最近发生的新闻。","\n","^今天的头条新闻是.....","\n",{"->":".^.newspaper00"},{"newspaper00":[["^【震惊！你不可不知的司法界秘密——首次深度揭秘史上最强魔鬼检事！！！！","\n","^（记者大泽木夏实）据悉，日前地检内部的派系斗争严重，随着上一任局长的离任，检察厅即将迎来新一届的领导人，一度被称为天才检事和魔鬼检事的高级检察官御剑怜侍是颇受关注的候选人之一。尽管在他从事检察官工作的七年中创下了很好的成绩，不论是作为“出道之作”的SL-9号事件，还是近年协助调查的总统遇刺案都得到了司法界人士和大众的认可。","\n","^但如此精美的履历真的没有伪造的成分吗？","\n","^据业内人士星*宇宙*介先生所言：每次在法庭上看到那孩子都会感到屁股很痛！","\n","^同时，御剑检察官也一直被伪证丑闻缠身，还有消息说看到他私下和辩护律师接触......】","\n","^御剑满脸疑惑地阅读这篇报道，看到中间的段落时还还差点把红茶洒在报纸上。","\n","^什么嘛，这根本不是自己订的法治日报，而是不知道哪个无良送报员塞进信箱的八卦小报！","\n",["ev",{"^->":"newspaper.newspaper00.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^看这种无意义的八卦报纸就是浪费时间! ",{"->":"$r","var":true},null]}],"ev","str","^看下一篇","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^继续看这一篇","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["ev",{"^->":"newspaper.newspaper00.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],{"->":"office"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.newspaper1"},"\n",{"#f":5}],"c-2":["^ ",{"->":".^.^.^.^.newspaper0"},"\n",{"#f":5}]}],{"#f":1}],"newspaper0":["^御剑才不要继续看那个关西记者对自己的无聊抹黑呢，虽然他不在意别人怎么评价自己，但只有他自己知道他现在多想为自己找一个律师。无论如何，御剑的手捏紧了自己的茶杯，出于某种好奇心，他决定翻过这一页，看一看下一篇是什么。","\n",{"->":".^.^.newspaper1"},{"#f":1}],"newspaper1":[["^【广告：Bienvenue！吐丽美庵餐厅促销中，向店长朗诵法语情诗可以获得最高30%的折扣！】","\n","^这个餐厅.....。御剑记得那个男人曾经告诉自己很难吃，检察厅的警卫零木真子之前似乎在那里打工，在这样难吃还有猥琐大叔出没的餐厅打工真是太不幸了，御剑决定在日后的工资评定中放她一马。（如果她不会再犯错的话）","\n",["ev",{"^->":"newspaper.newspaper1.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^看这种无意义的八卦报纸就是浪费时间! ",{"->":"$r","var":true},null]}],"ev","str","^上一篇","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^下一篇","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["ev",{"^->":"newspaper.newspaper1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"office"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.newspaper00"},"\n",{"#f":5}],"c-2":["^ ",{"->":".^.^.^.^.newspaper2"},"\n",{"#f":5}]}],{"#f":1}],"newspaper2":[["^【前知名特摄明星王都楼真悟即将执行死刑，粉丝不满判决在法院门前聚众抗议】","\n","^这种抗议要是能成功，这个国家的司法制度才是真的完蛋了。","\n","^御剑喝了一口红茶。","\n",["ev",{"^->":"newspaper.newspaper2.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^看这种无意义的八卦报纸就是浪费时间! ",{"->":"$r","var":true},null]}],"ev","str","^上一篇","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^下一篇","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["ev",{"^->":"newspaper.newspaper2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"office"},"\n",{"#f":5}],"c-1":[{"->":".^.^.^.^.newspaper1"},"\n",{"#f":5}],"c-2":[{"->":".^.^.^.^.newspaper3"},"\n",{"#f":5}]}],{"#f":1}],"newspaper3":[["^【广告：成步堂演艺事务所魔术表演将在6月14日在人情公园展开演出！","\n","^配图是一个带着礼帽穿着斗篷的小女孩和一个怪异的木头人】","\n","^成步堂......御剑确信这张图片属于自己多年的挚友成步堂龙一的养女成步堂美贯。他们已经有好几年没见面了，联系也只限于逢年过节时嘘寒问暖的客套短信，就连他收养了一个女儿的事情还是负责那起案件的同事告诉御剑的。","\n","^御剑知道成步堂有自己的苦衷，他总是愿意信任成步堂的......但这不代表他认为成步堂可以让小女儿出去卖艺！","\n","^报纸的一角写着事务所的联络电话，和成步堂的私人电话号码不一样，应该是专用的座机，御剑撕下了这一角。","\n","^获得了[成步堂演艺事务所的联系电话]","\n",["ev",{"^->":"newspaper.newspaper3.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^看这种无意义的八卦报纸就是浪费时间! ",{"->":"$r","var":true},null]}],["ev",{"^->":"newspaper.newspaper3.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^上一篇 ",{"->":"$r","var":true},null]}],["ev",{"^->":"newspaper.newspaper3.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^下一篇 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"newspaper.newspaper3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"->":"office"},"\n",{"#f":5}],"c-1":["ev",{"^->":"newspaper.newspaper3.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],{"->":".^.^.^.^.newspaper2"},"\n",{"#f":5}],"c-2":["ev",{"^->":"newspaper.newspaper3.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],{"->":".^.^.^.^.newspaper4"},"\n",{"#f":5}]}],{"#f":1}],"newspaper4":[["^【大将军系列......】","\n","^后边的内容被一张贴纸粘住了。","\n","^【我们在海中的--（被雨水晕染，已经无法看清了），愿你的名受显扬，愿你的国来临。】","\n","^贴纸下方绘制了一颗诡异的头颅，御剑对生物学的掌握的并不多，他想，也许这是一只章鱼？但对章鱼而言，那双泛白的眼睛是不是长在错误的地方了？不对......他或许根本就不是章鱼，更大的可能是这幅图整个都是错误的。","\n","^不是章鱼的话是什么呢？御剑感到一阵毛骨悚然。","\n","^获得了线索[地下宗教的宣传贴纸]","\n","ev","str","^合上报纸","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^上一篇","/str","/ev",{"*":".^.c-1","flg":4},["ev",{"^->":"newspaper.newspaper4.0.24.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^试着揭开贴纸看看被遮住的新闻",{"->":"$r","var":true},null]}],{"c-0":[{"->":"office"},"\n",{"#f":5}],"c-1":[{"->":".^.^.^.^.newspaper3"},"\n",{"#f":5}],"c-2":["ev",{"^->":"newspaper.newspaper4.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.24.s"},[{"#n":"$r2"}],{"->":".^.^.^.^.newspaper5"},"\n",{"#f":5}]}],{"#f":1}],"newspaper5":["^，御剑对大将军系列的新闻感到好奇，他决定忽略那张让人感到不安的贴纸。可贴纸实在过于牢固，在御剑撕扯的时候，一点黑色的胶水粘到了他的手上，他的手指传来一阵尖锐的刺痛，御剑不得不放弃了探求这条新闻。","\n","^手指受伤了。","\n",{"->":"office"},{"#f":1}],"#f":1}],"Gumshoe_Trucy":["^“请进！”","\n",{"->":".^.Gumshoe_Trucy_talk"},{"Gumshoe_Trucy_talk":[["^糸锯圭介推门进来，御剑记得自己并没有叫他来，难道是这个不靠谱的刑警又犯了什么错，或者是又发生了案件，不论是前者还是后者，都让御剑感到头疼。","\n","^在御剑发作之前，糸锯的身后跳出一个浑身湿透的小姑娘。","\n","^御剑感到诧异。","\n",["ev",{"^->":"Gumshoe_Trucy.Gumshoe_Trucy_talk.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“糸锯刑警，你最好解释一下这是怎么回事。”",{"->":"$r","var":true},null]}],["ev",{"^->":"Gumshoe_Trucy.Gumshoe_Trucy_talk.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"newspaper.newspaper3"},"/ev",{"*":".^.^.c-1","flg":3},{"s":["^“美贯......?”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Gumshoe_Trucy.Gumshoe_Trucy_talk.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"ending.test"},{"#f":5}],"c-1":["ev",{"^->":"Gumshoe_Trucy.Gumshoe_Trucy_talk.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"ending.test"},{"#f":5}]}],{"#f":1}],"#f":1}],"ending":[{"->":".^.miss"},{"miss":["^一个月后，御剑再一次见到了糸锯刑警和那个小女孩。","\n","^成步堂美贯，这是御剑第一次见到成步堂的女儿，她此时正拉着御剑的衣角，带来了一个令人难过的消息：","\n","^成步堂龙一在昨天死于车祸。","\n","^御剑已经很久没有和成步堂联系了，好友的面容定格在三年前他们最后一次并肩作战，对于他的死，御剑感到一阵难以言喻的痛苦，这种感受与父亲的死、狩魔豪的死带给他的感受都截然不同。","\n","^他喉咙发紧，张开嘴也说不出一句完整的话，只好沉默地为美贯擦去眼泪。","\n","^又是一个下雨天。","\n","^最终，御剑以朋友的身份参加了葬礼。成步堂的尸体在车轮下变得四分五裂，脑袋以下的部分被白布覆盖着，透过透明的棺盖，成步堂那张和记忆中改变了许多的脸合着眼睛，御剑用手抚摸过棺盖————他在心里默默计算，自己可能需要三年或者更多的时间去消化好友的死亡。","\n","^众人默哀时，惊雷落下，电灯霎时熄灭，哀乐声也戛然而止。","\n","^人们仍保持着沉默，空气在灵堂里凝固，巨大的阴影盘踞在人群之上，御剑感到自己的心跳越来越快，他的耳朵里充斥着心跳的回音。但依旧无法盖过棺材里传出的敲击声。","\n","^“那是什么......？”","\n","end",{"#f":1}],"test":["^先做到这里吧~~~~~~要写的东西原来有这么多。","\n","end",{"#f":1}],"#f":1}],"#f":1}],"listDefs":{}};