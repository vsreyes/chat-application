import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height='100vh'
      projectID='529f400b-aaa0-4d87-85b6-82a2671e2516'
      userName='vsreyes'
      userSecret='123456'
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
