import headerStyles from "./header.module.scss";
import utilStyles from "../styles/utils.module.scss";

export default function Header() {
  return (
    <header className="">
      <div className="text-center">
        <div className={`${headerStyles.videoDiv}`}>
          <div>
            <h1 className={`text-3xl font-bold uppercase text-6xl p-4`}>
              Hello!
            </h1>
            <p className="text-xl">
              I'm Eryk, an aspiring fullstack developer and this is my website.{" "}
              <br /> Why the video? Cause it looks cool.
            </p>
          </div>

          <video
            autoPlay
            loop
            muted
            className={`${headerStyles.video}`}
          >
            <source src="/videos/capon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </header>
  );
}
