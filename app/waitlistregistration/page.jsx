'use client'

import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
//images
import logo from '@/public/billy-logo.png'
//icons
import { RiArrowDownSFill } from 'react-icons/ri'
import Image from 'next/image'

const WaitlistRegistration = () => {
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [companyType, setCompanyType] = useState('')
    const toastID = useRef()
    const handleSubmit = async () => {
        toastID.current = toast.loading('Registering...')
        if (!email && !companyName && !companyType) {
            toast.update(toastID.current, {
                isLoading: false,
                autoClose: 3000,
                type: 'error',
                render: 'Please complete the forms!',
            })
        }
        const res = await fetch('/api/waitlist', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                company_type: companyType,
                company_name: companyName,
            }),
        })
        if (!res.ok) {
            toast.update(toastID.current, {
                isLoading: false,
                autoClose: 3000,
                type: 'error',
                render: 'Something went wrong!',
            })
        }
        console.log(res)
        toast.update(toastID.current, {
            isLoading: false,
            autoClose: 3000,
            type: 'success',
            render: 'Successfully registered!',
        })
    }
    return (
        <main className="m-0 w-full h-[85vh] flex flex-col lg:flex-row items-center justify-evenly">
            <div className="flex items-center font-black text-[60px] md:text-[100px]">
                <Image
                    src={logo}
                    width={300}
                    height={300}
                    alt="billy logo"
                    className="w-[100px] lg:w-[300px]"
                />
                <h1 className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-main to-pink-main">
                    BILLY
                </h1>
            </div>
            <div className="w-[90%] md:w-[60%] lg:w-[25%] h-[50vh] px-10 flex flex-col items-center justify-center bg-purple-secondary rounded-lg drop-shadow-lg">
                <div className="w-full h-full flex flex-col items-center justify-evenly">
                    <p className="w-full text-pink-main font-bold text-xl">
                        Join our waitlist!
                    </p>

                    <div className="w-full flex flex-col gap-2 text-gray-main items-center justify-center">
                        <h2>How will you use Billy?</h2>
                        <div className="w-full flex items-center justify-center gap-4 text-lg">
                            <div
                                className="flex items-center gap-1 cursor-pointer"
                                onClick={() => {
                                    document
                                        .getElementById('advertiser')
                                        .click()
                                }}
                            >
                                <input
                                    id="advertiser"
                                    type="radio"
                                    name="company_type"
                                    onChange={(e) =>
                                        setCompanyType(e.target.value)
                                    }
                                    value="advertiser"
                                />
                                <p>Advertiser</p>
                            </div>
                            <div
                                className="flex items-center gap-1 cursor-pointer"
                                onClick={() => {
                                    document.getElementById('owner').click()
                                }}
                            >
                                <input
                                    id="owner"
                                    type="radio"
                                    name="company_type"
                                    onChange={(e) =>
                                        setCompanyType(e.target.value)
                                    }
                                    value="provider"
                                />
                                <p>Ad Space Owner</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-6 items-center justify-center ">
                        <div className="w-full flex flex-col gap-0.5">
                            <p className="text-xs text-gray-main">Email</p>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="focus:outline-none w-full px-4 py-2 text-xs rounded-md border border-gray-main drop-shadow-sm"
                            />
                        </div>
                        <div className="w-full flex flex-col gap-0.5">
                            <p className="text-xs text-gray-main">Company</p>
                            <input
                                type="text"
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="focus:outline-none w-full px-4 py-2 text-xs rounded-md border border-gray-main drop-shadow-sm"
                            />
                        </div>
                    </div>
                    <button
                        className="w-full h-fit bg-gradient-to-r from-purple-main to-pink-main text-white p-1.5 rounded-md font-bold text-xl drop-shadow-xl"
                        onClick={handleSubmit}
                    >
                        Register
                    </button>
                </div>
            </div>
        </main>
    )
}

export default WaitlistRegistration
