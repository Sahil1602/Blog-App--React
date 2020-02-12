import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './topBar';
import { myArr } from './AppData';
import { linkArr } from './blogLink';


function App() {
  // const mArr = [{"id":"1","title":"La Sagrada Familia, Barcelona","thumbnail":"https://cdn.getyourguide.com/img/tour_img-1973767-146.jpg"},{"id":"2","title":"Santa Maria delle Grazie, Milan ","thumbnail":"https://www.thehistoryhub.com/wp-content/uploads/2016/09/Interior-of-Santa-Maria-delle-Grazie.jpg"},{"id":"3","title":"Grand Canal, Venice","thumbnail":"https://www.wallpapers13.com/wp-content/uploads/2016/01/Night-View-Grand-Canal-Venice-Italy-915x515.jpg"},{"id":"4","title":"Taj Mahal","thumbnail":"https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/03/India-Taj-Mahal-Intrepid-Travel.jpg"},{"id":"5","title":"DisneyLand, Florida","thumbnail":"https://www.disneydining.com/wp-content/uploads/2017/05/Castle_Night_Christmas_MainStUSA-620x330.jpeg"},{"id":"6","title":"Phuket, Thailand","thumbnail":"https://static.asiawebdirect.com/m/phuket/portals/phuket-com/homepage/island/10mustsee/pagePropertiesImage/phuket-best-thing-to-do.jpg.jpg"}]
  const videoArr = myArr.map((elem) =>  {
  return (
    
    <div className="card">
      <img className="image" src={elem["thumbnail"]} />
      <h3 className="title">{elem.title}</h3>
    </div>
    
  );
})


  return (
    <body>
       {/* <header>
        <h2 className="logo">TRAVELLER</h2>
        <a>Trips</a>
        <a>About</a>
        <a>Contact</a>
      </header>  */}

      <TopBar />
      <h1 className="topic">Favorite Places</h1>
      <main>
        
        <div className="cardWrap">
          {videoArr}
        </div>
        <div className="blogLinks">
          {linkArr}
        </div>
        

      </main>
      
    </body>
    
  );
}

export default App;
