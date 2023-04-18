import React, { useState } from 'react';
import ListeBanque from './Pages/ListBanque';

const App: React.FC = ({}) =>
{
    return (
    <div className='bg-Gray33' >
      <p>HEADER NAVBAR</p>
      <ListeBanque />
      <p>FOOTER ABOUT US</p>
    </div>
    )
};

export default App;

