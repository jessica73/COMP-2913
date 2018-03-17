import React from 'react';

class CarListItem extends React.Component {
    render() {
        console.log("carlistitem");
        return (
            <ul>
                { this.props.cars.map((car, idx) => {
                    return (
                        <li key={idx}>
                            { car.new && "*** NEW *** " }{car.brand} - {car.make} {car.year} - {car.price}
                            <br/>
                            <img src={car.imageURL} alt={idx} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default CarListItem;