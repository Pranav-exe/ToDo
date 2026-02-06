import React from 'react';
import { motion } from 'framer-motion';


type FilterType = 'all' | 'active' | 'completed';

interface Props {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const FilterTabs: React.FC<Props> = ({ filter, setFilter }) => {
  const tabs: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex p-1 space-x-1 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/5 mb-8 w-full max-w-md mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setFilter(tab.id)}
          className={`${
            filter === tab.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'
          } relative rounded-lg px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2 flex-1`}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {filter === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-slate-700 shadow-sm rounded-lg border border-white/5"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-20">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
