        import React from 'react'

        export default function Tarif(props) {
            return (
                <div>
                    <article>
        <div class="container">
        <a href={props.tarifLink}>
    <div class ="ssc-tariff-box">
    <div class="price-wrap"><h4>{props.title}</h4>
            <span class = "price">{props.price}</span>
            <span class="value">₽</span>
            
             <strong>{props.forMuch}</strong></div>
             <div class="group-title">  <strong>{props.limitTele2}</strong></div>
             <div class="tariff-info-item">  <span>{props.forlimitTele2}</span></div>
             <strong>{props.minutes}</strong>
             <span>{props.minutesFor}</span>
    <strong>{props.howMuchInternet}</strong>
<span>{props.internet}</span>
<div class="service-icons">
<img src="https://msk.tele2.ru/api/media/asset?mediaId=m220005" alt=""/>
<img alt="" src="https://msk.tele2.ru/api/media/asset?mediaId=m220001" />
    <img alt="" src="https://msk.tele2.ru/api/media/asset?mediaId=m220003"/>
        <img alt="" src="https://msk.tele2.ru/api/media/asset?mediaId=m220006"/>
            <img alt="" src="https://msk.tele2.ru/api/media/asset?mediaId=m220004"/>
                <img alt="" src="https://msk.tele2.ru/api/media/asset?mediaId=m1990041"/>
    <img alt="" src=""/>

  
</div>
<br/>
        <button class="btn btn-light mt-3">Купить SIM</button>
    </div>
</a>
</div>
</article>
        </div>
        
    )
}
