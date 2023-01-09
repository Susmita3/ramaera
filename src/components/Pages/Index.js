import React from "react";
import SocialNav from "../Navbar/SocialNav";
import RamaeraHeading from "../Assets/RamaeraHeading.png";
import MainHeading from "../Assets/MainHeading.png";
import Polygon from "../Assets/Polygon.png";
import Tech from "../Assets/Tech.png";
import Line1 from "../Assets/Line1.png";
import Line2 from "../Assets/Line2.png";
import Line3 from "../Assets/Line3.png";
import Packing from "../Assets/Packing.png";
import Icon from "../Assets/Icon.png";
import Icon2 from "../Assets/Icon2.png";
import Line4 from "../Assets/Line4.png";
import Line5 from "../Assets/Line5.png";
import Icon3 from "../Assets/Icon3.png";
import Fmcg from "../Assets/Fmcg.png";
import Agri from "../Assets/Agri.png";
import Icon4 from "../Assets/Icon4.png";
import ecomrce from "../Assets/ecomrce.png";
import Line6 from "../Assets/Line6.png";
import Icon5 from "../Assets/Icon5.png";
import Polygon2 from "../Assets/Polygon2.png";

const Index = () => {
  return (
    <>
      {/* Hero Section Start */}
      <div className="bg-hero w-full h-screen flex items-center flex-row justify-center px-10 md:w-full lg:w-full">
        <div className="w-1/12 ">
          <SocialNav />
        </div>

        <main className="text-center flex flex-col items-center justify-center w-11/12 ">
          <img src={RamaeraHeading} alt="" className="" />

          <p className="text-white text-[44px] font-Montserrat md:text-[25px]">
            An incredible multi-industrial approach oriented <br></br> towards
            financial independence, customer focus <br></br> and serving the
            best quality to the people.
          </p>

          <div className="bg-gradient-to-r from-[#F9D423] to-[#E65C00] text-white hover:text-[#F9D423] rounded-2xl px-6 py-2 mt-5 border-2">
            <button className="font-Montserrat text-[25px] ">
              Explore more
            </button>
          </div>
        </main>
      </div>

      {/* second section start */}
      <section className="bg-gradient-to-r from-black to-gray-800 w-full text-white m-0 p-0">
        <div className="flex items-center flex-row ">
            <img src={Polygon} alt="" className="" />

          <div className="text-center ">
            <img src={MainHeading} alt="" className="" />
            <p className=" font-Montserrat text-[35px] mt-2 mr-1  ">
              We are aiming to be a part of the major industrialisation drive{" "}
              <br></br> in India and embarking our presence in every significant
              <br></br> industrial domain including IT.
            </p>
          </div>
        </div>

        {/* 1st box */}
        <div className="font-Montserrat ">
          <img src={Line1} alt="" className="absolute -mt-6" />
          <img src={Tech} alt="" className="absolute" />

          <div className="text-right mr-36">
            <h3 className="text-[55px] font-bold">
              Unleashing the strength of
            </h3>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF5AE0] to-[#A811DA] text-[55px] font-bold">
              Technology
            </h3>

            <p className="text-[27px]">
              We believe in innovation and excellence hence ,<br></br> our
              approach in the field of technology is <br></br> focused to relish
              incredible customer experience <br></br>and stabilising business
              models for tomorrow.
            </p>

            <button className="rounded-2xl px-6 py-2 mt-5 border-2 border-[#BF5AE0] hover:">
              Read more
            </button>
          </div>
          <img src={Line1} alt="" className="mt-6" />
        </div>

        {/* 2nd box */}
        <div className="font-Montserrat">
          <img src={Line2} alt="" className="" />
          <img src={Icon} alt="" className="absolute -mt-72" />

          <div className="ml-36 mt-5">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE259] to-[#FFA751] text-[55px] font-bold ">
              Making<br></br> accommodations easier
            </h3>

            <p className="text-[27px]">
              Introducing capsule hotels in places of extreme<br></br> need such
              as examination centres and hospitals<br></br> to provide
              comfortable and convenient<br></br> accommodation at pocket
              friendly prices .
            </p>

            <button className="rounded-2xl px-6 py-2 mt-5 border-2 border-[#FFE259]">
              Read more
            </button>
          </div>
          <img src={Line2} alt="" className="-mt-52" />
        </div>

        {/* 3rd box */}
        <div className="font-Montserrat">
          <img src={Line3} alt="" className="" />
          <img src={Packing} alt="" className="absolute -mt-32 " />
          <img src={Icon2} alt="" className="absolute right-0 -mt-60" />

          <div className="font-bold text-right -mt-60 mr-36">
            <h3 className="text-[55px]">Packaging industry for</h3>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#EACDA3] to-[#D6AE7B] text-[55px]">
              business growth
            </h3>

            <p className="text-[27px] ">
              We provide packaging solutions to help your<br></br> business
              flourish with boosted outreach.<br></br> Ensuring the protection,
              containment, and<br></br>
              communication of packaged projects is our<br></br> foremost
              priority.
            </p>

            <button className="rounded-2xl px-6 py-2 mt-5 border-2 border-[#EACDA3]">
              Read more
            </button>
          </div>
          <img src={Line3} alt="" className="mt-16" />
        </div>

        {/* 4th box */}
        <div className="font-Montserrat">
          <img src={Line4} alt="" className="" />
          <img src={Fmcg} alt="" className="absolute right-0 -mt-96" />
          <img src={Icon3} alt="" className="absolute" />

          <div className="font-bold mt-2 ml-36">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2EFD3] to-[#358D82] text-[55px]">
              Offering the best with<br></br> FMCG industry
            </h3>

            <p className="text-[27px] ">
              Ramaera FMCG industry has commenced an <br></br>extensive range of
              FMCG to make your days<br></br> more than ordinary. We plan to
              offer you <br></br>nothing less than the best.
            </p>

            <button className="rounded-2xl px-6 py-2 mt-5 border-2 border-[#F2EFD3]">
              Read more
            </button>
          </div>
          <img src={Line4} alt="" className="-mt-56" />
        </div>

        {/* 5th box */}
        <div className="font-Montserrat">
          <img src={Line5} alt="" className="" />
          <img src={Agri} alt="" className="absolute -mt-32 " />
          <img src={Icon4} alt="" className="absolute right-0 -mt-60" />

          <div className="font-bold text-right -mt-60 mr-36">
            <h3 className="text-[55px]">Agri-business to bestow</h3>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941E] via-[#72C6EF] to-[#00A651] text-[55px]">
              Nature's Love
            </h3>

            <p className="text-[27px] ">
              Our Agri-business industry is established to get<br></br> you
              fresh and organic fruits and vegetables <br></br>with the blessed
              with the touch of nature
            </p>

            <button className="rounded-2xl px-6 py-2 mt-5 border-2 border-[#00A651]">
              Read more
            </button>
          </div>
          <img src={Line5} alt="" className="mt-16" />
        </div>

        {/* 6th box */}
        <div className="font-Montserrat">
          <img src={Line6} alt="" className="" />
          <img src={ecomrce} alt="" className="absolute right-0 -mt-96" />
          <img src={Icon5} alt="" className="absolute" />

          <div className="font-bold mt-2 ml-36">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4DFFD] to-[#EFB79B] text-[55px]">
            Get all your essentials in<br></br> one place
            </h3>

            <p className="text-[27px] ">
            Ramaera Supermart is an online customer<br></br> oriented marketplace to motivated to provide<br></br> everything you need right at one place under<br></br> the comfort of your homes.
            </p>

            <button className="rounded-2xl px-6 py-2 mt-5 border-2 border-[#B4DFFD]">
              Read more
            </button>
          </div>
          <img src={Line4} alt="" className="-mt-56" />
        </div>

        <div className="bg-bg-gradient-to-r from-black to-gray-800 w-full h-screen">
            <img src={Polygon2} alt="" className="absolute right-0 " />
        </div>
      </section>
    </>
  );
};

export default Index;
