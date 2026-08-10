



function ProfilePicture(){

    const imgurl = './src/assets/image.png';

    const handleClick = (e) => e.target.style.display = "none";


    return(


        <img src={imgurl} width="200px" onClick={(e) => handleClick(e)}></img>
        

        
    );





} export default ProfilePicture