import React from 'react'
import './Dashboard.css'

const Dashboard = ({ title, children }) => {
    return (
        <div className="dashboard-container">
            <div className="title">
                {title}
            </div>
            <div>{children}</div>
        </div>
    )
}

export default Dashboard