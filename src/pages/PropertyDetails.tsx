import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronRight,
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Car,
  Maximize,
  CheckCircle2,
  Calendar,
  Shield,
  Wifi,
  Waves,
  Trees,
  Video,
  GraduationCap,
  Activity,
  ShoppingBag,
  Bus,
  AlertTriangle,
  Zap } from
'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { PropertyCard } from '../components/PropertyCard';
import { getPropertyById, properties } from '../data/mockData';
import { formatZAR, cn } from '../lib/utils';
export function PropertyDetails() {
  const { id } = useParams<{
    id: string;
  }>();
  // Default to first property if no ID (for preview purposes)
  const property = id ? getPropertyById(id) : properties[0];
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('schools');
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <Link to="/listings">
              <Button>Back to Listings</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>);

  }
  const similarProperties = properties.
  filter((p) => p.id !== property.id && p.type === property.type).
  slice(0, 3);
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <nav className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-brand-500">
                Home
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <Link to="/listings" className="hover:text-brand-500">
                Properties
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <Link
                to={`/listings?province=${property.province}`}
                className="hover:text-brand-500">
                
                {property.province}
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-ink font-medium truncate max-w-[200px]">
                {property.title}
              </span>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="bg-white">
                <Share2 size={16} className="mr-2" /> Share
              </Button>
              <Button variant="outline" size="sm" className="bg-white">
                <Heart size={16} className="mr-2" /> Save
              </Button>
            </div>
          </div>

          {/* Title & Price Header */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-hairline mb-8 flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-brand-50 text-brand-600 px-3 py-1 rounded-lg text-sm font-semibold">
                  {property.listingType === 'buy' ? 'For Sale' : 'To Rent'}
                </span>
                {property.verified &&
                <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-1">
                    <CheckCircle2 size={14} /> Verified Listing
                  </span>
                }
              </div>
              <h1 className="text-3xl font-bold text-ink mb-2">
                {property.title}
              </h1>
              <p className="text-gray-500 flex items-center">
                <MapPin size={18} className="mr-1.5" /> {property.address}
              </p>
            </div>

            <div className="lg:text-right flex flex-col justify-center">
              <div className="text-4xl font-bold text-brand-500 mb-1">
                {formatZAR(property.price)}
              </div>
              {property.bondPerMonth &&
              <div className="text-sm text-gray-500 bg-surface px-3 py-1.5 rounded-lg inline-block">
                  Est. Bond:{' '}
                  <span className="font-semibold text-ink">
                    {formatZAR(property.bondPerMonth)}
                  </span>{' '}
                  p/m
                </div>
              }
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Images & Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-hairline">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-surface-dark">
                  <img
                    src={property.images[activeImage]}
                    alt={property.title}
                    className="w-full h-full object-cover" />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm hover:bg-white transition-colors text-ink flex items-center gap-2 text-sm font-medium">
                      <Video size={16} /> Tour
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm hover:bg-white transition-colors text-ink flex items-center gap-2 text-sm font-medium">
                      <div size={16} /> 360°
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
                  {property.images.map((img, idx) =>
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      'relative w-32 aspect-video rounded-lg overflow-hidden flex-shrink-0 snap-start',
                      activeImage === idx ?
                      'ring-2 ring-brand-500 ring-offset-2' :
                      'opacity-70 hover:opacity-100'
                    )}>
                    
                      <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover" />
                    
                    </button>
                  )}
                </div>
              </div>

              {/* Key Features Bar */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-hairline flex flex-wrap justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-50 rounded-xl text-brand-500">
                    <Bed size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="font-bold text-lg">{property.beds}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-50 rounded-xl text-brand-500">
                    <Bath size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bathrooms</p>
                    <p className="font-bold text-lg">{property.baths}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-50 rounded-xl text-brand-500">
                    <Car size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Parking</p>
                    <p className="font-bold text-lg">{property.parking}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-50 rounded-xl text-brand-500">
                    <Maximize size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Floor Size</p>
                    <p className="font-bold text-lg">{property.floorSize}m²</p>
                  </div>
                </div>
                {property.erfSize &&
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-50 rounded-xl text-brand-500">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Erf Size</p>
                      <p className="font-bold text-lg">{property.erfSize}m²</p>
                    </div>
                  </div>
                }
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-hairline">
                <h2 className="text-xl font-bold text-ink mb-4">
                  About this property
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {property.description}
                  </p>
                </div>
              </div>

              {/* Amenities & Features */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-hairline">
                <h2 className="text-xl font-bold text-ink mb-6">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                  {property.amenities.map((amenity, idx) =>
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-700">
                    
                      <CheckCircle2 size={18} className="text-brand-500" />
                      <span>{amenity}</span>
                    </div>
                  )}
                  {property.features.map((feature, idx) =>
                  <div
                    key={`f-${idx}`}
                    className="flex items-center gap-3 text-gray-700">
                    
                      <CheckCircle2 size={18} className="text-brand-500" />
                      <span>{feature}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Nearby Places */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-hairline">
                <h2 className="text-xl font-bold text-ink mb-6">
                  What's Nearby
                </h2>

                {/* Tabs */}
                <div className="flex border-b border-hairline mb-6 overflow-x-auto">
                  {[
                  {
                    id: 'schools',
                    icon: GraduationCap,
                    label: 'Schools'
                  },
                  {
                    id: 'hospitals',
                    icon: Activity,
                    label: 'Hospitals'
                  },
                  {
                    id: 'shopping',
                    icon: ShoppingBag,
                    label: 'Shopping'
                  },
                  {
                    id: 'transport',
                    icon: Bus,
                    label: 'Transport'
                  }].
                  map((tab) =>
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap transition-colors',
                      activeTab === tab.id ?
                      'border-brand-500 text-brand-500' :
                      'border-transparent text-gray-500 hover:text-ink'
                    )}>
                    
                      <tab.icon size={18} /> {tab.label}
                    </button>
                  )}
                </div>

                {/* Tab Content */}
                <div className="space-y-4">
                  {property.nearby[
                  activeTab as keyof typeof property.nearby].
                  map((place, idx) =>
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-surface rounded-xl">
                    
                      <span className="font-medium text-ink-charcoal">
                        {place.name}
                      </span>
                      <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-lg shadow-sm">
                        {place.distance}
                      </span>
                    </div>
                  )}
                </div>

                {/* SA Specific Info */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-orange-200 bg-orange-50 rounded-xl flex items-start gap-3">
                    <Zap
                      className="text-orange-500 flex-shrink-0 mt-0.5"
                      size={20} />
                    
                    <div>
                      <h4 className="font-semibold text-orange-900 text-sm">
                        Load-Shedding Zone
                      </h4>
                      <p className="text-xs text-orange-700 mt-1">
                        Block 4. Property has solar backup installed.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl flex items-start gap-3">
                    <Shield
                      className="text-blue-500 flex-shrink-0 mt-0.5"
                      size={20} />
                    
                    <div>
                      <h4 className="font-semibold text-blue-900 text-sm">
                        Area Security
                      </h4>
                      <p className="text-xs text-blue-700 mt-1">
                        24/7 Armed response area. Active neighborhood watch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Agent & Contact */}
            <div className="space-y-8">
              {/* Agent Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-hairline sticky top-24">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-hairline">
                  <img
                    src={property.agent.photo}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-surface" />
                  
                  <div>
                    <h3 className="font-bold text-ink text-lg">
                      {property.agent.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {property.agent.agency}
                    </p>
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="text-brand-500 font-medium text-sm mt-1 block hover:underline">
                      
                      {property.agent.phone}
                    </a>
                  </div>
                </div>

                <form className="space-y-4">
                  <h4 className="font-semibold text-ink mb-2">Contact Agent</h4>
                  <Input placeholder="Your Name" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <textarea
                    className="w-full rounded-xl border border-hairline bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 min-h-[100px] resize-none"
                    placeholder="I am interested in this property..."
                    defaultValue={`Hi ${property.agent.name.split(' ')[0]}, I am interested in ${property.title} in ${property.suburb}.`} />
                  
                  <Button variant="primary" fullWidth className="mt-2">
                    Send Message
                  </Button>
                  <Button variant="outline" fullWidth type="button">
                    <Calendar size={18} className="mr-2" /> Book a Viewing
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-hairline text-center">
                  <img
                    src={property.agent.agencyLogo}
                    alt={property.agent.agency}
                    className="h-8 mx-auto grayscale opacity-60" />
                  
                </div>
              </div>
            </div>
          </div>

          {/* Similar Properties */}
          {similarProperties.length > 0 &&
          <div className="mt-16">
              <h2 className="text-2xl font-bold text-ink mb-8">
                Similar Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarProperties.map((p) =>
              <PropertyCard key={p.id} property={p} />
              )}
              </div>
            </div>
          }
        </div>
      </main>

      <Footer />
    </div>);

}