import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from "./components/Contact";
import Header from "./components/Header";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App

  return (
    <div className="App">
      <Header></Header>
      <div className="contact-container">
        <Contact contact={contacts[0]}></Contact>
        <Contact contact={contacts[1]}></Contact>
        <Contact contact={contacts[2]}></Contact>
        <Contact contact={contacts[3]}></Contact>
        <Contact contact={contacts[4]}></Contact>
        <Contact contact={contacts[5]}></Contact>
      </div>
    </div>
  );
}

export default App;
