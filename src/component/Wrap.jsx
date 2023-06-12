

const Wrap = ({children}) => {
  const style1 = {
    width : '360px',
    height : '640px',
    position: 'relative'
   , background :  "#FFC125" 
  }

return (
    <div className="wrap" style= {style1}>
        {children}
    </div>
)
};
export default Wrap;