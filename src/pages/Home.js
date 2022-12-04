import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Todo from './Todo';
import '../App.css';

const Home = () => {

    const navigate = useNavigate();

    const navigateToToDo = () => {
        navigate('/todo');
    };

    return(
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>Navigate around</h1>
                    <h3>Home Page</h3>
                    <button onClick={signOut}>Sign Out</button>
                    <button onClick={navigateToToDo}>To-Do Page</button>
                    <Routes>
                        <Route path="/todo" element={<Todo />}/>
                    </Routes>
                </div>    
            )}
        </Authenticator>
    );
};



export default Home;