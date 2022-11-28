import React, {useState} from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    //You can delete this and insert it directly
    //into the onChange callabck since this
    //very short code.
    // const onInputChange = (event) => {
    //     setTerm(event.target.value);
    // };

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search and Receive a Video</label>
                    <input
                        type="text"
                        value={term}
                        //make the function an arrow function so this can work
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;