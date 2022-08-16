import React from 'react';
import './App.css';
import Hero from './components/hero';

const heroes =[
  {
    url: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
    name: "Бэтмен",
    universe: "DC Comics",
    alter_ego: "Брюс Уэйн",
    type_of_activity: "Борец с преступностью, филантроп, миллиардер",
    friends: "Робин, Бэтгерл",
    superpowers: "Интеллект, обширные познания, знания боевых искусств, ловкость",
    more_detailed: "Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году."
},{
    url: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
    name: "Супермен",
    universe: "DC Comics",
    alter_ego: "Кларк Кент",
    type_of_activity: "Борец за справедливость", 
    friends: "Собака Крипто", 
    superpowers: "Непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    more_detailed: "Полная противоположность своему противнику Бэтмену. Супермен родился героем, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
},{
    url: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
    name: "Железный человек",
    universe: "Marvel Comics",
    alter_ego: "Тони Старк",
    type_of_activity: "Гений, миллиардер, плейбой, филантроп",
    friends: "Мстители",
    superpowers: "Высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    more_detailed: "Пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз.Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета."
},{
    url: "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
    name: "Спайдер-мен/Человек-паук",
    universe: "Marvel Comics",
    alter_ego: "Питер Паркер",
    type_of_activity: "Борец за справедливость, студент, фотограф",
    friends: "Мстители, Фантастическая четверка, Люди Икс",
    superpowers: "Сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    more_detailed: "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность». Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание. "
},{
    url: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
    name: "Капитан Америка",
    universe: "Marvel Comics",
    alter_ego: "Стивен Роджерс",
    type_of_activity: "Супер-солдат",
    friends: "Мстители",
    superpowers: "Сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    more_detailed: "В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Роджерс превратился из хилого юноши в настоящего Аполлона."
},{
    url: "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
    name: "Тор",
    universe: "Marvel Comics",
    alter_ego: "нет; полное имя — Тор Одинсон",
    type_of_activity: "Борец за справедливость, скандинавский бог",
    friends: "Мстители",
    superpowers: "Все, что может бог, плюс молот Мьелнир",
    more_detailed: "Персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений."
},{
    url: "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
    name: "Халк",
    universe: "Marvel Comics",
    alter_ego: "Брюс Беннер",
    type_of_activity: "Супергерой, борец за справедливость, ученый-биохимик",
    friends: "Мстители",
    superpowers: "Сверхчеловеческая сила искорость, выносливость, полет",
    more_detailed: "Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев. Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках."
},{
    url: "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
    name: "Чудо-женщина",
    universe: "DC Comics",
    alter_ego: "Диана Принс",
    type_of_activity: "Супергероиня, секретарь-референт",
    friends: "Лига Справедливости, Бэтмен, Супермен",
    superpowers: "Сверхчеловеческая сила искорость, выносливость, полет",
    more_detailed: "Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром."
},{
    url: "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
    name: "Черная вдова",
    universe: "Marvel Comics",
    alter_ego: "Наташа Романофф",
    type_of_activity: "Супергероиня, шпионка",
    friends: "Мстители",
    superpowers: "Пик человеческого физического потенциала, замедленное старение, знание многих языков",
    more_detailed: "Супергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы. Там же ей вживили сыворотку Суперсолдата — как у Капитана Америки, но в советском варианте. Благодаря ей Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка дает эффект замедленного старения."
},{
    url: "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg",
    name: "Дэдпул",
    universe: "Marvel Comics",
    alter_ego: "Уэйд Уинстон Уилсон",
    type_of_activity: "Антигерой, наемник",
    friends: "Частично Мстители, Человек-паук, Росомаха",
    superpowers: "Высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    more_detailed: "Как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, черное чувство юмора: за него Дэдпула прозвали «Болтливым наемником»."
}];


function App() {
  return (
    <div className="App">
        {
          heroes.map((hero) =>
            <Hero url={hero.url} name={hero.name} universe={hero.universe} alter_ego={hero.alter_ego} type_of_activity={hero.type_of_activity} friends={hero.friends} superpowers={hero.superpowers}
            more_detailed={hero.more_detailed}></Hero>
          ) 
        }
    </div>
  );
}

export default App;
