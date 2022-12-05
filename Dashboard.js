import React from 'react'
import "./dashboard.css"
function Dashboard() {
  return (
      
  <><div class="sidebar">
      <div class="logo-details">
        <i class='bx bxl-c-plus-plus'></i>
        <span class="logo_name">LMS</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="#" class="active">
            <i class='bx bx-grid-alt'></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-box'></i>
            <span class="links_name">Student</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-list-ul'></i>
            <span class="links_name">Course</span>
          </a>
        </li>
        
        <li>
          <a href="#">
            <i class='bx bx-user'></i>
            <span class="links_name">Enroll</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class='bx bx-heart'></i>
            <span class="links_name">Exit</span>
          </a>
        </li>
     
      </ul>
    </div><section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class='bx bx-menu sidebarBtn'></i>
            <span class="dashboard">Dashboard</span>
          </div>
          
          <div class="profile-details">
            
              <span class="admin_name">Rohit Singh</span>
              <i class='bx bx-chevron-down'></i>
            </div>
        </nav>

        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Student</div>
                <div class="number">250</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Student</span>
                </div>
              </div>
              <i class='bx bx-cart-alt cart'></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Course</div>
                <div class="number">7</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Course</span>
                </div>
              </div>
              <i class='bx bxs-cart-add cart two'></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Enrollment</div>
                <div class="number">2100</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Enrollment</span>
                </div>
              </div>
              <i class='bx bx-cart cart three'></i>
            </div>
          </div>

          <div class="sales-boxes">
            <div class="recent-sales box">
              <div class="title">Enrollment</div>
              <div class="sales-details">
                <ul class="details">
                  <li class="topic">Course</li>
                  <li><a href="#">BCA</a></li>
                  <li><a href="#">BCA</a></li>
                  <li><a href="#">BIT</a></li>
                  <li><a href="#">BIM</a></li>
                  <li><a href="#">BIT</a></li>
                  <li><a href="#">BCA</a></li>
                  <li><a href="#">B.E</a></li>
                  <li><a href="#">BBA</a></li>
                  <li><a href="#">BIM</a></li>
                </ul>
                <ul class="details">
                  <li class="topic">Student</li>
                  <li><a href="#">Ram</a></li>
                  <li><a href="#">Sam</a></li>
                  <li><a href="#">Hari</a></li>
                  <li><a href="#">Gopal</a></li>
                  <li><a href="#">Madhav</a></li>
                  <li><a href="#">Raj</a></li>
                  <li><a href="#">Ayush</a></li>
                  <li><a href="#">Rajendra</a></li>
                  <li><a href="#">Tina</a></li>
                </ul>
                <ul class="details">
                  <li class="topic">Enroll Year</li>
                  <li><a href="#">2017</a></li>
                  <li><a href="#">2016</a></li>
                  <li><a href="#">2016</a></li>
                  <li><a href="#">2015</a></li>
                  <li><a href="#">2018</a></li>
                  <li><a href="#">2017</a></li>
                  <li><a href="#">2019</a></li>
                  <li><a href="#">2018</a></li>
                  <li><a href="#">2022</a></li>
                </ul>
                <ul class="details">
                  <li class="topic">Pass Out</li>
                  <li><a href="#">2023</a></li>
                  <li><a href="#">2022</a></li>
                  <li><a href="#">2021</a></li>
                  <li><a href="#">2022</a></li>
                  <li><a href="#">2022</a></li>
                  <li><a href="#">2021</a></li>
                  <li><a href="#">2020</a></li>
                  <li><a href="#">2020</a></li>
                  <li><a href="#">2022</a></li>
                </ul>
              </div>
              <div class="button">
                <a href="#">See All</a>
              </div>
            </div>
            <div class="top-sales box">
              <div class="title">Student Status</div>
              <ul class="top-sales-details">
                <li>
                  <a href="#">
                    {/* < />!--<img src="images/sunglasses.jpg" alt="">--> */}
                      <span class="product">Ram Shrestha</span>
                    </a>
                  <span class="price">Topper</span>
                </li>
                <li>
                  <a href="#">
                    {/* < />!--<img src="images/jeans.jpg" alt="">--> */}
                      <span class="product">Dhurmus </span>
                    </a>
                  <span class="price">Second Topper</span>
                </li>
                <li>
                  <a href="#">
                    {/* < />!-- <img src="images/nike.jpg" alt="">--> */}
                      <span class="product">Hari bahadur</span>
                    </a>
                  <span class="price">Expelled</span>
                </li>
                <li>
                  <a href="#">
                    {/* < />!--<img src="images/scarves.jpg" alt="">--> */}
                      <span class="product">Nara Narayan.</span>
                    </a>
                  <span class="price">Restricted</span>
                </li>
                  <li>
                    <a href="#">
                      {/* < />!--<img src="images/addidas.jpg" alt="">--> */}
                        <span class="product">Madan Bahadur</span>
                      </a>
                    <span class="price">Suspended</span>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </section></>
    
 
    
    

  )
}

export default Dashboard