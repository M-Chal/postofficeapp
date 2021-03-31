import {useState ,useEffect} from 'react';
import axios from 'axios';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import toast, {Toaster} from 'react-hot-toast';

function App() {

  const [search, setSearch] = useState("");
  const [response, setResponse] = useState();
  const [zoom, setZoom] = useState(8);
  const [searchLocation, setSearchLocation] = useState([-0.439772,51.8990943]);

  const fetchPostOffice = async () => {
    /*Displays a Loading "toast" while the api is being posted*/
    toast.loading("Loading...");
    /*Structuring query from search state*/
    const query = {searchString : search};  
    /*axios.post to send a POST query to the API (Using Jenky method to bypass CORS error) */  
    axios.post("https://cors-anywhere.herokuapp.com/https://www.postoffice.co.uk/.rest/branch-finder/ep/branch", query)
      .then(response => setResponse(response));
  };

  useEffect(() => {
    /*If the Response gets changed ...*/
    if(response){
      /*Dismissing the loading "toast"*/
      toast.dismiss();
      toast.success("Success!");

      /*Updating the search location state, comes as "longitude|latitude" from api, need to seperate them using split()*/
      setSearchLocation(response.data.responseBody.selectedCoordinates.split("|"));
      setZoom(12);
    }
  }, [response])


  return (
    <div>
      {/*Toaster is for notifications in top left*/}
      <div><Toaster position="top-left"/></div>
      {/*SearchBar component is for the search bar using Material UI*/}
      <SearchBar search={fetchPostOffice} setSearch={(e) => setSearch(e.target.value)}/>
      {/*Map component with the latitude and longitude being passed in from the API, also passing down the branches info*/}
      <Map center={{lat:parseFloat(searchLocation[1]), lng: parseFloat(searchLocation[0])}} zoom={zoom} branches={response? response.data.responseBody.branchList : []}/>
    </div>
  );
}

export default App;
