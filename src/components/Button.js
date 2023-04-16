const Button = ({color, text}) => {
  const onClick = () => {
    console.log(document.getElementById('usernameInput').value)
  }
  
    return (
    <button onClick={onClick} style={{backgroundColor: color}} className='btn'>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'black'
}

export default Button