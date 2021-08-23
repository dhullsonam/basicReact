import './App.css';
import Menu from './Menu';

function Header(){
    return(
        <div>
            <h1 style={{color:'red'}}> I am header</h1>
            <Menu/>
        </div>
    );
}

export default Header;