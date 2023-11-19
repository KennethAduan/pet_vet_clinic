import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/home");
  };

  return (
    <div className=" bg-PrimaryBg">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg)",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-4xl font-bold text-white">PETVEWS</h2>
              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                VRINZ
              </h2>
              <p className="mt-3 text-black">Sign in to access your account</p>
            </div>

            <div className="mt-8">
              <form>
                <div className="space-y-5">
                  <div className="w-full">
                    <Input label="Username" />
                  </div>

                  <div className="w-full">
                    <Input label="Password" type="password" />
                  </div>

                  <div>
                    <h1 className="text-sm text-gray-600 focus:text-blue-500 hover:text-blue-500 hover:underline">
                      Forgot Password
                    </h1>
                  </div>

                  <Button onClick={handleSignIn} fullWidth>
                    SIGN IN
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-600">
                Dont have an account yet?{" "}
                <a
                  href="#"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
