// Stories Section Function ;
function Stories (image, ID) {
    let Circle = `<div>
            <div class="circle">
                <img src="${image}" alt="">
            </div>
            <span>${ID}</span>
        </div>`
    document.getElementById('header').innerHTML += Circle
}
Stories('Friends Images/Aarif.jpg', 'Your story')
Stories('Friends Images/Adarsh.jpg', '_adarsh1321')
Stories('Friends Images/Ritik.jpg', '_rittik_905')
Stories('Friends Images/Rohan.jpg', 'rohanrajput_0')
Stories('Friends Images/Meool.jpg', 'meool_99')
Stories('svgFile/account.svg',)
Stories('svgFile/account.svg',)
Stories('svgFile/account.svg',)
Stories('svgFile/account.svg',)
Stories('svgFile/account.svg',)

// Posts Function ;
function Posts (Profile, ID, Post_image, AddText, Post_Date) {
    let Content = `<div class="head">
            <img src="${Profile}" alt="">
            <div class="post-head">
                <span>${ID}</span>
                <span>Audio Unavailable</span>
            </div>
        </div>
        <div class="post-image">
            <img src="${Post_image}" alt="">
        </div>


        <div class="post-logos">
            <div class="left">
                <img src="svgFile/heart.svg" alt="">
                <img src="svgFile/comment.svg" alt="">
                <img src="svgFile/share.svg" alt="">
            </div>
            <div class="right">
                <img src="svgFile/shave.svg" alt="">
            </div>
        </div>

        <div class="post-content">
            <span>Liked by _rittik_905 and others</span>
            <span>
               ${AddText}
            </span>
            <span>
                ${Post_Date}
            </span>
        </div>`

        document.getElementById('main').innerHTML += Content
}
Posts('Friends Images/Aarif.jpg', '_aarifali.9', 'Post Image/Aarif.jpg', ' _aarifali.9......', '31 October 2023');
Posts('Friends Images/Adarsh.jpg', '_adarsh1321', 'Friends Images/Adarsh.jpg', '4 AM...', '8 March');
Posts('Friends Images/Ritik.jpg', '_rittik_905', 'Friends Images/Ritik.jpg', 'Mene Bajai Teri Beti...', '14 March')
Posts('Friends Images/Rohan.jpg', 'rohanrajput_0001', 'Friends Images/Rohan.jpg', 'Ye Toh Sala h hee Chutiya...', '5 October')
Posts('Friends Images/Meool.jpg', 'Meool_999', 'Friends Images/Meool.jpg', 'Ye Meooooooooool....', '18 October')