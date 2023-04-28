const Footer = ({color}) => {
  let footerClass = "flex flex-col w-full pt-20 py-40 px-10 gap-3";
  let textClass = 'text-sm font-medium';

  if(color === 'light'){
    footerClass = footerClass + ' bg-gray-200';
    textClass = textClass + ' text-black';
  }

  if(color === 'black'){
    footerClass = footerClass + ' bg-black/50';
  }

  if(color === 'main'){
    footerClass = footerClass + ' bg-black/50';
  }

  return(
    <footer className={footerClass}>
      <p className={textClass}>Questions? Call 800 953 1752</p>
      <p className={textClass}>Netflix Clone - React and Ruby on Rails API</p>
      <p className={textClass}>Jorge Ortiz Mata - 2023</p>
    </footer>
  )
}

export default Footer;
