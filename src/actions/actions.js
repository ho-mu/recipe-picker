

const setUser = (username) => {
    return {
        type: 'SET_USER',
        username
    };
}

const addTrip = (details) => {
    return {
        type: 'ADD_TRIP',
        details
    };
}

const loadAllTrips = (trips) => {
    return {
        type: 'LOAD_ALL_TRIPS',
        trips
    }
}

const addUserToTrip = (username, id) => {
    return {
        type: 'ADD_USER_TO_TRIP',
        username,
        id
    }
}

const removePassenger = (passenger, id) => {
    return {
        type: 'REMOVE_PASSENGER',
        passenger,
        id
    }
}

const updateTripFilter = (filter) => {
    return {
        type: 'UPDATE_TRIP_FILTER',
        filter
    }
}

const removeTrip = (id) => {
    return {
        type: 'REMOVE_TRIP',
        id
    }
}

export { setUser, addTrip, addUserToTrip, loadAllTrips, removePassenger, updateTripFilter, removeTrip }
