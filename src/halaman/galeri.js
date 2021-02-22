import React from 'react'
class Galeri extends React.Component{
    render(){
        return(
                <div style={{marginTop:'3%'}}>
                <h2>Galeri SMAN 7 JAKARTA</h2>
                <div className="container page-top">
                        <div className="row">
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/adiwiyata.jpg"}  />
                            
                        
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/13.jpg"}  />
                            
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/3.jpg"}  />
                            
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/6.jpg"}  />
                            
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/9.jpg"}  />
                            
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/1.jpg"}  />
                            
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/10.jpg"}  />
                            
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/8.jpg"}  />
                        
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/5.jpg"}  />
                        
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/2.jpg"}  />
                        
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/15.jpg"}  />
                        
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/image/10.jpg"}  />
                        
                        </div>

                        
                    
                    </div>   
                </div>
            </div>
        )
    }
}
export default Galeri