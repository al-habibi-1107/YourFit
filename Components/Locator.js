import { useEffect, useState } from "react";
import axios from "axios";
function Locator() {
    const [weather, setWeather] = useState({
        location: { name: "", localtime: "" },
        current: { temp_c: "" },
        wind_kph: "",
    });
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            axios
                .get(
                    "http://api.weatherapi.com/v1/current.json?key=04d9a2b9228442e4aeb52326210209&q=" +
                        position.coords.latitude +
                        "," +
                        position.coords.longitude
                )
                .then((res) => setWeather(res.data));
        });
        console.log(location);
    }, []);

    return (
        <>
            <p>{weather.location.name}</p>
            <p>{weather.location.localtime}</p>
            <p>{weather.current.temp_c + "C"}</p>
            <p>{weather.wind_kph}</p>
        </>
    );
}

export default Locator;
