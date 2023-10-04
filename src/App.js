import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Calculator from './components/Calculator';
import Menu from './components/Menu';
import React, {useState} from 'react';
import Length from './components/Length';
import Area from './components/Area';
import Volume from './components/Volume';
import Weight from './components/Weight';
import Temperature from './components/Temperature';
import Speed from './components/Speed';
import Pressure from './components/Pressure';

function App({ answer, expression, showAnswer,history }) {
  const [selectedComponent, setSelectedComponent] = useState('Calculator');

  const handleComponentSelect = (componentName) => {
    setSelectedComponent(componentName);
  };
 
  return (
    <div className='layout'>
      <div className='panel'>
      
         <Menu
          expression={expression}
          answer={answer}
          showAnswer={showAnswer}
          onComponentSelect={handleComponentSelect}
        />
           
        {selectedComponent === 'Calculator' && <Calculator/>}
        {selectedComponent === 'Length' && <Length />}
        {selectedComponent === 'Area' && <Area />}
        {selectedComponent === 'Volume' && <Volume />}
        {selectedComponent === 'Weight' && <Weight />}
        {selectedComponent === 'Temperature' && <Temperature />}
        {selectedComponent === 'Speed' && <Speed />}
        {selectedComponent === 'Pressure' && <Pressure />}
      </div>
    </div>
  );
}

export default App;

    /* <Menu 
       expression={expression}
       answer={answer}
       showAnswer={showAnswer}
       history={history}
      onComponentSelect={handleComponentSelect} /> 
      
      {selectedComponent !== 'Calculator' && (
          <Menu
            onComponentSelect={handleComponentSelect}
          />
        )}
      */