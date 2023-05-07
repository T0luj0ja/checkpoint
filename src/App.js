import ProfilePhoto from './components/Profile.js/ProfilePhoto';
import FullName from './components/Profile.js/FullName';
import Address from './components/Profile.js/Address';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
