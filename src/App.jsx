import ContactForm from './components/contact-form/ContactForm';
import ContactList from './components/contact-list/ContactList';
import SearchBox from './components/search-box/SearchBox';
import './App.css'

function App() {
  return (
    <>
      <h1>Phone Book</h1>

      <ContactForm />

      <SearchBox />

      <ContactList />
    </>
  )
}

export default App
