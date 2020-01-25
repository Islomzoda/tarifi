import React from 'react'
import Tarif from './components/Tarif'

export default function App() {
 
  const tarifi = [
    {tarifLink: "https://msk.tele2.ru/tariff/my-online-plus", title: "Мой онлайн+", price: 700, forMuch: "/Месяц", limitTele2: "Безлимит: ", forlimitTele2:"на Tele2 России", minutes:800, minutesFor: "минут на осталные номера Росии", howMuchInternet: "30", internet: "ГБ интернета" },
    {tarifLink: "https://msk.tele2.ru/tariff/everywhere-online", title: "Везде онлайн", price: 500, forMuch: "/Месяц",limitTele2: "Безлимит ", forlimitTele2:"на Tele2 России", minutes:500, minutesFor: "минут на осталные номера Росии", howMuchInternet: "40", internet: "ГБ интернета"  },
    {tarifLink: "https://msk.tele2.ru/tariff/my-online", title: "Мой онлайн", price: 400, forMuch: "/Месяц",limitTele2: "Безлимит ", forlimitTele2:"на Tele2 России", minutes:500, minutesFor: "на другие мобильные номера домашнего региона", howMuchInternet: "15", internet: "ГБ интернета"  },
    {tarifLink: "https://msk.tele2.ru/tariff/my-conversation", title: "Везде онлайн", price: 200, forMuch: "/Месяц",limitTele2: "Безлимит ", forlimitTele2:"на Tele2 России", minutes:200, minutesFor: "на другие мобильные номера домашнего региона", howMuchInternet: "2", internet: "ГБ интернета"  },
    {tarifLink: "https://msk.tele2.ru/tariff/my-tele2", title: "Везде онлайн", price: 259, forMuch: "/Месяц",limitTele2: "Безлимит ", forlimitTele2:"на Tele2 России", howMuchInternet: "5", internet: "ГБ интернета"  },
]
 
 
 
  return (
    <div>
       <Tarif id={tarifi[0].id} title={tarifi[0].title} price={tarifi[0].price} forMuch={tarifi[0].forMuch} limitTele2={tarifi[0].limitTele2} forlimitTele2 = {tarifi[0].forlimitTele2} minutes={tarifi[0].minutes} minutesFor = {tarifi[0].minutesFor} howMuchInternet = {tarifi[0].howMuchInternet} internet = {tarifi[0].internet} icon = {tarifi[0].icon}   />
       <Tarif id={tarifi[1].id} title={tarifi[1].title} price={tarifi[1].price} forMuch={tarifi[1].forMuch} limitTele2={tarifi[1].limitTele2} forlimitTele2 = {tarifi[1].forlimitTele2} minutes={tarifi[1].minutes} minutesFor = {tarifi[1].minutesFor} howMuchInternet = {tarifi[1].howMuchInternet} internet = {tarifi[1].internet}/>
       <Tarif id={tarifi[2].id} title={tarifi[2].title} price={tarifi[2].price} forMuch={tarifi[2].forMuch} limitTele2={tarifi[2].limitTele2} forlimitTele2 = {tarifi[2].forlimitTele2} minutes={tarifi[2].minutes} minutesFor = {tarifi[2].minutesFor} howMuchInternet = {tarifi[2].howMuchInternet} internet = {tarifi[2].internet}/>
       <Tarif id={tarifi[3].id} title={tarifi[3].title} price={tarifi[3].price} forMuch={tarifi[3].forMuch} limitTele2={tarifi[3].limitTele2} forlimitTele2 = {tarifi[3].forlimitTele2} minutes={tarifi[3].minutes} minutesFor = {tarifi[3].minutesFor} howMuchInternet = {tarifi[3].howMuchInternet} internet = {tarifi[3].internet}/>
       <Tarif id={tarifi[4].id} title={tarifi[4].title} price={tarifi[4].price} forMuch={tarifi[4].forMuch} limitTele2={tarifi[4].limitTele2} forlimitTele2 = {tarifi[4].forlimitTele2} howMuchInternet = {tarifi[4].howMuchInternet} internet = {tarifi[4].internet}/>
    </div>
  )
}
