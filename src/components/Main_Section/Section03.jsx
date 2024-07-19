import React from 'react'
import Img01 from '../../assets/img/section03_1.png'
import Img02 from '../../assets/img/section03_2.png'
import Img03 from '../../assets/img/section03_3.png'

const Section03 = () => {
    return (
        /*
       
            src/assets/sass/sction/_mainsection안에 스타일을 참고해서
                Section03Wrap, Section03Content를 활용한 style.js를 만들어
                여기에 stylecomponent로 활용하세요. 
                 
                */

      
        <Section03Wrap>
        <Section03Content>
        <h2>IT 교육 기회를 제공하여 꿈꾸던 가능성을 열어준다.</h2>
        <p className='tag'>VISION</p>
        
        </Section03Content>
        <Section03Content>
              <p calssName='right'>VISION</p>
                
                    <p calssName='tage'></p>
                
        </Section03Content>
        <Section03Content>
                <img src={Img02}></img>
             
                
                
                <p>VISION</p>
                <p>VISION</p>
          
        </Section03Content>
    </Section03Wrap>
    )
}

export default Section03