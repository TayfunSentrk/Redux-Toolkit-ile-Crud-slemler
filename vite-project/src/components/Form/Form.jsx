import React, { useEffect, useState } from 'react'
import styles from "./Form.module.css"
import { createChess, updateChess } from '../../redux/slice/chessSlice';
import { useDispatch, useSelector } from 'react-redux';
const Form = () => {


const dispatch=useDispatch();



const data=useSelector((store)=>store.chessReducer.selectedChessArray)
const [name,setName]=useState("");
const [age,setAge]=useState("");
const [biography,setBiography]=useState("");
const [image_url,setUrl]=useState("");
useEffect(()=>{
console.log(Object.values(data).length);
   if( data.name!=="" && data.age!=="" && data.biography!=="" && data.image_url!==""){
    setName(data.name);
    setAge(data.age);
    setBiography(data.biography);
    setUrl(data.image_url);
    }
   
},[data])

    const submit=(e)=>{
        e.preventDefault();

     


        if(name==="" || age==="" || biography==="" || image_url==="" ) {
            alert("Lütfen verileri doldurunuz") 
            return
        }

        if(Object.values(data).length>0){
            console.log("nasılsın");
    
        dispatch(updateChess({id:data.id.toString(),data:{id:data.id,name,age,biography,image_url}}))
        }

        else{
            const data={id:Date.now().toString(),name,age,biography,image_url};
            dispatch(createChess(data));
            
        }

        setName("");
            setBiography("");
            setUrl("");
            setAge("");

           
    
        
    }
  return (
    <div>
        <form  className={styles.formGroup} onSubmit={submit} >
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
                <input value={image_url} onChange={(e)=>setUrl(e.target.value)} type="text"  />
            </div>

            <div>
                <button type='submit'> {data.name!=="" && data.age!=="" && data.biography!=="" && data.image_url!==""?"Günceleme Yapınız":"Ekleme Yapınız"} </button>
            </div>
        </form>
    </div>
  )
}

export default Form


