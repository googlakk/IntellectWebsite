import { usePathname, useRouter } from 'next/navigation';

import { HeaderItem } from '../../../../types/menu';
import Link from 'next/link';
import { useState } from 'react';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSubmenuOpen(!submenuOpen);
  };

  const handleItemClick = () => {
    if (item.submenu && item.submenu.length > 0) {
      // Если есть подменю, сначала переходим по основной ссылке
      router.push(item.href);
    } else {
      router.push(item.href);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={handleItemClick}
          className={`flex-1 py-2 text-left text-black dark:text-white focus:outline-none ${
            path === item.href ? '!text-primary' : ''
          } ${
            path.startsWith(item.href) ? '!text-primary' : ''
          }`}
        >
          {item.label}
        </button>
        
        {item.submenu && item.submenu.length > 0 && (
          <button
            onClick={handleToggle}
            className="p-2 focus:outline-none"
            aria-label="Toggle submenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
            </svg>
          </button>
        )}
      </div>

      {submenuOpen && item.submenu && (
        <div className="ml-4 bg-white dark:bg-gray-800 p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link 
              key={index} 
              href={subItem.href} 
              className="block py-2 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink