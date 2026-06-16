export type PropertyType =
'House' |
'Apartment' |
'Townhouse' |
'Estate' |
'Farm' |
'Sectional Title' |
'Commercial' |
'Vacant Land';
export type ListingType = 'buy' | 'rent';

export interface Agent {
  name: string;
  photo: string;
  phone: string;
  agency: string;
  agencyLogo: string;
}

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  listingType: ListingType;
  price: number;
  bondPerMonth?: number;
  province: string;
  city: string;
  suburb: string;
  address: string;
  beds: number;
  baths: number;
  parking: number;
  floorSize: number;
  erfSize?: number;
  images: string[];
  verified: boolean;
  features: string[];
  amenities: string[];
  agent: Agent;
  description: string;
  nearby: {
    schools: {name: string;distance: string;}[];
    hospitals: {name: string;distance: string;}[];
    shopping: {name: string;distance: string;}[];
    transport: {name: string;distance: string;}[];
  };
  listedDate: string;
}

const agents: Record<string, Agent> = {
  sarah: {
    name: 'Sarah van der Merwe',
    photo:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    phone: '+27 82 123 4567',
    agency: 'Pam Golding Properties',
    agencyLogo:
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=100&h=100'
  },
  david: {
    name: 'David Naidoo',
    photo:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    phone: '+27 71 987 6543',
    agency: 'Seeff',
    agencyLogo:
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=100&h=100'
  },
  lerato: {
    name: 'Lerato Khumalo',
    photo:
    'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80&w=200&h=200',
    phone: '+27 83 456 7890',
    agency: 'RE/MAX',
    agencyLogo:
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=100&h=100'
  }
};

