import React from 'react'
import FirstBlock from '../../components/FirstBlock'
import MainLayout from '../../components/MainLayout'
import bg from './assets/bg.png'
import Blog from '../../components/Blog'
import kg from './assets/kg.jpeg'
import photo from './assets/photo.webp'

const TourAsia = () => {
  return (
    <MainLayout>
        <FirstBlock title={"Туры по Кыргызстану и Центральной Азии"} subtitle={"Поможем в получении краткосрочных и долгосрочных виз в страны Шенгенского соглашения"} lists={["Более 93% одобрения на получение визы", "Более 3000 клиентов получили визу", "Работаем уже 5 лет"]} bg={bg}/>
        <Blog img={kg} title="Туры в Кыргызстан, Китай и страны Центральной Азии"  text={<>
          Мы предлагаем соотечественникам и гостям из других стран эксклюзивные туры по Азии. <br/> <br/>
          Средняя Азия – это особое состояние души. Это любовь с первого взгляда и на всю жизнь! Красивая природа, сохранившая свой первозданный вид, древние города с богатой историей, таинственные  легенды, памятники архитектуры, шум и ароматы специй восточного базара, самобытная культура и неповторимое гостеприимство и теплота души  местного населения… Все это и многое другое  не оставит вас равнодушными и вы захотите возвращаться сюда снова и снова!
        </>} />

        <Blog img={photo} title="Отдых на Иссык-Куле"  text={<>
          Незамерзающее соленое озеро Иссык-Куль называют «Жемчужиной Кыргызстана». <br/><br/>
          Удивительной красоты озеро находится в обрамлении величественных снежных вершин Тянь-Шаня и занимает третье место в мире по глубине.<br/><br/>
          Вокруг озера немало живописных мест для экскурсий: высокие водопады, густые хвойные леса, альпийские луга, красные причудливые скалы. Звоните или закажите путевки на Иссык-Куль онлайн по выгодной цене.
        </>} />
    </MainLayout>
  )
}

export default TourAsia