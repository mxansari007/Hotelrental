import './Item.scss';
import Hotelcard from '../../Components/Hotelcard/Hotelcard';
import { useSelector } from 'react-redux';
import jsonData from '../../json/Data.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Item(){
    const {id} = useParams();

    return<>
    <div className='Item-container'>
        <Hotelcard data={jsonData[id-1]} />
        </div>
    </>
}