import { Input, Button } from "@material-tailwind/react";
const Contact = () => {
  return (
    <section className="p-12 mt-12 bg-PrimaryBg ">
      <div className="flex justify-center">
        <div className="flex w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-9/12 hover:bg-white rounded-2xl">
          <div className="w-full text-FontMainColor font-JetBrains">
            <h1 className="text-2xl font-bold tracking-wider text-center text-secondary lg:text-4xl sm:text-2xl">
              Apply Membership
            </h1>
            <form className="py-5 space-y-4">
              {/* Owners name */}
              <div>
                <Input label="Owners name" />
              </div>
              {/* Email */}
              <div>
                <Input label="Email" />
              </div>
              {/* Address */}
              <div>
                <Input label="Address" />
              </div>
              {/* Pet name */}
              <div>
                <Input label="Pet name" />
              </div>
              {/* Species */}
              <div>
                <Input label="Species" />
              </div>
              {/* Breed */}
              <div>
                <Input label="Breed" />
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

export default Contact;
