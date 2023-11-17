const Doctors = () => {
  return (
    <div className="mt-12">
      <section className="bg-PrimaryBg ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            <span className="text-FontMainColor">
              The Best Vetenarians in all Branches
            </span>
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <DoctorCard
              imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              name="arthur melo"
              role="design director"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est."
            />
            <DoctorCard
              imageSrc="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              name="Amelia. Anderson"
              role="Lead Developer"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const DoctorCard = ({ imageSrc, name, role, description }) => (
  <div className="px-12 py-8 transition-colors duration-300 transform bg-white border cursor-pointerrounded-xl hover:border-transparent group hover:bg-FontMainColor dark:border-gray-700 dark:hover:border-transparent">
    <div className="flex flex-col sm:-mx-4 sm:flex-row">
      <img
        className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
        src={imageSrc}
        alt={name}
      />
      <div className="mt-4 sm:mx-4 sm:mt-0">
        <h1 className="text-xl font-semibold capitalize FontMainColor md:text-2xl group-hover:text-white">
          {name}
        </h1>
        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
          {role}
        </p>
      </div>
    </div>
    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
      {description}
    </p>
    <div className="flex mt-4 -mx-2">
      <SocialLink href="#" icon="Reddit" />
      <SocialLink href="#" icon="Facebook" />
      <SocialLink href="#" icon="Github" />
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
    aria-label={icon}
  >
    <Icon name={icon} />
  </a>
);

// eslint-disable-next-line react/prop-types
const Icon = ({ name }) => (
  // You can replace this with your actual icon components
  <span className="text-xl">{name}</span>
);

export default Doctors;
