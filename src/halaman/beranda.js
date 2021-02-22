import React from 'react'
class Beranda extends React.Component{
    render(){
        return(
            <div>
                <h2 style={{fontFamily: 'Droid Sans',fontWeight:'bold'}}>SELAMAT DATANG</h2>
                <div style={{marginTop:'3%'}}>
                <h5>SEKOLAH ADIWIYATA</h5>
                <p style={{fontWeight:'bold'}}>Adiwiyata adalah upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan ilmu pengetahuan dan berbagai
                norma serta etika yang dapat menjadi dasar manusia menuju terciptanya kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan.
                Adiwiyata merupakan nama program pendidikan lingkungan hidup.</p>
                
                <img style={{marginTop : '0.5%' , width : '100%' , height : '50%'}} src={process.env.PUBLIC_URL+"/image/adiwiyata.jpg"}  />
                
                
                </div>
            </div>
        )
    }
}
export default Beranda