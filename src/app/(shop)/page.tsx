import HomeAdds from "@/ui/home/adds";
import ShopByCategory from "@/ui/home/shop-by-category";
import TopNewArrival from "@/ui/home/top-new-arrival";
import HomeOffers from "@/ui/home/offers";
import Banner from "@/ui/home/banner";
import RecomendedForYou from "@/ui/home/recomended-for-you";

export default function Home() {
	return (
		<>
			<Banner />
			<HomeAdds />
			<ShopByCategory />
			<TopNewArrival />
			<HomeOffers />
			<RecomendedForYou />
		</>
	);
}
