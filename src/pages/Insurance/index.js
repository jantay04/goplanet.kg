import React from 'react'
import FirstBlock from '../../components/FirstBlock'
import MainLayout from '../../components/MainLayout'
import bg from './assets/bg.jpeg'
import insurance from './assets/insurance.jpg'
import Blog from '../../components/Blog'


const Insurance = () => {
  return (
    <MainLayout>
        <FirstBlock title={"Медицинское страхование для Шенгенской визы"} subtitle={"В чужой стране важно быть уверенным в том, что не придется решать непредвиденные проблемы. Мы сделали оформление страхового полиса максимально простым для Вас в процессе бронирования билета."} lists={["Более 93% одобрения на получение визы", "Более 3000 клиентов получили визу", "Работаем уже 5 лет"]} bg={bg}/>
        <Blog img={insurance} title="Зачем нужна медицинская страховка?"  text={<>В отпуске вы планируете хорошо отдохнуть, набраться новых впечатлений, привезти много фотографий и новый магнит на холодильник. <br/><br/>

Когда вы едете за границу, то единственное, о чем хочется думать, — это чтобы отдых или командировка удались на славу. Но иногда что-то идет не так: непривычная еда, плохое качество питьевой воды, жара за сорок, опасные аттракционы, морские хищники и дикие животные — да мало ли что может случиться в незнакомой стране. А если в чужой стране вам понадобится медицинская помощь?<br/><br/>

В такой ситуации важно быть уверенным в том, что не придется искать деньги на решение непредвиденных проблем. Страховая компания поможет организовать своевременную и качественную медицинскую помощь и покроет ваши расходы на лечение, транспортировку и лекарства.<br/><br/>

К тому же для получения визы в страны Шенгенской зоны обязательным требованием является наличие действующего страхового полиса Страхования Медицинских Расходов, выезжающих за рубеж.</>}/>
    </MainLayout>
  )
}

export default Insurance