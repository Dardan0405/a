import React from "react";
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { PopularCourse,Courses } from "../data";
import {BsArrowRightCircleFill} from 'react-icons/bs' 

const Course = () =>{
return(
    <div className="About" >
        <div className="About-links">
            <h5><FormattedMessage id = 'About' defaultMessage = 'Categories'/>  </h5>
            <div className="Inner-link">
                {Courses.map((props) => {
                    return(
                        <Link  to= {props.to} className='menu-link'>
                            <div className="bg" style={{background: `${props.bg}`}}></div>
                            <div className="main">
                                <div className="class-contnier">
                                    <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                </div>
                                <div className="block">
                                    <h5>{props.title}</h5>
                                    <p>{props.text}</p>
                                </div>
                            </div>
                            <p><FormattedMessage id='All' defaultMessage ='Wiev all Categories'/> <BsArrowRightCircleFill/>  </p>
                        </Link> 
                    )
                
                
                
                    })}
            </div>
        </div>



     <div className="Popular">
        <h5><FormattedMessage id='propular' defaultMessage = 'Popular Courser'/><FormattedMessage id='View' defaultMessage = 'View all' /></h5>
        {PopularCourse.map((props) => {
            return(
            <Link to ={props.to} className='Couses'>
                <div className="cointainer-Courses">
                    <div className="Couse-cointainer">
                        <div className="icon" style={{content: `url(${props.icon})`}}></div>
                    </div>
                    <div className='Bllok'>
                        <h6>{props.title}</h6>
                        <p>{props.text}</p>
                    </div>
                </div>
            </Link>
            )
        }
        )}
      

     </div>





    </div>
)

     

}




export default Course