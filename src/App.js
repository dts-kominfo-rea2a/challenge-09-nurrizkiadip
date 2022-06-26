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
        <Contact key={0} data={contacts[0]}></Contact>
        <Contact key={1} data={contacts[1]}></Contact>
        <Contact key={2} data={contacts[2]}></Contact>
        <Contact key={3} data={contacts[3]}></Contact>
        <Contact key={4} data={contacts[4]}></Contact>
        <Contact key={5} data={contacts[5]}></Contact>
      </div>
    </div>
  );
}

export default App;
