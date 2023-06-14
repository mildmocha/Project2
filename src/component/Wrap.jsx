import classes from './Wrap.module.css';

const Wrap = ({children}) => {
  const style1 = {
    minWidth : '300px',
    
    minHeight: '500px',
    position: 'relative'
   , //background :  "#FFC125" 
  }

return (
    <div className="wrap" style= {style1}>
        {children}
    </div>
)
};
export default Wrap;