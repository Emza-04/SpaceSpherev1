import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  MapPin,
  TrendingUp,
  ShieldCheck,
  Calculator } from
'lucide-react';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SearchBar } from '../components/SearchBar';
import { PropertyCard } from '../components/PropertyCard';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { properties } from '../data/mockData';
import { formatZAR } from '../lib/utils';
const marketData = [
{
  name: 'Cape Town',
  price: 4.2
},
{
  name: 'Sandton',
  price: 3.8
},
{
  name: 'Umhlanga',
  price: 3.5
},
{
  name: 'Stellenbosch',
  price: 4.5
},
{
  name: 'Pretoria',
  price: 2.1
}];

export function Home() {
  const [calcPrice, setCalcPrice] = useState(2500000);
  const [calcDeposit, setCalcDeposit] = useState(250000);
  const [calcRate, setCalcRate] = useState(11.75);
  const [calcYears, setCalcYears] = useState(20);
  // Simple bond calculation
  const principal = calcPrice - calcDeposit;
  const monthlyRate = calcRate / 100 / 12;
  const numberOfPayments = calcYears * 12;
  const monthlyPayment =
  principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (
  Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const featuredProperties = properties.slice(0, 3);
  const luxuryCollection = properties.
  filter((p) => p.price > 10000000).
  slice(0, 3);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury South African Home"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            
            Find Your Perfect Property <br className="hidden md:block" /> Across
            South Africa
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            
            Browse verified homes, apartments, estates, farms and commercial
            properties with confidence.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="max-w-4xl mx-auto">
            
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-2">
                Featured Properties
              </h2>
              <p className="text-gray-500">
                Handpicked listings from top agencies
              </p>
            </div>
            <Link
              to="/listings"
              className="hidden sm:flex items-center text-brand-500 font-medium hover:text-brand-600 transition-colors">
              
              View all <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, idx) =>
            <motion.div
              key={property.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1
              }}>
              
                <PropertyCard property={property} />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-2 text-center">
            Popular Locations
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Explore properties in South Africa's most sought-after areas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px]">
            <Link
              to="/listings?city=Cape Town"
              className="relative rounded-2xl overflow-hidden group md:col-span-2 md:row-span-2">
              
              <img
                src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800"
                alt="Cape Town"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Cape Town
                </h3>
                <p className="text-gray-200 text-sm">1,245 Properties</p>
              </div>
            </Link>
            <Link
              to="/listings?city=Johannesburg"
              className="relative rounded-2xl overflow-hidden group md:col-span-2">
              
              <img
                src="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&q=80&w=800"
                alt="Sandton"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white mb-1">Sandton</h3>
                <p className="text-gray-200 text-sm">856 Properties</p>
              </div>
            </Link>
            <Link
              to="/listings?city=Durban"
              className="relative rounded-2xl overflow-hidden group">
              
              <img
                src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=400"
                alt="Umhlanga"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold text-white mb-1">Umhlanga</h3>
                <p className="text-gray-200 text-sm">432 Properties</p>
              </div>
            </Link>
            <Link
              to="/listings?city=Stellenbosch"
              className="relative rounded-2xl overflow-hidden group">
              
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400"
                alt="Stellenbosch"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  Stellenbosch
                </h3>
                <p className="text-gray-200 text-sm">215 Properties</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Market Insights & Calculator */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Market Insights */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-hairline">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-50 text-brand-500 rounded-xl">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">
                    Market Insights
                  </h3>
                  <p className="text-sm text-gray-500">
                    Average asking price (Millions ZAR)
                  </p>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={marketData}
                    margin={{
                      top: 10,
                      right: 10,
                      left: -20,
                      bottom: 0
                    }}>
                    
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f0f0f0" />
                    
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: '#6b7280'
                      }} />
                    
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: '#6b7280'
                      }} />
                    
                    <Tooltip
                      cursor={{
                        fill: '#f4f6f8'
                      }}
                      contentStyle={{
                        borderRadius: '12px',
                        border: 'none',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }} />
                    
                    <Bar
                      dataKey="price"
                      fill="#1593e6"
                      radius={[4, 4, 0, 0]}
                      barSize={40} />
                    
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bond Calculator */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-hairline">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-50 text-brand-500 rounded-xl">
                  <Calculator size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">
                    Bond Calculator
                  </h3>
                  <p className="text-sm text-gray-500">
                    Estimate your monthly repayments
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="flex justify-between text-sm font-medium text-ink-charcoal mb-2">
                    <span>Purchase Price</span>
                    <span className="text-brand-500">
                      {formatZAR(calcPrice)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="500000"
                    max="20000000"
                    step="100000"
                    value={calcPrice}
                    onChange={(e) => setCalcPrice(Number(e.target.value))}
                    className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-brand-500" />
                  
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-ink-charcoal mb-2">
                    <span>Deposit</span>
                    <span className="text-brand-500">
                      {formatZAR(calcDeposit)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={calcPrice}
                    step="50000"
                    value={calcDeposit}
                    onChange={(e) => setCalcDeposit(Number(e.target.value))}
                    className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-brand-500" />
                  
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Interest Rate (%)"
                    type="number"
                    value={calcRate}
                    onChange={(e) => setCalcRate(Number(e.target.value))} />
                  
                  <Input
                    label="Term (Years)"
                    type="number"
                    value={calcYears}
                    onChange={(e) => setCalcYears(Number(e.target.value))} />
                  
                </div>

                <div className="mt-6 p-6 bg-surface rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Estimated Monthly Repayment
                    </p>
                    <p className="text-3xl font-bold text-ink">
                      {formatZAR(monthlyPayment)}
                    </p>
                  </div>
                  <Button variant="primary">Apply for Bond</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white border-t border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink mb-10">
            Trusted by South Africa's Leading Agencies
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos for agencies */}
            <div className="text-xl font-bold font-serif">Pam Golding</div>
            <div className="text-xl font-bold text-red-600">RE/MAX</div>
            <div className="text-xl font-bold italic">Seeff</div>
            <div className="text-xl font-bold tracking-widest">
              CHAS EVERITT
            </div>
            <div className="text-xl font-bold">Rawson</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}