import iconChart from '../../assets/icons/chart.svg';

function Sites() {
    return (
      <section id="sec-sites" className="site-section">
        {/* Header */}
        <div>
          <h2>Web Apps</h2>
          <p>Once I've built and uplpoaded  some web apps, you may view them here.</p>
        </div>

        {/* Projects */}
        <div>
          {/* Empty (coming soon) */}
          <article className="site-wip">
            {/* Project Contents */}
            <div className="site-wip-contents">
              <h3>Progress Report App</h3>
              <button className="site-btn" id="site-btn-wip">
                <img src={iconChart} alt="" className="icon-accent"/>
              </button>
              <p>Currently in production.</p>
            </div>
          </article>

        </div>
      </section>
    );
  }
  
export default Sites;