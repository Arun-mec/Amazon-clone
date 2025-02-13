import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Carousel.scss';

export const CarouselItem = ({children,image,width}) => {
    return (
        <div className='carousel-item' style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.05) 5%, 85%, #f2f2f2),url(${image})`,
            width:width,height:'65vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        </div>
    )
}

const Carousel = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const updateIndex = (newIndex) =>{
        if (newIndex<0){
            newIndex = 0;
        }else if (newIndex>React.Children.count(children)){
            newIndex = React.Children.count(children)-1;
        }
        setCurrentIndex(newIndex);
    }

    return (
        <div className="carousel">
            <button className='carousal-left-indicator' onClick={() => {
                updateIndex(currentIndex - 1)
            }}>
                <KeyboardArrowLeftIcon style={{color:'grey'}} fontSize='large'/>
            </button>
            <button className='carousal-right-indicator' onClick={() => {
                updateIndex(currentIndex + 1)
            }}>
                <KeyboardArrowRightIcon style={{color:'grey'}} fontSize='large'/>
            </button>
            <div className="inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {
                    React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, { width: "100%" })
                    })
                }
            </div>
        </div>
    )
}

export default Carousel;