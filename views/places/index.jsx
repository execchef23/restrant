const React = require('react')
const Def = require('../default')

function places () {
    return (
        <Def>
            <main>
                <h1>PLACES</h1>
            </main>
        </Def>
    )
}

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index