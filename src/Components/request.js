import { useEffect, useState } from "react";

const api_key = "26a9a3a8-858d-4de9-8e1c-0f8688759b04"

function Request() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        async function fetchFlights() {
            const response = await fetch("https://airlabs.co/api/v9/flights?_view=array&aircraft_icao=B77W&api_key=" + api_key);
            const data = await response.json();
            let flightArray = data.response;

            let airportArray = await fetchAirports();
            let shortenedArray = flightArray.slice(0, 10);

            shortenedArray = getDepartureAndArrival(shortenedArray, airportArray);
            shortenedArray = await getAirlineName(shortenedArray);
            console.log(shortenedArray);
            setFlights(shortenedArray);
        }

        function getDepartureAndArrival(flightsArray, airportArray) {
            flightsArray.map((flight) => {
                if (flight.dep_icao) {
                    let airportDeparture = airportArray.filter(airport => airport.icao_code === flight.dep_icao);
                    if (airportDeparture !== undefined && airportDeparture.length !== 0) {
                        flight.Departure = airportDeparture[0].name;
                    }
                }
                if (flight.arr_icao) {
                    let airportArrival = airportArray.filter(airport => airport.icao_code === flight.arr_icao);
                    if (airportArrival !== undefined && airportArrival.length !== 0) {
                        flight.Arrival = airportArrival[0].name;
                    }
                }
                return flight;
            })
            return flightsArray
        }

        async function getAirlineName(flightsArray) {
            let airlines = await fetchAirlines();
            flightsArray.map((flight) => {
                if (flight.airline_icao) {
                    let airlineName = airlines.filter(airline => airline.icao_code === flight.airline_icao);
                    if (airlineName !== undefined && airlineName.length !== 0) {
                        flight.Airline = airlineName[0].name;
                    }
                }
                return flight;
            });
            return flightsArray;
        }

        async function fetchAirlines() {
            const response = await fetch("https://airlabs.co/api/v9/airlines?api_key=" + api_key);
            const data = await response.json();
            return data.response;
        }

        async function fetchAirports() {
            const response = await fetch("https://airlabs.co/api/v9/airports?api_key=" + api_key);
            const data = await response.json();
            return data.response;
        }



        fetchFlights();
    }, []);

    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-row bg-[#828594] py-6 px-4 text-xl">
                <div className="basis-1/6">Departure</div>
                <div className="basis-1/6">Arrival</div>
                <div className="basis-1/6">Aircraft</div>
                <div className="basis-1/6">Airline</div>
                <div className="basis-1/6">Altitude</div>
                <div className="basis-1/6">Speed</div>

            </div>
            {
                flights.map((flight) => {
                    return (<div className="w-full flex flex-row px-4 border py-2">
                        <div className="basis-1/6">{flight.Departure ? flight.Departure : ""}</div>
                        <div className="basis-1/6">{flight.Arrival ? flight.Arrival : ""}</div>
                        <div className="basis-1/6">{flight.aircraft_icao}</div>
                        <div className="basis-1/6">{flight.Airline}</div>
                        <div className="basis-1/6">{flight.alt} m</div>
                        <div className="basis-1/6">{flight.speed}km/h</div>

                    </div>)
                })
            }
        </div>
    );
}
export default Request;