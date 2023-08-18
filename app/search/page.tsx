import { Cuisine, Price, PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();

const select = {
  id: true,
  name: true,
  main_image: true,
  location: true,
  cuisine: true,
  price: true,
  slug: true
}

const fetchRestaurantsByCity = (city: string | undefined ) => {
  if(!city) return prisma.restaurant.findMany({select});
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase()
        }
      }
    },
    select
  })
}

const fetchLocations = async () => {
  return prisma.location.findMany();
}

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
}

export default async function Search({searchParams}: {searchParams: {city?:string, cuisine?:string, price?: Price}}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);  
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();
  
  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSideBar 
          locations={location}
          cuisines={cuisine}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map(restaurant => 
            <>
            <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
            </>
            )
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
          
        </div>
      </div>
    </>
  )
}