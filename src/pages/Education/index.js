import React from 'react'
import FirstBlock from '../../components/FirstBlock'
import MainLayout from '../../components/MainLayout'
import bg from './assets/bg.png'
import education from './assets/education.webp'
import Blog from '../../components/Blog'

const Education = () => {
  return (
    <MainLayout>
        <FirstBlock title={"Образование зарубежом"} subtitle={"Поможем в получении краткосрочных и долгосрочных виз в страны Шенгенского соглашения"} lists={["Поступление в ТОП вузы мира", "Бакалавр / магистратура", "Гарантия поступления или 100% возврат"]} bg={bg}/>
        <Blog img={education} title="Учеба за границей для кыргызстанцев"  text="Представляем для Вас возможности учебы за рубежом для граждан Кыргызстана. Обучение за рубежом может стать важным опытом для вас, так как открывает новые безграничные возможности, способствует межкультурному взаимопониманию, обмену традициями и личностному творческому, профессиональному и духовному росту. Многие ошибочно думают, что образование за границей — это нечто нереальное и абсолютно недостижимое. За много лет работы в Goplanet, мы с уверенностью можем сказать, что все большее количество людей выбирают международные университеты и колледжи для получения высшего, второго высшего или профильного образования. Различные типы программ, а также возможность совмещения учебы и работы превращают учебу за границей из мечты во вполне достижимую реальную цель. Магистратура, бакалавриат, языковые курсы, летние каникулы за рубежом с возможностью изучения языка, программа AU-PAIR и другие — для школьников, студентов или взрослых: на нашем сайте вы найдете идеально подходящий для вас вариант. А мы, конечно же, проконсультируем вас, поможем в выборе программы, оформлении документов и постараемся максимально упростить для вас все формальности. Станьте лидером и стройте жизнь, так как хочется вам!" />
    </MainLayout>
  )
}

export default Education