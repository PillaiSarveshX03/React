
import List from './List.jsx';

function App() {


    const fruits = [{id: 1, name: "Apple", calories: 95},
                        {id: 2, name: "Orange", calories: 45 }, 
                        {id: 3, name: "Bnanaa", calories: 105}, 
                        {id: 4, name: "Pineapple", calories: 100 }];

    const vegetables = [{id: 6, name: "Potato", calories: 20},
                    {id: 7, name: "Corn", calories: 100 }, 
                    {id: 8, name: "Spinach", calories: 105}, 
                    {id: 9, name: "Onion", calories: 56 }];


    
        
    return(

        <>

            <List items={fruits} category="Fruits"/>
            <List items={vegetables} category="Vegetables"/>
            
        </>
        

    );

 
}

export default App
