import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/MainComponents/Components/Header';
import Middle from './Components/MainComponents/Components/Middle';
import Footer from './Components/MainComponents/Components/Footer';


function App() {
    const [location, setLocation] = useState("main") 
    const [authentificateUser, setAuthentificateUser] = useState("")
    const [isUserAdmin, setIsUserAdmin] = useState(false)

    // useEffect(() => {
    //     fetch('https://api.osadrpg.ru/test/getTFirst')
    //     .then((response) => response.text())
    //     .then(text => {
    //         console.log(text)
    //         setTestVar(text)
    //     })
    // }, [])

    return (
        <div className="App">
            <Header 
                location={location} 
                setLocation={setLocation}
                authentificateUser={authentificateUser}
                setAuthentificateUser={setAuthentificateUser}
            />
            <Middle 
                location={location}
                setLocation={setLocation}
                authentificateUser = {authentificateUser}
                setAuthentificateUser = {setAuthentificateUser}
                setIsUserAdmin = {setIsUserAdmin}
            />
            <Footer/>
        </div>
    )
}

export default App;