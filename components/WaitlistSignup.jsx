'use client'

import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
//images
import logo from '@/public/billy-logo.png'
//icons
import { RiArrowDownSFill } from 'react-icons/ri'
import Image from 'next/image'

const WaitlistSignup = () => {

    const [companyType, setCompanyType] = useState("");
    const [locations, setLocations] = useState([
        {
            "location": "Metro Manila",
            "selected": false
        },
        {
            "location": "Bulacan",
            "selected": false
        },
        {
            "location": "NLEX",
            "selected": false
        },
        {
            "location": "SLEX",
            "selected": false
        },
    ])
    const [adSpaceTypes, setAdSpaceTypes] = useState([
        {
            "name": "Wall Poster",
            "selected": false
        },
        {
            "name": "LED Board",
            "selected": false
        },
    ])

    const toggleSelectedLocation = (index) => {
        setLocations(
            locations.map((loc, i) => {
                if (index === i) {
                    loc.selected = !loc.selected
                }
                return loc
            })
        )
    }

    const toggleSelectedAdSpaceType = (index) => {
        setAdSpaceTypes(
            adSpaceTypes.map((type, i) => {
                if (index === i) {
                    type.selected = !type.selected
                }
                return type
            })
        )
    }

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center py-10 gap-16">

            <div id="forms__section1" className="forms__section__styles">
                <h1 className="forms__heading__styles">Hello, tell us about you!</h1>
                <div className="w-full flex flex-col gap-4">
                    <button value="advertiser" className="forms__button__styles" onClick={(e) => setCompanyType(e.target.value)}>I am a Business Owner</button>
                    <button value="provider" className="forms__button__styles" onClick={(e) => setCompanyType(e.target.value)}>I am an Ad Space Provider</button>
                </div>
                <button className="forms__navigate__button">next</button>
            </div>

            <div id="forms__section2" className="forms__section__styles">
                <h1 className="forms__heading__styles">Advertise with Billy!</h1>
               
               <div className="w-full flex flex-col gap-4">
                   <div className="flex flex-col gap-1">
                    <p className="text-sm">Company Email</p>
                    <input type="text" name="" id="" placeholder='hello@billy.com' className="input__styles" />
                   </div>
                    <div className="flex flex-col gap-1">
                        <p  className="text-sm">Company Name</p>
                        <input type="text" name="" id="" placeholder='Billy' className="input__styles" />
                    </div>
               </div>

               <button className="forms__navigate__button">next</button>
            </div>

            <div id="forms__section3" className="forms__section__styles">
                <h1 className="forms__heading__styles">Let us know what you need.</h1>

                {
                    companyType === 'advertiser' ? (
                        <div className="w-full flex flex-col gap-4">
                            <h2 className="text-yellow-main text-lg font-bold">Put up your campaign for as low as P50 a day!</h2>
                            <div className="w-full p-4 border-4 border-purple-main rounded-lg flex flex-col gap-4">
                                <p className="uppercase font-bold">Campaign Date</p>
                                <div className="flex justify-between">
                                    <div>
                                        <p>Start date</p>
                                        <input type="date"/>
                                    </div>
                                    <div>
                                        <p>End date</p>
                                        <input type="date"/>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-4 border-4 border-purple-main rounded-lg flex flex-col gap-4">
                                <p>Preferred Locations</p>
                                {locations.map((location, index) => (
                                    <button key={index} onClick={() => toggleSelectedLocation(index)} className={`flex flex-col ${!location.selected ? "text-white" : "text-yellow-main"}`}>{location.location}</button>
                                ))}
                            </div>
                            <div className="w-full p-4 border-4 border-purple-main rounded-lg flex flex-col gap-4">
                                <p>Ad Space Types</p>
                                {adSpaceTypes.map((type, index) => (
                                    <button key={index} onClick={() => toggleSelectedAdSpaceType(index)} className={`flex flex-col ${!type.selected ? "text-white" : "text-yellow-main"}`}>{type.name}</button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p>i am an provider</p>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default WaitlistSignup
