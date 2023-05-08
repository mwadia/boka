const Container = ({ children, bgColor = 'white' }: any) => {
  return (
    <div className={`px-6 lg:px-[155px] py-[20px] bg-${bgColor}`}>
      {children}
    </div>
  );
};

export default Container;
