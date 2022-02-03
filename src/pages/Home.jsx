import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
	direction: "vertical",
	slidesPerView: 1,
	spaceBetween: 0,
	mousewheel: true,
	pagination: true,
	effect: "fade",
	speed: 100,
};

const Home = () => {
	return (
		<>
			<Swiper {...swiperOptions}>
				<SwiperSlide>slide1</SwiperSlide>
				<SwiperSlide>slide2</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Home;
