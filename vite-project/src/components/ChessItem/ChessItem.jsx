import React from 'react'
import styles from "./ChessItem.module.css"
import { useDispatch } from 'react-redux'
import { deleteChess, fetchChessGetById } from '../../redux/slice/chessSlice'
const ChessItem = ({item}) => {

    const {name,age,biography,image_url,id}=item
  const dispatch=useDispatch();


  return (
    <div className={styles.container}>
            <h3>{name}</h3>
            <h4>{age}</h4>
            <p>{biography}</p>
            <img src={image_url}/>

            <div>
              <button className={styles.delete} onClick={()=>dispatch(deleteChess(id))} >Sil</button>
              <button className={styles.update} onClick={()=>dispatch(fetchChessGetById(id))}>Düzenle</button>
            </div>
    </div>
  )
}

export default ChessItem
