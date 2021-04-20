
var homeContent = `
<section class="promo-tours">
<div class="promo" id="israel">
    <h1>ISRAEL</h1>
    <h2>from $1000</h2>
    <button class="learn-more-btn">LEARN MORE</button>
</div>
<div class="promo" id="usa">
    <h1>USA</h1>
    <h2>from $1500</h2>
    <button class="learn-more-btn">LEARN MORE</button>
</div>
<div class="promo" id="australia">
    <h1>AUSTRALIA</h1>
    <h2>from $1800</h2>
    <button class="learn-more-btn">LEARN MORE</button>
</div>
</section>

<section class="booking-form">
<div class="whole-booking">
    <h1 id="whole-header">Booking form</h1>
    <div class="bf-top2">
        <div id="boxes-top-A">
            <input class="inp-75" type="text" id="boxleftA" name="fullname" placeholder="name..."></input>
            <input class="inp-75" type="text" id="boxrightA" name="email" placeholder="email..."></input>
        </div>
        <div id="boxes-top-B">
            <input class="inp-75" type="text" id="boxleftB" name="country" placeholder="country..."></input>
            <input class="inp-75" type="text" id="boxrightB" name="hotel" placeholder="hotel..."></input>
        </div>
    </div>

    <div class="bf-mid2">
        <div class="midC">
            <h2 class="inp-25">Check-in</h2> <input class="inp-75" type="text" id="mid-box-C" name="check in date" placeholder="05/10/2020">
        </div>
        <div class="midD">
            <h2 class="inp-25">Check-out</h2> <input class="inp-75" type="text" id="mid-box-D" name="check out date" placeholder="05/20/2020">
        </div>
    </div>

    <div class="bf-bottom3">
        <div class="drop3">
            <div class="drop3one">
                <h2 class="inp-25">Adult</h2>
                <button class="dropbtn">0</button>
                <!-- <div class="dropbtn-content">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </div> -->
            </div>
            <div class="drop3two">
                <h2 class="inp-25">Children</h2>
                <button class="dropbtn">0</button>
            </div>
            <div class="drop3three">
                <h2 class="inp-25">Rooms</h2>
                <button class="dropbtn">0</button>
            </div>
        </div>
    </div>

    <div class="bf-message">
        <input class="inp-75" type="text" id="messagebox" name="message box" placeholder="message...">
    </div>

    <div class="formbtn">
        <button id="bf-btn">SUBMIT</button>
    </div>
</div>
</section>
`;
var aboutContent = `
<div class="about">
<div class="about-top-section">
    <h1>About:</h1>
    <p> 
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
        porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
        et dolore magnam aliquam quaerat voluptatem. 
    </p>
</div>
<div class="about-bottom-section">
    <h3>Client Quotes:</h3>
    <div class="client">
        <div class="client-image client1">
            <!-- <img src="assets/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg" alt="person guy"> -->
        </div>
        <div class="client-quote">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
            <div class="client-name">- Miranda Brown</div>
        </div>
    </div>

    <div class="client">
        <div class="client-image client2">
            <!-- <img src="assets/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg" alt="person guy"> -->
        </div>
        <div class="client-quote">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
            <div class="client-name">- Johnathan wes</div>
        </div>
    </div>
</div>
</div>
`;
var tourContent = `
<div class="tour">
<header >
    <span>Tours:</span>
</header>

<div class="alltours">
    <div class="tourPromo" id="israel-promo">
        <div class="promoContent">
            <h1>ISRAEL</h1>
            <h2>from $1000</h2>
            <a href="israel.html"><span class="promoBtn">Learn More</span></a>
        </div>
    </div>
    <div class="tourPromo" id="usa-promo">
        <div class="promoContent">
            <h1>USA</h1>
            <h2>from $1500</h2>
            <a href="usa.html"><span class="promoBtn">Learn More</span></a>
        </div>
    </div>
    <div class="tourPromo" id="australia-promo">
        <div class="promoContent">
            <h1>AUSTRALIA</h1>
            <h2>from $1800</h2>
            <a href="australia.html"><span class="promoBtn">Learn More</span></a>
        </div>
    </div>

    <div class="tourPromo" id="nz-promo">
        <div class="promoContent">
            <h1>N. ZELAND</h1>
            <h2>from $1200</h2>
            <a href="nzeland.html"><span class="promoBtn">Learn More</span></a>
        </div>
    </div>
    <div class="tourPromo" id="france-promo">
        <div class="promoContent">
            <h1>FRANCE</h1>
            <h2>from $2500</h2>
            <a href="france.html"><span class="promoBtn">Learn More</span></a>
        </div>
    </div>
    <div class="tourPromo" id="egypt-promo">
        <div class="promoContent">
            <h1>EGYPT</h1>
            <h2>from $900</h2>
            <a href="egypt.html"><span class="promoBtn">Learn More</span></a>
        </div>
    </div>

    <div class="tourPromo" id="japan-promo">
        <div class="promoContent">
            <h1>JAPAN</h1>
            <h2>from $1300</h2>
            <a href="japan.html"><span class="promoBtn">Learn More</span></a>
        </div>
    </div>
    <div class="tourPromo" id="canada-promo">
        <div class="promoContent">
            <h1>CANADA</h1>
            <h2>from $2000</h2>
            <a href="canada.html"><span class="promoBtn">Learn More</span></a>
        </div>
    </div>
    <div class="tourPromo" id="uae-promo">
        <div class="promoContent">
            <h1>U.A.E</h1>
            <h2>from $3000</h2>
            <a id="uae" href="index.html#uaeSection"><span class="promoBtn">Learn More</span></a>
        </div>
    </div>
</div>
</div>
`;
var specialOContent = `
<div class="specialO">
<h1>Specal Offer(s):</h1>
<!-- Barcelona -->
<div class="barcaSec">
    <div class="barcaImg"></div>
    <div class="mainContent">
        <div class="titleSec">
            <h1 id="location">Barcelona, Spain <p id="discount">(20% off!)</p></h1> 
            <!-- <h1 style="display:inline;">Bold text goes here</h1> <h2 style="display:inline;">normal text goes here</h2> -->
        </div>
        <p id="cityInfo">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </p>
        <span class="promoBtn">Learn More</span>
    </div>
</div>
<!-- Bangkok -->
<div class="bangkokSec">
    <div class="bangkokImg"></div>
    <div class="mainContent">
        <div class="titleSec">
            <h1 id="location">Bangkok, Thailand <p id="discount">(10% off!)</p></h1> 
        </div>
        <p id="cityInfo">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </p>
        <span class="promoBtn">Learn More</span>
    </div>
</div>
</div>
`;
var blogContent = `
<div class="blogArea">
<h1 id="blogheader">Blog:</h1>

<div class="blogMain">
    <!-- CHANGES -->
    <div class="blog1">
        <div class="blueSquare" id="jun">
            <p id="num">06</p>
            <p id="month">JUN</p>
        </div>
        <div class="blogimg"></div>
        <div class="blogtext">
            <h1>Sed et persipiatis unde omnis iste natus</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
        </div>
    </div>
    

    <div class="blog2">
        <div class="blueSquare" id="jul">
            <p id="num">23</p>
            <p id="month">JUL</p>
        </div>
        <div class="blogimg"></div>
        <div class="blogtext">
            <h1>Sed et persipiatis unde omnis iste natus</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
        </div>
    </div>
</div>
</div>
`;
var contactContent = `
<div class="contactUs">
<h1>Contact Us:</h1>
<div class="contactMain">
    <div class="imgside">
        <div class="mapimg"></div>
        <p id="maptext">
            travel-fly Inc. <br/>
            8901 Marmora Road, <br/>
            Glasgow, D04 89GR. <br/>
            Freephone:+1 800 559 6580 <br/>
            Telephone:+1 800 603 6035 <br/>
            FAX:+1 800 889 9898 <br/>
            E-mail: mail@travelfly.org
        </p>
    </div>
    <div class="formside">
        <form class="form">
            <div>
                <input type="text" id="yname" name="yname" placeholder="Your name...">
                <input type="text" id="email" name="email" placeholder="Email Address...">
                <input type="text" id="company" name="company" placeholder="Company...">
            </div>
                <textarea id="fmessage" type="text" name="fmessage" placeholder="Message..."></textarea>
                <input type="submit" value="Submit">
        </form>
    </div>
</div>
</div>
`;


