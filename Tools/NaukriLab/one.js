function one(){

    return`
    <div id="b1">
    <a href="./NaukriLab.html">
        <button>
            <div>
                <img id="image" src="data:image/png;base64,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" alt="jpg">
            </div>
        </button>
        <br>
        <br>
        <h3 id="two_h3">Salary Trends</h3>
        <p>Check how salary in your role changes with experience</p>
    </a>
</div>
<div id="b2">
    <a href="./NaukriLab.html">
        <button>
            <div>
                <img id="image" src="https://insights.naukri.com/career-tools/static/media/careernavigator2icon_transparent.035876f8.png" alt="jpg">
            </div>
        </button>
        <br>
        <br>
        <h3 id="two_h3">Career Navigator   <span>βeta</span></h3>
        <p>Explore different organization and roles taken up by people</p>
    </a>
</div>
<div id="b3">
    <a href="./NaukriLab.html">
        <button>
            <div>
                <img id="image" src="data:image/png;base64,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" alt="jpg">
            </div>
        </button>
        <br>
        <br>
        <h3 id="two_h3">Career Trajectory   <span>  βeta</span></h3>
        <p>Explore companies for your next job switch</p>
    </a>
</div>
<div id="b4">
    <a href="./NaukriLab.html">
        <button>
            <div>
                <img id="image" src="data:image/png;base64,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" alt="jpg">
            </div>
        </button>
        <br>
        <br>
        <h3 id="two_h3">Find my alumni   <span>  βeta</span></h3>
        <p>Check where your college alumni are working</p>
    </a>
</div>`
}

export default one;