

const MyButton = ({count, onClick}) => {
    
  return (
    <>
    <button style={{'marginRight':'1rem'}} onClick={onClick}>Button clicked {count} times</button>
    </>
  )
}

export default MyButton