'use client'

import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
//images
import logo from '@/public/billy-logo.png'
//icons
import { RiArrowDownSFill } from 'react-icons/ri'
import Image from 'next/image'

const WaitlistSignup = () => {

    const [companyType, setCompanyType] = useState("advertiser");
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

    const [ageRange, setAgeRange] = useState([
        {
            "range": "Below 18",
            "selected": false
        },
        {
            "range": "18 - 24",
            "selected": false
        },
        {
            "range": "25 - 34",
            "selected": false
        },
        {
            "range": "35 - 44",
            "selected": false
        },
        {
            "range": "45 - 54",
            "selected": false
        },
        {
            "range": "55 - 64",
            "selected": false
        },
        {
            "range": "65 and over",
            "selected": false
        },
    ])

    const [genders, setGenders] = useState([
        {
            "gender": "Male",
            "selected": false
        },
        {
            "gender": "Female",
            "selected": false
        },
        {
            "gender": "No Specific Preference",
            "selected": false
        }
    ])

    const [industries, setIndustries] = useState([
        {
            "name": "Healthcare",
            "selected": false
        },
        {
            "name": "Entertainment",
            "selected": false
        },
        {
            "name": "Retail",
            "selected": false
        },
        {
            "name": "Technology",
            "selected": false
        },
        {
            "name": "Fashion",
            "selected": false
        },
        {
            "name": "Business",
            "selected": false
        },
        {
            "name": "Finance",
            "selected": false
        },
        {
            "name": "Education",
            "selected": false
        },
        {
            "name": "Construction",
            "selected": false
        },
        {
            "name": "Healthcare",
            "selected": false
        },
        {
            "name": "Agriculture",
            "selected": false
        },
        {
            "name": "Fishing",
            "selected": false
        },
        {
            "name": "Manufacturing",
            "selected": false
        },
        {
            "name": "Transportation",
            "selected": false
        }

    ])

    const [show, setShow] = useState(false)
    const [itemsToShow, setItemsToShow] = useState("");


    const toggleSelected = (array, index, setter) => {
        setter(
            array.map((item, i) => {
                if (index === i) {
                    return { ...item, selected: !item.selected };
                }
                return item;
            })
        );
    };

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }

    const showItems = (elementId) => {
        setItemsToShow(prevState => prevState === elementId ? null : elementId);
    };

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center py-10 gap-16">

            <div id="forms__section1" className="forms__section__styles">
                <h1 className="forms__heading__styles">Hello, tell us about you!</h1>
                <div className="w-full flex flex-col gap-4">
                    <button value="advertiser" className={`forms__button__styles ${companyType === 'advertiser' ? "bg-gradient-to-br from-purple-main to-pink-main" : "bg-transparent"}`} onClick={(e) => setCompanyType(e.target.value)}>I am a Business Owner</button>
                    <button value="provider" className={`forms__button__styles ${companyType === 'provider' ? "bg-gradient-to-br from-purple-main to-pink-main" : "bg-transparent"}`} onClick={(e) => setCompanyType(e.target.value)}>I am an Ad Space Provider</button>
                </div>
                
                <div className="w-full flex gap-6 justify-end">
                <button className="forms__navigate__button" onClick={() => scrollToSection("forms__section2")}>next</button>
                </div>
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

               <div className="w-full flex gap-6 justify-end">
               <button className="forms__navigate__button" onClick={() => scrollToSection("forms__section1")}>back</button>
               <button className="forms__navigate__button" onClick={() => scrollToSection("forms__section3")}>next</button>
               </div>
            </div>

            <div id="forms__section3" className="forms__section__styles">
                <div className="w-full flex flex-col gap-2">
                <h1 className="forms__heading__styles">Let us know what you need.</h1>
                {companyType === 'advertiser' ? ( <h2 className="forms__subheading__styles">Put up your campaign for as low as P50 a day!</h2>) : (<h2 className="forms__subheading__styles">Connect to 1000+ Advertisers!</h2>)}
                </div>

                {
                    companyType === 'advertiser' ? (
                        <div className="w-full flex flex-col gap-4">
                            <div className="forms__question__styles">
                                <p id="campaignDate__sectionItems" className="forms__question__heading__styles" onClick={(e) => showItems(e.target.id)}>Campaign Date</p>
                                {itemsToShow === "campaignDate__sectionItems" && (
                                <div className="relative w-full flex flex-col justify-between gap-4 transition ease-in duration-700">
                                    <div className="w-full flex flex-col gap-1">
                                        <p>Start date</p>
                                        <input type="date" className="text-black"/>
                                    </div>
                                    <div className="w-full flex flex-col gap-1">
                                        <p>End date</p>
                                        <input type="date" className="text-black"/>
                                    </div>
                                </div>
                                )}
                               
                            </div>
                            <div className="forms__question__styles">
                                <p id="preferredLocations__sectionItems" className="forms__question__heading__styles" onClick={(e) => showItems(e.target.id)}>Preferred Locations</p>
                                {itemsToShow === "preferredLocations__sectionItems" && (
                                    <div className="forms__selectQuestion__styles">
                                    {locations.map((location, index) => (
                                        <button key={index} onClick={() => toggleSelected(locations, index, setLocations)} className={`forms__questionItem__styles ${!location.selected ? "bg-none" : "bg-pink-main"}`}>{location.location}</button>
                                    ))}
                                </div> 
                                )}
                            </div>
                            <div className="forms__question__styles">
                                <p id="adSpaceTypes__sectionItems" className="forms__question__heading__styles" onClick={(e) => showItems(e.target.id)}>Ad Space Types</p>
                                
                                {itemsToShow === "adSpaceTypes__sectionItems" && (
                                    <div className="forms__selectQuestion__styles">
                                    {adSpaceTypes.map((type, index) => (
                                        <button key={index} onClick={() => toggleSelected(adSpaceTypes, index, setAdSpaceTypes)} className={`forms__questionItem__styles ${!type.selected ? "text-white" : "text-yellow-main"}`}>{type.name}</button>
                                    ))}    
                                </div>
                                )}  
                            </div>
                            <div className="forms__question__styles">
                                <p id="targetDemographics__sectionItems" className="forms__question__heading__styles" onClick={(e) => showItems(e.target.id)}>Target Demographics</p>
                                
                                {itemsToShow === "targetDemographics__sectionItems" && (
                                    <>
                                    <div className="w-full flex flex-col gap-4 rounded-lg">
                                    <p>Age</p>
                                    <div className="forms__selectQuestion__styles">
                                        {ageRange.map((age, index) => (
                                            <button key={index} onClick={() => toggleSelected(ageRange, index, setAgeRange)} className={`forms__questionItem__styles ${!age.selected ? "text-white" : "text-yellow-main"}`}>{age.range}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-4 rounded-lg">
                                    <p>Gender</p>
                                    <div className="forms__selectQuestion__styles">
                                        {genders.map((gender, index) => (
                                            <button key={index} onClick={() => toggleSelected(genders, index, setGenders)} className={`forms__questionItem__styles ${!gender.selected ? "text-white" : "text-yellow-main"}`}>{gender.gender}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-4 rounded-lg">
                                    <p>Industry</p>
                                    <div className="forms__selectQuestion__styles">
                                        {industries.map((industry, index) => (
                                            <button key={index} onClick={() => toggleSelected(industries, index, setIndustries)} className={`forms__questionItem__styles ${!industry.selected ? "text-white" : "text-yellow-main"}`}>{industry.name}</button>
                                        ))}
                                    </div>
                                </div>
                                    </>
                                )}
                                
                            </div>

                            <div className="w-full flex gap-6 justify-end">
                                <button className="forms__navigate__button" onClick={() => scrollToSection("forms__section2")}>back</button>
                                <button className="forms__navigate__button" onClick={() => scrollToSection("forms__section4")}>next</button>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col gap-4">
                            {/* <div className="forms__question__styles">
                                <p className="forms__question__heading__styles">Campaign Date</p>
                                <div className="w-full flex flex-col justify-between gap-4">
                                    <div className="w-full flex flex-col gap-1">
                                        <p>Start date</p>
                                        <input type="date" className="text-black"/>
                                    </div>
                                    <div className="w-full flex flex-col gap-1">
                                        <p>End date</p>
                                        <input type="date" className="text-black"/>
                                    </div>
                                </div>
                            </div> */}
                            <div className="forms__question__styles">
                                <p id="adSpaceLocations__sectionItems" className="forms__question__heading__styles" onClick={(e) => showItems(e.target.id)}>Ad Space Locations</p>
                                
                                {itemsToShow === "adSpaceLocations__sectionItems" && (
                                    <div className="forms__selectQuestion__styles">
                                    {locations.map((location, index) => (
                                        <button key={index} onClick={() => toggleSelected(locations, index, setLocations)} className={`forms__questionItem__styles ${!location.selected ? "bg-none" : "bg-pink-main"}`}>{location.location}</button>
                                    ))}
                                </div> 
                                )}
                                
                            </div>
                            <div className="forms__question__styles">
                                <p id="providedAdSpaceTypes__sectionItems" className="forms__question__heading__styles" onClick={(e) => showItems(e.target.id)}>Ad Space Types</p>
                                {itemsToShow === "providedAdSpaceTypes__sectionItems" && (
                                    <div className="forms__selectQuestion__styles">
                                    {adSpaceTypes.map((type, index) => (
                                        <button key={index} onClick={() => toggleSelected(adSpaceTypes, index, setAdSpaceTypes)} className={`forms__questionItem__styles ${!type.selected ? "text-white" : "text-yellow-main"}`}>{type.name}</button>
                                    ))}    
                                </div>     
                                )}
                            </div>
                            <div className="w-full flex gap-6 justify-end">
                                <button className="forms__navigate__button" onClick={() => scrollToSection("forms__section2")}>back</button>
                                <button className="forms__navigate__button" onClick={() => scrollToSection("forms__section4")}>submit</button>
                            </div>
                        </div>
                    )
                }
                
            </div>
            <div id="forms__section4" className="herosection_background forms__section__styles p-0">
                <div className="w-full h-full flex flex-col justify-center gap-3 bg-black/60 p-10">
                    <h1 className="w-full font-bold text-pink-main text-4xl drop-shadow-lg">You have successfully registered!</h1>
                    <h2>Kindly wait for our email confirmation.</h2>
                </div>
            </div>
        </div>
    )
}

export default WaitlistSignup
