import React from 'react'
import Navbar from '../navbar/navbar'
import './Main.css'
import Dashboard from '../../pages/dashboard/Dashboard';
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { PiClockCountdownBold } from "react-icons/pi";
import { TbSum } from "react-icons/tb";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { GoGoal } from "react-icons/go";
import { BiDish } from "react-icons/bi";
import { BiFoodMenu } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import recentOrder from '../../recentOrders.json';
import { FaRegUserCircle } from "react-icons/fa";
import Rating from '../rating/rating';
import comments from '../../comments.json';
import { Line, Circle } from 'rc-progress';
import BarChart from '../barchart/Barchart';

const Main = () => {

    const cards = [
        { id: 1, icon: <PiClockCountdownBold size={"45px"} className='blue' />, title: "Total Orders", value: "75", inc: true, perc: "3%" },
        { id: 2, icon: <BsGraphUpArrow size={"45px"} className='green' />, title: "Total Delivered", value: "70", inc: false, perc: "3%" },
        { id: 3, icon: <BsGraphDownArrow size={"45px"} className='orange' />, title: "Total Cancelled", value: "05", inc: false, perc: "3%" },
        { id: 4, icon: <TbSum size={"45px"} className='pink' />, title: "Total Revenue", value: "$12k", inc: true, perc: "3%" },
    ];
    return (
        <>
            <div className='main-wrapper'>
                <Navbar />
                <Dashboard title="Dashboard">
                    {/* dashboard first row */}
                    <div className="dashboard-overview">
                        <div className="dashboard-overview-cards">
                            {cards.map(({ id, icon, title, value, inc, perc }) => {
                                return (<div className='cards'>
                                    <div>{icon}</div>
                                    <div className='fs24px'>{title}</div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='fs40px'>{value}</div>
                                        <div className={inc ? "green d-flex align-items-center" : "red d-flex align-items-center"}>{inc ? <GoTriangleUp size="30px" /> : <GoTriangleDown size="30px" />}{perc}</div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                        <div className="dashboard-overview-profit">
                            <div className="profit-card">
                                <div className="profit-card-left">
                                    <div className='fs24px'>Net Profit</div>
                                    <div className='fs40px'>$ 6934.89</div>
                                    <div className='green d-flex align-items-center '><GoTriangleUp size="30px" />3%</div>
                                </div>
                                <div className="profit-card-right">
                                    <Circle percent={70} strokeWidth={12} strokeColor="#6583d7" trailWidth={12} />
                                    <div style={{ position: "absolute", top: "42px", left: "50px" }}
                                    >70%</div>
                                    <div style={{ position: "absolute", top: "63px", left: "29px", textAlign: "center" }}>goal <br /> completed</div>
                                    <div style={{
                                        fontSize: "7px",
                                        textAlign: "center",
                                        color: "orange"
                                    }}>*The values here has been rounded off.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dashboard second row */}
                    <div className="activity">
                        <div className="activity-section">
                            {/* add bar chart here */}
                            {/* <div className="d-flex"> */}
                            <div className="activity-section-title">
                                <span>Activity</span>
                                <div>
                                    <select>
                                        <option value="weekly" selected>Weekly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>
                            </div>
                            <div className="activity-section-dropdown">
                                {/* add dropdown here to see weekly,monthly,yearly */}
                                {/* <BarChart const data={[30, 86, 168, 281, 303, 365, 504, 573, 660, 168, 281, 303, 365, 168, 281, 303, 365, 168, 281, 303, 365]} /> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="about-us-section">
                            {/* add about us here */}
                            <div className='d-flex justify-content-between align-items-center style1234'>
                                <div className='d-flex align-items-center gap10px'>
                                    <div className='bg-circular-icon  bg-red'><GoGoal size="50px" /></div>
                                    <div className='fs24px'>Goals</div>
                                </div>
                                <div className='circular-icon hand'><FaGreaterThan /></div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center style1234'>
                                <div className='d-flex align-items-center gap10px'>
                                    <div className='bg-circular-icon bg-blue'><BiDish size="50px" /></div>
                                    <div className='fs24px'>Popular Dishes</div>
                                </div>
                                <div className='circular-icon hand'><FaGreaterThan /></div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center style1234'>
                                <div className='d-flex align-items-center gap10px'>
                                    <div className='bg-circular-icon bg-green'><BiFoodMenu size="50px" /></div>
                                    <div className='fs24px'>Menus</div>
                                </div>
                                <div className='circular-icon hand'><FaGreaterThan /></div>
                            </div>
                        </div>
                    </div>
                    {/* third row */}
                    <div className="last-section">
                        <div className="recent-orders-section">
                            <div className="recent-orders-section-title">
                                Recent Orders
                            </div>
                            <table className='left-align'>
                                <thead>
                                    <tr className='fs16px'>
                                        <th className='text-align-left'>Customer</th>
                                        <th className='text-align-center'>Order No.</th>
                                        <th className='text-align-left'>Amount</th>
                                        <th className='text-align-left'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recentOrder.map((order) => {
                                            return (


                                                <tr>
                                                    <td className='text-align-left d-flex align-items-center gap8px' data-label="Customer" ><FaRegUserCircle size="25px" /> <div>{order.customer}</div></td>
                                                    <td className='text-align-center' data-label="Amount">{order.orderNo}</td>
                                                    <td className='text-align-left' data-label="Order No.">${order.amount}</td>
                                                    <td className='text-align-left' data-label="Status"><div class={order.status == "delivered" ? "chip-green" : "chip-red"}>{order.status}</div></td>
                                                </tr>


                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="feedback-section">
                            <div className="feedback-section-title">Customer's Feedback</div>
                            {comments.map((comment) => {
                                return (
                                    <div className="feedback-section-comments">
                                        <div class="fs20px">{comment.name}</div>
                                        <div><Rating val={comment.stars} /></div>
                                        <div>{comment.comment}</div>
                                        <hr />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </Dashboard >
            </div >
        </>

    )
}

export default Main