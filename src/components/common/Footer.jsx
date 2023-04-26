const Footer = ({color}) => {
  let footerClass = "flex flex-col w-full pt-10 py-20 px-10 gap-3";
  let textClass = 'text-sm font-medium';

  if(color === 'light'){
    footerClass = footerClass + ' bg-gray-200';
    textClass = textClass + ' text-black';
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
