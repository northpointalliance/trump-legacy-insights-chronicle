
import React from 'react';
import { Scale, TrendingDown, TrendingUp, BadgeDollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TradeBalanceInfo: React.FC = () => {
  return (
    <Card className="bg-white rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-trump-blue flex items-center">
          <Scale className="h-6 w-6 mr-2 text-trump-blue" />
          Understanding International Trade Balances
        </CardTitle>
        <CardDescription>
          Why perfect balance in international trade is rare and not always desirable
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">
          Achieving a perfectly balanced international trade—where exports equal imports—is tough and not necessarily 
          desirable. Countries trade based on comparative advantages, importing what's cheaper or unavailable 
          domestically and exporting what they produce efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <TrendingDown className="h-5 w-5 text-trump-red mr-2" />
              <h3 className="font-semibold">U.S. Trade Pattern</h3>
            </div>
            <p className="text-sm text-gray-600">
              The U.S. runs persistent trade deficits, importing more goods (like electronics or oil) 
              than it exports, partly because it specializes in services and high-tech goods.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="font-semibold">China Trade Pattern</h3>
            </div>
            <p className="text-sm text-gray-600">
              China often has trade surpluses, exporting more manufactured goods than it imports.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-trump-blue mt-4">Why "Balanced" Trade Is Rare:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Economic needs differ:</strong> Countries import to meet demand (e.g., oil for energy, consumer goods for variety).</li>
          <li><strong>Currency dynamics:</strong> Strong currencies (like the U.S. dollar) make imports cheaper, encouraging deficits.</li>
          <li><strong>Global supply chains:</strong> Goods cross borders multiple times, complicating balance.</li>
        </ul>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-4">
          <p className="italic text-gray-600">
            "Forcing balance could mean restricting trade (e.g., tariffs or quotas), which often raises prices and 
            disrupts supply chains. Economists argue trade deficits aren't inherently bad—they can reflect a strong 
            economy with high consumer demand."
          </p>
        </div>

        <h3 className="text-lg font-semibold text-trump-blue">The Bottom Line:</h3>
        <div className="flex items-start">
          <BadgeDollarSign className="h-5 w-5 text-trump-blue mr-2 mt-1" />
          <p className="text-gray-700">
            Completely balancing trade would require autarky (self-sufficiency), which is inefficient and impractical 
            in a globalized world. It's less about balance and more about managing trade to benefit the economy.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradeBalanceInfo;
