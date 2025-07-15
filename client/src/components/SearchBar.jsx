import { useEffect } from 'react';


const SearchBar = () => {
  useEffect(() => {
    let milliseconds = 7000;

    const writePlaceholder = (fieldId, text, n) => {
      if (n < text.length) {
        const field = document.getElementById(fieldId);
        if (field) {
          field.placeholder = text.substring(0, n + 1);
          setTimeout(() => {
            writePlaceholder(fieldId, text, n + 1);
          }, 65);
        }
      }
    };

    const intervalPlaceholder = (fields) => {
      return setInterval(() => {
        for (const key in fields) {
          if (fields.hasOwnProperty(key)) {
            writePlaceholder(key, fields[key], 0);
          }
        }
      }, milliseconds);
    };

    const setFields = (fields) => {
      for (const key in fields) {
        if (fields.hasOwnProperty(key)) {
          writePlaceholder(key, fields[key], 0);
        }
      }
      return intervalPlaceholder(fields);
    };

    const intervalId = setFields({
      name: 'Search your groceries items...'
    });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <form
        action="/search"
        method="get"
        role="search"
        className="flex items-center relative"
      >
        <span className="absolute left-6 text-lg text-gray-500">
          <i className="feather-search"></i>
        </span>
        <input
          type="search"
          name="q"
          id="name"
          required
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="Search your groceries items..."
          role="combobox"
          aria-expanded="false"
          aria-owns="search-ajax-results"
          aria-controls="search-ajax-results"
          aria-haspopup="listbox"
          aria-autocomplete="list"
          className="w-full h-[60px] pl-[50px] pr-[120px] border border-gray-300 rounded-md"
        />
        <input type="hidden" name="options[prefix]" value="last" />
        <button
          type="reset"
          className="hidden"
        ></button>
        <button
          type="submit"
          className="absolute right-4 bg-[#ff8a5c] text-white px-5 py-2 rounded-md hover:bg-[#fbdf58] hover:text-black transition"
        >
          Search
        </button>
      </form>

      {/* Optional: Placeholder for AJAX results */}
      <div
        id="search-ajax-results"
        className="absolute left-0 w-full top-full z-10 opacity-0 invisible transition duration-300 bg-white shadow-md"
        tabIndex={-1}
      ></div>

      <span
        className="sr-only"
        role="status"
        aria-hidden="true"
      ></span>
    </div>
  );
};

export default SearchBar;
