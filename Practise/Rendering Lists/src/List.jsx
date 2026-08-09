function List(props){

    

    const category = props.category;
    const itemlist = props.items;

        //fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABATIC
        //fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABATIC


    const listitmes = itemlist.map(fruit => <li key={fruit.id}>
                                            {fruit.name}, <b>Calories</b> :{fruit.calories} 
                                            </li>)
    return(
        
        <>
        <h1 className="cat">{category}</h1>
        <ol className="li">{listitmes}</ol>
        </>

        
    );



} export default List