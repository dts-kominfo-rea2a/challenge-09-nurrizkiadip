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
        <Contact key={0} contact={contacts[0]}></Contact>
        <Contact key={1} contact={contacts[1]}></Contact>
        <Contact key={2} contact={contacts[2]}></Contact>
        <Contact key={3} contact={contacts[3]}></Contact>
        <Contact key={4} contact={contacts[4]}></Contact>
        <Contact key={5} contact={contacts[5]}></Contact>
      </div>
    </div>
  );
}

export default App;
