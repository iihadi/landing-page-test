import type { FC } from 'react';
import type { PromotionData } from '../../lib/types';

interface PromotionsProps {
  promotions: PromotionData[];
  onJoinNowClick: () => void;
}

const Promotions: FC<PromotionsProps> = ({ promotions, onJoinNowClick }) => {
  return (
    <div className="w-full">
      <div className="flex overflow-x-auto snap-x snap-mandatory">
        {promotions.map((promo) => (
          <div 
            key={promo.id} 
            className="w-full flex-shrink-0 snap-center bg-black/[.90] p-6"
          >
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                {promo.title}
              </h2>
              <h1 className="text-3xl font-extrabold my-2 text-white">
                {promo.subtitle}
              </h1>
              <button 
                onClick={onJoinNowClick}
                className="w-full mt-4 bg-[#00a826] hover:opacity-90 text-white font-bold py-3 px-6 rounded-md text-lg transition-opacity duration-300"
              >
                {promo.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;