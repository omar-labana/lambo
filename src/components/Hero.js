import pizza from '../assets/pizza.png';

const Hero = () => (
  <div className="flex justify-around items-center py-32 mx-32">
    <div className="text-gray-300 text-3xl w-96">World's most delicious food you'll want to try!</div>
    <img src={pizza} alt="Hero pizza" className="w-96" />
  </div>
);

export default Hero;
