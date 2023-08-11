import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div
        className="absolute z-[3] 
      white__gradient -left-1/2 
      top-0 w-[50%] h-[50%] rounded-full"
      />
      <div
        className="absolute z-[0] 
      pink__gradient -left-1/2 
      bottom-0 w-[50%] h-[50%] rounded-full"
      />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        billing and invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_storre"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        ></img>
        <img
          src={google}
          alt="google"
          className="w-[128px] h-[42px] object-contain  cursor-pointer"
        ></img>
      </div>
    </div>
  </section>
);

export default Billing;
