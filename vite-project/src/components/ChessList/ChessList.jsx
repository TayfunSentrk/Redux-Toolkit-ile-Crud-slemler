import React, { useEffect } from 'react'
import styles  from "./ChessList.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchChessList } from '../../redux/slice/chessSlice';
import ChessItem from '../ChessItem/ChessItem';

const ChessList = () => {
    const dispatch=useDispatch();
    const data=useSelector((store)=>store.chessReducer)
    console.log(data);
    const {chessArray,loading,error}=data;
    useEffect(()=>{
        dispatch(fetchChessList())
    },[dispatch])

  return (
    <>
     <div className={styles.container}>
        {
            loading && <p>Loading</p>
        }

        {
            error && <p>{error}</p>
        }

        {
            !loading && !error && chessArray.map((item)=><ChessItem key={item.id} item={item}/>)
        }
    </div></>
   
  )
}

export default ChessList
