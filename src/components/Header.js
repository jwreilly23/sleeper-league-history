import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  return (
    <header className='header'>
        <h1>{props.title} - League History</h1>
        <input id='usernameInput' placeholder='Enter Username'></input>
        <Button color='green' text='Submit' onClick=''/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Username',
}

// can use the below to require properties/fix to variable types
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header