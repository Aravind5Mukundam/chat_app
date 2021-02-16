import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css'; 
 
const ProjectID =  "c56ed7c2-efd6-434b-886f-e8b4b12854cd";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height = "100vh"
            projectID = {ProjectID}
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
            onNewMessage={()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        /> 



    );
};

export default App;