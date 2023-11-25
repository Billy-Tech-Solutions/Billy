const Footer = () => {
  return (
    <div className="w-full bottom-0 p-10 flex items-start justify-between bg-purple-secondary text-white">
      <div className="w-[40%] flex flex-col gap-4">
        <h1 className="text-3xl uppercase font-black">Billy</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error
          laudantium, quos nemo, quia eius fugiat, sed itaque labore sequi ex
          rerum placeat iusto harum quae? Minus rerum id aut placeat neque
          tenetur sed labore inventore expedita? Perferendis aliquam fuga fugiat
          ullam unde, suscipit eligendi tenetur delectus, voluptates nisi
          molestiae!
        </p>
      </div>

      <div className="w-[60%] flex justify-around">
        <div>
          <h1 className="font-black">Resources</h1>
          <p className="text-xs">Help Center</p>
          <p className="text-xs">Suggest a Location</p>
        </div>
        <div>
          <h1 className="font-black">Company</h1>
          <p className="text-xs">About Us</p>
          <p className="text-xs">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
