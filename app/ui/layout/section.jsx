const Section = ({ children, className }) => {
  return (
    <div className={`${className} mx-5 sm:mx-14 md:mx-32`}>{children}</div>
  );
};

export default Section;
