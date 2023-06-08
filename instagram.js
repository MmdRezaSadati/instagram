var position = 0;
var maxSliding;
var homeContentIG = document.querySelector(".Instagram");
for (user = 0; user < users.length; user++) {
    var profillPicture;
    addStory();
    addPost();
    addUsersDirect();
    function addStory() {
        let storySection = document.querySelector(".storySection");
        let story = document.createElement("div");
        story.className = "story";
        story.innerHTML = `<label for="story${user}"><img class="user-image" src="${users[user].profillPicture}"></label><p>${users[user].userName}</p>`
        storySection.appendChild(story);
        let checkboxStory = document.createElement("input");
        checkboxStory.type = "checkbox";
        checkboxStory.className = "checkboxStory";
        checkboxStory.setAttribute("id", "story" + user);
        let storyFile = document.createElement("div");
        storyFile.className = "storyFile"
        storyFile.innerHTML = `<label for="story${user}" class="closeStory"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px" style="fill:#fff;"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg></label>
        <div class="topOfStory">
            <img class="user-image" src="${users[user].profillPicture}" alt="">
            <a href="#">${users[user].userName}</a>
        </div>
        <img src="${users[user].story.storyFile}" alt="" class="storyImage">
        <div class="bottomOfStory">
            <input type="text" placeholder="Send Massage !">
            <img src="./img/instagram/Massage Icon.png" class="dark-navBottom" width="25" alt=""> <img src="./img/instagram/SVG/Massage.svg"class="displayNone light-navBottom" width="22">
        </div>`
        homeContentIG.appendChild(checkboxStory);
        homeContentIG.appendChild(storyFile);
    }
    function addPost() {
        let post = document.createElement("div");
        post.className = "instagram-post";
        ///// top of post /////
        let postTop = document.createElement("div");
        postTop.className = "post-top";
        let leftPost = document.createElement("div");
        leftPost.className = "left-post";
        let profillPicture = document.createElement("img");
        profillPicture.src = users[user].profillPicture;
        profillPicture.className = "user-image postProfile";
        let userName = document.createElement("p");
        userName.innerHTML = users[user].userName;
        userName.className = "user-name";
        leftPost.appendChild(profillPicture);
        leftPost.appendChild(userName);
        let rightPost = document.createElement("div");
        rightPost.className = "right-post";
        rightPost.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#fff'><path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path></svg>";
        postTop.appendChild(leftPost);
        postTop.appendChild(rightPost);
        ///// Post Slider /////
        let postSlider = document.createElement("div");
        postSlider.className = "post-Slider";
        postSlider.innerHTML = `<div class="gallery-icon prev"  id="prev${user}" onclick="prevSlide(${user},${user})"> <i></i></div><div class="gallery-icon next" id="next${user}" onclick="nextSlide(${user},${user})"> <i></i> </div>`
        let galleryPost = document.createElement("div");
        galleryPost.className = "galleryPost";
        galleryPost.setAttribute("id", "gallery" + user);
        let SliderliButton = document.createElement("ul");
        SliderliButton.className = "Slider-Button Slider-Button" + user;
        for (i = 0; i < users[user].post.postFiles.length; i++) {
            let instagramSlide = document.createElement("div");
            instagramSlide.className = "instagram-slide";
            let postFile = document.createElement("img");
            postFile.src = "img/instagram/posts/" + users[user].post.postFiles[i];
            instagramSlide.appendChild(postFile);
            galleryPost.appendChild(instagramSlide);
            galleryPost.style.width = (100 * i) + 100 + "%";
            var SliderliButtons = document.createElement("li");
            SliderliButton.appendChild(SliderliButtons);
            // SliderliButtons.addEventListener("click",()=>{change(i , user)} );
        }
        postSlider.appendChild(galleryPost);
        ///// Post Buttons  /////
        let postButtons = document.createElement("div");
        postButtons.className = "post-buttons";
        let leftOFPost = document.createElement("div");
        leftOFPost.className = "left-post";
        leftOFPost.innerHTML = `<input type="checkbox" class="checkbox-accardion like-post" id="like-post${user}"><label for="like-post${user}"><svg class="like-post" width="40" style="padding-top: 5px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve"><style type="text/css">.like-post .st0{fill:transparent;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;transition: .1s;}</style><g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path class="st0" d="M31.1,19.2c-3.3,0-6.4,1.3-8.7,3.6s-3.6,5.4-3.6,8.7s1.3,6.4,3.6,8.7l22.6,22.6l22.6-22.6c2.3-2.3,3.6-5.4,3.6-8.7s-1.3-6.4-3.6-8.7l0,0c-2.3-2.3-5.4-3.6-8.7-3.6c-3.3,0-6.4,1.3-8.7,3.6l-5.2,5.2l-5.2-5.2C37.5,20.5,34.4,19.2,31.1,19.2z"/></g></svg></label><img src="./img/instagram/SVG/Comment.svg" class="dark-navBottom" width="22" alt=""><img src="./img/instagram/SVG/Comment - black.svg" class="displayNone light-navBottom" width="24" alt=""><img src="./img/instagram/Massage Icon.png" class="dark-navBottom" width="25" alt=""> <img src="./img/instagram/SVG/Massage.svg"class="displayNone light-navBottom" width="22">`
        let rightOfPost = document.createElement('div');
        rightOfPost.className = 'right-post';
        rightOfPost.innerHTML = `<img src="./img/instagram/SVG/Save Icon.svg" class="dark-navBottom" width="22" alt=""><img src="./img/instagram/SVG/Save Icon - black.svg" class="displayNone light-navBottom" width="22" alt="">`
        postButtons.appendChild(leftOFPost);
        postButtons.appendChild(rightOfPost);
        ///// Post Caption  /////
        let postCaption = document.createElement("div");
        postCaption.className = "post-caption";
        let likes = document.createElement("p");
        likes.innerHTML = users[user].post.likes;
        let caption = document.createElement("p");
        caption.innerHTML = `<span class="user-name" style="font-size: 17px; padding: 0 5px; color: #ffffff;">${users[user].userName}</span>` + users[user].post.postCaption;
        postCaption.appendChild(likes);
        postCaption.appendChild(caption);
        post.appendChild(postTop);
        post.appendChild(postSlider);
        post.appendChild(SliderliButton);
        post.appendChild(postButtons);
        post.appendChild(postCaption);
        postsSection.appendChild(post);
    }
    function addUsersDirect() {
        if (users[user].userStatus == "online") {
            let OnlinesMassage = document.querySelector(".OnlinesMassage-insta");
            let online = document.createElement("div");
            online.className = "online";
            let onlineImage = document.createElement("div");
            onlineImage.className = "onlineImage";
            onlineImage.innerHTML = `<img class="user-image" src="${users[user].profillPicture}" > <span class="onlineUser"></span>`;
            let onlineUserName = document.createElement("p");
            onlineUserName.innerHTML = users[user].userName;
            online.appendChild(onlineImage);
            online.appendChild(onlineUserName);
            OnlinesMassage.appendChild(online);
        }
    }
    if (users[user].directMassage == undefined) {
        users[user].directMassage = "";
    }
    let directsMassage = document.querySelector(".directsMassage-insta")
    let direct = document.createElement("div");
    direct.innerHTML = `<img class="user-image" src="${users[user].profillPicture}"  alt=""><div><span>${users[user].userName}</span><p>${users[user].directMassage}</p></div><img src="./img/instagram/Camera.png" class="pointer" width="20px" height="20px" alt="">`
    direct.className = "direct";
    directsMassage.appendChild(direct);
    
}

