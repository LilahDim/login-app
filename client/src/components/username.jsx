import { Link } from "react-router-dom";

import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";

const Username = () => {
  return (
    <section className="container mx-auto">
      <div className="flex h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold"> Hello Again! </h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter your username to get started
            </span>
          </div>

          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="avatar" className={styles.profile_img} />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                type="text"
                placeholder="Username"
                className={styles.textbox}
              />
              <button
                className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-indigo-800"
                type="submit"
              >
                Submit
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-800">
                Not a Member?
                <Link
                  to="/register"
                  className="px-2 text-blue-500 hover:text-blue-600"
                >
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Username;
