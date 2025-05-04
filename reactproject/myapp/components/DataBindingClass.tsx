import React, { Component } from "react";

// Define the interface for component state
interface DataBindingState {
    fullName: string;
    firstName: string;
    address: string;
}

// Define the interface for component props (empty if no props are used)
interface DataBindingProps {}

class DataBindingClass extends Component<DataBindingProps, DataBindingState> {
    constructor(props: DataBindingProps) {
        super(props);
        this.state = {
            fullName: "Nishant Taneja",
            firstName: "Nishant",
            address: "", // Ensure address is defined
        };

        // Bind methods
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        // Create ref with proper type
        this.addressRef = React.createRef<HTMLInputElement>();
    }

    // Define ref type
    private addressRef: React.RefObject<HTMLInputElement>;

    // Type the event for input change
    handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ address: event.target.value });
    }

    // Type the event for button click
    handleClick(event: React.MouseEvent<HTMLInputElement>) {
        console.log("Button clicked!", this.state);
    }

    render() {
        // Destructuring state with proper types
        const { fullName, address } = this.state;
        const name = "Test";

        return (
            <div>
                <h5>This is my component</h5>
                <p>My name is {name}</p>
                <p>Full Name is {fullName}</p>
                <i>Full name is {fullName}</i>
                <input
                    type="text"
                    ref={this.addressRef}
                    placeholder="Enter address"
                />
                <input
                    type="text"
                    value={address}
                    onChange={this.handleTextChange}
                    placeholder="Enter text"
                />
                <input
                    type="button"
                    value="Click me"
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default DataBindingClass;