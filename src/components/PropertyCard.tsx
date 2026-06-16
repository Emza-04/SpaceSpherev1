import React, { useState } from 'react';
import {
  Heart,
  MapPin,
  Bed,
  Bath,
  Car,
  Maximize,
  CheckCircle2,
  ChevronLeft,
  ChevronRight } from
'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../data/mockData';
import { formatZAR, cn } from '../lib/utils';
interface PropertyCardProps {
  property: Property;
  className?: string;
}
export function PropertyCard({ property, className }: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };
  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };
  return (
    <Link
      to={`/property/${property.id}`}
      className={cn(
        'group flex flex-col bg-white rounded-2xl overflow-hidden border border-hairline shadow-card hover:shadow-card-hover transition-all duration-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={property.images[currentImage]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-ink px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm">
            {property.listingType === 'buy' ? 'For Sale' : 'To Rent'}
          </span>
          {property.verified &&
          <span className="bg-green-500/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1">
              <CheckCircle2 size={12} /> Verified
            </span>
          }
        </div>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-ink transition-colors shadow-sm z-10">
          
          <Heart
            size={18}
            className={cn(isFavorite && 'fill-red-500 text-red-500')} />
          
        </button>

        {/* Carousel Controls */}
        {isHovered && property.images.length > 1 &&
        <>
            <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-ink shadow-sm transition-colors z-10">
            
              <ChevronLeft size={18} />
            </button>
            <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-ink shadow-sm transition-colors z-10">
            
              <ChevronRight size={18} />
            </button>
          </>
        }

        {/* Dots */}
        {property.images.length > 1 &&
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {property.images.map((_, idx) =>
          <div
            key={idx}
            className={cn(
              'w-1.5 h-1.5 rounded-full transition-all',
              idx === currentImage ? 'bg-white w-3' : 'bg-white/60'
            )} />

          )}
          </div>
        }
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-ink">
            {formatZAR(property.price)}
          </h3>
          {property.listingType === 'buy' && property.bondPerMonth &&
          <p className="text-xs text-gray-500">
              Bond from {formatZAR(property.bondPerMonth)} p/m
            </p>
          }
          {property.listingType === 'rent' &&
          <p className="text-xs text-gray-500">Per month</p>
          }
        </div>

        <p className="text-sm font-medium text-ink-charcoal line-clamp-1 mb-1">
          {property.title}
        </p>

        <div className="flex items-center text-gray-500 text-xs mb-4">
          <MapPin size={12} className="mr-1 flex-shrink-0" />
          <span className="truncate">
            {property.suburb}, {property.city}
          </span>
        </div>

        {/* Features Row */}
        <div className="flex items-center gap-4 text-sm text-ink-charcoal mb-4 pb-4 border-b border-hairline">
          <div className="flex items-center gap-1.5" title="Bedrooms">
            <Bed size={16} className="text-gray-400" />
            <span className="font-medium">{property.beds}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Bathrooms">
            <Bath size={16} className="text-gray-400" />
            <span className="font-medium">{property.baths}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Parking">
            <Car size={16} className="text-gray-400" />
            <span className="font-medium">{property.parking}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto" title="Floor Size">
            <Maximize size={16} className="text-gray-400" />
            <span className="font-medium">{property.floorSize}m²</span>
          </div>
        </div>

        {/* Agent Footer */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="flex items-center gap-2">
            <img
              src={property.agent.photo}
              alt={property.agent.name}
              className="w-8 h-8 rounded-full object-cover border border-hairline" />
            
            <div className="flex flex-col">
              <span className="text-xs font-medium text-ink">
                {property.agent.name}
              </span>
              <span className="text-[10px] text-gray-500">
                {property.agent.agency}
              </span>
            </div>
          </div>
          <span className="text-sm font-medium text-brand-500 group-hover:text-brand-600 transition-colors">
            View Details
          </span>
        </div>
      </div>
    </Link>);

}