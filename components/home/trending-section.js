import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Slide from "./slide";

export default function TrendingSection() {
	SwiperCore.use([Autoplay]);

	return (
		<section className="py-6">
			<div className="container mx-auto md:px-20">
				<h1 className="font-bold text-4xl text-center pb-12">Trending</h1>
				<Swiper autoplay={{ delay: 5000 }} slidesPerView={1} loop>
					<SwiperSlide>
						<Slide />
					</SwiperSlide>
					<SwiperSlide>
						<Slide />
					</SwiperSlide>
					<SwiperSlide>
						<Slide />
					</SwiperSlide>
					<SwiperSlide>
						<Slide />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
