import React from 'react'
import FirstBlock from '../../components/FirstBlock'
import MainLayout from '../../components/MainLayout'
import bg from './assets/bg.png'
import airplane from './assets/airplane.png'
import Blog from '../../components/Blog'

const Avia = () => {
  return (
    <MainLayout>
        <FirstBlock title={<>Дешевые авиабилеты по доступным ценам</>} subtitle={"Напишите нам в WhatsApp куда и когда хотите полететь.Мы найдем оптимальные маршруты для вас в любое время суток"} lists={["Более 93% одобрения на получение визы", "Более 3000 клиентов получили визу", "Работаем уже 5 лет"]} bg={bg}/>
        <Blog img={airplane} title="Авиабилеты по всем направлениям" text="Авиабилеты по всем направлениям по выгодным тарифам, включая квоты при раннем бронировании.
 Мы используем индивидуальный подход к каждому клиенту
 мы компетентны, оперативны, надежны
 мы предложим вам лучшее решение самых сложных задач
 мы предоставим вам доступ к специальным ценам на авиабилеты.
 Здесь вы всегда сможете сделать запрос на конкретную дату, чтобы узнать цену и выкупить авиабилет.
 для того чтобы узнать цену на ваши рейсы, подавать заявку нужно строго в таком виде:
* откуда - куда
* туда число 
* обратное число 
* количество человек
* выбор класса" />
    </MainLayout>
  )
}

export default Avia