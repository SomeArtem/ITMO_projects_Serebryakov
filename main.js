import './public/style.css'
//import './reset.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

const services_container = document.querySelector('#services_target')
const services=[
  {
    service_logo_src:'',
    service_date:'12 oct 2019',
    service_status:'Winner',
    service_award:'MSMI Media UX Award 2018-19',
    service_location:'Torrento, Canada'
  },
  {
    service_logo_src:'',
    service_date:'28 dec 2019',
    service_status:'Gold Winner',
    service_award:'Apple Design Award 2018-19',
    service_location:'United Statues'
  },
  {
    service_logo_src:'',
    service_date:'28 nov 2019',
    service_status:'Asia Pacific',
    service_award:'Yellow Dot Design Award 2019-20',
    service_location:'United Nation'
  },
  {
    service_logo_src:'',
    service_date:'28 nov 2019',
    service_status:'Runner up',
    service_award:'Indiana Best Design 2019-20',
    service_location:'North Amurika'
  },
  {
    service_logo_src:'',
    service_date:'30 dec 2019',
    service_status:'Silver Winner',
    service_award:'UNO UX India Award 2020-21',
    service_location:'Hyderbad, India'    
  },
  {
    service_logo_src:'',
    service_date:'13 aug 2019',
    service_status:'Winner',
    service_award:'Best Music Album 2018-19',
    service_location:'Mumbai, India'
  }
]

for (let i = 0; i < services.length; i++) {
  let element = services[i];
  let el=document.createElement("div");
  el.classList+='service';
  el.innerHTML=`  
  <div class="service_head" >
    <div class="service_logo"></div>
    <div class="service_date">${element.service_date}</div>
  </div>
  <div class="service_body">
    <div class="service_status">${element.service_status}</div>
    <div class="service_award">${element.service_award}</div>
  </div>
  <div class="service_footer">
    <div class="service_location">${element.service_location}</div>
  </div>`  
  services_container.appendChild(el)
}

// setupCounter(document.querySelector('#counter'))
