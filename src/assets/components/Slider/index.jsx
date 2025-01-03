import {Container} from './styles'
import {Swiper, SwiperSlide} from 'swiper/react'
import card from '../card'

function Slider ({Info, title}) {

return(
    <Container>
        <h2>{Title}</h2>
        <Swiper 
        grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
        >
            {Info.map((item, index )=>(           
            <SwiperSlide key={index}>
            <card item={item}/>
            </SwiperSlide>
 ))}
            
        </Swiper>
    </Container>
)
    }

export default Slider