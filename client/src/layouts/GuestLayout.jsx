import React from "react";
import { Outlet } from "react-router";

import "swiper/css/bundle";
import "swiper/css/effect-creative";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";

const GuestLayout = () => {
    return (
        <main>
            <div className="grid grid-cols-12 items-center">
                <div
                    className="block col-span-12 lg:col-span-7 xl:col-span-7 h-136 lg:h-screen"
                    style={{
                        background:
                            "linear-gradient(120deg, rgba(134,74,249,1) 50%, rgba(59,52,134,1) 100%)",
                    }}
                >
                    <Swiper
                        modules={[Pagination, EffectCreative]}
                        effect="creative"
                        spaceBetween={50}
                        slidesPerView={1}
                        creativeEffect={{
                            prev: {
                                opacity: 0,
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        className="h-full"
                    >
                        <SwiperSlide>
                            <div className="relative lg:flex justify-center items-center py-5 h-full">
                                <div className="absolute bottom-16 right-1/2 translate-x-1/2 w-full sm:w-10/12 md:w-9/12 lg:w-11/12 xl:w-9/12 px-5">
                                    <img
                                        src="https://threedio-prod-var-cdn.icons8.com/jm/preview_sets/previews/2G1G8SU8MaY5HGeg.webp"
                                        alt=""
                                        className="max-w-54 sm:max-w-64 lg:max-w-80 xl:max-w-86 mx-auto mb-4"
                                    />
                                    <h1 className="title text-xl sm:text-2xl xl:text-3xl text-center !text-white mb-3">
                                        The simplest way to manage workforce
                                    </h1>

                                    <p className="text-xs sm:text-sm text-center !text-gray-100">
                                        Make informed decisions with Cusana's
                                        powerful analytics tools. Harness the
                                        power of data to drive your business
                                        forward with Cusana Analytics.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative lg:flex justify-center items-center py-5 h-full">
                                <div className="absolute bottom-16 right-1/2 translate-x-1/2 w-full sm:w-10/12 md:w-9/12 lg:w-11/12 xl:w-9/12 px-5">
                                    <img
                                        src="https://threedio-prod-var-cdn.icons8.com/rt/preview_sets/previews/QMkheFnIeYraHgZR.webp"
                                        alt=""
                                        className="max-w-54 sm:max-w-64 lg:max-w-80 xl:max-w-86 mx-auto mb-4"
                                    />
                                    <h1 className="title text-2xl xl:text-3xl text-center !text-white mb-3">
                                        The simplest way to manage workforce
                                    </h1>

                                    <p className="text-sm text-center !text-gray-100">
                                        Make informed decisions with Cusana's
                                        powerful analytics tools. Harness the
                                        power of data to drive your business
                                        forward with Cusana Analytics.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative lg:flex justify-center items-center py-5 h-full">
                                <div className="absolute bottom-16 right-1/2 translate-x-1/2 w-full sm:w-10/12 md:w-9/12 lg:w-11/12 xl:w-9/12 px-5">
                                    <img
                                        src="https://threedio-prod-var-cdn.icons8.com/ez/preview_sets/previews/-njDSDPRPW6dZDpT.webp"
                                        alt=""
                                        className="max-w-54 sm:max-w-64 lg:max-w-80 xl:max-w-86 mx-auto mb-4"
                                    />
                                    <h1 className="title text-2xl xl:text-3xl text-center !text-white mb-3">
                                        The simplest way to manage workforce
                                    </h1>

                                    <p className="text-sm text-center !text-gray-100">
                                        Make informed decisions with Cusana's
                                        powerful analytics tools. Harness the
                                        power of data to drive your business
                                        forward with Cusana Analytics.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative lg:flex justify-center items-center py-5 h-full">
                                <div className="absolute bottom-16 right-1/2 translate-x-1/2 w-full sm:w-10/12 md:w-9/12 lg:w-11/12 xl:w-9/12 px-5">
                                    <img
                                        src="https://threedio-prod-var-cdn.icons8.com/cr/preview_sets/previews/NixgdscUZmr4S7yH.webp"
                                        alt=""
                                        className="max-w-54 sm:max-w-64 lg:max-w-80 xl:max-w-86 mx-auto mb-4"
                                    />
                                    <h1 className="title text-2xl xl:text-3xl text-center !text-white mb-3">
                                        The simplest way to manage workforce
                                    </h1>

                                    <p className="text-sm text-center !text-gray-100">
                                        Make informed decisions with Cusana's
                                        powerful analytics tools. Harness the
                                        power of data to drive your business
                                        forward with Cusana Analytics.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="col-span-12 lg:col-span-5 xl:col-span-5 flex justify-center items-center lg:max-h-screen overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default GuestLayout;
