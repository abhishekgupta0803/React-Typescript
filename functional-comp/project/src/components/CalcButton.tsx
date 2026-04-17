type btnProps = {
    label : string;
    onClick : ()=>void;
}

const CalcButton = ({label , onClick} :btnProps) => {
  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default CalcButton