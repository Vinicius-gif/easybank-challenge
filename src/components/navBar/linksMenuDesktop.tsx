const LinksMenuDesktop = () => {
  const pages = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/' },
    { title: 'Contact', link: '/' },
    { title: 'Blog', link: '/' },
    { title: 'Careers', link: '/' }
  ];

  return (
    <div className="flex gap-4 self-stretch items-center">
      {pages.map((page) => (
        <button
          key={page.title}
          className="relative cursor-pointer self-stretch hover:border-b-4 border-lime-green"
        >
          <a href={page.link}>{page.title}</a>
        </button>
      ))}
    </div>
  );
};

export default LinksMenuDesktop;
