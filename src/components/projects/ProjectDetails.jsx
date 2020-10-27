import React from 'react'

function ProjectDetails(props) {
    console.log(props)
    return (
        <div className="container section project-details">
            <div className="card z-dept-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque magni sunt nesciunt eum id eius officia blanditiis obcaecati praesentium dolorum, soluta consequatur, neque deserunt a sequi maxime tempora? Dolorum, facilis.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Net Ninja</div>
                    <div>2nd Sept, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
