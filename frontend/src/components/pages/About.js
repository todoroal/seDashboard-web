import React from 'react'

 const About = () => {
    return (
        <div className="container-aboutus">
            <div class="item-aboutus">
            <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/PNbxziMMnMmAiB4?x=2560&y=947&a=true&file=tl.png`} align="left" alt="Thomas L" width="148px" height="144px"/>
                {/* <p>Thomas Lerchbaumer [Frontend mastermind, Backend general support] Why JavaDevs wear glasses? Because they don’t C#.</p> */}
                <ul className="item-aboutus-ul">
                    <li>Thomas Lerchbaumer</li>
                    <li>[Frontend mastermind, Backend general support]</li>
                    <li>Why JavaDevs wear glasses? Because they don’t C#.</li>
                </ul>
            </div>
            <div class="item-aboutus">
            <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/sqeCBcedM9XDdsg?x=1920&y=587&a=true&file=dd.png`} align="left" alt="Dominic D" width="145px" height="137px"/>
                {/* <p>Dominic Duda [Main Logic, Backend mastermind] Why are Assembly programmers always soaking wet? They work below C-level.</p> */}
                <ul className="item-aboutus-ul">
                    <li>Dominic Duda</li>
                    <li>[Main Logic, Backend mastermind]</li>
                    <li>Why are Assembly programmers always soaking wet? They work below C-level.</li>
                </ul>
            </div>
            <div class="item-aboutus">
            <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/74xmTNNxfmXrgif?x=1920&y=587&a=true&file=tg.png`} align="left" alt="Thomas G" width="153px" height="145px"/>
                {/* <p>Thomas Gutjahr [] </p> */}
                <ul className="item-aboutus-ul">
                    <li>Thomas Gutjahr</li>
                    <li>[Frontend support, Backend support]</li>
                    <li>Don't use "beef stew" as a computer password. It's not stroganoff.</li>
                </ul>
            </div>
        </div>
    )
}

export default About