import type { FC } from 'react';
import type { promotionsData } from '../../lib/types';

interface PromotionsProps {
  promotionsData: promotionsData;
  onJoinNowClick: () => void;
}

const Promotions: FC<PromotionsProps> = ({ promotionsData, onJoinNowClick }) => {
  return (
    <div className="bg-black bg-opacity-70 p-4 sm:p-6 w-full">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-gray-300">
          {promotionsData.title}
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold my-2">
          {promotionsData.subject}
        </h1>
        <button 
          onClick={onJoinNowClick}
          className="w-full mt-4 bg-[#00a826] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md text-base md:text-lg transition duration-300 ease-in-out"
        >
          {promotionsData.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Promotions;