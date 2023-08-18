import { Price } from "@prisma/client"

export default function AveragePrice({price}: {price:Price}) {

  const renderPrice = () => {
    if(price === Price.CHEAP){
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price === Price.REGULAR){
      return (
        <>
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else {
      return (
        <>
          <span>$$$$</span>
        </>
      );
    }
  }

  return <p className='flex mr-3'>{renderPrice()}</p>

}
