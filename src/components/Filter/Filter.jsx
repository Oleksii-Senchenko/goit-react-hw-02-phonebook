
function Filter({searchQuery, onChange}) {
  return (
    <form action="">
      <input
        type="text"
        name="query"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={searchQuery}
        onChange={onChange}
      />
    </form>
  );
}

export default Filter;
