// import ReactDOM from 'react-dom';
import TestApp from './components/TestApp.jsx'; 
import Header from './components/Header.jsx';
import Invite from './components/Invite.jsx';
import Result from './components/Result.jsx';

// import LoginPage from './account/LoginPage.jsx';
// import SignUpPage from './account/SignUpPage.jsx';
// import { BrowserRouter, Route } from 'react-router-dom';

var headerContainer = document.getElementById('navbar-right-part');
ReactDOM.render((
        <Header 
            userEmail={headerContainer.getAttribute('userEmail')}
            userName={headerContainer.getAttribute('userName')}
            userId={headerContainer.getAttribute('userId')}
            userRole={headerContainer.getAttribute('userRole')}
        />
    ),
    headerContainer
);

if (document.getElementById('react-app')) {
    ReactDOM.render(<TestApp />, document.getElementById('react-app'));
}

if (document.getElementById('invite-app')) {
    ReactDOM.render(<Invite />, document.getElementById('invite-app'));
}

if (document.getElementById('result-app')) {
    ReactDOM.render(<Result />, document.getElementById('result-app'));
}

// import { browserHistory } from 'react-router';

// import createBrowserHistory from 'history/createBrowserHistory'
// const newHistory = createBrowserHistory();

// ReactDOM.render((
//         <div>
//             <BrowserRouter>
//                 <Route path="/" component={TestApp}/>
//             </BrowserRouter>
//             <BrowserRouter>
//                 <Route path="/login" component={LoginPage}/>
//             </BrowserRouter>
//             <BrowserRouter>
//                 <Route path="/signup" component={SignUpPage}/>
//             </BrowserRouter>
//         </div>
//     ),
//     document.getElementById('react-app')
// );
