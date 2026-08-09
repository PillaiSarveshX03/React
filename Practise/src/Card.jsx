import profilepic from './assets/image.png'


function Card(){

    return(
        <div className="card">

            <img width="220px" alt="Me" src={profilepic}></img>
            <h2>Sarvesh Pillai</h2>
            <p className="para"> Questioning Life Currently</p>
            



        </div>
    );



    
} export default Card