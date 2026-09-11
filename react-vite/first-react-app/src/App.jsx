import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error('Unable to load users. Please try again.');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`app-shell ${isDarkMode ? 'dark' : 'light'}`}>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <section className="users-section">
          <div className="users-container">
            <h1>Explore Our Users</h1>
            <p className="users-intro">
              Search and explore users loaded from a public REST API.
            </p>

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            {loading && <Loading />}

            {error && <ErrorMessage message={error} />}

            {!loading && !error && (
              <UsersList users={filteredUsers} />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;