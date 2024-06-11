import homePageHeader from "../assets/homePageHeader.png"
import HeaderHomeButtons from "../components/HeaderHomeButtons"
import { HomeCards } from "../components/HomeCards";


export default function Home() {
  return (
    <>
      <section id="home" className="bg-gray-20 py-10 md:h-full md:pb-9">
        <div className="flex flex-col md:flex-row md:ml-5">
          <div className="md:w-1/2">
            <p className="header-frase">
              Delivering the most confortable way to dress, like always
            </p>
            <h5 className="flex flex-row flex-wrap align-baseline mr-0 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              recusandae reiciendis possimus iusto libero voluptates quaerat,
              asperiores quisquam accusantium, nostrum soluta ea unde dolor eum
              esse dicta deserunt quis ipsum? Expedita, voluptates quae? Dolorem
              eligendi dicta ipsa voluptate numquam iste cumque commodi?
              Necessitatibus perferendis, ex officiis sequi doloribus rem minus
              nam nesciunt, esse alias atque? Et laborum impedit repellat eum.
              Dolorum possimus cupiditate quae dolor, debitis earum quam enim.
              Accusantium aspernatur atque itaque, at, hic ipsum distinctio
              repudiandae eum ut sapiente, nihil quae odit similique incidunt.
              Blanditiis mollitia nihil quis!
            </h5>
            <HeaderHomeButtons category="Hoodies" />
          </div>
          <div className="md:w-1/2">
            <div className="flex basis-3/5 justify-end md:z-10 md:ml-40 md:justify-items-end md:mr-0 md:mt-0">
              <img src={homePageHeader} alt="watch image" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-20 py-10 md:h-full md:pb-9">
        <div>
          <p className="home-p-title">Our products</p>
          <HomeCards />
        </div>
      </section>
    </>
  );
}
