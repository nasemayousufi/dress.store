import React, { useState } from 'react';
import { Form, FormControl, Button, Dropdown } from 'react-bootstrap';

function SearchBar() {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchBarClick = () => {
        // Implement the logic you want to execute when the search bar button is clicked
        setShowSearch(!showSearch); // Example: Toggles the search bar visibility
    };

    return (
        <div>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={handleSearchBarClick} variant="outline-success">Search</Button>
            </Form>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default SearchBar;