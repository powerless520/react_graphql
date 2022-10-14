import './App.css';
import {useQuery, gql} from "@apollo/client";

function App() {
    return (
        <div>
            <h2>My first Apollo app 🚀</h2>
            <br/>
            <DisplayLocations />
        </div>
    );
}

const GET_LOCATIONS = gql`
query GetLaunches {
    launches {
        cursor
        hasMore
        launches {
            id
            site
            mission {
                name
                missionPatch
            }
            isBooked
            rocket {
                id
                name
                type
            }
        }
    }
}
`;

function DisplayLocations() {
    const {loading, error, data} = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return JSON.stringify(data);

//  return data.locations.map(({ id, name, description, photo }) => (
//      <div key={id}>
//        <h3>{name}</h3>
//        <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//        <br />
//        <b>About this location:</b>
//        <p>{description}</p>
//        <br />
//      </div>
//  ));
}

export default App;
