import Collapse from './components/Collapse';
import './App.css';

function App() {
  return (
    <div className="App">
      <Collapse 
       collapsedLabel='Показать'
       expandedLabel='Скрыть'
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint dicta minima explicabo voluptate, odit atque fugiat ad dolorum impedit id beatae tempore culpa ex perspiciatis ipsum. Voluptas inventore expedita, odio ipsam cumque voluptatum, magnam, dolorem commodi quisquam vero odit enim in! Deleniti in tempora eveniet quas perferendis quae repellat totam fugiat, obcaecati vel blanditiis quia assumenda vero soluta officiis beatae. Nulla ex illum dolores porro aperiam doloribus consequuntur, deleniti minus voluptatibus repudiandae, iure facere dignissimos dicta eum accusamus? Est rerum, ipsum sint deserunt voluptatum tempore voluptatibus quo excepturi aperiam!</p>
      </Collapse>
    </div>
  );
};

export default App;
