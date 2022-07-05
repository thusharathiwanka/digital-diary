import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import PopularBlogCard from "./popular-blog-card";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function PopularSection() {
	SwiperCore.use([Autoplay]);

	const windowSize = useWindowDimensions();

	return (
		<section className="container mx-auto md:px-20 py-10 px-8">
			<h1 className="font-bold text-4xl text-center py-10">Most Popular Posts</h1>

			<Swiper
				autoplay={{ delay: 5000 }}
				slidesPerView={windowSize.width > 900 ? 2 : 1}
				loop
				spaceBetween={50}
			>
				<SwiperSlide>
					<PopularBlogCard />
				</SwiperSlide>
				<SwiperSlide>
					<PopularBlogCard />
				</SwiperSlide>
				<SwiperSlide>
					<PopularBlogCard />
				</SwiperSlide>
				<SwiperSlide>
					<PopularBlogCard />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
