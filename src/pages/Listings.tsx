import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  LayoutGrid,
  List,
  Map as MapIcon,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight } from
'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PropertyCard } from '../components/PropertyCard';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { properties } from '../data/mockData';
import { cn } from '../lib/utils';
export function Listings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMap, setShowMap] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  // Filter states
  const [listingType, setListingType] = useState(
    searchParams.get('type') || 'buy'
  );
  const [province, setProvince] = useState(searchParams.get('province') || '');
  const [city, setCity] = useState(searchParams.get('city') || '');
  const [propertyType, setPropertyType] = useState(
    searchParams.get('propertyType') || ''
  );
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  // Toggle amenities
  const [amenities, setAmenities] = useState<string[]>([]);
  const toggleAmenity = (amenity: string) => {
    setAmenities((prev) =>
    prev.includes(amenity) ?
    prev.filter((a) => a !== amenity) :
    [...prev, amenity]
    );
  };
  // Filter logic
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      if (listingType && p.listingType !== listingType) return false;
      if (province && p.province !== province) return false;
      if (city && p.city !== city) return false;
      if (propertyType && p.type !== propertyType) return false;
      if (minPrice && p.price < Number(minPrice)) return false;
      if (maxPrice && p.price > Number(maxPrice)) return false;
      if (beds && p.beds < Number(beds)) return false;
      if (baths && p.baths < Number(baths)) return false;
      if (amenities.length > 0) {
        const hasAllAmenities = amenities.every((a) => p.amenities.includes(a));
        if (!hasAllAmenities) return false;
      }
      return true;
    });
  }, [
  listingType,
  province,
  city,
  propertyType,
  minPrice,
  maxPrice,
  beds,
  baths,
  amenities]
  );
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      <main className="flex-grow pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-white p-4 rounded-2xl shadow-sm border border-hairline">
          <div>
            <h1 className="text-2xl font-bold text-ink">
              Properties for {listingType === 'buy' ? 'Sale' : 'Rent'}
            </h1>
            <p className="text-sm text-gray-500">
              {filteredProperties.length} results found
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              className="md:hidden flex-1"
              onClick={() => setShowMobileFilters(!showMobileFilters)}>
              
              <SlidersHorizontal size={18} className="mr-2" /> Filters
            </Button>

            <Select className="w-full md:w-48 bg-surface border-none">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Listings</option>
            </Select>

            <div className="hidden md:flex bg-surface p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  viewMode === 'grid' ?
                  'bg-white shadow-sm text-brand-500' :
                  'text-gray-500 hover:text-ink'
                )}>
                
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  viewMode === 'list' ?
                  'bg-white shadow-sm text-brand-500' :
                  'text-gray-500 hover:text-ink'
                )}>
                
                <List size={20} />
              </button>
            </div>

            <Button
              variant={showMap ? 'primary' : 'outline'}
              className="hidden lg:flex"
              onClick={() => setShowMap(!showMap)}>
              
              <MapIcon size={18} className="mr-2" />{' '}
              {showMap ? 'Hide Map' : 'Show Map'}
            </Button>
          </div>
        </div>

        <div className="flex gap-6 flex-grow">
          {/* Sidebar Filters */}
          <aside
            className={cn(
              'w-full md:w-72 flex-shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-hairline h-fit sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)]',
              showMobileFilters ? 'block' : 'hidden md:block'
            )}>
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">Filters</h2>
              <button
                onClick={() => {
                  setProvince('');
                  setCity('');
                  setPropertyType('');
                  setMinPrice('');
                  setMaxPrice('');
                  setBeds('');
                  setBaths('');
                  setAmenities([]);
                }}
                className="text-sm text-brand-500 hover:underline">
                
                Clear all
              </button>
            </div>

            <div className="space-y-6">
              {/* Listing Type Toggle */}
              <div className="flex p-1 bg-surface rounded-xl">
                <button
                  onClick={() => setListingType('buy')}
                  className={cn(
                    'flex-1 py-2 rounded-lg text-sm font-medium transition-all',
                    listingType === 'buy' ?
                    'bg-white text-brand-500 shadow-sm' :
                    'text-ink-charcoal'
                  )}>
                  
                  Buy
                </button>
                <button
                  onClick={() => setListingType('rent')}
                  className={cn(
                    'flex-1 py-2 rounded-lg text-sm font-medium transition-all',
                    listingType === 'rent' ?
                    'bg-white text-brand-500 shadow-sm' :
                    'text-ink-charcoal'
                  )}>
                  
                  Rent
                </button>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-ink">Location</h3>
                <Select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}>
                  
                  <option value="">Any Province</option>
                  <option value="Western Cape">Western Cape</option>
                  <option value="Gauteng">Gauteng</option>
                  <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                </Select>
                <Select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Any City</option>
                  <option value="Cape Town">Cape Town</option>
                  <option value="Johannesburg">Johannesburg</option>
                  <option value="Durban">Durban</option>
                  <option value="Stellenbosch">Stellenbosch</option>
                </Select>
              </div>

              {/* Property Type */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-ink">
                  Property Type
                </h3>
                <Select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}>
                  
                  <option value="">All Types</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Estate">Estate</option>
                  <option value="Farm">Farm</option>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-ink">
                  Price Range (R)
                </h3>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)} />
                  
                  <span className="text-gray-400">-</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)} />
                  
                </div>
              </div>

              {/* Rooms */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-ink">Rooms</h3>
                <Select
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  label="Bedrooms">
                  
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </Select>
                <Select
                  value={baths}
                  onChange={(e) => setBaths(e.target.value)}
                  label="Bathrooms">
                  
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                </Select>
              </div>

              {/* Amenities */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-ink">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                  'Pet Friendly',
                  'Furnished',
                  'Pool',
                  'Garden',
                  'Security'].
                  map((amenity) =>
                  <button
                    key={amenity}
                    onClick={() => toggleAmenity(amenity)}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs font-medium transition-colors border',
                      amenities.includes(amenity) ?
                      'bg-brand-50 border-brand-500 text-brand-600' :
                      'bg-white border-hairline text-gray-600 hover:border-gray-400'
                    )}>
                    
                      {amenity}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-grow flex flex-col">
            {filteredProperties.length === 0 ?
            <div className="flex-grow flex flex-col items-center justify-center bg-white rounded-2xl border border-hairline p-12 text-center">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">
                  No properties found
                </h3>
                <p className="text-gray-500 mb-6 max-w-md">
                  We couldn't find any properties matching your current filters.
                  Try adjusting your search criteria.
                </p>
                <Button
                variant="outline"
                onClick={() => {
                  setProvince('');
                  setCity('');
                  setPropertyType('');
                  setMinPrice('');
                  setMaxPrice('');
                  setBeds('');
                  setBaths('');
                  setAmenities([]);
                }}>
                
                  Clear all filters
                </Button>
              </div> :

            <>
                <div
                className={cn(
                  'grid gap-6',
                  viewMode === 'grid' ?
                  showMap ?
                  'grid-cols-1 md:grid-cols-2' :
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                  'grid-cols-1'
                )}>
                
                  {filteredProperties.map((property) =>
                <PropertyCard
                  key={property.id}
                  property={property}
                  className={
                  viewMode === 'list' ? 'md:flex-row md:h-64' : ''
                  } />

                )}
                </div>

                {/* Pagination */}
                <div className="mt-10 flex items-center justify-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    <ChevronLeft size={16} />
                  </Button>
                  <Button variant="primary" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <span className="text-gray-400 px-2">...</span>
                  <Button variant="outline" size="sm">
                    12
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </>
            }
          </div>

          {/* Map Panel Placeholder */}
          {showMap &&
          <div className="hidden lg:block w-[400px] flex-shrink-0 bg-white rounded-2xl border border-hairline overflow-hidden sticky top-24 h-[calc(100vh-8rem)]">
              <div className="w-full h-full bg-surface-dark relative flex items-center justify-center">
                {/* Simulated Map Background */}
                <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                alt="Map placeholder"
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />
              
                <div className="absolute inset-0 bg-brand-500/10 mix-blend-multiply" />

                {/* Simulated Pins */}
                {filteredProperties.slice(0, 5).map((p, i) =>
              <div
                key={p.id}
                className="absolute w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
                style={{
                  top: `${30 + i * 15}%`,
                  left: `${40 + (i % 2 === 0 ? 10 : -10)}%`
                }}>
                
                    <MapIcon size={14} />
                  </div>
              )}

                <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-medium text-center">
                    Interactive Map View
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    Showing {filteredProperties.length} properties in this area
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
      </main>

      <Footer />
    </div>);

}
// Need to import Search from lucide-react in Listings.tsx
import { Search } from 'lucide-react';