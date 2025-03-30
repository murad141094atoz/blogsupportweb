 /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        /* Navigation Menu */
        .nav {
            background-color: #000;
            color: #fff;
            padding: 15px 10px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .nav ul li {
            display: inline;
        }

        .nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }

        .nav ul li a:hover {
            text-decoration: underline;
        }

        /* Layout Container */
        .container {
            display: grid;
            grid-template-areas: 
                "header header header header"
                "left-sidebar main-video right-sidebar1 right-sidebar2";
            grid-template-columns: 1fr 3fr 320px 1fr; /* Fixed width for right-sidebar1 */
            gap: 5px;
            padding: 10px;
            flex: 1; /* Ensures the container takes up available space */
        }

        /* Header Section */
        .header {
            grid-area: header;
            display: flex;
            justify-content: center;
            gap: 0px;
            margin: 0px;
            z-index: 1000;
        }

        /* Main Video Section */
        .main-video {
            grid-area: main-video;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            padding: 15px;
            border: 1px solid #ddd;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .published-date {
            border-radius: 3px;
            padding: 3px 5px;
            background-color: #555;
            font-weight: 700;
            margin-top: 10px;
            font-size: 14px;
            color: #fff;
        }

        /* Sidebar Sections */
        .left-sidebar,
        .right-sidebar2 {
            margin-top:-9px;
            background-color: transparent;
            padding: 0px;
            overflow-y: auto;
            max-height: calc(152vh - 100px);
        }

        .right-sidebar1 {
            grid-area: right-sidebar1;
            background-color: #fff;
            padding: 10px;
            border: 1px solid #ddd;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            overflow-y: auto;
            max-height: calc(100vh - 100px);
            width: 320px;
        }

        .left-sidebar h3,
        .right-sidebar1 h3,
        .right-sidebar2 h3 {
            margin-bottom: 10px;
        }

        .video-thumbnail {
            font-weight: 600;
            font-size: 15px;
            color: #1a0dab;
            background: linear-gradient(90deg, rgba(255,188,249,0.4598214285714286) 0%, rgba(247,144,182,0.25253851540616246) 35%, rgba(213,158,255,0.37298669467787116) 100%);
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            cursor: pointer;
        }

        .video-thumbnail:hover {
            background: linear-gradient(90deg, rgba(188,233,255,0.4598214285714286) 0%, rgba(144,220,247,0.25253851540616246) 35%, rgba(158,210,255,0.37298669467787116) 100%);
        }

        .video-info {
            font-size: 12px;
            color: #777;
            margin-top: 5px;
        }

        /* Footer Section */
        .footer {
            background-color: #000;
            color: #fff;
            text-align: center;
            padding: 10px;
            font-size: 14px;
        }

        h2 {
            margin-bottom: 10px;
            margin-top: 15px;
            text-align: left;
        }
        
        p {
            line-height: 23px;
            margin-bottom: 10px;
        }
        
        .ad-container {
            text-align: center;
            margin: 20px 0;
        }
        
        .adscroller-ad {
            margin-top: 4px;
        }
        
        .credit-link {
    position: absolute;
    width:560px;
    top: 80px;
    padding: 30px 20px;
    background-color: transparent;
}

        /* Responsive Design */
        @media screen and (max-width: 900px) {
            .container {
                grid-template-areas: 
                    "header"
                    "main-video"
                    "right-sidebar1";
                grid-template-columns: 1fr; /* Single column layout */
            }

            .left-sidebar,
            .right-sidebar2 {
                display: none; /* Hide sidebars on mobile */
            }
        }



.sticky-ads {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 210px;
    max-height: 220px;
    padding: 5px 0;
    box-shadow: 0 -6px 18px 0 rgba(9, 32, 76, 0.1);
    -webkit-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fefefe;
    z-index: 20;
}

.sticky-ads-close {
    cursor:pointer;
    width: 200px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px 0 0;
    position: absolute;
    right: 0;
    top: -30px;
    background-color: #fefefe;
    box-shadow: 0 -6px 18px 0 rgba(9, 32, 76, 0.08);
    display: none; /* Initially hidden */
}

.sticky-ads .sticky-ads-close svg {
    width: 30px;
    height: 30px;
    fill: #000;
}

.sticky-ads .sticky-ads-content {
    overflow: hidden;
    display: block;
    position: relative;
    height: 250px;
    width: 100%;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
}

/* Countdown text styling */
.sticky-ads-countdown {
    position: absolute;
    right: 10px;
    top: -30px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 3px;
    z-index: 100;
    text-align: center;
}

.propeller-ads {
    display:block;
}

.adsterra-ads {
    display:block;
}

.floating-ads {
    display:block;
}