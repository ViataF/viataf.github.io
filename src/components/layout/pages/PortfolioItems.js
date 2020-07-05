import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PortfolioItems = ({
  portfolio: { project_name, project, project_img, project_url },
}) => {
  return (
    <Fragment>
      <div className="row">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={project_img} alt="project_img" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {project_name}
              <i class="material-icons right">more_vert</i>
            </span>
            <p>
              <a href={project_url} alt="project link">
                Link to project
              </a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              {project_name}
              <i class="material-icons right">close</i>
            </span>
            <p>{project}</p>
            <a href={project_url} alt="project link">
              Link to project
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PortfolioItems.propTypes = {
  portfolio: PropTypes.object.isRequired,
};

export default PortfolioItems;
