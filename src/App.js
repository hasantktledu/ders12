import React from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const [veri, veriGuncelle] = React.useState( { hits:[] } )
    const [sorgu, sorguGuncelle] = React.useState("istanbul")
    const [link, linkGuncelle] = React.useState("https://hn.algolia.com/apiiiii/v1/search?query=istanbul")
    const [yukleniyor, yukleniyorGuncelle] = React.useState(true)
    
    React.useEffect(()=>{
        async function veriCek() {
            const sonuc = await axios(link)
            veriGuncelle(sonuc.data)
            yukleniyorGuncelle(false)
        }

        veriCek()
    }, [link])

    console.log("Render gerçekleşti.")

    return (
        <>
            <section className='container p-5'>
                
                { yukleniyor && <div className="spinner-grow" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                }

                <input type="text" value={sorgu} onChange={(olay)=>{ sorguGuncelle(olay.target.value) }} />
                <button onClick={()=>{ yukleniyorGuncelle(true); linkGuncelle("https://hn.algolia.com/api/v1/search?query="+sorgu)}}>Ara</button>

                <ul>
                    {veri.hits.map(eleman=>(
                        eleman.title ? (
                            <li key={eleman.objectID}>
                                <a href={eleman.url}>{eleman.title}</a>
                            </li>
                        ) : 
                            ''
                        
                    ))}
                </ul>
            </section>
        </>
    )
}

export default App