// this component takes properties data from backend and display it in the home page

import axios from "axios";
import React, { useEffect, useState } from "react";
import PropertyCard from "../../components/Card/propertyCard";
import frontal1 from "../../assets/Images/mockData/1_frontal.jpg"
import frontal2 from "../../assets/Images/mockData/2_frontal.jpg"
import frontal3 from "../../assets/Images/mockData/3_frontal.jpg"
import frontal4 from "../../assets/Images/mockData/4_frontal.jpg"
import globe from "../../assets/Images/globe.png"
import { Link } from "react-router-dom";


function FeaturedProperty({ isAuthenticated }) {

    const [properties, setProperties] = useState([
        {
            id: 1,
            image: frontal1,
            rate: '120000',
            location: {
                street_number: 420,
                street_name: 'Beverly',
                city: 'SpringField',
                state: 'Beverly',
            },
            title: 'Luxury Apartment',
            bhk: '2',
            bedrooms: 2,
            bathrooms: 2,
            area: '10x10',
            rentBuy: 'Buy'
        },
        {
            id: 2,
            image: frontal2,
            rate: '180000',
            location: {
                street_number: 420,
                street_name: 'Beverly',
                city: 'SpringField',
                state: 'Beverly'
            },
            title: 'Beverly SpringField',
            bhk: '3',
            bedrooms: 3,
            bathrooms: 3,
            area: '6x9',
            rentBuy: 'Buy'
        },
        {
            id: 3,
            image: frontal3,
            rate: '99000',
            location: {
                street_number: 420,
                street_name: 'Beverly',
                city: 'SpringField',
                state: 'Beverly'
            },
            title: 'Cozy Apartment',
            bhk: '1',
            bedrooms: 1,
            bathrooms: 1,
            area: '3x8',
            rentBuy: 'Buy'
        },
        {
            id: 5,
            image: frontal1,
            rate: '200',
            location: {
                street_number: 420,
                street_name: 'Beverly',
                city: 'SpringField',
                state: 'Beverly',
            },
            title: 'Luxury Apartment',
            bhk: '2',
            bedrooms: 2,
            bathrooms: 2,
            area: '10x10',
            rentBuy: 'Rent'
        },
        {
            id: 6,
            image: frontal2,
            rate: '180',
            location: {
                street_number: 420,
                street_name: 'Beverly',
                city: 'SpringField',
                state: 'Beverly'
            },
            title: 'Beverly SpringField',
            bhk: '3',
            bedrooms: 3,
            bathrooms: 3,
            area: '6x9',
            rentBuy: 'Rent'
        },
        {
            id: 7,
            image: frontal3,
            rate: '1200',
            location: {
                street_number: 420,
                street_name: 'Beverly',
                city: 'SpringField',
                state: 'Beverly'
            },
            title: 'Cozy Apartment',
            bhk: '1',
            bedrooms: 1,
            bathrooms: 1,
            area: '3x8',
            rentBuy: 'Rent'
        },
        {
            id: 8,
            image: frontal4,
            rate: '900',
            location: {
                street_number: 420,
                street_name: 'Beverly',
                city: 'SpringField',
                state: 'Beverly'
            },

        }
    ]);

    // use axios to get data from backend
    // useEffect(() => {
    //     axios.get("http://localhost:5000/api/properties/buy").then((res) => {
    //         setProperties(res.data);
    //     });
    // }, []);

    const [favorites, setFavorites] = useState([]);

    return (
        <>
            <div className="mx-auto max-w-full px-4 lg:px-24 md:px-8 md:flex-row flex lg:flex-row flex-wrap my-0 justify-normal">
                <h2 className="text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-7xl sm:mb-5 sm:mx-6">
                    Featured Properties
                </h2>
            </div>

            <div className=" bg-slate-100 flex flex-col gap-20 py-14">
                {/* return rent */}
                <div className="mx-auto">
                    <div className="flex lg:flex-row lg:px-0 lg:justify-between flex-col mb-6 px-2">
                        <h2 className="text-5xl font-bold">Rent</h2>
                        <span className="self-start lg:self-end text-gray-400"><Link to="/rent" className="transition-all hover:underline hover:text-blue-700">Explore all Rent</Link> &rarr;</span>
                    </div>
                    <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-3 justify-start md:grid-cols-2">
                        {properties.map((property) => (
                            property.rentBuy === "Rent" && <PropertyCard key={property.id} property={property} favourites={favorites} setFavourites={setFavorites} isAuthenticated={isAuthenticated} />
                        ))}
                    </div>
                </div>

                {/* return buy */}
                <div className="mx-auto">
                    <div className="flex lg:flex-row lg:px-0 lg:justify-between flex-col mb-6 px-2">
                        <h2 className="text-5xl font-bold">Buy</h2>
                        <span className="self-start lg:self-end text-gray-400"><Link to="/rent" className="transition-all hover:underline hover:text-blue-700">Explore all Buy</Link> &rarr;</span>
                    </div>
                    <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-3 justify-start md:grid-cols-2">
                        {properties.map((property) => (
                            property.rentBuy === "Buy" && <PropertyCard key={property.id} property={property} favourites={favorites} setFavourites={setFavorites} isAuthenticated={isAuthenticated} />
                        ))}
                    </div>
                </div>
            </div>

            {/* div to display some centered text */}

            <div className="flex flex-wrap justify-center text-center lg:my-16 my-8 max-w-3xl mx-auto">
                <div className="p-4">
                    <h2 className="text-6xl font-bold text-gray-900 mb-6">
                        wherever you are, you will definitely get a place
                    </h2>
                    <p className="text-gray-400 font-semibold text-lg max-w-xl mx-auto">
                        Wherever you want to live, don&apos;t hesitate to contact us. We will help you find the best place for you.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-center text-center lg:my-16 my-8 mx-auto">
                <img src={globe} alt="globe" className="w-1/2" />
            </div>
        </>
    );
}

export default FeaturedProperty;