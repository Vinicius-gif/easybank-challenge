import React from 'react';

const LinksMenuDesktop = () => {
  const pages = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

  return (
    <ul className="flex gap-4 self-stretch items-center">
      {pages.map((page) => (
        <li key={page} className="relative cursor-pointer">
          {page}
          <div className="absolute left-0 bottom-0 w-full h-0 bg-lime-green hover:h-2 transition-all duration-300"></div>
        </li>
      ))}
    </ul>
  );
};

export default LinksMenuDesktop;
