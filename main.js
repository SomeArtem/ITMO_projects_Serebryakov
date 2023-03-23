import './public/style.css'
//import './reset.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

const services_container = document.querySelector('#services_target')
const services=[
  {
    service_logo_src:'',
    service_logo_color:'#9f34ac',
    service_date:'12 oct 2019',
    service_status:'Winner',
    service_award:'MSMI Media UX Award 2018-19',
    service_location:'Torrento, Canada',
    image_path:'figure-1.png' 
  },
  {
    service_logo_src:'',
    service_logo_color:'#0080de',
    service_date:'28 dec 2019',
    service_status:'Gold Winner',
    service_award:'Apple Design Award 2018-19',
    service_location:'United Statues',
    image_path:'figure-2.png'
  },
  {
    service_logo_src:'',
    service_logo_color:'#f6c642',
    service_date:'28 nov 2019',
    service_status:'Asia Pacific',
    service_award:'Yellow Dot Design Award 2019-20',
    service_location:'United Nation',
    image_path:'figure-3.png' 
  },
  {
    service_logo_src:'',
    service_logo_color:'#3ed875',
    service_date:'28 nov 2019',
    service_status:'Runner up',
    service_award:'Indiana Best Design 2019-20',
    service_location:'North Amurika',
    image_path:'figure-4.png' 
  },
  {
    service_logo_src:'',
    service_logo_color:'#edb000',
    service_date:'30 dec 2019',
    service_status:'Silver Winner',
    service_award:'UNO UX India Award 2020-21',
    service_location:'Hyderbad, India',
    image_path:'figure-5.png' 
  },
  {
    service_logo_src:'',
    service_logo_color:'#f74336',
    service_date:'13 aug 2019',
    service_status:'Winner',
    service_award:'Best Music Album 2018-19',
    service_location:'Mumbai, India',
    image_path:'figure-6.png'
  }
]

for (let i = 0; i < services.length; i++) {
  let element = services[i];
  let el=document.createElement("div");
  el.classList+='service';
  //el.style.backgroundImage=`url(${element.image_path})`;  
  el.innerHTML=`
  <div class="service_wrapper" style="background-image:url(${element.image_path});">
    
    <div style="justify-content: space-between; height: 100%; display: flex; flex-direction: column;">
      <div class="service_head" >
        <div class="service_logo" style="background-color:${element.service_logo_color}"></div>      
      </div>
      <div class="service_body">
        <div class="service_status">${element.service_status}</div>
        <div class="service_award">${element.service_award}</div>
      </div>
      <div class="service_footer">
        <div class="service_location">${element.service_location}</div>
      </div>
    </div>

    <div class="service_date">${element.service_date}</div>


  </div>
  `  
  services_container.appendChild(el)
}

// setupCounter(document.querySelector('#counter'))
