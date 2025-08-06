import Tag from "../Components/Tag";
import wrappedCmp from "../util/Container-wrapper";
const AboutMe = ()=>{
    return (
        <div className="flex flex-col items-center">
            <Tag className="mt-[3%]" title={"About me"}/>
            <div className="flex items-center h-full max-[600px]:flex-col m-[4%] gap-5">
            <LeftPanel/>
            <RightPanel/>
            </div>
        </div>
    )
}
const LeftPanel = ()=>{
    return (<div className="h-full flex-[1]">
        <img className="h-[50%] w-[50%] object-cover" src="/logo.png" alt="something went wrong"></img>
    </div>)
}
const RightPanel = ()=>{
    return (
      <div className="flex-[1]">
        <p>
          I'm a passionate, self-proclaimed designer who specializes in full
          stack development (React.js & Node.js). I am very enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel perfect design, and writing clear, readable,
          highly performant code matters to me.
        </p>
        <br />
        <p>
          I began my journey as a web developer in 2015, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          thirties, 7 years after starting my web development journey, I'm
          building cutting-edge web applications using modern technologies such
          as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
        <br />
        <p>
          I am very much a progressive thinker and enjoy working on products end
          to end, from ideation all the way to development.
        </p>
        <br />
        <p>
          When I'm not in full-on developer mode, you can find me hovering
          around on twitter or on indie hacker, witnessing the journey of early
          startups or enjoying some free time. You can follow me on Twitter
          where I share tech-related bites and build in public, or you can
          follow me on GitHub.
        </p>
        <br />
        <p>Finally, some quick bits about me.</p>
        <ul className="list-disc pl-5 grid grid-cols-2 gap-x-8 gap-y-3 m-[2%]">
          <li>B.E. in Computer Engineering</li>
          <li>Avid learner</li>
          <li>Full time freelancer</li>
          <li>Aspiring indie hacker</li>
        </ul>
      </div>
    );
}
export default wrappedCmp(AboutMe,true);