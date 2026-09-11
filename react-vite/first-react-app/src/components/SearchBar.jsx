function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;