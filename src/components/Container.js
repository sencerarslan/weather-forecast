import Days from './Days';
import Dropdown from './Dropdown'; 

function Container() {
  return (
    <>   
        <div className="container">
          <Dropdown />
          <Days />
        </div> 
    </>
  );
}

export default Container;