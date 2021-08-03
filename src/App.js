import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {cardData} from './StoriesCard'
import Card from './components/Card'
import Footer from './components/Footer'
import Filter from  './components/Filter'

function App() {
  return (
    
    <div className="App">
      
      <Header />
      
      <div className="FilterSection">
        <h3 className="LatestPosts">Latest Posts</h3>
        <div  className="IconWrapper">
          <i class="fas fa-filter"></i>
          <p class="FilterCategory">Filter by Category</p>
        </div>
        
        <Filter />

      </div>
      
      <div className="CardGrid">
        {cardData.map((item)=> <Card  id={item.id} url={item.url} title={item.title} author={item.author} courseDate = {item.courseDate} courseDetails={item.courseDetails.split(" ",20).join(" ") + "..."}/>)}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
