import logo from './logo.svg';
import Category from "./components/category/category.component.jsx"
function App() {
  const categories = [{
    id: 1,
    title: "Hats"
  },
  {
    id: 2,
    title: "Jackets"
  },
  {
    id: 3,
    title: "Sneakers"
  },
  {
    id: 4,
    title: "Womens"
  },
  {
    id: 5,
    title: "Mens"
  }
];
  return (
   categories.map((category)=>{
    return <Category key={category.id } title={category.title}/>
   })
  );
      
      
  
  
}

export default App;
