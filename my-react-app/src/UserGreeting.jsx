function UserGreeting(props){

     const wel = <h2 
                 className="wel">Welcome {props.username}
                 </h2>;

     const log =  <h2 className="log">
                  Please Log In to Continue...
                  </h2>

     return( props.isLoggedIn ? wel : log );
                              


} export default UserGreeting