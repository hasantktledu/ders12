import React from 'react'
import './App.css'

function App() {
    let [kopekFotoUrl, fotoGuncelle] = React.useState(null)

    React.useEffect( ()=>{
       async function veriCek() {
            let sonuc = await fetch("https://dog.ceo/api/breeds/image/random/3")
            let veri = await sonuc.json()
            fotoGuncelle(veri.message)
       }
       
       setTimeout(veriCek, 3000)
       
    } , [] )

    return (
        <div className="App">
            {kopekFotoUrl && kopekFotoUrl.map( link=><img key={link} src={link} alt="" /> )}
        </div>
    )
}

export default App