import jsonData from '../../json/Data.json';
import Hotelcard from '../../Components/Hotelcard/Hotelcard';
import './Home.scss';
import { useEffect, useState } from 'react';

export default function Home(){




    const [data,setData] = useState(jsonData.slice(0,6));
    const [navList,setNavList] = useState([]);
    const [showCount, setShowCount] = useState(0);
    const [showBtn,setShowBtn] = useState(true);
    
    useEffect(()=>{

        if(navList.length==0){
            setShowBtn(true);
            if(6+showCount*3>jsonData.length){
                setShowBtn(false);
            }
            setData(jsonData.slice(0,6+(showCount)*3));
        }else{
            let array=[];
            setShowBtn(true);
            for(let d in navList){
               array = [...array,...jsonData.filter(m=>m.city === navList[d])]
            }
            if(6+showCount*3>array.length){
                setShowBtn(false);
            }
            setData(array.slice(0,6+(showCount)*3));

        }
    },[showCount,navList]);



    const handleNav = (e)=>{

        e.target.classList.toggle('active-btn');
        let value = e.target.innerHTML;
        let index = navList.indexOf(value);

        if (index === -1) {
           setNavList(p=>[...p,value]);
        } else {
            
            let array = navList.filter(d=>d!==navList[index]);
            setNavList(array);
        }

    }

    const handleShowMore =()=>{
        setShowCount(showCount+1);
    }

    return <>
    <div className='Home-container'>
    <div className='Home-heading'>
        <h1>Featured Listed Property</h1>
        <p>Real estate can be bought, sold, leased, or rented, and can be a 
        valuable investment opportunity. The value of real estate can be...
        </p>
    </div>
    <div className='Home-nav'>
        <div className='home-nav-cities'>
            <button onClick={handleNav} className='nav-btn'>New York</button>
            <button onClick={handleNav} className='nav-btn'>Mumbai</button>
            <button onClick={handleNav} className='nav-btn'>Paris</button>
            <button onClick={handleNav} className='nav-btn'>London</button>
        </div>
        <div className='home-nav-view'><button className='view-btn'>View All <i className='fa-solid fa-arrow-right'></i></button></div>
    </div>
    <div className='Home-content-container'>
        {data.map(d=><Hotelcard data={d} />)}
        </div>
    <div className='Show-more'>
        {showBtn?<button onClick={handleShowMore} className='show-more-btn'><i className='fa-solid fa-hourglass-start'></i> Show More</button>:null}
    </div>

    </div>
    </>
}