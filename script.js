console.log("Ben satır 1'deki kodum.")

let pr1 = new Promise( ( basarili, basarisiz )=>{
    // zaman alan işlemler
    //...
    //...
    //...

    basarisiz("HATA! HATA! HATA!.")
} )

pr1
    .then( (deger)=>{
        console.log("İşlem tamamlandı. İşlem sonucu: " + deger)
    } ) 
    .catch( (hata)=>{
        console.log("Bir hata oluşmuş. Hata: " + hata)
    } )

console.log("Ben satır 18'deki kodum.")

console.log("Ben satır 20'deki kodum.")

for( let i = 0; i < 20; i++ ) {
    console.log("Sayaç: " + i)
}



async function mesajGoster() {
    let pr1 = new Promise( ( basarili, basarisiz )=>{
        // zaman alan işlemler
        //...
        //...
        //...
    
        basarisiz("HATA! HATA! HATA!.")
    } )

    try {
        let deger = await pr1
        console.log( deger )
    } catch(hata) {
        console.log(hata)
    }

}

mesajGoster()

