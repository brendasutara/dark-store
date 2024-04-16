function SecurePurchase() {
    return (
        <section className="flex flex-col md:flex-row md:flex max-w-screen-xl items-center justify-between mx-auto md:space-x-8 lg:space-x-44 py-10 opacity-60 gap-5 px-2">
            <div className="flex flex-col justify-center items-center md:gap-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="size-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <p className="font-normal text-2xl text-center">Free Shipíng</p>
                <p className="text-center">Enjoy free shipping on all orders! Terms and conditions apply</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="size-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>

                <p className="font-normal text-2xl text-center">Online Support</p>
                <p className="text-center">24/7 assistance available for all your inquiries and needs.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="size-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>

                <p className="font-normal text-2xl text-center">Flexible Payment</p>
                <p className="text-center">Discover our flexible payment solutions for hassle-free shopping.</p>
            </div>
        </section>
    )
}

export default SecurePurchase