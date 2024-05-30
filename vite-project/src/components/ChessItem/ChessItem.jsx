import React from 'react'
import styles from "./ChessItem.module.css"
const ChessItem = ({item}) => {

    const {name,age,biography,image_url}=item
  return (
    <div className={styles.container}>
            <h3>{name}</h3>
            <h4>{age}</h4>
            <p>{biography}</p>
            <img src={image_url}/>

            <div>
              <button className={styles.delete}>Sil</button>
              <button className={styles.update}>Düzenle</button>
            </div>
    </div>
  )
}

export default ChessItem