function nextSlide(i) {
    var galleryInstagram = document.getElementById("gallery" + i);
    next = document.getElementById("next" + i);
    prev = document.getElementById("prev" + i);
    console.log(maxSliding);
    if (position > -400) {
        next.style.cursor = "pointer";
        next.style.opacity = "1";
        prev.style.cursor = "pointer";
        prev.style.opacity = "1";
        position = position - 100;
        galleryInstagram.style.left = position + "%";
    } else if (position == -maxSliding) {
        next.style.cursor = "default";
        next.style.opacity = "0.3";
    }
    changeTab(position / -100, i);
}
for(i = 0; i < 5 ; i++){
    addSugested()
    function  addSugested(){
        let rightDesMode = document.querySelector(".right-des-Mode");
        let sugested = document.createElement("div");
        sugested.className ="sugested";
        sugested.innerHTML = `<img class="user-image" src="${users[i].profillPicture}"><p class="user-name" style="font-size: 15px; padding: 0 5px; color: #ffffff;">${users[i].userName}</p> `
        //<a href="#">Follow </a>
        let FollowBTN = document.createElement("a");
        FollowBTN.href="#";
        FollowBTN.innerHTML="Follow";
        let FollowBTN_flag = "Follow";
        FollowBTN.addEventListener("click",()=> {
            if(FollowBTN_flag == "Follow"){
                FollowBTN.innerHTML="Unfollow";
                FollowBTN.classList.add("followed");
                FollowBTN_flag = "Unfollow"; 
            }else if(FollowBTN_flag == "Unfollow"){
                FollowBTN_flag = "Follow";      
                FollowBTN.innerHTML="Follow";
                FollowBTN.classList.remove("followed");
            }
        });
        sugested.appendChild(FollowBTN);
        rightDesMode.appendChild(sugested);
    }
}
function prevSlide(i) {
    var galleryInstagram = document.getElementById("gallery" + i);
    prev = document.getElementById("prev" + i);
    next = document.getElementById("next" + i);
    if (position < 0) {
        next.style.cursor = "pointer";
        next.style.opacity = "1";
        position = position + 100;
        galleryInstagram.style.left = position + "%";
    } else if (position == 0) {
        prev.style.cursor = "default";
        prev.style.opacity = "0.3";
    }
    changeTab(position / -100, i);
}
function change(number, id) {
    moveSlider(number, id);
    changeTab(number, id);
}
function moveSlider(number, id) {
    var galleryInstagram = document.getElementById(`gallery${id}`);
    position = -100 * number;
    galleryInstagram.style.left = position + "%";
    console.log(galleryInstagram);
}
function changeTab(number, id) {
    var SliderButton = document.querySelectorAll(`.Slider-Button${id} > li`);
    for (let i = 0; i < SliderButton.length; i++) {
        SliderButton[i].className = "";
    }
    SliderButton[number].className = "selected";
}

var toggleBtn_Flag = "light";
var toggleModeBtn_Flag = "desktop";
function changeInstagram(i){
    let toggleBtn = document.querySelector(".toggle"+i);
    toggleBtn.classList.toggle("active");
    // var flagMode ="";
    // var flagTheme = "";
    if(flagTheme == "Theme"){
        if(toggleBtn_Flag == "light"){
            item8.classList.remove("light");
            toggleBtn_Flag = "";
        }else if(toggleBtn_Flag != "light"){
            item8.classList.add("light");
            toggleBtn_Flag = "light";
        }
    }else
    if(flagMode == "Mode"){
        if(toggleModeBtn_Flag == "desktop" ){
            item8.classList.remove("desktopMode");
            toggleModeBtn_Flag = "";
        }else if(toggleModeBtn_Flag != "desktop"){
            item8.classList.add("desktopMode");
            toggleModeBtn_Flag = "desktop";
            console.log("good");
        }
    }
}
function changeMode(){
    flagMode = "Mode";
    flagTheme = "";
    changeInstagram("ChangeMode");
}
function changeTheme(){
    flagMode = "";
    flagTheme = "Theme";
    changeInstagram("Theme");
}
    