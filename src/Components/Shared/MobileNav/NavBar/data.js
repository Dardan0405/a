import { FormattedMessage } from 'react-intl'
import icon  from '../../../../assets/Home/Categories/Icon.svg'
import icon1 from '../../../../assets/Home/Categories/icon1.svg'
import icon2 from '../../../../assets/Home/Categories/icon2.svg'
import icon3 from '../../../../assets/Home/Categories/icon3.svg'
import icon4 from '../../../../assets/Home/Categories/icon4.svg'
import icon5 from '../../../../assets/Home/Categories/icon5.svg'
import icon6 from '../../../../assets/Home/Categories/icon6.svg'
import icon7 from '../../../../assets/Home/Categories/icon7.svg'
import icon8 from '../../../../assets/Home/Categories/icon8.svg'
import Desing from '../../../../assets/Home/Categories/Desing.svg'
import Game from '../../../../assets/Home/Categories/Game.svg'
import {FiVideo} from 'react-icons/fi'
import {BiSupport} from 'react-icons/bi'
import{GrDocument} from 'react-icons/gr'
import {IoHelpCircleSharp} from 'react-icons/io5'


export const Courses=  [
    {
        to: '/',
        icon: icon,
        title: <FormattedMessage  id = 'Bussiness' defaultmessage = 'Bussiness'/>,
        text:  <FormattedMessage id = 'Course'  defaultmessage = '383 Courses'/>,
        bg: '#6666ff'

},
{
    to: '/',
    icon: icon1,
    title: <FormattedMessage  id = 'Photo' defaultmessage = 'Photograpy'/>,
    text:  <FormattedMessage id = 'Course1'  defaultmessage = '203 Courses'/>,
    bg: '1affff'
},
{
    to: '/',
    icon: icon2,
    title: <FormattedMessage  id = 'It ' defaultmessage = 'It & Sofware'/>,
    text:  <FormattedMessage id = 'Course2'  defaultmessage = '152 Courses'/>,
    bg: '#ff80ff'
},
{
    
        to: '/',
        icon: icon3,
        title: <FormattedMessage  id = 'Art' defaultmessage = 'Design'/>,
        text:  <FormattedMessage id = 'Course3'  defaultmessage = '537 Courses'/>,
        bg: '#ffffff'
    
},
{
        to: '/',
        icon: icon4,
        title: <FormattedMessage  id = 'Gamge' defaultmessage = 'Gaming'/>,
        text:  <FormattedMessage id = 'Course4'  defaultmessage = '173 Courses'/>,
        bg: '#ff4dd2' 
},
{
        to: '/',
        icon: icon5,
        title: <FormattedMessage  id = 'Market' defaultmessage = 'Marketing'/>,
        text:  <FormattedMessage id = 'Course5'  defaultmessage = '145 Courses'/>,
        bg: '#ff1a1a' 
},
{
    to: '/',
    icon: icon6,
    title: <FormattedMessage  id = 'Dev' defaultmessage = 'Develpoment'/>,
    text:  <FormattedMessage id = 'Course6'  defaultmessage = '506 Courses'/>,
    bg: '#ffcc00' 
},
{
    to: '/',
    icon: icon7,
    title: <FormattedMessage  id = 'Finance' defaultmessage = 'Finance & Accounting'/>,
    text:  <FormattedMessage id = 'Course7'  defaultmessage = '168 Courses'/>,
    bg: '#33cc33' 
},
{
    to: '/',
    icon: icon8,
    title: <FormattedMessage  id = 'Office' defaultmessage = 'Office Productivity'/>,
    text:  <FormattedMessage id = 'Course8'  defaultmessage = '87 Courses'/>,
    bg: '#33cc33' 
},

]
export  const PopularCourse = [{
    to: '/',
    icon:Desing,
    title: <FormattedMessage id= 'Desing' defaultmessage = 'Graphic Desing'/>,
    text: <FormattedMessage id='Content' defaultmessage = 'Desng & make Infographic'/>
},
{
    to: '/',
    icon: Game,
    title: <FormattedMessage id = 'Game' defaultmessage = 'Game Desing'/>,
    text: <FormattedMessage id = 'content1' defaultmessage = 'Game Desing: Art and Concept'/>
}
]
export const Resource = [{
    to: '/',
    icon: <FiVideo/>,
    title: <FormattedMessage id ='Video' defaultmessage = 'GuideVideo'/>
},
{
    to: '/',
    icon: <BiSupport/>,
    title: <FormattedMessage id ='sup' defaultmessage = 'Support'/>

},
{
    to: '/',
    icon: <GrDocument/>,
    title: <FormattedMessage id ='Doc' defaultmessage = 'Blog'/>
},
{
    to: '/',
    icon: <IoHelpCircleSharp/>,
    title: <FormattedMessage id ='Help' defaultmessage = 'Help Center'/>
},
]
