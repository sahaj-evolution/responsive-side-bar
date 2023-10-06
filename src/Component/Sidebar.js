import './Sidebar.css'
import { Row,Col,Form,Dropdown,Container,ProgressBar,Button } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'bootstrap'
import $ from 'jquery';
import logo from '../Assests/dummy logo.png'
import graph1 from '../Assests/Graph 1.png'
import settings from '../Assests/mdi_cog-outline.png'
import vector from '../Assests/Vector.png'
import message from '../Assests/mdi_message-processing-outline.png'
import order from '../Assests/shopping-cart.png'
import sales from '../Assests/Chart_Line.png'
import signout from '../Assests/Sign Out Icon.png'
import logo1 from '../Assests/Logo.png'
import buttonpro from '../Assests/Button get pro.png'
import map from '../Assests/world 1.png'
import profile from '../Assests/Group 1000002734.png'
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Table from 'react-bootstrap/Table';
import icon1 from '../Assests/Icon.png'
import icon2 from '../Assests/Icon (1).png'
import icon3 from '../Assests/Icon (2).png'
import icon4 from '../Assests/Icon (3).png'
import {ArrowLeftCircle, ArrowDownCircle} from 'react-bootstrap-icons';


const SideBar = () => {
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    });

    $(document).ready(function () {
        $('#sidebarCollapses').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    });

    var [toggle, setToggle] = useState(false);
    useEffect(() => {
        var myCollapse = document.getElementById('collapseTarget')
        var bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
    })

    

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:graph1
        },
        {
            path:"/present",
            name:"Leaderboard",
            icon:vector
        },
        {
            path:"/absent",
            name:"order",
            icon:order
        },
        {
            path:"/products",
            name:"Products",
            icon:order
        },
        {
            path:"/salesreport",
            name:"Sales Report",
            icon:sales
        },
        {
            path:"/messages",
            name:"Messages",
            icon:message
        },
        {
            path:"/settings",
            name:"Settings",
            icon:settings
        },
        {
            path:"/signout",
            name:"Sign Out",
            icon:signout
        }
    ]



    return(

        <>
            <div className="wrapper">
        {/* Sidebar */}
        <nav id="sidebar">
            <div className="sidebar-header">
                <img src={logo} className="img-fluid me-3"/>
                {/* <span style={{fontSize:'20px'}}><b>Dabang</b></span> */}
                <button className='btn' id='sidebarCollapses' style={{border:'1px solid black',marginLeft:'65px'}}> <b>X</b></button>
            </div>

            <ul className="list-unstyled components">
                {
                   menuItem.map((item, index)=>(
                        <li>
                       <NavLink to={item.path} key={index} activeclassName="active">
                           {/* <div className="icon">{item.icon}</div> */}
                           {/* <img src={item.icon} className="icon"/>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div> */}
                           <img src={item.icon} className="icon img-fluid me-4"/>
                           {item.name}
                       </NavLink>
                       </li>
                   ))
                }
            </ul>
        </nav>

        <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                        <button type="button" id="sidebarCollapse" className="btn me-2" style={{backgroundColor:'#5D5FEF'}}>
                            <ArrowLeftCircle />
                        </button>
                   <button className="btn btn-primary btn btn-dark d-inline-block d-lg-none ml-auto" onClick={() => setToggle(toggle => !toggle)}>
                            <ArrowDownCircle />
                    </button>
                    <Row className="collapse navbar-collapse" id="collapseTarget">
                        <Col lg={6} id='bottom-margin'>
                            <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search here ..." className="me-2" aria-label="Search" style={{borderRadius:'10px',background:'#F1F8FD'}}/>
                            </Form>
                        </Col>

                        <Col lg={3} id='bottom-margin'>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                {/* <img src={flag}/> */}
                                Eng(Us)
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col lg={3} id='profiel-element' style={{display:'flex', justifyContent:'right'}}>
                            <img src={profile} className="img-fluid me-3"/>
                        </Col>
                    </Row>
                </div>
            </nav>

            <Container>
                <Row>
                    <Col className = 'shadowClass pt-4' lg={6}>
                    
                    {/* Today's sales */}
                    <Row>
                        <Col>
                            <b>Today's Sales</b>
                        </Col>
                        <Col style={{display:'flex', justifyContent:'right'}}>
                        <Button variant="light" style={{border:'1px solid grey'}}>Export</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{fontSize:'15px'}}>Sales Summary</p>
                        </Col>
                    </Row>
                    <Row>

                    <Col xs={12} sm={3}>
                        <div className="box-container" style={{backgroundColor:"#ffe2e6"}}>
                        <img src={icon2} className='mb-2'/>
                        <h4>$1k</h4>
                        <p>Sales</p>
                        </div>
                    </Col>

                    <Col xs={12} sm={3}>
                    <div className="box-container" style={{backgroundColor:"#fff4de"}}>
                        <img src={icon1} className='mb-2'/>
                        <h4>$1k</h4>
                        <p>Sales</p>
                        </div>
                    </Col>

                    <Col xs={12} sm={3}>
                    <div className="box-container" style={{backgroundColor:"#dcfce7"}}>
                        <img src={icon3} className='mb-2'/>
                        <h4>$1k</h4>
                        <p>Sales</p>
                        </div>
                    </Col>

                    <Col xs={12} sm={3}>
                    <div className="box-container" style={{backgroundColor:"#f4e8ff"}}>
                        <img src={icon4} className='mb-2'/>
                        <h4>$1k</h4>
                        <p>Sales</p>
                        </div>
                    </Col>
                    </Row>


                    </Col>
                    <Col className = 'shadowClass' lg={5} style={{marginLeft:'20px'}} id="margin">
                    <Chart1/>
                    </Col>
                </Row>

                <Row style={{marginTop:'20px'}}>
                    <Col className = 'shadowClass' lg={4}>
                    <Chart1/>
                    </Col>
                    <Col className = 'shadowClass' lg={4} style={{marginLeft:'10px'}} id="margin">
                    <Chart2/>
                    </Col>
                    <Col className = 'shadowClass' lg={3} style={{marginLeft:'10px'}} id="margin">
                    <Chart3/>
                    </Col>
                </Row>

                <Row style={{marginTop:'20px'}}>
                    <Col className = 'shadowClass' lg={4}>

                    <Table style={{backgroundColor:'transparent'}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>
                        <ProgressBar striped now={70} key={1} className='progress-bar' style={{backgroundColor:"#CDE7FF",marginTop:'15px'}}/>
                        </td>
                        <td> 
                            <Button className='btn-small' style={{backgroundColor: "#CDE7FF",
                            color: "#0095FF",borderRadius: "10px",border:'1px solid 0095FF'}}>
                            45%
                            </Button>
                    </td>
                        </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>
                        <ProgressBar striped variant="success" now={60} key={1} className='progress-bar' style={{backgroundColor:"#8CFAC7",marginTop:'15px'}}/>
                        </td>
                        <td>
                        <Button className='btn-small' style={{backgroundColor: "#8CFAC7",
                        color: "#00E096",borderRadius: "10px",border:'1px solid #00E096'}}>
                        45%
                        </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>
                        <ProgressBar striped variant="info" now={50} key={1} 
                    className='progress-bar' style={{backgroundColor:"#C5A8FF",marginTop:'15px'}}/>
                        </td>
                        <td>
                        <Button className='btn-small' style={{backgroundColor: "#C5A8FF",
                        color: "#884DFF",borderRadius: "10px",border:'1px solid #884DFF' }}>
                        45%
                        </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>
                             <ProgressBar striped variant="warning" now={30} key={1} className='progress-bar' style={{backgroundColor:"#FFD5A4",marginTop:'15px'}}/>
                        </td>
                        <td>
                        <Button className='btn-small' style={{backgroundColor: "#FFD5A4",
                        color: "#FF8F0D",borderRadius: "10px" ,border:'1px solid #FF8F0D'}}>
                        45%
                        </Button>
                        </td>
                    </tr>
                    </tbody>


                    </Table>

                    </Col>

                    <Col className = 'text-center shadowClass' lg={3} style={{marginLeft:'10px'}} id="margin">
                    <p className='mt-3 text-black'><b>Sales Mapping By Country</b></p>
                    <img src={map} className='img-fluid mt-3'/>
                    </Col>

                    <Col className = 'shadowClass' lg={4} style={{marginLeft:'10px'}} id="margin">
                    <Chart2/>
                    </Col>
                </Row>
            </Container>

        </div>
    </div>
        </>
    )
}

export default SideBar