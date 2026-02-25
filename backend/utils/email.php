<?php

function sendEmail($to, $subject, $body) {
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: GoGMI <noreply@gogmi.org.gh>" . "\r\n";
    $headers .= "Reply-To: info@gogmi.org.gh" . "\r\n";
    
    // HTML email template
    $htmlBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            h2 {
                color: #132552;
                border-bottom: 3px solid #8E3400;
                padding-bottom: 10px;
            }
            h3 {
                color: #132552;
                margin-top: 20px;
            }
            p {
                margin: 10px 0;
            }
            strong {
                color: #132552;
            }
            a {
                color: #8E3400;
                text-decoration: none;
            }
            .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                font-size: 12px;
                color: #666;
            }
        </style>
    </head>
    <body>
        $body
        <div class='footer'>
            <p>Gulf of Guinea Maritime Institute (GoGMI)<br>
            Email: info@gogmi.org.gh<br>
            Website: <a href='https://gogmi.org.gh'>https://gogmi.org.gh</a></p>
        </div>
    </body>
    </html>
    ";
    
    return mail($to, $subject, $htmlBody, $headers);
}