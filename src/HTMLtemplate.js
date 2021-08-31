function HTMLtemplate()    {
    const html = 
    `<!DOCTYPE html>
    <html>
        <head>
            <!-- css reset -->
            <link rel="stylesheet" href="./reset.css" >
    
            <!-- google fonts -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=Urbanist:ital,wght@0,200;1,100&display=swap" rel="stylesheet">
    
            <!-- css -->
            <link rel="stylesheet" href="./style.css">
        </head>
    
        <body id="body">
            <header>
                <h1>${company}</h1>
                <h2>Our Associates</h2>
            </header>
    
            <div id="employeeBlocks" class="container">
                <div class="row firstRow">
                    <div class="employee manager">
                        <h3>Manager</h3>
                        <h4>${managerName}</h4>
                        <p>Email:<a href="mailto:${managerEmail}">${managerEmail}</a>
                        </p>
                        <p>Office Number: ${managerOfficeNumber}</p>
                    </div>
                </div>
    
                <div class="row secondRow">
                    <div class="employee engineer">
                        <h3>Engineer</h3>
                        <h4>${engineerName}</h4>
                        <p>Email:<a href="mailto:${engineerEmail}">${engineerEmail}</a>
                        </p>
                        <p>Github: <a href="https://www.github.com/${engineergitHub}">${engineergitHub}</a>
                        </p>
                    </div>

                </div>
                <div class="row thirdRow">
                    <div class="employee intern">
                        <h3>Intern</h3>
                        <h4>${internName}</h4>
                        <p>Email:<a href="mailto:${internEmail}">${internEmail}</a>
                        </p>
                        <p>School <a href="${internSchoolSite}">${internSchoolName}</a>
                        </p>
                    </div>
                </div>
            </div>
    
        </body>
    </html>`
}

module.exports = HTMLtemplate();