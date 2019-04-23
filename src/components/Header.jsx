import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <div>
            <div style={{
                backgroundColor: 'rgb(124, 23, 6)',
                height: '7em',
                alignItems: 'center',
            }}>
                <NavLink
                    activeClassName={'is-active'}
                    activeStyle={{
                        fontSize: '1.5em',
                        color: 'white',
                    }}
                    to='/login'
                    exact>
                    <button>Login</button>
            </NavLink>
                <Link
                    activeClassName={'is-active'}
                    activeStyle={{
                        fontSize: '1.5em',
                        color: 'white',
                        
                    }}
                    to='/board/default'
                    exact>
                    <button>Board</button>
                </Link>

            </div>
            <div>
                {/* <button variant="outline-info" onClick={() => props.history.goBack()}>
                    {'<='}
                </button>
                <button variant="outline-info" onClick={() => props.history.goForward()}>
                    {'=>'}
                </button>
                <button variant="outline-info" onClick={() => props.history.go(-2)}>
                    {'<= x2'}
                </button> */}
                {/* <button onClick={() => props.history.push()}>
                    {}  
                </button> */}
            </div>
        </div>
    );
}
export default Header;