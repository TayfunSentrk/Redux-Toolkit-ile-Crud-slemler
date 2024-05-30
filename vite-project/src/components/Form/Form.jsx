import React, { useState } from 'react'
import styles from "./Form.module.css"
const Form = () => {

const [name,setName]=useState("");
const [age,setAge]=useState("");
const [biography,setBiography]=useState("");
const [url,setUrl]=useState("");


  return (
    <div>
        <form  className={styles.formGroup}>
            <h3>Satranç Oyuncusu Ekleyiniz</h3>
            <div>
                <label>İsmi Giriniz</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
            </div>
            <div>
                <label>Yaşı Giriniz</label>
                <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" />
            </div>

            <div>
                <label>Biyografi Giriniz</label>
               <textarea value={biography} onChange={(e)=>setBiography(e.target.value)} ></textarea>
            </div>

            <div>
                <label>Resim Url Giriniz</label>
                <input value={url} onChange={(e)=>setUrl(e.target.value)} type="text"  />
            </div>

            <div>
                <button>Ekleme Yapınız</button>
            </div>
        </form>
    </div>
  )
}

export default Form


