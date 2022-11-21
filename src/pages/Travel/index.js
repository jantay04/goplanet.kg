import React from 'react'
import FirstBlock from '../../components/FirstBlock'
import MainLayout from '../../components/MainLayout'
import bg from './assets/bg.png'
import tour from './assets/tour.jpeg'
// import Split from '../../components/Split'
import Blog from '../../components/Blog'
import dubai from './assets/dubai.jpeg'
import turkey from './assets/turkey.jpeg'
import maldivias from './assets/Maldivias.jpg'
import tailand from './assets/Tailand.jpeg'

const Travel = () => {
  return (
    <MainLayout>
        <FirstBlock title={"Горящие туры"} subtitle={""} lists={["20000 довольных туристов", "Более 3000 клиентов получили визу", "Работаем уже 5 лет"]} bg={bg}/>
        {/* <Split title="Иследуй каждый уголок мира вместе с нами" description={<>
          Если вы живете недалеко от столицы Кыргызстана, туры из Бишкека помогут улететь в долгожданный отпуск недорого. Ежегодно мы отправляем в отпуск тысячи туристов, продумывая каждое путешествие до мелочей. Предлагаем туры без наценок в десятки стран, среди которых немало экзотических направлений. <br/> <br/>
Например, с нашей помощью вы легко посетите Шри-Ланку, Индию, Малайзию, Таиланд и даже Оман — государство на Аравийском полуострове с живописной природой, райскими оазисами и пустыней с саваннами.
        </>} img={tour} /> */}
        <Blog img={tour} title="Иследуй каждый уголок мира вместе с нами"  text={<>          Если вы живете недалеко от столицы Кыргызстана, туры из Бишкека помогут улететь в долгожданный отпуск недорого. Ежегодно мы отправляем в отпуск тысячи туристов, продумывая каждое путешествие до мелочей. Предлагаем туры без наценок в десятки стран, среди которых немало экзотических направлений. <br/> <br/>
Например, с нашей помощью вы легко посетите Шри-Ланку, Индию, Малайзию, Таиланд и даже Оман — государство на Аравийском полуострове с живописной природой, райскими оазисами и пустыней с саваннами.</>}/>

      <Blog img={dubai} title="Туры в ОАЭ"  text={<> 
        Если вы хотите найти курорт, где было бы комфортно отдыхать круглый год, то туры в ОАЭ из Бишкека как раз то, что нужно. Перелет в страну шейхов и пальмовых островов займет меньше 5 часов, а впечатлений от отпуска хватит на годы. И это не преувеличение. <br/><br/>

В Арабских Эмиратах тепло и солнечно. Парочка дождливых дней на стыке зимы и весны — не в счет.<br/><br/>

Оказавшись здесь в любой из сезонов, вы сможете совместить пляжные варианты отдыха с популярными видами спорта и экскурсиями.<br/><br/>

Помимо шикарного сервиса и уймы достопримечательностей Эмираты славятся автострадами, поэтому даже в условиях мини-отпуска вы успеете посетить несколько городов и курортов.<br/><br/>

Преимущество наших туров — доступность. Даже в условиях высокого сезона стоимость путевок может быть гораздо ниже, чем вы рассчитывали. Миф о том, что отдых на Персидском заливе — удовольствие не из дешевых, давно изжил себя. Чтобы купить туры в ОАЭ недорого, достаточно просто внимательно изучить предложения на нашем сайте или обратиться к нам!<br/><br/>
  </>}/>
  <Blog img={turkey} title="Туры в Турцию"  text={<> 
    Если хотите в отпуск действительно от всего, выбирайте туры в Турцию из Бишкека и наслаждайтесь моментом. Местные отели работают по принципу «все включено», что избавляет от лишних трат и хлопот с организацией досуга. Варианты отдыха в этой курортной стране делятся на два типа: пляжный, перемежающийся с экскурсиями и полноценные экскурсионные программы, с акцентом на Стамбул.<br/><br/>

Студентам подойдет Кемер и Аланья. Там много молодежи и недорогие цены на отели и развлечения. Семьям рады в Сиде и Анталии, лучшие бары в Мармарисе, уединение в Фетхие, а за экстримом отправляются в Белек. Здесь перечислены только популярные курорты, а на деле — купить туры в Турцию можно в массу привлекательных мест.<br/><br/>

Если полноценный отдых ассоциируется с экскурсиями, то вас ждут поездки в Трою, к руинам библиотек и театров в Эфесе, экскурсии в первый в мире мавзолей, прогулки по останкам Ликийского царства и путешествие в Стамбул —  город-музей под открытым небом. Не стоит также забывать, что Турция — красивая страна в окружении четырёх морей, поэтому если запланируете длинное путешествие, успеете искупаться в каждом.<br/><br/>

Если купите туры в Турцию  недорого, а это достаточно просто сделать, воспользовавшись системой бронирования на нашем сайте, то страна,  о которой вы наверняка не раз слышали, откроется с новой стороны. Отдых здесь — не только местные комфортабельные отели, но и уникальные достопримечательности, паломнические центры и безграничные возможности шопинга.
  </>}/>
  <Blog img={maldivias} title="Туры в Мальдивы"  text={<> 
    Мечтаете об отдыхе на экзотическом острове? Тогда выбирайте туры на Мальдивы из Бишкека даже не раздумывая.<br/><br/>

Как минимум потому, что визу для поездки не нужно оформлять заранее. Туристам её выдают по прибытии. Прямо в аэропорту и бесплатно. Варианты отдыха на курортах у Индийского океана практически безграничны, так что отпуск на райских островах понравится и любителям шикарного загара, и экстремалам, и гурманам.<br/><br/>

Приключения начнутся еще до того, как вы приедете в отель.<br/><br/>

Трансфер здесь очень необычный: добраться от столицы Мальдив до островов можно на настоящем гидросамолете! Кстати, после того, как заселитесь и поедите, советуем сразу же познакомиться с жителями океана, чтобы покормить и их тоже. Местные отели устраивают из трапезы скатов и акул, а это зрелищное шоу.<br/><br/>

Дайверам тут тоже раздолье. Обычно они выбирают путешествие на Мальдивы, чтобы исследовать загадочные пещеры.<br/><br/>

Но если захотите просто посмотреть на фауну Индийского океана, выбирайте атолл Ари — не ошибетесь. Там можно встретить всех представителей водного мира: от непредсказуемой барракуды до безобидной рыбы-клоуна. За подводным миром также можно понаблюдать из подводной лодки.<br/><br/>

Мальдивские острова подойдут и для отдыха с семьей. Здесь нет опасных инфекций и ядовитых змей, практически нет насекомых, а в лагунах отсутствуют опасные течения. Поэтому поездка с ребенком станет приятной и запоминающейся.<br/><br/>

Не верьте тому, кто говорит, что на Мальдивах скучно. Здесь каждый найдет занятие по душе: рыбалка, массаж в подводном спа, парасейлинг, кулинарные мастер-классы, кинопоказы под звездами —  лишь малая часть развлечений для наших туристов.<br/><br/>
  </>}/>
  <Blog img={tailand} title="Туры в Таиланд"  text={<>
    Многие считают Азию исключительно зимним направлением, но отдыхать в стране можно когда угодно.<br/><br/>

Можете купить туры в Таиланд из Бишкека, и убедиться в этом самостоятельно. Да, летом здесь иногда дождит, но в целом погода хорошая — на побережье чисто и тихо, цена на экскурсии в разы ниже, а сервис лучше из-за отсутствия высокого сезона.<br/><br/>

Кроме того, лето —  лучшее время для шопинга на распродажах. Элитные бары, рестораны и массажные салоны тоже не скупятся на скидки.<br/><br/>

Варианты  отдыха безграничны. Можно купить путевку в город ангелов — Бангкок, на пляжи тусовочной Паттайи или в объятия солнечных островов. Ну а если хотите не просто отдохнуть, но и страну посмотреть, то оказавшись в Тае, сможете посетить Королевский Дворец  и загадочный остров Джеймса Бонда.<br/><br/>

Туры в Таиланд также подойдут влюбленным и семейным парам, которые стремятся к уединению и экзотике.<br/><br/>

Если хотите освежить отношения со второй половинкой, выбирайте Пхукет. Здесь много местных отелей, созданных для романтики. Вас будут ждать апартаменты в пышных зарослях с выходом на песчаные пляжи, где гармонично переплетены главные показатели полноценного отдыха: комфорт и роскошь.<br/><br/>

Ещё одно поветрие среди как влюбленных, так и одиноких туристов — не просто попробовать здесь том-ям во всех встреченных заведениях, а научиться готовить знаменитое блюдо самостоятельно. Кулинарные курсы для отдыхающих предлагаются во многих отелях страны. На случай, если романтики и гастротура покажется мало, советуем добраться до Патонга. На этом пляже жизнь кипит круглосуточно.

  </>}/>
    </MainLayout>
  )
}

export default Travel