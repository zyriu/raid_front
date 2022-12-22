interface ICategoryDetailsProps {
  name: string;
}

const CategoryDetails = ({ name }: ICategoryDetailsProps) => {
  return (
    <div className="w-full p-8 flex flex-col justify-center text-white">
      <div className="flex flex-row text-2xl text-center justify-center">
        <div className="flex flex-col px-8">
          <span className="text-4xl text-white text-left">17.5</span>
          <span className="text-gray-200 uppercase font-light text-base">Floor price</span>
        </div>
        <div className="flex flex-col border-l-2 border-r-2 border-white border-solid px-8">
          <span className="text-4xl text-white text-left">100</span>
          <span className="text-gray-200 uppercase font-light text-base">Total listings</span>
        </div>
        <div className="flex flex-col px-8">
          <span className="text-4xl text-white text-left">1.7M</span>
          <span className="text-gray-200 uppercase font-light text-base">Volume ($RAID)</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
