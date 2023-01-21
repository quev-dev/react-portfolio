// * Import Graphics
import iconReturn from '../assets/icons/return.svg';
import iconSent   from '../assets/icons/sendcheck.svg';
import ThankyouParticles from "./components/other/ThankyouParticles";

// TODO - * Create animations for the page elements upon loading.
// TODO - * Create a system that blocks this page unless you've sent a message.

// * Render & Export ThankYou Page
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
export default ThankYou;