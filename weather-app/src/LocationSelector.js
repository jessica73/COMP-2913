import React, { Component } from 'react';

class LocationSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            location: e.target.value
        }, () => {
            // pass selected location back to main component
            this.props.onSelectLocation(this.state.location);
        });
    }

    /*
    future enhancement: get a list of locations from Yahoo
     */
    render() {
        return (
            <div style={{ paddingTop: '10px' }}>                
                <select value={this.state.location} onChange={this.handleChange}>
                    <option value="">-- Select a City --</option>
                    <option value="melbourne, au">1. Melboure, Australia</option>
                    <option value="vienna, at">2. Vienna, Austria</option>
                    <option value="vancouver, bc">3. Vancouver, Canada</option>
                    <option value="toronto, on">4. Toronto, Canada</option>
                    <option value="calgary, ab">5. Calgary, Canada (tie)</option>
                    <option value="adelaide, au">5. Adelaide, Australia (tie)</option>
                    <option value="perth, au">7. Perth, Australia</option>
                    <option value="auckland, nz">8. Auckland, New Zealand</option>
                    <option value="helsinki, fi">9. Helsinki, Finland</option>
                    <option value="hamburg, de">10. Hamburg, Germany</option>
                </select>                
            </div>
        );
    }
}

export default LocationSelector;