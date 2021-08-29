import React from 'react'
import All from './components/all';
import Home from './pages/home';
import Orders from './pages/orders';
import Tel from './pages/tel';
import { useParams } from 'react-router-dom';

const Dpages = () => {
    const { pages } = useParams();

    const Pages = (pages) => {
        switch (pages) {
          case "home":
            return <Home />;
            break;
          case "orders":
            return <Orders />;
            break;
          case "tel":
            return <Tel />;
            break;
    
          default:
            return <Home />;
        }
    };

  console.log(pages);
    return (
        <All>
            {Pages(pages)}
        </All>
    )
}

export default Dpages
