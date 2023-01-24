// * ---------------------------------------------------- Import Graphics
// Icons
import iconReturn from '../theme/images/icons/return.svg';
import iconSent from '../theme/images/icons/sendcheck.svg';

// Particles
import ThankyouParticles from '../components/core/ThankyouParticles';

// * ---------------------------------------------------- Thankyou page
// Render Thank You Page
function ThankYou() {
  return (
    <main id = "page-thankyou">

      {/* Message */}
      <section id = "thankyou-message">

        {/* Icon */}
        <img src={iconSent} alt="" id="icon-sent-check"/>

        {/* Text */}
        <h1>Thank you!</h1>
        <h2>Your message was delivered.</h2>
        <p>
          You may use the return button below to 
          go back to the main page.
        </p>

      </section>

      {/* Return Button */}
      <section id = "thankyou-return">

        <form action="/">
          <button id = "thankyou-return-btn">
            <img src={iconReturn} alt="" />
            <p>Return</p>
          </button>
        </form>

      </section>

      <ThankyouParticles></ThankyouParticles>

    </main>
  );
}

// Export Thank You Page
export default ThankYou;