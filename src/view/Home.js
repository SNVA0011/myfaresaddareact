import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import PopularDestinations from '../Molecules/Home/PopularDestinations';
import CustomizeTravel from '../Molecules/Home/CustomizeTravel';
import Enginebox from '../Molecules/Home/Enginebox';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <title>Myfaresadda | Book Low Fares Flights Tickets & Rental Cars</title>
                <meta name="description" content="Find the best fares at Myfaresadda on online flight booking, cheap car rentals & hotel booking. Get Guaranteed low fares and regular updates on flight status and fares." />
                <meta name="keywords" content="car rental booking, Low fares Flight booking online, cheap airlines ticket booking, Low fares flight tickets, airlines reservations online, airlines reservations, Low fares Flight Booking, Low fares Airline Tickets, Low fares Travel Agency" />
                <meta name="google-site-verification"
                    content="IEG6aJN1jwazM5MvbzLVoEJsAKnGlutoN0A2Q4a4QCw" />
                <link rel="canonical" href="https://www.myfaresadda.com/" />
                <link rel="alternate" href="https://www.myfaresadda.com/" />
            </Helmet>

            {/* enginebanner_sctn */}
            <Enginebox />

            {/* PopularDestinations */}
            <PopularDestinations />

            {/* CustomizeTravel */}
            <CustomizeTravel />


        </div>
    )
}




