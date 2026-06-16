import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Button } from './Button';
import { Select } from './Select';
import { cn } from '../lib/utils';
interface SearchBarProps {
  className?: string;
  compact?: boolean;
}
export function SearchBar({ className, compact = false }: SearchBarProps) {
  const navigate = useNavigate();
  const [listingType, setListingType] = useState<'buy' | 'rent'>('buy');
  const [province, setProvince] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('type', listingType);
    if (province) params.append('province', province);
    if (propertyType) params.append('propertyType', propertyType);
    navigate(`/listings?${params.toString()}`);
  };
  return (
    <div className={cn('bg-white rounded-2xl shadow-xl p-2', className)}>
      {/* Tabs */}
      <div className="flex p-1 bg-surface rounded-xl mb-2 w-fit">
        <button
          type="button"
          onClick={() => setListingType('buy')}
          className={cn(
            'px-6 py-2 rounded-lg text-sm font-medium transition-all',
            listingType === 'buy' ?
            'bg-white text-brand-500 shadow-sm' :
            'text-ink-charcoal hover:text-ink'
          )}>
          
          Buy
        </button>
        <button
          type="button"
          onClick={() => setListingType('rent')}
          className={cn(
            'px-6 py-2 rounded-lg text-sm font-medium transition-all',
            listingType === 'rent' ?
            'bg-white text-brand-500 shadow-sm' :
            'text-ink-charcoal hover:text-ink'
          )}>
          
          Rent
        </button>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
        <div className="flex-1">
          <Select
            icon={<MapPin size={18} />}
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="border-none bg-surface/50 focus:bg-white">
            
            <option value="">Any Province</option>
            <option value="Western Cape">Western Cape</option>
            <option value="Gauteng">Gauteng</option>
            <option value="KwaZulu-Natal">KwaZulu-Natal</option>
            <option value="Eastern Cape">Eastern Cape</option>
          </Select>
        </div>

        <div className="flex-1">
          <Select
            icon={<Home size={18} />}
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="border-none bg-surface/50 focus:bg-white">
            
            <option value="">Property Type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Estate">Estate</option>
            <option value="Commercial">Commercial</option>
          </Select>
        </div>

        {!compact &&
        <div className="flex-1">
            <Select
            icon={<DollarSign size={18} />}
            className="border-none bg-surface/50 focus:bg-white">
            
              <option value="">Max Price</option>
              <option value="1000000">R 1,000,000</option>
              <option value="3000000">R 3,000,000</option>
              <option value="5000000">R 5,000,000</option>
              <option value="10000000">R 10,000,000+</option>
            </Select>
          </div>
        }

        <Button
          type="submit"
          variant="primary"
          className="md:w-auto px-8 gap-2">
          
          <Search size={18} />
          Search
        </Button>
      </form>
    </div>);

}