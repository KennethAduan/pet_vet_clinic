import Images from "../constants/Images";
import {
  Select,
  Option,
  Input,
  Button,
  Textarea,
  Rating,
} from "@material-tailwind/react";
import { Link } from "react-scroll";
const HeroContent = () => {
  return (
    <header className="h-screen mt-12 bg-PrimaryBg">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-FontMainColor lg:text-4xl">
                Your Amazing Pets are Important to us
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                We are on duty 24 hours a day for the health of your beautiful
                pets
              </p>
              <Link
                to="appointment"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform rounded-lg bg-FontMainColor lg:w-auto">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={Images.DogCat}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const TestimonialCard = ({ text, imageSrc, name }) => (
  <div className="p-8 transition-transform transform bg-white border rounded-lg hover:shadow-lg hover:scale-105">
    <p className="leading-loose text-gray-500 dark:text-gray-400">{text}</p>
    <div className="flex items-center mt-8 -mx-2">
      <img
        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
        src={imageSrc}
        alt={name}
      />
      <div className="mx-2">
        <h1 className="font-semibold text-gray-800 dark:text-white">{name}</h1>
          <Rating value={5} readonly />
        
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonialsData = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      imageSrc:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Robert",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      imageSrc:
        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Jeny Doe",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      imageSrc:
        "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Ema Watson",
    },
  ];
  return (
    <section className=" bg-SecondaryBg">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize text-FontMainColor lg:text-3xl ">
          What our clients say
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </section>
      </div>
    </section>
  );
};

const Appointment = () => {
  return (
    <section id="appointment" className="p-12 bg-PrimaryBg ">
      <div className="flex justify-center">
        <div className="flex w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-9/12 hover:bg-white rounded-2xl">
          <div className="w-full text-FontMainColor font-JetBrains">
            <h1 className="text-2xl font-bold tracking-wider text-center text-secondary lg:text-4xl sm:text-2xl">
              Make an Appointment
            </h1>
            <form className="space-y-4">
              {/* Select Doctor */}
              <div className="w-full">
                <Select label="Select Doctor">
                  <Option>Vrinz</Option>
                  <Option>Grace</Option>
                </Select>
              </div>
              {/* Select Date */}
              <div>
                <Input type="date" label="Select Date" />
              </div>
              {/* Select Time */}
              <div>
                <Input type="time" label="Select Time" />
              </div>
              {/* Select Services */}
              <div className="w-full">
                <Select label="Select Services">
                  <Option>CHECK UP</Option>
                  <Option>VACCINATION</Option>
                  <Option>MEDICATION</Option>
                </Select>
              </div>
              <Button fullWidth className="bg-FontMainColor">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SendFeedBack = () => {
  return (
    <section className="bg-SecondaryBg">
      <div className="container px-6 py-8 mx-auto ">
        <div>
          <p className="text-4xl font-bold text-center text-FontMainColor">
            Send us Feedback
          </p>

          <p className="mt-3 text-2xl text-center text-black">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8 w-[600px]">
            <form className="space-y-4">
              
                {/* STAR */}
                <Rating value={0} interactive="true" onChange={(value) => console.log(value)} />
              
                {/* Fullname */}
                <Input label="Name" />
              
                {/* MESSAGE */}
                <Textarea label="Message" />
              
                <Button fullWidth className="bg-FontMainColor">
                  Send Feedback
                </Button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HeroContent />
      <Testimonials />
      <SendFeedBack />
      <Appointment />
    </>
  );
};

export default Home;