//gahh
var australiaContent = `
<div class="packpage">
<div class="packimages" 
style="background-image: url(/assets/images-tours/tour-australia.jpg);
background-size: cover; background-repeat: no-repeat; background-position: center; ">
    <h1>Australia tour package:</h1>
    <p>STARTING FROM $1800 (prices may vary)</p>
</div>
    <div class="packimagesthree">
        <div class="packimagesthree-left" 
        style="background-image: url(/assets/images-tours/pack-aus/aus-tour-01.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center; "></div>
        <div class="packimagesthree-mid"
        style="background-image: url(/assets/images-tours/pack-aus/aus-tour-02.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="packimagesthree-right"
        style="background-image: url(/assets/images-tours/pack-aus/aus-tour-03.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
    </div>
<div class="packtext">
    <div class="day 1">
        <h1>Day #1:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 2">
        <h1>Day #2:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 3">
        <h1>Day #3:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<button class="packbutton">Order Now</button>
</div>
`;
var canadaContent = `
<div class="packpage">
<div class="packimages" 
style="background-image: url(/assets/images-tours/tour-canada.jpg);
background-size: cover; background-repeat: no-repeat; background-position: center; ">
    <h1>Canada tour package:</h1>
    <p>STARTING FROM $2000 (prices may vary)</p>
</div>
    <div class="packimagesthree">
        <div class="packimagesthree-left" 
        style="background-image: url(/assets/images-tours/pack-canada/canada-tour-01.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center; "></div>
        <div class="packimagesthree-mid"
        style="background-image: url(/assets/images-tours/pack-canada/canada-tour-02.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="packimagesthree-right"
        style="background-image: url(/assets/images-tours/pack-canada/canada-tour-03.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
    </div>
<div class="packtext">
    <div class="day 1">
        <h1>Day #1:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 2">
        <h1>Day #2:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 3">
        <h1>Day #3:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<button class="packbutton">Order Now</button>
</div>
`;
var egyptContent = `
<div class="packpage">
<div class="packimages" 
style="background-image: url(/assets/images-tours/tour-egypt.jpg);
background-size: cover; background-repeat: no-repeat; background-position: center; ">
    <h1>Egypt tour package:</h1>
    <p>STARTING FROM $900 (prices may vary)</p>
</div>
    <div class="packimagesthree">
        <div class="packimagesthree-left" 
        style="background-image: url(/assets/images-tours/pack-egypt/egypt-tour-01.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center; "></div>
        <div class="packimagesthree-mid"
        style="background-image: url(/assets/images-tours/pack-egypt/egypt-tour-02.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="packimagesthree-right"
        style="background-image: url(/assets/images-tours/pack-egypt/egypt-tour-03.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
    </div>
<div class="packtext">
    <div class="day 1">
        <h1>Day #1:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 2">
        <h1>Day #2:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 3">
        <h1>Day #3:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<button class="packbutton">Order Now</button>
</div>
`;
var franceContent = `
<div class="packpage">
<div class="packimages" 
style="background-image: url(assets/images-tours/tour-france.jpg);
background-size: cover; background-repeat: no-repeat; background-position: center; ">
    <h1>France tour package:</h1>
    <p>STARTING FROM $2500 (prices may vary)</p>
</div>
    <div class="packimagesthree">
        <div class="packimagesthree-left" 
        style="background-image: url(assets/images-tours/pack-france/france-tour-01.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center; "></div>
        <div class="packimagesthree-mid"
        style="background-image: url(assets/images-tours/pack-france/france-tour-02.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="packimagesthree-right"
        style="background-image: url(assets/images-tours/pack-france/france-tour-03.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
    </div>

    <!-- no need for ..     remove ../ -->
<div class="packtext">
    <div class="day 1">
        <h1>Day #1:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 2">
        <h1>Day #2:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 3">
        <h1>Day #3:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<button class="packbutton">Order Now</button>
</div>
`;
var israelContent = `
<div class="packpage">
<div class="packimages" 
style="background-image: url(/assets/images-tours/tour-israel.jpg);
background-size: cover; background-repeat: no-repeat; background-position: center; ">
    <h1>Israel tour package:</h1>
    <p>STARTING FROM $1000 (prices may vary)</p>
</div>
    <div class="packimagesthree">
        <div class="packimagesthree-left" 
        style="background-image: url(/assets/images-tours/pack-israel/israel-tour-01.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center; "></div>
        <div class="packimagesthree-mid"
        style="background-image: url(/assets/images-tours/pack-israel/israel-tour-02.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="packimagesthree-right"
        style="background-image: url(/assets/images-tours/pack-israel/israel-tour-03.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
    </div>
<div class="packtext">
    <div class="day 1">
        <h1>Day #1:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 2">
        <h1>Day #2:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 3">
        <h1>Day #3:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<button class="packbutton">Order Now</button>
</div>
`;
var japanContent = `
<div class="packpage">
<div class="packimages" 
style="background-image: url(/assets/images-tours/tour-japan.jpg);
background-size: cover; background-repeat: no-repeat; background-position: center; ">
    <h1>Japan tour package:</h1>
    <p>STARTING FROM $1300 (prices may vary)</p>
</div>
    <div class="packimagesthree">
        <div class="packimagesthree-left" 
        style="background-image: url(/assets/images-tours/pack-japan/japan-tour-01.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center; "></div>
        <div class="packimagesthree-mid"
        style="background-image: url(/assets/images-tours/pack-japan/japan-tour-02.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="packimagesthree-right"
        style="background-image: url(/assets/images-tours/pack-japan/japan-tour-03.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
    </div>
<div class="packtext">
    <div class="day 1">
        <h1>Day #1:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 2">
        <h1>Day #2:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 3">
        <h1>Day #3:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<button class="packbutton">Order Now</button>
</div>
`;
var nzelandContent = `
<div class="packpage">
<div class="packimages" 
style="background-image: url(/assets/images-tours/tour-nz.jpg);
background-size: cover; background-repeat: no-repeat; background-position: center; ">
    <h1>New Zeland tour package:</h1>
    <p>STARTING FROM $1200 (prices may vary)</p>
</div>
    <div class="packimagesthree">
        <div class="packimagesthree-left" 
        style="background-image: url(/assets/images-tours/pack-nz/nz-tour-01.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center; "></div>
        <div class="packimagesthree-mid"
        style="background-image: url(/assets/images-tours/pack-nz/nz-tour-02.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="packimagesthree-right"
        style="background-image: url(/assets/images-tours/pack-nz/nz-tour-03.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
    </div>
<div class="packtext">
    <div class="day 1">
        <h1>Day #1:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 2">
        <h1>Day #2:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 3">
        <h1>Day #3:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<button class="packbutton">Order Now</button>
</div>
`;
var uaeContent = `

<div class="packpage">
<div class="packimages" 
style="background-image: url(/assets/images-tours/tour-uae.jpg);
background-size: cover; background-repeat: no-repeat; background-position: center; ">
    <h1>U.A.E. tour package:</h1>
    <p>STARTING FROM $3000 (prices may vary)</p>
</div>
    <div class="packimagesthree">
        <div class="packimagesthree-left" 
        style="background-image: url(/assets/images-tours/pack-uae/uae-tour-01.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center; "></div>
        <div class="packimagesthree-mid"
        style="background-image: url(/assets/images-tours/pack-uae/uae-tour-02.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="packimagesthree-right"
        style="background-image: url(/assets/images-tours/pack-uae/uae-tour-03.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
    </div>
<div class="packtext">
    <div class="day 1">
        <h1>Day #1:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 2">
        <h1>Day #2:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 3">
        <h1>Day #3:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<button class="packbutton">Order Now</button>
</div>
`;
var usaContent = `
<div class="packpage">
<div class="packimages" 
style="background-image: url(/assets/images-tours/tour-usa.jpg);
background-size: cover; background-repeat: no-repeat; background-position: center; ">
    <h1>U.S.A tour package:</h1>
    <p>STARTING FROM $1500 (prices may vary)</p>
</div>
    <div class="packimagesthree">
        <div class="packimagesthree-left" 
        style="background-image: url(/assets/images-tours/pack-usa/usa-tour-01.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center; "></div>
        <div class="packimagesthree-mid"
        style="background-image: url(/assets/images-tours/pack-usa/usa-tour-02.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="packimagesthree-right"
        style="background-image: url(/assets/images-tours/pack-usa/usa-tour-03.jpg);
        background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
    </div>
<div class="packtext">
    <div class="day 1">
        <h1>Day #1:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 2">
        <h1>Day #2:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day 3">
        <h1>Day #3:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<button class="packbutton">Order Now</button>
</div>
`;



export function getPageContent(pageId) {
    $('#app').html(eval(pageId));
}


//                  <a id="specialO" href="index.html#specialSection">special offers</a>