export const properties: Property[] = [
{
  id: 'prop-1',
  title: 'Luxury Villa with Ocean Views',
  type: 'House',
  listingType: 'buy',
  price: 24500000,
  bondPerMonth: 240500,
  province: 'Western Cape',
  city: 'Cape Town',
  suburb: 'Camps Bay',
  address: '15 Victoria Road, Camps Bay, Cape Town',
  beds: 5,
  baths: 4.5,
  parking: 3,
  floorSize: 650,
  erfSize: 1200,
  images: [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1600607687931-ceeb66d11362?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'],

  verified: true,
  features: [
  'Ocean View',
  'Infinity Pool',
  'Wine Cellar',
  'Smart Home System',
  'Solar Power'],

  amenities: ['Pool', 'Garden', 'Security', 'Pet Friendly', 'Furnished'],
  agent: agents.sarah,
  description:
  'Experience unparalleled luxury in this magnificent Camps Bay villa. Boasting panoramic ocean views, state-of-the-art finishes, and seamless indoor-outdoor living. The property features a rim-flow pool, fully equipped home cinema, and a temperature-controlled wine cellar. Fully off-grid capable with extensive solar installation.',
  nearby: {
    schools: [
    { name: 'Camps Bay High School', distance: '1.2 km' },
    { name: 'Camps Bay Primary', distance: '1.5 km' }],

    hospitals: [{ name: 'Camps Bay Mediclinic', distance: '2.0 km' }],
    shopping: [{ name: 'The Promenade', distance: '0.8 km' }],
    transport: [{ name: 'MyCiTi Bus Stop', distance: '0.2 km' }]
  },
  listedDate: '12/05/2026'
},
{
  id: 'prop-2',
  title: 'Modern Penthouse in Sandton CBD',
  type: 'Apartment',
  listingType: 'buy',
  price: 8900000,
  bondPerMonth: 87500,
  province: 'Gauteng',
  city: 'Johannesburg',
  suburb: 'Sandton',
  address: '100 West Street, Sandton, Johannesburg',
  beds: 3,
  baths: 3,
  parking: 2,
  floorSize: 220,
  images: [
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1502672260266-1c1e5211774c?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200'],

  verified: true,
  features: ['City Views', 'Private Elevator', 'Concierge', 'Gym Access'],
  amenities: ['Security', 'Pool', 'Furnished'],
  agent: agents.lerato,
  description:
  "A spectacular penthouse offering the ultimate urban lifestyle in the heart of Africa's richest square mile. Features double-volume ceilings, floor-to-ceiling windows with skyline views, and premium Miele appliances. The building offers 24/7 concierge, biometric security, and a resident-only fitness center.",
  nearby: {
    schools: [{ name: 'Crawford Sandton', distance: '2.5 km' }],
    hospitals: [{ name: 'Morningside Mediclinic', distance: '3.1 km' }],
    shopping: [{ name: 'Sandton City', distance: '0.5 km' }],
    transport: [{ name: 'Gautrain Station', distance: '0.8 km' }]
  },
  listedDate: '01/06/2026'
},
{
  id: 'prop-3',
  title: 'Contemporary Estate Home',
  type: 'Estate',
  listingType: 'buy',
  price: 12500000,
  bondPerMonth: 122000,
  province: 'KwaZulu-Natal',
  city: 'Durban',
  suburb: 'Umhlanga Rocks',
  address: 'Zimbali Coastal Resort, Umhlanga',
  beds: 4,
  baths: 4,
  parking: 3,
  floorSize: 450,
  erfSize: 1000,
  images: [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200'],

  verified: true,
  features: [
  'Golf Course Estate',
  'Clubhouse Access',
  'Beach Access',
  'Domestic Quarters'],

  amenities: ['Security', 'Pool', 'Garden', 'Pet Friendly'],
  agent: agents.david,
  description:
  'Stunning contemporary home situated in a prestigious coastal golf estate. Designed for seamless entertaining with stacking doors opening to a large covered patio and rim-flow pool. Enjoy world-class estate security and resort amenities including an 18-hole championship golf course and private beach access.',
  nearby: {
    schools: [{ name: 'Reddam House Umhlanga', distance: '4.5 km' }],
    hospitals: [{ name: 'Netcare Umhlanga', distance: '5.2 km' }],
    shopping: [{ name: 'Gateway Theatre of Shopping', distance: '6.0 km' }],
    transport: [{ name: 'King Shaka Airport', distance: '15.0 km' }]
  },
  listedDate: '28/05/2026'
},
{
  id: 'prop-4',
  title: 'Chic City Apartment',
  type: 'Apartment',
  listingType: 'rent',
  price: 18500,
  province: 'Western Cape',
  city: 'Cape Town',
  suburb: 'Sea Point',
  address: 'Main Road, Sea Point, Cape Town',
  beds: 2,
  baths: 2,
  parking: 1,
  floorSize: 85,
  images: [
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&q=80&w=1200'],

  verified: true,
  features: ['Balcony', 'Fibre Ready', 'Prepaid Electricity'],
  amenities: ['Security', 'Available Immediately'],
  agent: agents.sarah,
  description:
  'Modern, unfurnished 2-bedroom apartment in the vibrant heart of Sea Point. Walking distance to the promenade, trendy cafes, and boutique shops. Features open-plan living, SMEG appliances, and a spacious balcony with partial sea views. 24-hour manned security and secure basement parking.',
  nearby: {
    schools: [{ name: 'Sea Point Primary', distance: '1.0 km' }],
    hospitals: [{ name: 'Netcare Christiaan Barnard', distance: '4.0 km' }],
    shopping: [{ name: 'Mojo Market', distance: '0.3 km' }],
    transport: [{ name: 'MyCiTi Bus Stop', distance: '0.1 km' }]
  },
  listedDate: '10/06/2026'
},
{
  id: 'prop-5',
  title: 'Historic Winelands Estate',
  type: 'Farm',
  listingType: 'buy',
  price: 35000000,
  bondPerMonth: 345000,
  province: 'Western Cape',
  city: 'Stellenbosch',
  suburb: 'Franschhoek Valley',
  address: 'R45, Franschhoek, Stellenbosch',
  beds: 6,
  baths: 5,
  parking: 6,
  floorSize: 850,
  erfSize: 50000,
  images: [
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=1200'],

  verified: true,
  features: [
  'Vineyards',
  'Olive Grove',
  'Guest Cottages',
  'Mountain Views',
  'Borehole'],

  amenities: ['Garden', 'Pool', 'Pet Friendly', 'Security'],
  agent: agents.sarah,
  description:
  "A rare opportunity to own a piece of history in the Cape Winelands. This magnificent Cape Dutch homestead is surrounded by established vineyards and olive groves. Includes a main residence, three luxury guest cottages, and a manager's house. Abundant water supply with multiple boreholes and a dam.",
  nearby: {
    schools: [{ name: 'Bridge House', distance: '8.0 km' }],
    hospitals: [{ name: 'Mediclinic Stellenbosch', distance: '25.0 km' }],
    shopping: [{ name: 'Franschhoek Village', distance: '5.0 km' }],
    transport: [{ name: 'Cape Town Int Airport', distance: '65.0 km' }]
  },
  listedDate: '05/06/2026'
},
{
  id: 'prop-6',
  title: 'Family Home in Secure Boomed Area',
  type: 'House',
  listingType: 'buy',
  price: 4500000,
  bondPerMonth: 44000,
  province: 'Gauteng',
  city: 'Johannesburg',
  suburb: 'Bryanston',
  address: 'Mount Street, Bryanston, Johannesburg',
  beds: 4,
  baths: 3,
  parking: 2,
  floorSize: 320,
  erfSize: 1500,
  images: [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200'],

  verified: false,
  features: [
  'Solar Geyser',
  'Borehole',
  'Staff Quarters',
  'Entertainment Lapa'],

  amenities: ['Pool', 'Garden', 'Security', 'Pet Friendly'],
  agent: agents.lerato,
  description:
  'Classic Bryanston family home set on a lush, established stand within a secure boomed enclave. Offers generous reception rooms flowing onto a covered patio overlooking the sparkling pool and manicured garden. Features a modern country-style kitchen, spacious bedrooms, and excellent security.',
  nearby: {
    schools: [
    { name: 'Bryanston High', distance: '2.0 km' },
    { name: 'St Stithians', distance: '4.5 km' }],

    hospitals: [{ name: 'Sandton Mediclinic', distance: '3.0 km' }],
    shopping: [{ name: 'Nicolway', distance: '2.5 km' }],
    transport: [{ name: 'William Nicol Drive', distance: '1.5 km' }]
  },
  listedDate: '14/06/2026'
}];


export const getPropertyById = (id: string) =>
properties.find((p) => p.id === id);