import { useEffect, useState } from "react";

const api_key = "26a9a3a8-858d-4de9-8e1c-0f8688759b04"

function ApiRequest() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        async function fetchFlights() {
            const response = await fetch("https://airlabs.co/api/v9/flights?_view=array&aircraft_icao=B77W&api_key=" + api_key);
            const data = await response.json();
            let flightArray = data.response;

            let airportArray = await fetchAirports();

            flightArray = getDepartureAndArrival(flightArray, airportArray);
            flightArray = await getAirlineName(flightArray);
            console.log(flightArray);
            setFlights(flightArray);
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
            <div className="flex flex-row   text-xl">
                <div className="basis-3/12 bg-slate-100 p-2 rounded-bl-xl rounded-br-md">Departure</div>
                <div className="basis-3/12 bg-slate-200 p-2 rounded-b-md">Arrival</div>
                <div className="basis-2/12 bg-slate-300 p-2 rounded-b-md">Aircraft</div>
                <div className="basis-2/12 bg-slate-400 p-2 rounded-b-md">Airline</div>
                <div className="basis-1/12 bg-slate-500 p-2 rounded-b-md">Altitude</div>
                <div className="basis-1/12 bg-slate-600 p-2 rounded-b-md">Speed</div>

            </div>
            {
                flights.map((flight) => {
                    return (<div className="w-full flex flex-row px-4 border py-2 ">
                        <div className="basis-3/12 p-2">{flight.Departure ? flight.Departure : ""}</div>
                        <div className="basis-3/12 p-2">{flight.Arrival ? flight.Arrival : ""}</div>
                        <div className="basis-2/12 p-2">{flight.aircraft_icao}</div>
                        <div className="basis-2/12 p-2">{flight.Airline}</div>
                        <div className="basis-1/12 p-2">{flight.alt} m</div>
                        <div className="basis-1/12 p-2">{flight.speed}km/h</div>

                    </div>)
                })
            }
        </div>
    );
}
export default ApiRequest;