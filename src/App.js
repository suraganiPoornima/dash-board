import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import navbar from '../src/menu.png'
// import cancel from '../src/cancel.png'
import evano from '../src/evano.png'
import { createRoot } from 'react-dom/client';
import logo from '../src/assets/icons8-production-order-32.png'
import dash from '../src/assets/key.png'
import cube from '../src/assets/icons8-cube-50.png'
import user from '../src/assets/icons8-user-48.png'
import wallet from '../src/assets/wallet.png'
import offer from '../src/assets/offer.png'
import help from '../src/assets/icons8-help-50.png'
import hand from '../src/assets/icons8-waving-hand-48.png'
import search from '../src/assets/icons8-search-30.png'
import dollar from '../src/assets/dollar.png'
import file from '../src/assets/file.png'
import arrowDown from '../src/assets/arrow-down.png'
import arrowUp from '../src/assets/arrow-up.png'
import walletCard from '../src/assets/wallet-card.png'
import bag from '../src/assets/bag.png'
import abstract from '../src/assets/abstract-3d.jpg'
import illu from '../src/assets/illu.jpg'

// JAVASCRIPT MAIN

const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

function SideBar() {
    const navbar = () => {
        alert(`img was cllicked!`)
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<SideBar />)



function App() {
    return (
        <div className="App">

            <div class="container">
                {/* <!-- Sidebar Section --> */}
                <aside>
                    <div class="toggle">
                        <div class="logo">
                            <img src={logo} class="logo_aside" />
                            <h4>Dash Board</h4>
                        </div>
                        <div class="close" id="close-btn">
                            <span class="material-icons-sharp">
                                close
                            </span>
                        </div>
                    </div>

                    <div class="sidebar">
                        <a href="#" class="active">
                            <span class="material-icons-sharp">
                                <img src={dash} alt="" />
                            </span>
                            <h5>Dashboard</h5>
                        </a>
                        <a href="#">
                            <span class="material-icons-sharp">
                                <img src={cube} alt="" />
                            </span>
                            <h5>Product</h5>
                        </a>
                        <a href="#">
                            <span class="material-icons-sharp">
                                <img src={user} alt="" />
                            </span>
                            <h5>Customers</h5>
                        </a>
                        <a href="#" >
                            <span class="material-icons-sharp">
                                <img src={wallet} alt="" />
                            </span>
                            <h5>Income</h5>
                        </a>
                        <a href="#">
                            <span class="material-icons-sharp">
                                <img src={offer} alt="" />
                            </span>
                            <h5>Promote</h5>
                        </a>
                        <a href="#">
                            <span class="material-icons-sharp">
                                <img src={help}alt="" />
                            </span>
                            <h5>Help</h5>
                        </a>
                      

                        <select className='side_select'>
                            <option>

                            </option>

                        </select>


                        <div className='side_select'>
                            <img src={evano} className='side_evano' />
                            <div className='side_select_cnt'>
                                <h5>Evano</h5>
                                <p>Project Manager</p>
                            </div>
                        </div>

                    </div>
                </aside>
                {/* <!-- End of Sidebar Section --> */}

                {/* <!-- Main Content --> */}
                <main>
                    <div class="header_main">
                        <div class="header_left">
                            <h4>Hello Stephen</h4>
                            <img src={hand} alt="" />
                        </div>
                        <div class="header_right">
                            <input type="text" placeholder="Search" />
                            <img src={search} class="search" />
                        </div>
                    </div>
                    {/* <!-- Analyses --> */}
                    <div class="analyse">
                        <div class="sales">
                            <div class="status">
                                <div class="info">
                                    <img src={dollar} alt="" />
                                </div>
                                <div class="progresss">
                                    <h4>Earning</h4>
                                    <h3>$198K</h3>
                                    <p>
                                        <span>
                                            <img src={arrowUp} class="arr-up" alt="" />37.8%
                                        </span>
                                        this month
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="visits">
                            <div class="status">
                                <div class="info">
                                    <img src={file} alt="" />
                                </div>
                                <div class="progresss">
                                    <h4>Orders</h4>
                                    <h3>$2.4K</h3>
                                    <p>
                                        <span>
                                            <img src={arrowDown} class="arr-dwn" alt="" />2%
                                        </span>
                                        this month
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="searches total">
                            <div class="status">
                                <div class="info">
                                    <img src={walletCard} alt="" />
                                </div>
                                <div class="progresss">
                                    <h4>Balance</h4>
                                    <h3>$2.4K</h3>
                                    <p>
                                        <span>
                                            <img src={arrowDown} class="arr-dwn" alt="" />2%
                                        </span>
                                        this month
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="searches">
                            <div class="status">
                                <div class="info">
                                    <img src={bag} alt="" />
                                </div>
                                <div class="progresss">
                                    <h4>Total Sales</h4>
                                    <h3>$89K</h3>
                                    <p>
                                        <span>
                                            <img src={arrowUp} class="arr-up" alt="" />11%
                                        </span>
                                        this month
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of Analyses --> */}

                    {/* <!-- New Users Section --> */}
                    <div class="new-users">
                        <div class="bar_pie_main">
                            <div class="bar_main">
                                <div className='bar_head'>
                                    <div className='bar_head_left'>
                                        <h3>Overview</h3>
                                        <p>Monthly Earning</p>
                                    </div>
                                    <div className='bar_head_right'>
                                        <select>
                                            <option>Quarterly</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="bar-chart">
                                    <div class="bar bar-1" ><p>Jan</p></div>
                                    <div class="bar bar-2" ><p>Feb</p></div>
                                    <div class="bar bar-3" ><p>Mar</p></div>
                                    <div class="bar bar-4" ><p>Apr</p></div>
                                    <div class="bar bar-5" ><p>May</p></div>
                                    <div class="bar bar-6" ><p>Jun</p></div>
                                    <div class="bar bar-7" ><p>Jul</p></div>
                                    <div class="bar bar-8" ><p>Aug</p></div>
                                    <div class="bar bar-9" ><p>Sep</p></div>
                                    <div class="bar bar-10" ><p>Oct</p></div>
                                    <div class="bar bar-11" ><p>Nov</p></div>
                                    <div class="bar bar-12" ><p>Dec</p></div>
                                </div>
                            </div>


                           <div className='pie_chart'>
                           <h4>Customers</h4>
                            <p>Customers that buy products</p>
                            {/* <img src={circle} /> */}
                            <div class="pie_main">
                                <div class="progresss">
                                    
                                    <svg>
                                        <circle cx="56" cy="56" r="46"></circle>
                                    </svg>
                                    <div class="percentage">
                                        <div>
                                            <h4>65%</h4>
                                            <p>Total New Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    {/* <!-- End of New Users Section --> */}

                    {/* <!-- Recent Orders Table --> */}
                    <div class="recent-orders">
                        {/* <!-- <h2>Recent Orders</h2> --> */}

                        <div class="sell_head">
                            <h3>Product Sell</h3>
                            <div class="sell_head_right">
                                <input type="text" placeholder="Search" />
                                <img src={search} class="search" />
                                <select>
                                    <option value="last 30 days">Last 30 days</option>
                                    <option value="last 30 days">Last 20 days</option>
                                    <option value="last 30 days">Last 10 days</option>
                                </select>
                            </div>
                        </div>


                        {/* <!-- ///////// --> */}
                        <div class="sell_main">
                            <p class="sell_para">Product Name</p>
                            <div class="sell_main_child">
                                <div class="sell_main_left">
                                    <div class="sell_card">
                                        <img src={abstract} alt="abstract-3d" />
                                        <div class="sell_card_content">
                                            <h4>Abstract-3d</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                    <div class="sell_card">
                                        <img src={illu} alt="abstract-3d" />
                                        <div class="sell_card_content">
                                            <h4>Sarphens Illustration</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="sell_main_right">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Stock</td>
                                                <td>Price</td>
                                                <td>Total Sales</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>32 in stock</td>
                                                <td>$45.99</td>
                                                <td>25</td>
                                            </tr>
                                            <tr>
                                                <td>32 in stock</td>
                                                <td>$45.99</td>
                                                <td>25</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* <!-- End of Recent Orders --> */}

                </main>
                {/* <!-- End of Main Content --> */}

                {/* <!-- Right Section --> */}
                <div class="right-section" onClick={navbar}>
                    <div class="nav">
                        <button id="menu-btn">
                            <span class="material-icons-sharp">
                                <img src={navbar} alt='navbar' />

                            </span>
                        </button>
                        

                    </div>
                    {/* <!-- End of Nav --> */}

                  
                </div>


            </div>
        </div>
    );
}

export default App;
