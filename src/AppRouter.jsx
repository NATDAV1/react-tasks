import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Board from './components/views/Board.jsx';
import Header from './components/Header';

const Error404 = () => {
    return (
        <div>Error 404</div>
    );
}

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                {/* <Route path="/:lang(en|es)/login" component={Login} exact /> */}
                <Route path="/" component={Board} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/board/:id" component={Board} exact />
                <Route path="*" component={Error404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

// 404
// const Error404 = (props) => {
//     // const unblock = props.history.block('Are you sure you want to leave this page?');
//     // unblock();


//     const input = React.createRef();
//     props.history.block((location, action) => {
//         // The location and action arguments indicate the location
//         // we're transitioning to and how we're getting there.

//         // page if there's a form they haven't submitted yet.

//         if(input.current && input.current.value) {
//             return 'Are you sure you want to leave this page?';
//         }
//     });

//     return (
//         <div>
//             Error 404
//             <button onClick={props.history.goBack}>
//                 {'<='}
//             </button>
//             <button onClick={props.history.goForward}>
//                 {'=>'}
//             </button>

//             <button onClick={() => props.history.go(-2)}>
//                 {'<= x2'}
//             </button>

//             <button onClick={() => props.history.push('https://google.es/')}>
//                 {'404'}
//             </button>

//             <input type="text" ref={input}/>

//         </div>
//     );
// }